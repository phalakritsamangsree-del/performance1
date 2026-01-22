import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  const id = parseInt(params.id);
  const body = await req.json();

  const updated = await prisma.report.update({
    where: { id },
    data: { status: body.status }
  });

  return NextResponse.json(updated);
}