// src/components/LogoutButton.tsx
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/utils/supabase/client';

const LogoutButton: React.FC = () => {
  const router = useRouter();
  const supabase = createClient();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/');
  };

  return (
    <button onClick={handleLogout} className="inline-block bg-red-500 text-white text-sm py-1 px-2 rounded">
      Cerrar Sesión
    </button>
  );
};

export default LogoutButton;
