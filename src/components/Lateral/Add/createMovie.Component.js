import React, { useState } from 'react';
import Save from '.../helpers/SaveInStorage.js';

const CreateMovie = () => {
  const mainTitle = 'Añadir Pelicula';

  const [movieState, setMovieState] = useState({
    title: '',
    description: '',
  });
  const { title, description } = movieState;
  const GetFormData = (e) => {
    e.preventDefault();
    let target = e.target;
    let title = target.title.value;
    let description = target.description.value;

    let movie = {
      id: new Date().getTime(),
      title,
      description,
    };
    setMovieState(movie);
    Save('movies', movie);
  };
  return (
    <>
      <div className="add">
        <h3 className="title">{mainTitle}</h3>
        <strong>
          {movieState.title &&
            movieState.description &&
            'Has añadido la pelicula'}
        </strong>
        <form onSubmit={GetFormData}>
          <input id="title" name="title " type="text" placeholder="Titulo" />
          <textarea
            id="description"
            name="description"
            placeholder="Descripción"
          ></textarea>
          <input id="save" name="submit" type="submit" value="guardar" />
        </form>
      </div>
    </>
  );
};
export default CreateMovie;
