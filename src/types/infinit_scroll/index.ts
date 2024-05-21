import { SetStateAction } from 'react';

export type UseInfiniteScrollParams = {
  isLoading: boolean;
  fetchedCount: number;
  displayCount: number;
  nextPage: string | null;
  fetch: () => void;
  setDisplayCount: (value: SetStateAction<number>) => void;
};
