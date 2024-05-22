import React from 'react';
import { ChangeEvent, FC, useContext } from 'react';
import '../../styles/SearchInput/index.css';
import { SearchContext } from '../../components/Main';

const SearchInput: FC = () => {
  const search = useContext(SearchContext);

  if (!search) {
    throw new Error('SearchInput must be used within a SearchProvider');
  }

  const { searchValue, setSearchValue } = search;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.currentTarget.value);
  };

  return (
    <input
      className="search-input"
      type="text"
      placeholder="Search movie"
      value={searchValue}
      onChange={handleChange}
    />
  );
};

export default SearchInput;
