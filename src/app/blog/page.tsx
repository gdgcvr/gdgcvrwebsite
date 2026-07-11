import { getPublishedPosts } from "@/lib/notion";
import BlogListClient from "@/components/BlogListClient";

export const revalidate = 60; // ISR 60 seconds

const getTeamColor = (team: string): string => {
  if (team === "Web" || team === "Android") return "google-blue";
  if (team === "AIML") return "google-red";
  if (team === "Cyber" || team === "CP") return "google-green";
  if (team === "IoT & Embedded") return "google-yellow";
  return "google-yellow";
};

export default async function Blog() {
  const posts = await getPublishedPosts();
  
  const formattedPosts = posts.map(post => {
    const postTeam = post.team || "Other";
    return {
      id: post.slug,
      title: post.title,
      author: post.author,
      date: post.date,
      readTime: post.readTime || "5 min read",
      topic: post.topic || "General",
      team: postTeam,
      color: getTeamColor(postTeam),
      excerpt: "", 
    };
  });

  return <BlogListClient posts={formattedPosts} />;
}
