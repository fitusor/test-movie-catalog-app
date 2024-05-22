import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Loader from '../Loader';

describe('Loader component', () => {
  test('renders with default size', () => {
    render(<Loader />);
    const loaderElement = screen.getByTestId('loader');
    expect(loaderElement).toHaveClass('loader-medium');
  });

  test('renders with small size', () => {
    render(<Loader size="small" />);
    const loaderElement = screen.getByTestId('loader');
    expect(loaderElement).toHaveClass('loader-small');
  });

  test('renders with medium size', () => {
    render(<Loader size="medium" />);
    const loaderElement = screen.getByTestId('loader');
    expect(loaderElement).toHaveClass('loader-medium');
  });

  test('renders with large size', () => {
    render(<Loader size="large" />);
    const loaderElement = screen.getByTestId('loader');
    expect(loaderElement).toHaveClass('loader-large');
  });
});
