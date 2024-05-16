'use client';

import { createClient } from '@/utils/supabase/client';
import {
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

export const CreateCharacterForm = () => {
  const supabase = createClient();
  const router = useRouter();

  return (
    <Container>
      <form
        className="flex flex-col gap-4"
        onSubmit={async (event) => {
          event.preventDefault();

          const formData = new FormData(event.currentTarget);
          const name = formData.get('name')?.toString();
          const image = formData.get('image')?.toString();

          await supabase.from('personajes').insert({ name, image });

          router.push('/dashboard');
        }}
      >
        <FormControl>
          <FormLabel>Nombre</FormLabel>
          <Input type="text" />
        </FormControl>
        <FormControl>
          <FormLabel>Image</FormLabel>
          <Input type="text" />
        </FormControl>

        <Button colorScheme="teal" size="lg" type="submit" mt="4">
          Enviar
        </Button>
      </form>
    </Container>
  );
};
