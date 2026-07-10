"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import {
  DoodleCircle,
  DoodleCross,
  DoodleLine,
} from "@/components/DoodleAccents";
import Link from "next/link";
import { BlogTeam } from "@/data/blogData";

interface BlogPostWithExcerpt {
  id: string;
  title: string;
  author: string;
  date: string;
  readTime: string;
  topic: string;
  team: BlogTeam | null;
  color: string;
  excerpt: string;
}

const colorLeft: Record<string, string> = {
  "google-blue": "border-l-google-blue",
  "google-red": "border-l-google-red",
  "google-green": "border-l-google-green",
  "google-yellow": "border-l-google-yellow",
};

const teamColors: Record<string, string> = {
  Web: "bg-google-blue text-white",
  AIML: "bg-google-red text-white",
  Cyber: "bg-google-green text-white",
  "IoT & Embedded": "bg-google-yellow text-black",
  CP: "bg-google-green text-white",
  Android: "bg-google-blue text-white",
  Other: "bg-neutral-800 text-white",
};

const BlogListClient = ({
  posts,
  teams,
}: {
  posts: BlogPostWithExcerpt[];
  teams: BlogTeam[];
}) => {
  const [activeTeam, setActiveTeam] = useState<BlogTeam | "Other" | "All">(
    "All",
  );

  // Group blogs into their teams, using "Other" for null teams
  const availableTeams: (BlogTeam | "Other")[] = [...teams, "Other"];
  
  // Only show teams that actually have posts
  const activeTeams = availableTeams.filter((team) =>
    posts.some((p) => (p.team || "Other") === team),
  );

  const filteredPosts =
    activeTeam === "All"
      ? posts
      : posts.filter((p) => (p.team || "Other") === activeTeam);

  // Group posts by team for sectioned view
  const groupedPosts =
    activeTeam === "All"
      ? activeTeams
          .map((team) => ({
            team: team,
            posts: posts.filter((p) => (p.team || "Other") === team),
          }))
          .filter((g) => g.posts.length > 0)
      : [{ team: activeTeam as BlogTeam | "Other", posts: filteredPosts }];

  return (
    <>
      <section className="section-padding relative font-manrope">
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

          {/* Team Filter Pills */}
          <AnimatedSection delay={0.1}>
            <div className="mt-12 flex flex-wrap gap-2">
              <button
                onClick={() => setActiveTeam("All")}
                className={`px-5 py-2 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 border ${
                  activeTeam === "All"
                    ? "bg-foreground text-background border-foreground shadow-lg"
                    : "bg-transparent text-muted-foreground border-border hover:border-foreground/40 hover:text-foreground"
                }`}
              >
                All
              </button>
              {activeTeams.map((team) => (
                <button
                  key={team}
                  onClick={() => setActiveTeam(team)}
                  className={`px-5 py-2 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 border ${
                    activeTeam === team
                      ? `${teamColors[team] || "bg-foreground text-background"} border-transparent shadow-lg`
                      : "bg-transparent text-muted-foreground border-border hover:border-foreground/40 hover:text-foreground"
                  }`}
                >
                  {team}
                </button>
              ))}
            </div>
          </AnimatedSection>

          {/* Blog Posts Grouped by Team */}
          <div className="mt-16 space-y-16">
            {groupedPosts.map((group) => (
              <div key={group.team}>
                {/* Team Section Header */}
                {activeTeam === "All" && (
                  <AnimatedSection>
                    <div className="flex items-center gap-4 mb-2">
                      <span
                        className={`inline-block w-3 h-3 rounded-full ${
                          teamColors[group.team]
                            ?.split(" ")[0] || "bg-foreground"
                        }`}
                      />
                      <h2 className="text-xl font-bold tracking-tight text-foreground">
                        {group.team}
                      </h2>
                      <span className="text-xs text-muted-foreground font-medium">
                        {group.posts.length}{" "}
                        {group.posts.length === 1 ? "post" : "posts"}
                      </span>
                    </div>
                  </AnimatedSection>
                )}

                <div className="space-y-0">
                  {group.posts.map((post, i) => (
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
                            <span className="w-1 h-1 rounded-full bg-muted-foreground/30" />
                            <span
                              className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${
                                teamColors[post.team || "Other"]
                                  ? teamColors[post.team || "Other"] + " opacity-90"
                                  : "bg-secondary text-foreground"
                              }`}
                            >
                              {post.team || "Other"}
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
            ))}

            {filteredPosts.length === 0 && (
              <AnimatedSection>
                <div className="text-center py-20">
                  <p className="text-muted-foreground text-lg">
                    No blogs found in this team yet. Check back soon!
                  </p>
                </div>
              </AnimatedSection>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogListClient;
