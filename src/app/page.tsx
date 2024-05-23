import { LoginForm } from "@/components/login-form";
import { createServerClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function Home() {
  const supabase = createServerClient();
  const { data: { session } } = await supabase.auth.getSession();

  if (session) {
    redirect('/dashboard');
  }

  return (
    <div className='bg-cover bg-center min-h-screen' style={{ backgroundImage: "url('/images/fondo.jpg')" }}>
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <LoginForm />
    </main>
    </div>
  );
}

