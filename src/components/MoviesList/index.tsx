import React from 'react';
import { FC } from 'react';
import { SearchMovies } from '../../types/movies';
import MovieCard from '../MovieCard';
import '../../styles/MoviesList/index.css';

interface IMoviesListProps {
  movies: Array<SearchMovies> | [];
}

const MoviesList: FC<IMoviesListProps> = ({ movies }) => {
  return (
    <div
      className="movies-cont"
      data-testid="movies-cont"
    >
      {movies?.map((movie: SearchMovies) => (
        <MovieCard
          key={movie.imdbID}
          movie={movie}
        />
      ))}
    </div>
  );
};

export default MoviesList;
