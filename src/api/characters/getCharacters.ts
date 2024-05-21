import axios from 'axios';
import { FetchCharactersParams } from '../../types/characters';

const fetchCharacters = async ({
  nextPage,
  isLoading,
  setCharacters,
  setFetchedCount,
  setNextPage,
  setIsLoading,
}: FetchCharactersParams): Promise<void> => {
  if (!nextPage || isLoading) return;
  try {
    setIsLoading(true);
    const res = await axios.get(nextPage);
    setCharacters((prev) => [...prev, ...res.data.results]);
    setFetchedCount((prevFetchedCount) => prevFetchedCount + res.data.results.length);
    setNextPage(res.data.info.next);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error fetching characters:', error);
  } finally {
    setIsLoading(false);
  }
};

export default fetchCharacters;
