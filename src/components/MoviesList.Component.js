import React, { useEffect, useState } from 'react';

const MoviesList = () => {
  const [listState, setListState] = useState([]);

  useEffect(() => {
    GetInfo();
  }, []);

  const GetInfo = () => {
    let info = JSON.parse(localStorage.getItem('movies'));
    setListState(info);
  };

  return (
    <>
      {listState != null ? (
        listState.map((movie) => {
          return (
            <article className="movie-item">
              <h3 className="title">{movie.title}</h3>
              <p className="description">{movie.description}</p>
              <button className="edit">Editar</button>
              <button className="delete">borrar</button>
            </article>
          );
        })
      ) : (
        <h2>No hay peliculas actualmente</h2>
      )}
    </>
  );
};
export default MoviesList;
