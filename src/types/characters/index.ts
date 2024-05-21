import { Dispatch, SetStateAction } from 'react';

export type CharacterParams = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
};

export type FetchCharactersParams = {
  nextPage: string | null;
  isLoading: boolean;
  setCharacters: Dispatch<SetStateAction<CharacterParams[]>>;
  setFetchedCount: Dispatch<SetStateAction<number>>;
  setNextPage: Dispatch<SetStateAction<string | null>>;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
};
