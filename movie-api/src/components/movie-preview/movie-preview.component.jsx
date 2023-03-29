import React from "react";

import "./movie-preview.styles.css";

const MoviePreview = ({ movie, configuration, toggleMovieDetails }) => {
  console.log(configuration);
  return (
    <>
      {configuration && (
        <button
          className="movie-card"
          onClick={() => toggleMovieDetails(movie.id)}
        >
          <img
            src={`${configuration.images.secure_base_url}${configuration.images.poster_sizes[2]}${movie.poster_path}`}
            alt={`${movie.title} poster`}
          />
        </button>
      )}
    </>
  );
};

export default MoviePreview;
