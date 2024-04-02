import { NextRequest, NextResponse } from 'next/server';

export const GET = async (req: NextRequest, res: NextResponse) => {
  const response = await fetch('https://restcountries.com/v3.1/all?fields=name,flags');

  const data = await response.json();

  return Response.json({ data });
};
