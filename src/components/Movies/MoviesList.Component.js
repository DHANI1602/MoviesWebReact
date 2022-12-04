import React, { useEffect, useState } from 'react';
import Edit from './edit/edit.Component.js';

const MoviesList = ({ listState, setListState, rootElement }) => {
  const [edit, setEdit] = useState(0);
  var rootElement = document.documentElement;
  useEffect(() => {
    GetInfo();
  }, []);

  const DeleteMovie = (id) => {
    let savedMovies = GetInfo();
    let newMoviesList = savedMovies.filter(
      (movie) => movie.id !== parseInt(id)
    );
    setListState(newMoviesList);
    localStorage.setItem('movies', JSON.stringify(newMoviesList));
  };
  const GetInfo = () => {
    let info = JSON.parse(localStorage.getItem('movies'));
    setListState(info);
    return info;
  };

  return (
    <>
      {listState != null ? (
        listState.map((movie) => {
          return (
            <article className="movie-item">
              <h3 className="title">{movie.title}</h3>
              <p className="description">{movie.description}</p>
              <button className="edit" onClick={() => setEdit(movie.id)}>
                Editar
              </button>
              <button
                className="delete"
                onClick={() => {
                  DeleteMovie(movie.id);
                }}
              >
                borrar
              </button>
              {edit === movie.id && (
                <Edit
                  movie={movie}
                  GetInfo={GetInfo}
                  setEdit={setEdit}
                  setListState={setListState}
                />
              )}
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
