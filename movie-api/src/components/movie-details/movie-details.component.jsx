import React, { useEffect, useState } from "react";

import MovieDetailsService from "./movie-details.service";
import "./movie-details.styles.css";

const MovieDetails = ({ movieId, configuration }) => {
  const [movie, setMovie] = useState(null);
  const [movieImgs, setMovieImgs] = useState(null);
  const [movieCredits, setMovieCredits] = useState(null);

  useEffect(() => {
    getMovie();
    getMovieImgs();
    getMovieCredits();
  }, [movieId]);

  const getMovie = async () => {
    try {
      const movie = await MovieDetailsService.getMovie(movieId);
      setMovie(movie);
    } catch (error) {
      console.log(error);
    }
  };

  const getMovieImgs = async () => {
    try {
      const movieImgs = await MovieDetailsService.getMovieImgs(movieId);
      setMovieImgs(movieImgs);
    } catch (error) {
      console.log(error);
    }
  };

  const getMovieCredits = async () => {
    try {
      const movieCredits = await MovieDetailsService.getMovieCredits(movieId);
      setMovieCredits(movieCredits);
    } catch (error) {
      console.log(error);
    }
  };

  const getReleaseYear = (date) => {
    return date.split("-")[0];
  };

  return (
    <>
      {movie ? (
        <div className="movie-details-container">
          <div className="movie-details">
            <h2 className="movie-title">{movie.title}</h2>
            <ul className="movie-data">
              <li>
                {movie.vote_average}/10 ({movie.vote_count})
              </li>
              <li>{getReleaseYear(movie.release_date)}</li>
              <li>{movie.runtime / 60} hours</li>
            </ul>
            <p className="movie-description">{movie.overview}</p>
            {movieCredits && (
              <ul className="movie-data movie-details-cast-members">
                {movieCredits.map((castMember) => (
                  <li key={castMember.id}>{castMember.name}</li>
                ))}
              </ul>
            )}
            <ul className="movie-data">
              {movie.genres.map((genre) => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </ul>
          </div>
          {configuration && movieImgs && (
            <div className="movie-details-backdrop">
              <img
                src={`${configuration.images.secure_base_url}${configuration.images.backdrop_sizes[2]}${movieImgs.backdrops[0].file_path}`}
                alt={`${movie.title} backdrop`}
              />
            </div>
          )}
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default MovieDetails;
