import { CharacterCard } from '@/components/personaje-card';
import { createServerClient } from '@/utils/supabase/server';
import Link from 'next/link';
import { redirect } from 'next/navigation';

export const revalidate = 0;

export default async function DashboardPage() {
  const supabase = createServerClient();
  const { data } = await supabase.from('personajes').select('*');
  const user = await supabase.auth.getUser();

  if (user.error) {
    return redirect('/');
  }

  return (
    <div className="flex flex-col gap-4">
      <div>Personajes de Futurama</div>
      <Link href="/dashboard/personaje/create">Crear Personaje</Link>
      <div className="flex items-center gap-y-8 gap-x-2 flex-wrap">
        {data?.map((character: any) => (
          <CharacterCard character={character} key={character.name} />
        ))}
      </div>
    </div>
  );
}

