import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

import "./movie-preview.styles.css";

const MoviePreview = ({ movie }) => {
  const [configuration, setConfiguration] = useState(null);

  useEffect(() => {
    getConfiguration();
  }, []);

  const getConfiguration = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/configuration?api_key=${process.env.REACT_APP_API_KEY}`
      )
      .then((response) => {
        setConfiguration(response.data);
      });
  };

  return (
    <>
      {configuration && (
        <button className="movie-card">
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
