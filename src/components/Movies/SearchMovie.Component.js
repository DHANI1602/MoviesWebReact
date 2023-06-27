// components/Movies/SearchMovie.Component.js
import React, { useState } from 'react';

const SearchMovie = ({ handleSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    const { value } = event.target;
    setSearchTerm(value);
    handleSearch(value); // Llama a la función `handleSearch` pasando el término de búsqueda actualizado
  };

  return (
    <div className="search">
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Search for movies..."
      />
    </div>
  );
};

export default SearchMovie;
