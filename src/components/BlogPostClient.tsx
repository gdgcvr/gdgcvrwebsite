"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, PenLine } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import MarkdownRenderer from "@/components/MarkdownRenderer";
interface BlogPostClientProps {
  post: {
    title: string;
    topic: string;
    author: string;
    authorLink?: string;
    date: string;
    readTime: string;
    color: string;
  };
  content: string;
}

const BlogPostClient = ({ post, content }: BlogPostClientProps) => {
  const [readingProgress, setReadingProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const currentProgress = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;
      if (scrollHeight) {
        setReadingProgress(Number((currentProgress / scrollHeight).toFixed(2)) * 100);
      }
    };
    window.addEventListener("scroll", updateProgress);
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);
  return (
    <>
      <div 
        className="fixed top-0 left-0 h-1.5 bg-google-blue z-50 transition-all duration-150 rounded-r-full" 
        style={{ width: `${readingProgress}%` }}
      />
      <section className="section-padding relative min-h-screen font-manrope">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mb-8 md:mb-12"
              >
                <ArrowLeft size={16} />
                Back to Blogs
              </Link>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="mb-10 space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-tight">
                  {post.title}
                </h1>
                
                <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground border-b border-border/40 pb-8">
                  <div className="flex items-center gap-2">
                    <span className={`w-2.5 h-2.5 rounded-full bg-${post.color}`} />
                    <span className="font-semibold text-foreground uppercase tracking-wider text-xs">
                      {post.topic}
                    </span>
                  </div>
                  <span className="text-border">•</span>
                  {post.authorLink ? (
                    <a
                      href={post.authorLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-foreground hover:text-google-blue hover:underline transition-colors"
                    >
                      {post.author}
                    </a>
                  ) : (
                    <span className="font-medium text-foreground">{post.author}</span>
                  )}
                  <span className="text-border">•</span>
                  <time>{post.date}</time>
                  <span className="text-border">•</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </AnimatedSection>

            <article>
              <AnimatedSection delay={0.2}>
                <MarkdownRenderer content={content} />
              </AnimatedSection>
            </article>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPostClient;
