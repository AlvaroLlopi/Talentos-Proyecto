import { DeleteCountryButton } from '@/components/delete-country-button';
import { createServerClient } from '@/utils/supabase/server';
import Image from 'next/image';
import Link from 'next/link';

const getCharacterData = async (id: string) => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${id}`
  );

  const data = await response.json();

  return data || {};
};

export default async function CharacterById({ params }: any) {
  const supabase = createServerClient();
  const { data } = await supabase.from('characters').select('*').eq('name', params.id).single();

  return (
    <div className="flex flex-col gap-4 w-full justify-center items-center mt-1">
      <h3>{data.name}</h3>

      <Image
        src={data.image}
        width={300}
        height={300}
        alt={data.name}
      />
      {/* <Link href={/dashboard/pais/${data?.name}/edit}>Editar</Link>
      <DeleteCountryButton country={data} /> */}
    </div>
  );
}
