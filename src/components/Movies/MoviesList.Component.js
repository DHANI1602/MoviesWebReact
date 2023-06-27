import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MoviesList = ({ searchTerm }) => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [hoveredMovie, setHoveredMovie] = useState(null);
  const [hoveredMovieInfo, setHoveredMovieInfo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiKey = 'c0638ca104d2a4dc1689ead7c63b4c46';
        let url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=popularity.desc`;

        if (searchTerm) {
          url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(
            searchTerm
          )}`;
        }

        const response = await axios.get(url);
        const filteredMovies = response.data.results
          .filter(
            (movie) =>
              movie.backdrop_path &&
              movie.release_date &&
              new Date(movie.release_date) <= new Date()
          )
          .slice(0, 20);

        setMovies(filteredMovies);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [searchTerm]);

  useEffect(() => {
    setFilteredMovies(movies);
  }, [movies]);

  const handleMouseEnter = (movieId, movieInfo) => {
    setHoveredMovie(movieId);
    setHoveredMovieInfo(movieInfo);
  };

  const handleMouseLeave = () => {
    setHoveredMovie(null);
    setHoveredMovieInfo(null);
  };

  return (
    <div className="movie-container">
      {filteredMovies.map((movie) => (
        <div className="front-card-movie">
          <div
            className={`movie-item ${
              movie.id === hoveredMovie ? 'hovered' : ''
            }`}
            key={movie.id}
            onMouseEnter={() =>
              handleMouseEnter(movie.id, {
                title: movie.title,
                release_date: movie.release_date,
                overview: movie.overview,
              })
            }
            onMouseLeave={handleMouseLeave}
          >
            <div className="front-content">
              <div
                className="front-image"
                style={{
                  backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.poster_path})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              ></div>
            </div>
            <div className="back-content">
              <h1>{hoveredMovieInfo && hoveredMovieInfo.title}</h1>
              <p>{hoveredMovieInfo && hoveredMovieInfo.overview}</p>
              <p>{hoveredMovieInfo && hoveredMovieInfo.release_date}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MoviesList;
