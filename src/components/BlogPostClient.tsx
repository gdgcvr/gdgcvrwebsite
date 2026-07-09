"use client";

import { useRef, useState } from "react";

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
    <div className="relative group my-6 rounded-xl overflow-hidden bg-[#1E1E1E]">
      <button
        onClick={handleCopy}
        className="absolute right-3 top-3 p-2 rounded-lg bg-background/20 hover:bg-background/40 text-muted-foreground hover:text-white transition-all opacity-0 group-hover:opacity-100 backdrop-blur-md border border-white/10 z-10"
        aria-label="Copy code"
      >
        {isCopied ? <Check size={16} className="text-green-500" /> : <Copy size={16} />}
      </button>
      <SyntaxHighlighter
        language={language}
        style={vscDarkPlus}
        PreTag="div"
        customStyle={{ margin: 0, padding: "1.5rem 1rem", background: "transparent", fontSize: "0.875rem" }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

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
                      h3: ({ children }) => (
                        <h3 className="text-xl font-semibold mt-8 mb-3 text-foreground">
                          {children}
                        </h3>
                      ),
                      p: ({ children }) => (
                        <p className="mb-6 leading-relaxed">
                          {children}
                        </p>
                      ),
                      a: ({ href, children }) => (
                        <a
                          href={href}
                          className="text-google-blue hover:underline font-medium"
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
                            className="font-bold bg-muted px-1.5 py-0.5 rounded-md text-sm"
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
