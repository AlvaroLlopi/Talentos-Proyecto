'use client';

import { Image } from '@chakra-ui/next-js';
import { Card, CardBody, Divider, Heading } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

export const CharacterCard = ({ character }: any) => {
  const router = useRouter();

  return (
    <Card
      maxW="sm"
      onClick={() => {
        router.push(`/dashboard/personaje/${character.name}`);
      }}
    >
      <Image
        width={400}
        height={200}
        src={character.flag}
        alt={character.name}
        borderRadius='lg'
        className="w-10 h-10"
      />
      <Divider />
      <CardBody>
        <Heading size="md">{character.name}</Heading>
      </CardBody>
    </Card>
  );
};
