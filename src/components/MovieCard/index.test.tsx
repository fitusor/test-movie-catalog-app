import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import placeholderImage from '../../assets/images/placeholder-image.png';
import MovieCard from './index';

const mockMovie = {
  Poster: 'movie-poster-url.jpg',
  Title: 'Mock Movie',
  Year: '2022',
  imdbID: 'tt1234567',
  Type: 'movie',
};

test('renders movie card with correct movie information', () => {
  render(<MovieCard movie={mockMovie} />);

  const imageElement = screen.getByAltText(mockMovie.Title);
  expect(imageElement).toHaveAttribute('src', mockMovie.Poster);

  expect(screen.getByText(`Name: ${mockMovie.Title}`)).toBeInTheDocument();
  expect(screen.getByText(`Year: ${mockMovie.Year}`)).toBeInTheDocument();
  expect(screen.getByText(`imdbID: ${mockMovie.imdbID}`)).toBeInTheDocument();
  expect(screen.getByText(`Type: ${mockMovie.Type}`)).toBeInTheDocument();
});

test('renders movie card with placeholder image if movie poster is not available', () => {
  const movieWithoutPoster = {
    ...mockMovie,
    Poster: '',
  };
  render(<MovieCard movie={movieWithoutPoster} />);

  const imageElement = screen.getByRole('img');
  expect(imageElement).toHaveAttribute('src', placeholderImage);
});

test('renders movie card with default alt text if movie title is not available', () => {
  const movieWithoutTitle = {
    ...mockMovie,
    Title: '',
  };
  render(<MovieCard movie={movieWithoutTitle} />);

  const imageElement = screen.getByAltText('Placeholder');
  expect(imageElement).toBeInTheDocument();
});
