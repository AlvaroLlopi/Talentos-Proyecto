'use client'
import { createClient } from '@/utils/supabase/client';
import {
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
  Box,
  Heading,
} from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

export const CreateCharacterForm = () => {
  const supabase = createClient();
  const router = useRouter();

  return (
    <Container display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
      <Box width="100%" maxWidth="md" padding="8" borderWidth="1px" borderRadius="lg" boxShadow="lg">
        <Heading as="h2" size="xl" textAlign="center" mb="6">Crear Personaje</Heading>
        <form
          className="flex flex-col gap-4"
          onSubmit={async (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const name = formData.get('name')?.toString();
            const image = formData.get('image')?.toString();
          
            try {
              let { data, error } = await supabase.from('personajes').insert([{ name, image }]);
              if (error) throw error;
              router.push('/dashboard');
            } catch (error) {
              alert('Error al crear el personaje');
            }
          }}
          
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        >
          <FormControl id="name-control" isRequired>
            <FormLabel>Nombre</FormLabel>
            <Input name="name" type="text" required />
          </FormControl>
          <FormControl id="image-control" isRequired>
            <FormLabel>Imagen</FormLabel>
            <Input name="image" type="text" required />
          </FormControl>
          <Box display="flex" justifyContent="center" gap="50" mt="10">
          <Button size="lg" type="submit" colorScheme="teal" backgroundColor="teal.500" _hover={{ bg: 'teal.600' }}>
            Crear
            </Button>
            <Button colorScheme="red" size="lg" onClick={() => router.push('/dashboard')} bg="red.500" _hover={{ bg: 'red.600' }}>
              Cancelar
            </Button>
          </Box>
        </form>
      </Box>
    </Container>
  );
};
