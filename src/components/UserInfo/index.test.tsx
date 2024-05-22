import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import UserInfo from './index';

test('renders user information correctly', () => {
  render(<UserInfo />);

  const userIcon = screen.getByAltText('asd');
  expect(userIcon).toBeInTheDocument();

  const userName = screen.getByText('Fitkovich Mikalai');
  expect(userName).toBeInTheDocument();
});
