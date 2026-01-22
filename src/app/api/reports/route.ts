import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// 1. User ส่งรายงานปัญหา (POST)
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, title, detail } = body;

    const newReport = await prisma.report.create({
      data: {
        firstName,
        lastName,
        title,
        detail,
        status: "PENDING", // ค่าเริ่มต้นเป็นรอดำเนินการ
      },
    });

    return NextResponse.json(newReport, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to create report" }, { status: 500 });
  }
}

// 2. Admin ดึงข้อมูลรายงานทั้งหมด (GET)
export async function GET() {
  try {
    const reports = await prisma.report.findMany({
      orderBy: {
        createdAt: "desc", // เรียงจากใหม่ไปเก่า
      },
    });
    return NextResponse.json(reports);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch reports" }, { status: 500 });
  }
}