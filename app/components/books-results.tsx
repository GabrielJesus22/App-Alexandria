import React, { useState, useEffect } from 'react';
import { getBooksSuggestions } from '../APIs/getBooks';

export const BookSearch = ({ suggestions }) => {

  return (
    <div>
      <h1>Resultados da Busca</h1>
      <ul>
        {suggestions.map(suggestion => (
          <li key={suggestion.id}>{suggestion.volumeInfo.title}</li>
        ))}
      </ul>
    </div>
  );
};
