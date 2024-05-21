import { createServerClient } from '@/utils/supabase/server';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (req: NextRequest, res: NextResponse) => {
  const supabase = createServerClient();
  const {data, error} = await supabase.from('characters').select('*')
  

  

  return Response.json({ data, error });
};


