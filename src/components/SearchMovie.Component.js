import React, { useEffect, useState } from 'react';

const SearchMovie = () => {
  return (
    <>
      <div className="search">
        <h3 className="title">buscador</h3>
        <form>
          <input type="text" />
          <button>buscar</button>
        </form>
      </div>
    </>
  );
};
export default SearchMovie;
