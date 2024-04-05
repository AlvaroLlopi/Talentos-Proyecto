import { NextRequest, NextResponse } from 'next/server';

export const GET = async (req: NextRequest, res: NextResponse) => {
  const response = await fetch('https://futuramaapi.com/api/characters');

  const data = await response.json();

  return Response.json({ data });
};
