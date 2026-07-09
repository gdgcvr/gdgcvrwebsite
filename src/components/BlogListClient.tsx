"use client";

import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import {
  DoodleCircle,
  DoodleCross,
  DoodleLine,
} from "@/components/DoodleAccents";
import Link from "next/link";

interface BlogPostWithExcerpt {
  id: string;
  title: string;
  author: string;
  date: string;
  readTime: string;
  topic: string;
  color: string;
  excerpt: string;
}

const colorLeft: Record<string, string> = {
  "google-blue": "border-l-google-blue",
  "google-red": "border-l-google-red",
  "google-green": "border-l-google-green",
  "google-yellow": "border-l-google-yellow",
};

const BlogListClient = ({ posts }: { posts: BlogPostWithExcerpt[] }) => (
  <>
    <section className="section-padding relative">
      <DoodleCircle className="absolute top-28 right-[10%] w-20 h-20 opacity-8 text-google-yellow" />
      <DoodleCross className="absolute bottom-44 left-[5%] w-10 h-10 opacity-8 text-google-green" />
      <DoodleLine className="absolute top-1/2 right-[25%] w-20 opacity-8 text-google-blue" />

      <div className="container-narrow">
        <AnimatedSection>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-google-red mb-8">
            Blog
          </p>
          <h1 className="heading-lg max-w-2xl">Our Blogs</h1>
          <p className="body-lg text-muted-foreground mt-8 max-w-xl">
            Blogs are written by our student community to share the technical
            and non technical knowledge.
          </p>
        </AnimatedSection>

        <div className="mt-24 space-y-0">
          {posts.map((post, i) => (
            <AnimatedSection key={post.id} delay={0.08 * i}>
              <Link href={`/blog/${post.id}`}>
                <article
                  className={`group py-12 border-b border-border cursor-pointer border-l-2 ${colorLeft[post.color]} pl-10 hover:bg-secondary/30 transition-all duration-300 -mx-10 px-10 rounded-r-lg`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs text-muted-foreground tracking-wide">
                      {post.date}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-muted-foreground/30" />
                    <span className="text-xs text-muted-foreground tracking-wide">
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4 group-hover:text-google-blue transition-colors duration-200 tracking-[-0.01em]">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground leading-[1.8] max-w-2xl">
                    {post.excerpt}
                  </p>
                  <div className="mt-5 flex items-center gap-1.5 text-sm font-medium text-google-blue opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300">
                    Read more <ArrowRight size={14} />
                  </div>
                </article>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default BlogListClient;
