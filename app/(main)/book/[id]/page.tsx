// pages/book/[id].js
'use client'
import { styled } from "styled-components";
import { useSearchParams, useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getBookById } from '@/app/APIs/getBooks';
import Image from 'next/image';
import { CiStar } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { Buttons } from "@/app/components/Buttons";
import { IoBookOutline } from "react-icons/io5";
import { LuLanguages } from "react-icons/lu";
import { CommentSection } from "@/app/components/comment-section";

const BookDetails = () => {
  const searchParams = useSearchParams();
  const { id } = useParams(); //Recebe o paranetro na URL
  const [book, setBooks] = useState<SelectedBook | null>(null);

  useEffect(() => {
    if (id) {
      const fetchBookData = async () => {
        try {
          const bookId = Array.isArray(id) ? id[0] : id;
          const response = await getBookById(bookId)
          //console.log(response)
          
            setBooks(response);
          
        } catch (error) {
          console.error('Erro ao buscar sugestões:', error);
        }
      };

      fetchBookData();
    } else {
      console.log("Nenhum ID")
    }
  }, []);

  return (
    <div> 
      <div className="flex w-full h-[250px]">  {/* titulo, imagem e botões */}
        <div className="flex w-[75%] h-full justify-between flex-col"> {/* titulo */}
          <div>
            <h1 className="text-white text-5xl font-bold">{book?.volumeInfo.title}</h1>
            {Array.isArray(book?.volumeInfo?.authors) ? (
              book.volumeInfo.authors.map((author, index) => (
                <p className="text-gray-300 font-semibold" key={index}>{author}</p>
              ))
            ) : (
              <p>{book?.volumeInfo.authors}</p>
            )}
            <div className="h-full mt-1 text-sm font-semibold">
                <div className="flex text-2xl">
                  <CiStar />
                  <CiStar />
                  <CiStar />
                  <CiStar />
                  <CiStar />
                </div>
                <div className="w-full flex flex-row mt ">
                  <div className="grid place-items-center w-[20%] h-[40px] text-[#adadad]">
                    <IoBookOutline className="text-xl"/>
                    <span >{book?.volumeInfo.publisher}</span>
                  </div>
                  <div className="grid place-items-center w-[20%] text-center h-[40px] text-[#adadad] border-[#313131] border-r-[1px] border-l-[1px]">
                    <IoBookOutline className="text-xl"/>
                    <span >{book?.volumeInfo.pageCount} páginas</span>
                  </div>
                  <div className="grid place-items-center w-[20%] text-center h-[40px] text-[#adadad]">
                    <LuLanguages className="text-xl"/>
                    <span >{book?.volumeInfo.language}</span>
                  </div>
                </div>
            </div>
          </div>
          <div className="flex gap-4 w-full h-10">
            <div className="w-10 h-full">
              <Buttons title={<FaHeart className="hover:text-xl duration-200"/>} />
            </div>
            <div className="w-[30%] h-full">
              <Buttons title="Comentários" />
            </div>
          </div>
        </div>
        <div className="flex w-[25%] h-full justify-center"> {/* Image */}
          <Image src={book?.volumeInfo.imageLinks?.thumbnail || '/undefinedImage.png'} alt="Book Image" width={180} height={250}/>
        </div>
      </div>
      <div className="w-full h-[250px] pt-4 mt-[50px] border-[#313131] border-t-[1px]">
          <h2 className="text-2xl font-bold">
            Descrição
          </h2>
          <div className="w-full ml-3 mt-5 pl-2 border-l-4 border-[#c4c4c4]">
            {book?.volumeInfo.description}
          </div>
      </div>
      <CommentSection />
    </div>
  );
};

export default BookDetails;