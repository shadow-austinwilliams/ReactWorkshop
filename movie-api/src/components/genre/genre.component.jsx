import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

import MoviePreview from "../movie-preview/movie-preview.component";
import "./genre.styles.css";

const Genre = ({ genre }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
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
        setMovies(response.data.results);
      });
  }, []);

  return (
    <div className="genre-container">
      {movies ? (
        <>
          <h2 className="genre-name">{genre.name}</h2>
          <div className="movie-container">
            {movies.map((movie) => (
              <MoviePreview movie={movie} key={movie.id} />
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
