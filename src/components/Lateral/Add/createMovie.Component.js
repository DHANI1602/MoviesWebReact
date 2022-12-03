import React from 'react';

const CreateMovie = () => {
  return (
    <>
      <div className="add">
        <h3 className="title">Añadir pelicula</h3>
        <form>
          <input type="text" placeholder="Titulo" />
          <textarea placeholder="Descripción"></textarea>
          <input type="submit" value="guardar" />
        </form>
      </div>
    </>
  );
};
export default CreateMovie;
