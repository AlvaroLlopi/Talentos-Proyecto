'use client'
import { useEffect, useState } from 'react';
import CharacterCard from '@/components/personaje-card';

interface Character {
  id: number;
  name: string;
  gender: string;
  status: string;
  species: string;
  createdAt: string;
  image: string | null; // La imagen puede ser null según los datos
}

export default function DashboardPage() {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://futuramaapi.com/api/characters');
        const data = await response.json();
        if (data && data.items) {
          setCharacters(data.items);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-center">
        <h1 className="text-4xl">Personajes de Futurama</h1>
      </div>
      <div className="flex items-center gap-y-8 gap-x-2 flex-wrap">
        {characters.map((character) => (
          <CharacterCard character={character} key={character.id} />
        ))}
      </div>
    </div>
  );
}
