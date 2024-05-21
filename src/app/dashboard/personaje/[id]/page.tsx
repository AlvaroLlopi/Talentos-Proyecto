import { DeleteCharacterButton } from '@/components/delete-character-button';
import { createServerClient } from '@/utils/supabase/server';
import Image from 'next/image';
import Link from 'next/link';


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
      />
      <Link href={`/dashboard/personaje/${data?.id}/edit`}>Editar</Link>
      <Link href={`/dashboard`}>Cancelar</Link>
      <DeleteCharacterButton character={data} />
    </div>
  );
}
