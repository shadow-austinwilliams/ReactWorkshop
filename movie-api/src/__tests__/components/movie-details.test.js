import { render, screen } from "@testing-library/react";

import MovieDetailsService from "../../components/movie-details/movie-details.service";
import MovieDetails from "../../components/movie-details/movie-details.component";

const mockMovie = {
  id: 385687,
  title: "Fast X",
  poster_path: "/1E5baAaEse26fej7uHcjOgEE2t2.jpg",
  vote_average: 6.981,
  vote_count: 685,
  release_date: "2023-05-17",
  runtime: 142,
  overview:
    "Over many missions and against impossible odds, Dom Toretto and his family have outsmarted, out-nerved and outdriven every foe in their path. Now, they confront the most lethal opponent they've ever faced: A terrifying threat emerging from the shadows of the past who's fueled by blood revenge, and who is determined to shatter this family and destroy everything—and everyone—that Dom loves, forever.",
  genres: [
    {
      id: 28,
      name: "Action",
    },
    {
      id: 80,
      name: "Crime",
    },
    {
      id: 53,
      name: "Thriller",
    },
  ],
};

const mockMovieImgs = {
  backdrops: [
    {
      file_path: "/4t0oBFrJyweYPt0hocW6RUa0b6H.jpg",
    },
  ],
};

const mockMovieCredits = [
  {
    id: 12835,
    name: "Vin Diesel",
  },
  {
    id: 17647,
    name: "Michelle Rodriguez",
  },
  {
    id: 8169,
    name: "Tyrese Gibson",
  },
];

const mockConfiguration = {
  images: {
    secure_base_url: "https://image.tmdb.org/t/p/",
    poster_sizes: ["w92", "w154", "w185"],
    backdrop_sizes: ["w300", "w780", "w1280"],
  },
};

describe("Movie Details Component", () => {
  test("Should render details about a movie", async () => {
    const mockGetMovie = jest.fn().mockResolvedValue(mockMovie);
    MovieDetailsService.getMovie = mockGetMovie;

    const mockGetMovieImgs = jest.fn().mockResolvedValue(mockMovieImgs);
    MovieDetailsService.getMovieImgs = mockGetMovieImgs;

    const mockGetMovieCredits = jest.fn().mockResolvedValue(mockMovieCredits);
    MovieDetailsService.getMovieCredits = mockGetMovieCredits;

    render(
      <MovieDetails movieId={mockMovie.id} configuration={mockConfiguration} />
    );

    const movieTitle = await screen.findByText(mockMovie.title);

    const movieVotes = await screen.findByText(
      `${mockMovie.vote_average}/10 (${mockMovie.vote_count})`
    );

    const movieReleaseYear = await screen.findByText(2023);

    const movieRuntime = await screen.findByText(
      `${mockMovie.runtime / 60} hours`
    );

    const movieDescription = await screen.findByText(mockMovie.overview);

    mockMovieCredits.forEach(async (actor) => {
      const name = await screen.findByText(actor.name);
      expect(name).toBeVisible();
    });

    mockMovie.genres.forEach(async (genre) => {
      const genreName = await screen.findByText(genre.name);
      expect(genreName).toBeVisible();
    });

    const movieImage = await screen.findByRole("img");

    expect(movieTitle).toBeVisible();
    expect(movieVotes).toBeVisible();
    expect(movieReleaseYear).toBeVisible();
    expect(movieRuntime).toBeVisible();
    expect(movieDescription).toBeVisible();
    expect(movieImage).toBeVisible();
    expect(movieImage.src).toContain(mockMovieImgs.backdrops[0].file_path);
  });
});
