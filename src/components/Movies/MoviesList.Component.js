import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MoviesList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiKey = 'c0638ca104d2a4dc1689ead7c63b4c46';
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`
        );
        setMovies(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Popular Movies</h1>
      <div className="movie-container">
        {movies.map((movie) => (
          <div
            className="movie-item"
            key={movie.id}
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.backdrop_path})`, // Utiliza la URL de la imagen de fondo proporcionada por la API
              backgroundSize: 'cover', // Ajusta el tamaño del fondo
              backgroundPosition: 'center', // Centra el fondo
            }}
          >
            <div className="movie-title">{movie.title}</div>
          </div>
        ))}
      </div>
      <style>
        {`
          .movie-item {
            position: relative;
          }
        
          .movie-item::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            backdrop-filter: blur(0.5px); /* Cambia el valor del desenfoque según tus necesidades */
          }
        
          .movie-title {
            position: relative;
            z-index: 1;
            color: white; /* Cambia el color del texto a blanco */
            padding: 10px; /* Agrega un espacio interno alrededor del texto */
            text-shadow: -2px -2px 0 black, 2px -2px 0 black, -2px 2px 0 black, 2px 2px 0 black; /* Crea un efecto de borde alrededor del texto */
          }
        `}
      </style>
    </div>
  );
};

export default MoviesList;
