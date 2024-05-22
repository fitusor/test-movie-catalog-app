import React from 'react';
import { createContext, Dispatch, FC, SetStateAction, useEffect, useState } from 'react';
import { useDebounce } from '../../hooks/useDebounce';
import Header from '../Header';
import SearchInfo from '../SearchInfo';
import Loader from '../Loader';
import MoviesList from '../MoviesList';
import Pagination from '../Pagination';
import getMovies from '../../api/movies/getMovies';
import { SearchResults } from '../../types/movies';
import '../../styles/Main/index.css';

interface ISearchContext {
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
}

export const SearchContext = createContext<ISearchContext | null>(null);

const Main: FC = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchResults, setSearchResults] = useState<SearchResults | Record<string, never>>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const debounceStr = useDebounce<string>(searchValue, 2000);

  useEffect(() => {
    const hasInputChanged = debounceStr !== searchValue;
    if (hasInputChanged) {
      setCurrentPage(1);
    } else {
      getMovies({
        debounceStr,
        currentPage,
        setSearchResults,
        setIsLoading,
        setErrorMessage,
      });
    }
  }, [debounceStr, searchValue, currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="main">
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <Header />
      </SearchContext.Provider>
      <main>
        <SearchInfo
          searchedValue={debounceStr}
          totalResults={searchResults?.totalResults || 0}
          errorMessage={errorMessage}
        />
        {isLoading ? (
          <div className="loader-pos">
            <Loader />
          </div>
        ) : (
          <MoviesList movies={Array.isArray(searchResults?.movies) ? searchResults?.movies : []} />
        )}
      </main>
      <footer>
        {searchResults?.totalResults && Number(searchResults?.totalResults) > 10 ? (
          <Pagination
            totalItems={Number(searchResults?.totalResults) || 0}
            itemsPerPage={10}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        ) : null}
      </footer>
    </div>
  );
};

export default Main;
