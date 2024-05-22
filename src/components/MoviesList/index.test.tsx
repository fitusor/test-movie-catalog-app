import React from 'react';
import { render, screen } from '@testing-library/react';
import MoviesList from './index';
import { SearchMovies } from '../../types/movies';
import '@testing-library/jest-dom/extend-expect';

const mockMovies: Array<SearchMovies> = [
  {
    Poster: 'poster1.jpg',
    Title: 'Movie 1',
    Year: '2020',
    imdbID: 'tt1234561',
    Type: 'movie',
  },
  {
    Poster: 'poster2.jpg',
    Title: 'Movie 2',
    Year: '2021',
    imdbID: 'tt1234562',
    Type: 'movie',
  },
];

test('renders MoviesList component with empty movies list', () => {
  render(<MoviesList movies={[]} />);
  const movieCards = screen.queryAllByTestId('movie-card');
  expect(movieCards).toHaveLength(0);
});

test('renders MoviesList component with provided movies', () => {
  render(<MoviesList movies={mockMovies} />);
  const movieCards = screen.getAllByTestId('movie-card');
  expect(movieCards).toHaveLength(mockMovies.length);

  mockMovies.forEach((movie, index) => {
    expect(movieCards[index]).toHaveTextContent(movie.Title);
    expect(movieCards[index]).toHaveTextContent(movie.Year);
    expect(movieCards[index]).toHaveTextContent(movie.imdbID);
    expect(movieCards[index]).toHaveTextContent(movie.Type);
  });
});
