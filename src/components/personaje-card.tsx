'use client'
import React from 'react';

interface Character {
  id: number;
  name: string;
  gender: string;
  status: string;
  species: string;
  createdAt: string;
  image: string | null;
}

interface CharacterCardProps {
  character: Character;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  return (
    <div className="card w-1/4 p-4">
      <img src={character.image || 'https://via.placeholder.com/150'} alt={character.name} className="w-25 h-26 object-cover"/>
      <div>
        <h1>Datos:</h1>
        <h3>Nombre: {character.name}</h3>
        <p>Genero: {character.gender}</p>
        <p>Estado: {character.status}</p>
        <p>Especie: {character.species}</p>
      </div>
    </div>
  );
};

export default CharacterCard;
