import prisma from "@/libs/db";
import { NextResponse } from "next/server";

export async function DELETE(req) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  try {
    const res = await prisma.users.delete({
      where: {
        id: id,
      },
    });

    return NextResponse.json({ msg: "success", data: res }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ msg: "success", data: error });
  }
}
