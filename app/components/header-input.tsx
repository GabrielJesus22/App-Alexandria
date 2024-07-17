'use client'
import { styled } from "styled-components";
import { ButtonHTMLAttributes, InputHTMLAttributes } from "react";
import { useState, useEffect } from 'react'
import Image from "next/image";
import { getBooksSuggestions } from '../APIs/getBooks'
import { Buttons } from "./Buttons";
import { PrimaryInput } from "./text-input";

interface InputProps  extends InputHTMLAttributes<HTMLInputElement> {}
interface ButtonProps  extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Header = () => {
    const [inputValue, setInputValue] = useState('');
    const [suggestions, setSuggestions] = useState<Book[]>([]);

    useEffect(() => {
        if (inputValue.length > 3) {
        // Chame a API para obter sugestões
        const fetchSuggestions = async () => {
            try {
            const response = await getBooksSuggestions(inputValue)
            //console.log(response)
            setSuggestions(response.items || []);
            
            } catch (error) {
            console.error('Erro ao buscar sugestões:', error);
            }
        };

        fetchSuggestions();
        } else {
        setSuggestions([]);
        }
    }, [inputValue]);
    
    return (
    <div className="h-[90px] w-full flex items-center justify-center mt-4 mb-10">
      <div className="flex gap-1 items-center w-full pb-4 border-[#313131] border-b-[1px]">
        <div className="mr-10 w-[8%]">
            <a href="#">
              <Image src="/alexandria.png" alt="Alexandria" width={100} height={130}/>
            </a>
        </div>
        <div className="flex w-[70%] h-[40px] flex-col">
          <PrimaryInput label="Procurando algum livro?" valueInput={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
          <ul className="absolute translate-y-10" >
            {suggestions.slice(0, 5).map(book => (
             <a href={`/book/${book.id}`}>
                <li className="flex flex-row mb-2 ml-2 mt-3" key={book.id}>
                    <div className="mr-2">
                        <Image src={book.volumeInfo.imageLinks?.thumbnail || '/undefinedImage.png'} alt={book.volumeInfo.title} width={35} height={60} />
                    </div>
                    <div>
                        <strong>{book.volumeInfo.title}</strong>
                        <div className="flex flex-row text-gray-400">
                        {book.volumeInfo.authors && (
                            <p>by {book.volumeInfo.authors.join(', ') } </p>
                        )}
                        {book.volumeInfo.publisher && (
                            <span> - {book.volumeInfo.publisher} - {book.id}</span>
                        )}
                        </div>
                    </div>
                </li>
            </a>
            ))}
          </ul>
        </div>
        <div className="w-[15%] h-[40px]">
          <Buttons title="Favoritos"/>
        </div>
      </div>
    </div>
    )
}
