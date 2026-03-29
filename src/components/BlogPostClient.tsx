"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import {
  DoodleCircle,
  DoodleCross,
  DoodleLine,
} from "@/components/DoodleAccents";
import { BlogPost } from "@/data/blogData";

interface BlogPostClientProps {
  post: BlogPost;
}

const BlogPostClient = ({ post }: BlogPostClientProps) => {
  const doodleMap = {
    "google-blue": (
      <DoodleLine className="w-full h-full text-google-blue opacity-20" />
    ),
    "google-red": (
      <DoodleCircle className="w-full h-full text-google-red opacity-20" />
    ),
    "google-green": (
      <DoodleCross className="w-full h-full text-google-green opacity-20" />
    ),
    "google-yellow": (
      <DoodleCircle className="w-full h-full text-google-yellow opacity-20" />
    ),
  };

  return (
    <>
      <section className="section-padding relative min-h-screen">
        <div className="container px-4 md:px-6">
          <AnimatedSection>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft size={16} />
              Back to Blogs
            </Link>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column - Visuals */}
            <div className="lg:col-span-4 lg:sticky lg:top-24 h-fit">
              <AnimatedSection delay={0.1}>
                <div
                  className={`aspect-square relative rounded-2xl overflow-hidden bg-secondary/30 flex items-center justify-center ${post.image ? "p-0" : "p-12"} border-2 border-${post.color}/20`}
                >
                  {post.image ? (
                    <Image
                      src={post.image}
                      loading="eager"
                      alt={`Cover image for ${post.title}`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-contain p-4 transition-transform duration-500 hover:scale-105"
                    />
                  ) : (
                    doodleMap[post.color]
                  )}
                </div>
                <div className="mt-6 space-y-4">
                  <div className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full bg-${post.color}`} />
                    <span className="text-sm font-medium">{post.topic}</span>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Written by</p>
                    <p className="font-medium">{post.author}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">
                      Published on
                    </p>
                    <p className="font-medium">
                      <time>{post.date}</time>
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Read time</p>
                    <p className="font-medium">{post.readTime}</p>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            <article className="lg:col-span-8">
              <AnimatedSection delay={0.2}>
                <h1 className="heading-lg mb-6">{post.title}</h1>
                <div
                  className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </AnimatedSection>
            </article>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPostClient;
