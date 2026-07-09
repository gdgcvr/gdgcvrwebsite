import { blogPosts } from "@/data/blogData";
import { getPostExcerpt } from "@/data/blogContent";
import BlogListClient from "@/components/BlogListClient";

export default async function Blog() {
  const posts = await Promise.all(
    blogPosts.map(async (post) => ({
      ...post,
      excerpt: await getPostExcerpt(post.id),
    })),
  );

  return <BlogListClient posts={posts} />;
}
