import { CharacterCard } from '@/components/personaje-card';
import { createServerClient } from '@/utils/supabase/server';
import Link from 'next/link';
import { redirect } from 'next/navigation';

export const revalidate = 0;

export default async function DashboardPage() {
  const supabase = createServerClient();
  const { data: { session } } = await supabase.auth.getSession();

  if (!session) {
    return redirect('/');
  }

  const { data } = await supabase.from('personajes').select('*');

  return (
    <div className="flex flex-col gap-4">
      <div className="text-2xl text-center mt-4">Personajes de Futurama</div>
      <div className="grid grid-cols-2 grid-rows-2 gap-4">
        <div className="flex justify-start items-start ml-6">
          <Link href="/dashboard/personaje/create" className="inline-block bg-blue-500 text-white text-sm py-1 px-2 rounded">
            Crear Personaje
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {data?.map((character) => (
          <CharacterCard character={character} key={character.id} />
        ))}
      </div>
    </div>
  );
}
