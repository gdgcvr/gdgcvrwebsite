"use client";

import { useRef } from "react";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import AnimatedSection from "@/components/AnimatedSection";
import { BlogPost } from "@/data/blogData";

interface BlogPostClientProps {
  post: BlogPost;
  content: string;
}

const BlogPostClient = ({ post, content }: BlogPostClientProps) => {
  const imageCount = useRef(0);
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
            {/* Metadata */}
            <div className="lg:col-span-3 lg:sticky lg:top-24 h-fit">
              <AnimatedSection delay={0.1}>
                <div className="rounded-2xl border border-border/60 bg-secondary/30 backdrop-blur-sm p-6 space-y-5">
                  <div className="flex items-center gap-2.5">
                    <span
                      className={`w-2.5 h-2.5 rounded-full bg-${post.color}`}
                    />
                    <span className="text-sm font-semibold tracking-wide uppercase">
                      {post.topic}
                    </span>
                  </div>
                  <hr className="border-border/40" />
                  <div className="space-y-1">
                    <p className="text-xs uppercase tracking-wider text-muted-foreground/70">
                      Written by
                    </p>
                    <p className="font-medium">{post.author}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs uppercase tracking-wider text-muted-foreground/70">
                      Published on
                    </p>
                    <p className="font-medium">
                      <time>{post.date}</time>
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs uppercase tracking-wider text-muted-foreground/70">
                      Read time
                    </p>
                    <p className="font-medium">{post.readTime}</p>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            <article className="lg:col-span-9">
              <AnimatedSection delay={0.2}>
                <h1 className="heading-lg mb-6">{post.title}</h1>
                <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground">
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeSlug]}
                    components={{
                      img: ({ src, alt }) => {
                        const isFirst = imageCount.current === 0;
                        imageCount.current++;
                        return (
                          <span className="block relative w-full aspect-video my-8 rounded-xl overflow-hidden">
                            <Image
                              src={src as string}
                              alt={alt || ""}
                              fill
                              className="object-contain"
                              {...(isFirst ? { priority: true, loading: "eager" } : {})}
                            />
                          </span>
                        );
                      },
                      h2: ({ children }) => (
                        <h2 className="text-2xl font-semibold mt-10 mb-4 text-foreground">
                          {children}
                        </h2>
                      ),
                      p: ({ children }) => (
                        <p className="mb-6 leading-relaxed">
                          {children}
                        </p>
                      ),
                    }}
                  >
                    {content}
                  </ReactMarkdown>
                </div>
              </AnimatedSection>
            </article>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPostClient;
