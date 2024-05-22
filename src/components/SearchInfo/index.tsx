import React from 'react';
import { FC } from 'react';
import '../../styles/SearchInfo/index.css';

interface ISearchInfoProps {
  searchedValue: string;
  totalResults: string | number;
  errorMessage: string;
}

const SearchInfo: FC<ISearchInfoProps> = (props) => {
  const { searchedValue, totalResults, errorMessage } = props;

  return (
    <h2>
      {!searchedValue
        ? 'Type movie name in the search input'
        : errorMessage
          ? errorMessage
          : `You searched for: ${searchedValue}, ${totalResults} results found`}
    </h2>
  );
};

export default SearchInfo;
