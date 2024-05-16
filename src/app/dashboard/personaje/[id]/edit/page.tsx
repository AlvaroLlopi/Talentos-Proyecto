import { EditCharacterForm } from '@/components/edit-character-form';
import { createServerClient } from '@/utils/supabase/server';

export default async function EditPersonaje({ params }: any) {
  const supabase = createServerClient();
  const { data } = await supabase
    .from('personajes')
    .select('*')
    .eq('name', params.id)
    .single();

  return <EditCharacterForm character={data} />;
}
