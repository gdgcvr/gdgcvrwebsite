import { NextRequest, NextResponse } from "next/server";
import { Client } from "@notionhq/client";

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

export async function GET(request: NextRequest) {
  const blockId = request.nextUrl.searchParams.get("blockId");

  if (!blockId) {
    return NextResponse.json({ error: "Missing blockId" }, { status: 400 });
  }

  try {
    const block = (await notion.blocks.retrieve({ block_id: blockId })) as any;

    let imageUrl: string | null = null;

    if (block.type === "image") {
      const image = block.image;
      if (image.type === "file") {
        imageUrl = image.file.url;
      } else if (image.type === "external") {
        imageUrl = image.external.url;
      }
    }

    if (!imageUrl) {
      return NextResponse.json(
        { error: "Block is not an image or image URL not found" },
        { status: 404 },
      );
    }

    const imageResponse = await fetch(imageUrl);

    if (!imageResponse.ok) {
      return NextResponse.json(
        { error: "Failed to fetch image from source" },
        { status: 502 },
      );
    }

    const imageBuffer = await imageResponse.arrayBuffer();
    const contentType =
      imageResponse.headers.get("content-type") || "image/png";

    return new NextResponse(imageBuffer, {
      status: 200,
      headers: {
        "Content-Type": contentType,
        "Cache-Control": "public, max-age=1800, stale-while-revalidate=3600",
      },
    });
  } catch (error: any) {
    console.error("Error fetching Notion image:", error?.message || error);
    return NextResponse.json(
      { error: "Failed to fetch image" },
      { status: 500 },
    );
  }
}
