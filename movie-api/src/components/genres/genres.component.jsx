import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

import "./genres.styles.css";
import Genre from "../genre/genre.component";

const Genres = () => {
  const [genres, setGenres] = useState(null);

  useEffect(() => {
    getGenres();
  }, []);

  const getGenres = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}`
      )
      .then((response) => {
        setGenres(response.data.genres);
      });
  };

  return (
    <div className="movies-container">
      {genres && genres.map((genre) => <Genre genre={genre} key={genre.id} />)}
    </div>
  );
};

export default Genres;
