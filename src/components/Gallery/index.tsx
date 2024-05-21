import { useState, useEffect, FC } from 'react';
import fetchCharacters from '../../api/characters/getCharacters';
import useInfiniteScroll from '../../utils/useInfiniteScroll';
import CharactersList from '../CaractersList';
import { CharacterParams, FetchCharactersParams } from '../../types/characters';

const Gallery: FC = () => {
  const [characters, setCharacters] = useState<CharacterParams[] | []>([]);
  const [nextPage, setNextPage] = useState<string | null>('https://rickandmortyapi.com/api/character/?page=1');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [displayCount, setDisplayCount] = useState<number>(10);
  const [fetchedCount, setFetchedCount] = useState<number>(0);

  const fetch = () => {
    const fetchParams: FetchCharactersParams = {
      nextPage,
      isLoading,
      setCharacters,
      setFetchedCount,
      setNextPage,
      setIsLoading,
    };
    fetchCharacters(fetchParams);
  };

  useEffect(() => {
    fetch();
  }, []);

  const lastElementRef = useInfiniteScroll({
    isLoading,
    fetchedCount,
    displayCount,
    nextPage,
    fetch,
    setDisplayCount,
  });

  return (
    <CharactersList
      characters={characters.slice(0, displayCount)}
      lastElementRef={lastElementRef}
    />
  );
};

export default Gallery;
