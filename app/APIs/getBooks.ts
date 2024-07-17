import axios from 'axios';
import { NextResponse } from 'next/server';

export async function getBooksSuggestions(suggestion: string) {
    try {
        
        const response = await axios.get(
            "https://www.googleapis.com/books/v1/volumes",
            {
              params: {
                q: suggestion
              },
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'API key ' + "AIzaSyDwcQMjx5TmkSVVmKtxT1Ys_BxSL3fcpvg"
              }
            }
        );

        console.log(response.data);

        return response.data;

    } catch (error) {

        console.error('Erro ao buscar livros:', error);
        throw error;
        
    }
}

export async function getBookById(bookId: string) {
  try {
      
      const response = await axios.get(
        
         `https://www.googleapis.com/books/v1/volumes/${bookId}`,
          {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              'Authorization': 'API key ' + "AIzaSyDwcQMjx5TmkSVVmKtxT1Ys_BxSL3fcpvg"
            }
          }
      );

      console.log(response.data);

      return response.data;

  } catch (error) {

      console.error('Erro ao buscar livros:', error);
      throw error;
      
  }
}

