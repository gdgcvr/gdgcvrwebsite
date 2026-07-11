"use client";

import { useState } from "react";
import { ArrowRight, PenLine } from "lucide-react";
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
  team: string | null;
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
  Web: "bg-google-blue/10 text-google-blue border-google-blue/20",
  AIML: "bg-google-red/10 text-google-red border-google-red/20",
  Cyber: "bg-google-green/10 text-google-green border-google-green/20",
  "IoT & Embedded": "bg-google-yellow/10 text-google-yellow border-google-yellow/20",
  CP: "bg-google-green/10 text-google-green border-google-green/20",
  Android: "bg-google-blue/10 text-google-blue border-google-blue/20",
  Other: "bg-muted text-muted-foreground border-border",
};

const BlogListClient = ({
  posts,
}: {
  posts: BlogPostWithExcerpt[];
}) => {
  const [activeTeam, setActiveTeam] = useState<string>("All");
  // Get unique teams from the posts dynamically
  const teams = Array.from(
    new Set(posts.map((p) => p.team).filter((t): t is string => !!t))
  );

  // Group blogs into their teams, using "Other" for null teams
  const availableTeams: string[] = Array.from(new Set([...teams, "Other"]));
  
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
      : [{ team: activeTeam, posts: filteredPosts }];

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

                <div className="space-y-6 mt-6">
                  {group.posts.map((post, i) => (
                    <AnimatedSection key={post.id} delay={0.08 * i}>
                      <Link href={`/blog/${post.id}`}>
                        <article
                          className={`group relative p-6 md:p-8 rounded-2xl border border-border/50 bg-card/40 hover:bg-card hover:shadow-lift transition-all duration-300 overflow-hidden flex flex-col justify-between`}
                        >
                          <div className={`absolute left-0 top-0 bottom-0 w-1.5 ${
                            post.color === 'google-blue' ? 'bg-google-blue' : 
                            post.color === 'google-red' ? 'bg-google-red' : 
                            post.color === 'google-green' ? 'bg-google-green' : 
                            'bg-google-yellow'
                          }`} />
                          
                          <div className="pl-2">
                            <div className="flex flex-wrap items-center gap-3 mb-4">
                              <span
                                className={`text-xs font-semibold px-3 py-1 rounded-full border ${
                                  teamColors[post.team || "Other"]
                                    ? teamColors[post.team || "Other"]
                                    : "bg-secondary text-foreground"
                                }`}
                              >
                                {post.team || "Other"}
                              </span>
                              <span className="w-1 h-1 rounded-full bg-muted-foreground/30" />
                              <span className="text-xs text-muted-foreground font-medium tracking-wide flex items-center gap-1.5">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                                {post.date}
                              </span>
                              <span className="w-1 h-1 rounded-full bg-muted-foreground/30" />
                              <span className="text-xs text-muted-foreground font-medium tracking-wide flex items-center gap-1.5">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                                {post.readTime}
                              </span>
                            </div>
                            
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-google-blue transition-colors duration-200 tracking-tight">
                              {post.title}
                            </h2>
                            <p className="text-muted-foreground/90 leading-relaxed max-w-3xl text-[1.05rem]">
                              {post.excerpt}
                            </p>
                            
                            <div className="mt-6 flex items-center gap-2 text-sm font-bold text-foreground/70 group-hover:text-google-blue transition-colors duration-300">
                              Read Article 
                              <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform duration-300" />
                            </div>
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
