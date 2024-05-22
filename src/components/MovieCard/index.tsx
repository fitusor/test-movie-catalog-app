import React from 'react';
import { FC } from 'react';
import { SearchMovies } from '../../types/movies';
import '../../styles/MovieCard/index.css';
import Image from '../Image';

type IMovieCardProps = {
  movie: SearchMovies;
};

const MovieCard: FC<IMovieCardProps> = ({ movie }) => {
  return (
    <div
      className="movie-card"
      data-testid="movie-card"
    >
      <div className="movie-card-img">
        <Image
          src={movie.Poster}
          alt={movie.Title}
        />
      </div>
      <div className="movie-card-text">
        <p>Name: {movie.Title}</p>
        <p>Year: {movie.Year}</p>
        <p>imdbID: {movie.imdbID}</p>
        <p>Type: {movie.Type}</p>
      </div>
    </div>
  );
};

export default MovieCard;
