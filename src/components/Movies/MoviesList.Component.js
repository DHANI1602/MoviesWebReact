import React from 'react';

const MoviesList = () => {
  return (
    <>
      <article className="movie-item">
        <h3 className="title">Desarrollo web</h3>
        <p className="description">Descripcion</p>
        <button className="edit">Editar</button>
        <button className="delete">borrar</button>
      </article>
    </>
  );
};
export default MoviesList;
