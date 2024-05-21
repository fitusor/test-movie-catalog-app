import React from 'react';
import Character from './index';
import { render, screen } from '@testing-library/react';
import { CharacterParams } from '../../types/characters';

const character: CharacterParams = {
  id: 1,
  name: 'Rick Sanchez',
  status: 'Alive',
  species: 'Human',
  type: '',
  gender: 'Male',
  origin: {
    name: 'Earth (C-137)',
    url: 'https://rickandmortyapi.com/api/location/1',
  },
  location: {
    name: 'Citadel of Ricks',
    url: 'https://rickandmortyapi.com/api/location/3',
  },
  image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  episode: ['https://rickandmortyapi.com/api/episode/1', 'https://rickandmortyapi.com/api/episode/2'],
  url: 'https://rickandmortyapi.com/api/character/1',
  created: '2017-11-04T18:48:46.250Z',
};

describe('<Character />', () => {
  test('should render name', () => {
    render(<Character character={character} />);

    expect(screen.getByTestId('character-name')).toHaveTextContent(character.name);
  });
  test('should render image', () => {
    render(<Character character={character} />);

    expect(screen.getByAltText(character.name)).toBeVisible();
  });
});
