import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blogData";
import BlogPostClient from "@/components/BlogPostClient";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id,
  }));
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return notFound();
  }

  return <BlogPostClient post={post} />;
}
