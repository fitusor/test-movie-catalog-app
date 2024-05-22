import axios from 'axios';
import { Dispatch, SetStateAction } from 'react';
import * as process from 'process';

type GetMovies = {
  debounceStr: string;
  currentPage: number;
  setSearchResults: Dispatch<SetStateAction<any>>;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setErrorMessage: Dispatch<SetStateAction<string>>;
};

const getMovies = async ({
  debounceStr,
  currentPage,
  setSearchResults,
  setIsLoading,
  setErrorMessage,
}: GetMovies): Promise<void> => {
  try {
    setIsLoading(true);
    const res = await axios.get(
      `${process.env.REACT_APP_BASE_URL}?i=${process.env.REACT_APP_I_PARAM}&apikey=${process.env.REACT_APP_API_KEY}&s=${debounceStr}&page=${currentPage}`,
    );

    if (res.status === 200) {
      if (res.data.Response === 'True') {
        setSearchResults({ totalResults: res.data.totalResults, movies: res.data.Search });
        setErrorMessage('');
      } else {
        setSearchResults({ totalResults: 0, movies: [] });
        setErrorMessage(res.data.Error);
      }
    } else {
      setSearchResults({ totalResults: 0, movies: [] });
      throw new Error('Error fetching movies info');
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error fetching movies info:', error);
  } finally {
    setIsLoading(false);
  }
};

export default getMovies;
