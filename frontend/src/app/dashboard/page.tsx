'use client'
import { useEffect, useState } from 'react';
import CharacterCard from '@/components/CharacterCard';


export default function DashboardPage() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://rickandmortyapi.com/api/character');
        const data = await response.json();
        setCharacters(data.results); // Establecer solo los resultados como personajes
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <div>Personajes de Rick and Morty</div>
      <div className="flex items-center gap-y-8 gap-x-2 flex-wrap">
        {characters.map((character: any) => (
          <CharacterCard character={character} key={character.id} />
        ))}
      </div>
    </div>
  );
}