import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SearchInfo from '../SearchInfo';

test('displays message to type movie name if no search value provided', () => {
  render(
    <SearchInfo
      searchedValue=""
      totalResults={0}
      errorMessage=""
    />,
  );
  const messageElement = screen.getByText('Type movie name in the search input');
  expect(messageElement).toBeInTheDocument();
});

test('displays error message if error occurred', () => {
  const errorMessage = 'An error occurred while fetching data';
  render(
    <SearchInfo
      searchedValue="Star Wars"
      totalResults={0}
      errorMessage={errorMessage}
    />,
  );
  const errorMessageElement = screen.getByText(errorMessage);
  expect(errorMessageElement).toBeInTheDocument();
});

test('displays search info with searched value and total results', () => {
  const searchedValue = 'Star Wars';
  const totalResults = 123;
  render(
    <SearchInfo
      searchedValue={searchedValue}
      totalResults={totalResults}
      errorMessage=""
    />,
  );
  const searchInfoElement = screen.getByText(`You searched for: ${searchedValue}, ${totalResults} results found`);
  expect(searchInfoElement).toBeInTheDocument();
});
