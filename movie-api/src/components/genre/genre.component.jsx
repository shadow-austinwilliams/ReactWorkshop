import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

import MoviePreview from "../movie-preview/movie-preview.component";
import MovieDetails from "../movie-details/movie-details.component";
import "./genre.styles.css";

const Genre = ({ genre }) => {
  const [movies, setMovies] = useState([]);
  const [configuration, setConfiguration] = useState(null);
  const [showMovieDetails, setShowMovieDetails] = useState(false);
  const [movieDetailsId, setMovieDetailsId] = useState(null);

  useEffect(() => {
    getMovies();
  }, []);

  useEffect(() => {
    getConfiguration();
  }, []);

  const getMovies = () => {
    axios
      .get("https://api.themoviedb.org/3/discover/movie", {
        params: {
          api_key: process.env.REACT_APP_API_KEY,
          language: "en-US",
          with_genres: genre.id,
          include_adult: false,
          sort_by: "popularity.desc",
        },
      })
      .then((response) => {
        setMovies(response.data.results.splice(0, 6));
      });
  };

  const getConfiguration = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/configuration?api_key=${process.env.REACT_APP_API_KEY}`
      )
      .then((response) => {
        setConfiguration(response.data);
      });
  };

  const toggleMovieDetails = (movieId) => {
    if (movieDetailsId === null) {
      setShowMovieDetails(!showMovieDetails);
      setMovieDetailsId(movieId);
      return;
    }

    if (movieDetailsId === movieId) {
      setShowMovieDetails(!showMovieDetails);
      return;
    }

    setMovieDetailsId(movieId);
  };

  return (
    <div className="genre-container">
      {movies ? (
        <>
          {showMovieDetails && (
            <MovieDetails
              movieId={movieDetailsId}
              configuration={configuration}
            />
          )}
          <h2 className="genre-name">{genre.name}</h2>
          <div className="movie-container">
            {movies.map((movie) => (
              <MoviePreview
                movie={movie}
                key={movie.id}
                configuration={configuration}
                toggleMovieDetails={toggleMovieDetails}
              />
            ))}
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Genre;
