import { LoginForm } from "@/components/login-form";
import { createServerClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function Home() {
  const supabase = createServerClient()
  const user = await supabase.auth.getUser();

  if (user){
    redirect('/dashboard')
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <LoginForm />
    </main>
  );
}
