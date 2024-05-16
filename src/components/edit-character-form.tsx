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

  return (
    <form className="flex flex-col gap-4" onSubmit={onSubmit}>
      <input
        name="name"
        type="text"
        placeholder="Nombre"
        className="text-black"
        defaultValue={character?.name}
      />
      <input
        name="flag"
        type="text"
        placeholder="Flag"
        className="text-black"
        defaultValue={character?.flag}
      />
      <button type="submit">Editar</button>
    </form>
  );
};
