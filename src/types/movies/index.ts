export type SearchMovies = {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
};

export type SearchResults = {
  totalResults: string;
  movies: SearchMovies;
};
