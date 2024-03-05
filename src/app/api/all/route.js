export const revalidate = 0;
import prisma from "@/libs/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await prisma.users.findMany();

    return NextResponse.json({ msg: "success", data: res }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ msg: "error", data: error }, { status: 500 });
  }
}
