import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Image from '../Image';

describe('Image component', () => {
  test('renders with default alt text', () => {
    render(<Image />);
    const imageElement = screen.getByAltText('Placeholder');
    expect(imageElement).toBeInTheDocument();
  });

  test('renders with provided alt text', () => {
    render(<Image alt="Custom Alt Text" />);
    const imageElement = screen.getByAltText('Custom Alt Text');
    expect(imageElement).toBeInTheDocument();
  });

  test('renders with provided image source', () => {
    render(<Image src="image-source.png" />);
    const imageElement = screen.getByAltText('Placeholder');
    expect(imageElement).toHaveAttribute('src', 'image-source.png');
  });

  test('renders with placeholder image source if provided source fails to load', () => {
    render(<Image src="non-existing-image.png" />);
    const imageElement = screen.getByAltText('Placeholder');
    fireEvent.error(imageElement);
    expect(imageElement).toHaveAttribute('src', 'placeholder-image.png');
  });

  test('renders with placeholder image source if no source provided', () => {
    render(<Image />);
    const imageElement = screen.getByAltText('Placeholder');
    expect(imageElement).toHaveAttribute('src', 'placeholder-image.png');
  });

  test('updates image source on load', async () => {
    render(<Image src="image-source.png" />);
    const imageElement = screen.getByAltText('Placeholder');
    expect(imageElement).toHaveAttribute('src', 'image-source.png');
    fireEvent.load(imageElement);
    expect(imageElement).toHaveAttribute('src', 'image-source.png');
  });
});
