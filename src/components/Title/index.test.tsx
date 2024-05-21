import React from 'react';
import Title from './index';
import { render, screen } from '@testing-library/react';

describe('<Title/>', () => {
  test('should render title', () => {
    render(<Title />);

    expect(screen.getByTestId('title')).toHaveTextContent('Rick and Morty Character Gallery');
  });
});
