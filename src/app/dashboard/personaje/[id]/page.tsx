import { DeleteCharacterButton } from '@/components/delete-character-button';
import { createServerClient } from '@/utils/supabase/server';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Personaje",
  description: "Bienvenido a la pagina de Futurama",
};


export default async function CharacterById({ params }: any) {
  const supabase = createServerClient();
  const { data } = await supabase.from('personajes').select('*').eq('id', params.id).single();

  return (
    <div className="flex flex-col gap-4 w-full justify-center items-center mt-4">
      <h3>{data?.name}</h3>

      <Image
        src={data?.image}
        width={500}
        height={500}
        alt={data?.name}
        className='rounded-lg'
      />
      <div className='flex justify-center gap-8'>
      <Link href={`/dashboard/personaje/${data?.id}/edit`} className="bg-blue-500 text-white py-2 px-4 rounded">Editar </Link>
      <Link href={`/dashboard`} className="bg-gray-500 text-white py-2 px-4 rounded">Cancelar</Link>
      <DeleteCharacterButton character={data} /></div>
    </div>
  );
}
