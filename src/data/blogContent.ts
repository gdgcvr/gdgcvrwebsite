"use server";

import fs from "fs";
import path from "path";

const BLOGS_DIR = path.join(process.cwd(), "src", "blogs");

function readBlog(id: string): string {
  return fs.readFileSync(path.join(BLOGS_DIR, `${id}.md`), "utf-8");
}

/**
 * Read the full markdown content for a blog post.
 */
export async function getPostContent(id: string): Promise<string> {
  return readBlog(id);
}

/**
 * Extract the first paragraph of a blog post as a plain-text excerpt.
 * Strips markdown formatting (images, bold, links, headings).
 */
export async function getPostExcerpt(
  id: string,
  maxLength = 160,
): Promise<string> {
  const content = readBlog(id);
  const firstParagraph = content
    .split(/\n\s*\n/) // split on blank lines
    .map((block) => block.trim())
    .find(
      (block) =>
        block.length > 0 &&
        !block.startsWith("#") &&
        !block.startsWith("![") &&
        !block.startsWith("---"),
    );

  if (!firstParagraph) return "";

  // Strip inline markdown syntax
  const plain = firstParagraph
    .replace(/!\[.*?\]\(.*?\)/g, "") // images
    .replace(/\[([^\]]+)\]\(.*?\)/g, "$1") // links → text
    .replace(/(\*\*|__)(.*?)\1/g, "$2") // bold
    .replace(/(\*|_)(.*?)\1/g, "$2") // italic
    .replace(/`([^`]+)`/g, "$1") // inline code
    .trim();

  if (plain.length <= maxLength) return plain;
  return plain.slice(0, maxLength).replace(/\s+\S*$/, "") + "...";
}
