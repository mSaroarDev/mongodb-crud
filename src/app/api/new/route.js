import prisma from "@/libs/db";
import { NextResponse } from "next/server";

export async function POST(req) {
  const formdata = await req.json();

  try {
    const res = await prisma.users.create({
      data: {
        name: formdata.name,
        designation: formdata.designation,
      },
    });

    return NextResponse.json(
      { msg: "success", data: res },
      { status: 201, msg: "error" }
    );
  } catch (error) {
    return NextResponse.json({ msg: "error", data: error }, { status: 500 });
  }
}
