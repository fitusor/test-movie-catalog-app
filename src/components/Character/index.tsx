import { forwardRef } from 'react';
import { CharacterParams } from '../../types/characters';

type CharacterProps = {
  character: CharacterParams;
  testId?: string;
};

const Character = forwardRef<HTMLDivElement, CharacterProps>(({ character, testId }, ref) => {
  return (
    <div
      className="character-card"
      ref={ref}
      data-testid={testId}
    >
      <img
        src={character.image}
        alt={character.name}
      />
      <h2 data-testid="character-name">{character.name}</h2>
    </div>
  );
});

Character.displayName = 'Character';
export default Character;
