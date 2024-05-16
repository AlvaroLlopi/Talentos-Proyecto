'use client';

import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";

export const DeleteCharacterButton = ({ country }: any) => {
  const supabase = createClient();
  const router = useRouter();

  const onDelete = async () => {
    await supabase.from('personajes').delete().eq('id', country.id);

    router.push('/dashboard');
  };

  return (
    <button onClick={onDelete}>Eliminar</button>
  );
}