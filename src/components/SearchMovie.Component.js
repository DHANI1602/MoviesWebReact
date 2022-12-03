import React, { useEffect, useState } from 'react';

const SearchMovie = ({ listState, setListState }) => {
  const [search, setSearch] = useState('');
  const searchMovie = (e) => {
    //crear estado y actualizarlo
    setSearch(e.target.value);
    // filtrar para buscar cualquier coincidencia
    let moviesSearched = listState.filter((movie) => {
      return movie.title.toLowerCase().includes(search.toLowerCase());
    });
    if (search.length <= 2) {
      moviesSearched = JSON.parse(localStorage.getItem('movies'));
    }
    //actualizar el listaod principal con lo que se filtro
    //setListState()
  };
  return (
    <>
      <div className="search">
        <h3 className="title">buscador</h3>
        <form>
          <input
            type="text"
            id="search_field"
            name="search"
            autocomplete="off"
            value={search}
            onChange={searchMovie}
          />
          <button>buscar</button>
        </form>
      </div>
    </>
  );
};
export default SearchMovie;
