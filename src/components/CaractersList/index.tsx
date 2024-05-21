import { FC, Ref } from 'react';
import Character from '../Character';
import { CharacterParams } from '../../types/characters';

interface CharactersListProps {
  characters: Array<CharacterParams>;
  lastElementRef?: Ref<HTMLDivElement>;
}

const CharactersList: FC<CharactersListProps> = ({ characters, lastElementRef }) => {
  return (
    <div className="character-grid">
      {characters?.map((character: CharacterParams, index: number) => (
        <Character
          testId={`characterItem-${index}`}
          key={character.id}
          character={character}
          ref={index === characters.length - 4 ? lastElementRef : undefined}
        />
      ))}
    </div>
  );
};

export default CharactersList;
