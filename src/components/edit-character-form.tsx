'use client';

import { createClient } from '@/utils/supabase/client';
import { useRouter } from 'next/navigation';
import { FormEvent } from 'react';

interface EditCharacterFormProps {
  character: any;
}

export const EditCharacterForm = ({ character }: EditCharacterFormProps) => {
  const supabase = createClient();
  const router = useRouter();

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const name = formData.get('name')?.toString();
    const image = formData.get('image')?.toString();

    await supabase.from('personajes').update({ name, image }).eq('id', character.id);

    router.push('/dashboard');
  };

  const onDelete = async () => {
    await supabase.from('personajes').delete().eq('id', character.id);
    router.push('/dashboard');
  };

  const onCancel = () => {
    router.push('/dashboard');
  };

  return (
      <div className='bg-cover bg-center min-h-screen' style={{ backgroundImage: "url('/images/futurama.jpg')" }}>
    <div className="flex items-center justify-center h-screen">
      <div className="bg-black bg-opacity-75 p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className='mb-4'>Editar Personaje</h2>
        <form className="flex flex-col gap-4" onSubmit={onSubmit}>
          <input
            name="name"
            type="text"
            placeholder="Nombre"
            className="text-black p-2 border border-gray-300 rounded-lg"
            defaultValue={character?.name}
          />
          <input
            name="image"
            type="text"
            placeholder="Image"
            className="text-black p-2 border border-gray-300 rounded-lg"
            defaultValue={character?.image}
          />
          <div className="flex justify-between gap-4">
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-lg">
              Editar
            </button>
            <button type="button" onClick={onDelete} className="bg-red-500 text-white py-2 px-4 rounded-lg">
              Eliminar
            </button>
            <button type="button" onClick={onCancel} className="bg-gray-500 text-white py-2 px-4 rounded-lg">
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};

