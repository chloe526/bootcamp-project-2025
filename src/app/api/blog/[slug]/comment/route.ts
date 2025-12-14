export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/database/db";
import blogSchema from "@/database/blogSchema";

export async function POST(
  req: NextRequest,
  { params }: { params: { slug: string } }
) {
  await connectDB();

  const { slug } = params;
  const body = await req.json();

  if (!body.comment) {
    return NextResponse.json(
      { error: "Comment text required" },
      { status: 400 }
    );
  }

  await blogSchema.updateOne(
    { slug },
    {
      $push: {
        comments: {
          user: body.user,
          comment: body.comment,
          time: new Date(),
        },
      },
    }
  );

  return NextResponse.json({ success: true });
}
