import axios from "axios";

const getMovie = async (movieId) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_API_KEY}`
    );
    return response.data;
  } catch (error) {
    throw new Error("Unable to get movie");
  }
};

const getMovieImgs = async (movieId) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/images?api_key=${process.env.REACT_APP_API_KEY}`
    );
    return response.data;
  } catch (error) {
    throw new Error("Unable to get movie images");
  }
};

const getMovieCredits = async (movieId) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${process.env.REACT_APP_API_KEY}`
    );
    return response.data.cast.slice(0, 3);
  } catch (error) {
    throw new Error("unable to get movie credits");
  }
};

export default { getMovie, getMovieImgs, getMovieCredits };
