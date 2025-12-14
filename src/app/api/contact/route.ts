import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/database/db";
import Contact from "@/database/contactSchema";

export async function POST(req: NextRequest) {
  await connectDB();

  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "All fields required" },
      { status: 400 }
    );
  }

  await Contact.create({ name, email, message });

  return NextResponse.json({ success: true });
}
