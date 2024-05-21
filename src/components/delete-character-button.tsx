'use client';

import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";

export const DeleteCharacterButton = ({ character }: any) => {
  const supabase = createClient();
  const router = useRouter();

  const onDelete = async () => {
    await supabase.from('personajes').delete().eq('id', character.id);

    router.push('/dashboard');
  };

  return (
    <button onClick={onDelete} className="bg-red-500 text-white py-2 px-4 rounded">Eliminar </button>
  );
}