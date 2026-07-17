import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPublishedPosts, getPostMarkdown } from "@/lib/notion";
import BlogPostClient from "@/components/BlogPostClient";

export const revalidate = 60; // ISR 60 seconds

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const posts = await getPublishedPosts();
  const post = posts.find((p) => p.slug === id);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `GDG CVR - ${post.title} | ${post.author}`,
  };
}

export const dynamicParams = true;

const getTeamColor = (team: string): string => {
  if (team === "Web" || team === "Android") return "google-blue";
  if (team === "AIML") return "google-red";
  if (team === "Cyber" || team === "CP") return "google-green";
  if (team === "IoT & Embedded") return "google-yellow";
  return "google-yellow";
};

export default async function BlogPost({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const posts = await getPublishedPosts();
  const post = posts.find((p) => p.slug === id);

  if (!post) {
    return notFound();
  }

  const content = await getPostMarkdown(post.id, post.slug);

  const postTeam = post.team || "Other";
  const formattedPost = {
    id: post.slug,
    title: post.title,
    author: post.author,
    authorLink: post.authorLink,
    date: post.date,
    readTime: post.readTime || "5 min read",
    topic: post.topic || "General",
    team: postTeam,
    color: getTeamColor(postTeam)
  };

  return <BlogPostClient post={formattedPost as any} content={content} />;
}
