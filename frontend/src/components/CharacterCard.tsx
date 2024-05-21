'use client'
import Image from "next/image";

interface CharacterCardProps {
  character: {
    id: number;
    name: string;
    image: string;
    character: string;
  };
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  return (
    <div key={character.id} className="flex flex-col items-center gap-2 w-52">
      <Image
        width={100}
        height={100}
        src={character.character}
        alt={character.name}
        className="w-10 h-10"
      />
      <span>{character.name}</span>
    </div>
  );
};

export default CharacterCard;
