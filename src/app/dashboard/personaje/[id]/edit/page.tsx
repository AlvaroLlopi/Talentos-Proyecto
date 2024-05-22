import { EditCharacterForm } from '@/components/edit-character-form';
import { createServerClient } from '@/utils/supabase/server';
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Editar Personaje!",
  description: "Bienvenido a la pagina de Futurama",
};

export default async function EditPersonaje({ params }: any) {
  const supabase = createServerClient();
  const { data } = await supabase
    .from('personajes')
    .select('*')
    .eq('id', params.id)
    .single();

  return <EditCharacterForm character={data} />;
}
