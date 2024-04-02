import { NextRequest, NextResponse } from 'next/server';

export const GET = async (req: NextRequest, res: NextResponse) => {
  const response = await fetch('https://rickandmortyapi.com/api/character');

  const data = await response.json();

  return Response.json({ data });
};


