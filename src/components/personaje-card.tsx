'use client';

import { Image } from '@chakra-ui/next-js';
import { Card, CardBody, Divider, Heading } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

export const CharacterCard = ({ character }: any) => {
  console.log(character);  // Esto ayuda a verificar los datos en la consola
  const router = useRouter();

  return (
    <Card
      maxW="sm"
      onClick={() => {
        router.push(`/dashboard/personaje/${character.id}`);
      }}
    >
      <Image
        width={400}
        height={200}
        alt={character.name}
        src={character.image}
        borderRadius='lg'
        className="w-10 h-10 hover:border hover:border-blue-500 hover:shadow-lg rounded-lg"
      />
      <Divider />
      <CardBody>
        <Heading size="md"><div className='flex justify-center'>{character.name}</div></Heading>
      </CardBody>
    </Card>
  );
};
