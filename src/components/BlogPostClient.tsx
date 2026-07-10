"use client";

import { useRef, useState, useEffect } from "react";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Copy, Check } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";
import AnimatedSection from "@/components/AnimatedSection";
import { BlogPost } from "@/data/blogData";

interface BlogPostClientProps {
  post: BlogPost;
  content: string;
}

const CodeBlock = ({ code, language }: { code: string; language: string }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="relative group my-8 rounded-xl overflow-hidden bg-[#1E1E1E] shadow-2xl border border-white/10">
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-white/5">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <span className="text-xs font-medium text-white/50 lowercase tracking-wider">{language}</span>
      </div>
      
      <button
        onClick={handleCopy}
        className="absolute right-4 top-14 p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/60 hover:text-white transition-all opacity-0 group-hover:opacity-100 backdrop-blur-md border border-white/10 z-10"
        aria-label="Copy code"
      >
        {isCopied ? <Check size={16} className="text-green-400" /> : <Copy size={16} />}
      </button>
      <SyntaxHighlighter
        language={language}
        style={vscDarkPlus}
        PreTag="div"
        className="font-mono"
        codeTagProps={{ className: "font-mono" }}
        customStyle={{ margin: 0, padding: "1.5rem", background: "transparent", fontSize: "0.9rem", lineHeight: "1.6" }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

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

  const firstImageMatch = content.match(/!\[.*?\]\((.*?)\)/);
  const firstImageUrl = firstImageMatch ? firstImageMatch[1] : null;
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
                <div className="prose prose-lg md:prose-xl dark:prose-invert max-w-none text-muted-foreground">
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeSlug]}
                    components={{
                      img: ({ src, alt }) => {
                        const isFirst = src === firstImageUrl;
                        return (
                          <span className="flex justify-center w-full my-10">
                            <img
                              src={src as string}
                              alt={alt || ""}
                              className="max-w-full h-auto rounded-xl border border-border/40"
                              {...(isFirst ? { fetchPriority: "high" } : { loading: "lazy" })}
                            />
                          </span>
                        );
                      },
                      h2: ({ children }) => (
                        <h2 className="text-3xl font-bold mt-14 mb-6 text-foreground tracking-tight border-b border-border/40 pb-4">
                          {children}
                        </h2>
                      ),
                      h3: ({ children }) => (
                        <h3 className="text-2xl font-semibold mt-10 mb-4 text-foreground tracking-tight">
                          {children}
                        </h3>
                      ),
                      p: ({ children }) => (
                        <p className="mb-8 text-[1.125rem] md:text-[1.2rem] leading-[1.9] text-foreground/90">
                          {children}
                        </p>
                      ),
                      ul: ({ children }) => (
                        <ul className="list-disc ml-6 mb-8 space-y-2 text-[1.125rem] md:text-[1.2rem] leading-[1.9] text-foreground/90">
                          {children}
                        </ul>
                      ),
                      ol: ({ children }) => (
                        <ol className="list-decimal ml-6 mb-8 space-y-2 text-[1.125rem] md:text-[1.2rem] leading-[1.9] text-foreground/90">
                          {children}
                        </ol>
                      ),
                      li: ({ children }) => (
                        <li className="leading-relaxed">
                          {children}
                        </li>
                      ),
                      a: ({ href, children }) => (
                        <a
                          href={href}
                          className="text-foreground underline decoration-border hover:decoration-foreground underline-offset-4 transition-colors font-medium"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {children}
                        </a>
                      ),
                      code: ({ className, children, node, ...props }) => {
                        const match = /language-(\w+)/.exec(className || "");
                        const codeContent = String(children).replace(/\n$/, "");
                        const hasNewline = String(children).includes("\n");

                        if (match || hasNewline) {
                          return (
                            <CodeBlock
                              code={codeContent}
                              language={match?.[1] || "text"}
                            />
                          );
                        }

                        return (
                          <code
                            className="font-mono font-bold bg-muted/50 px-1.5 py-0.5 rounded-md text-[0.9em]"
                            {...props}
                          >
                            {children}
                          </code>
                        );
                      },
                      pre: ({ children }) => <>{children}</>,
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
