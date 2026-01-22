import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Admin อัปเดตสถานะ (เช่น กดปุ่ม Action เพื่อเปลี่ยนเป็น Resolved)
export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id);
  const body = await request.json();
  const { status } = body;

  const updatedReport = await prisma.report.update({
    where: { id },
    data: { status },
  });

  return NextResponse.json(updatedReport);
}