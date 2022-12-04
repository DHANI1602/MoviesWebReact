import React from 'react';

const Edit = ({ movie, GetInfo, setEdit, setListState }) => {
  const SaveEdition = (e, id) => {
    e.preventDefault();
    let target = e.target;
    const movies = GetInfo();
    const i = movies.findIndex((movie) => movie.id === id);
    let newMovieInfo = {
      id,
      title: target.title.value,
      description: target.description.value,
    };
    movies[i] = newMovieInfo;
    localStorage.setItem('movies', JSON.stringify(movies));
    setListState(movies);
    setEdit(0);
  };

  return (
    <div className="edit_form">
      <h3 className="title">Editando</h3>
      <form onSubmit={(e) => SaveEdition(e, movie.id)}>
        <input
          type="text"
          name="title"
          className="title_edited"
          defaultValue={movie.title}
        />
        <textarea
          name="description"
          defaultValue={movie.description}
          className="description"
        ></textarea>
        <input type="submit" className="edit" value="update" />
      </form>
    </div>
  );
};
export default Edit;
