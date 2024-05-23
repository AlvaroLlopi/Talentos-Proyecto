'use client'
import { createClient } from '@/utils/supabase/client';
import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Crear personajes de Futurama",
  description: "Vista para crear personajes de futurama",
};

export const CreateCharacterForm = () => {
  const supabase = createClient();
  const router = useRouter();

  return (
    <div className='bg-cover bg-center min-h-screen' style={{ backgroundImage: "url('/images/futurama.jpg')" }}>
    <div className='container flex justify-center pt-5'>
      <div className='p-4 bg-black bg-opacity-75 rounded-lg shadow-md max-w-xs h-max-w-xs '>
        <Heading as="h2" size="xl" textAlign="center" mb="6">Crear Personaje</Heading>
        <div className="mt-3 sm:mx-auto sm:w-full sm:max-w-sm">
        <form
          className="flex flex-col gap-2"
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
          <label className="block text-sm font-medium leading-6 text-white">
                Nombre
          </label>
            <input
              name="name"
              type="text"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </FormControl>
          <FormControl id="image-control" isRequired>
          <label className="block text-sm font-medium leading-6 text-white">
                Imagen
          </label>
          <input
            name="image"
            type="text"
            required
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
          </FormControl>
          <Box display="flex" justifyContent="center" gap="20" mt="10">
          <Button size="lg" type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
            Crear
            </Button>
            <Button size="lg" onClick={() => router.push('/dashboard')}className="bg-red-500 text-white py-2 px-4 rounded">
              Cancelar
            </Button>
          </Box>
        </form>
        </div>
        </div>
      </div>
    </div>

  );
};
