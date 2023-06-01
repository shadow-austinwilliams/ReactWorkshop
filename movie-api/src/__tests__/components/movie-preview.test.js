import { render, screen } from "@testing-library/react";
import MoviePreview from "../../components/movie-preview/movie-preview.component";

const mockMovie = {
  id: 385687,
  title: "Fast X",
  poster_path: "/1E5baAaEse26fej7uHcjOgEE2t2.jpg",
};

const mockConfiguration = {
  images: {
    secure_base_url: "https://image.tmdb.org/t/p/",
    poster_sizes: ["w92", "w154", "w185"],
  },
};

const mockToggleMovieDetails = jest.fn();

describe("Movie preview Component", () => {
  test("Should render movie preview", () => {
    render(
      <MoviePreview
        movie={mockMovie}
        configuration={mockConfiguration}
        toggleMovieDetails={mockToggleMovieDetails}
      />
    );

    const movieButton = screen.getByRole("button");
    const moviePoster = screen.getByRole("img");

    expect(movieButton).toBeVisible();
    expect(moviePoster).toBeVisible();
    expect(movieButton).toContainElement(moviePoster);
  });

  test("Movie preview is not rendered if configuration is null", () => {
    render(
      <MoviePreview
        movie={mockMovie}
        configuration={null}
        toggleMovieDetails={mockToggleMovieDetails}
      />
    );

    const movieButton = screen.queryByRole("button");

    expect(movieButton).toBeNull();
  });
});
