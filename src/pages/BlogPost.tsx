import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { DoodleCircle, DoodleCross, DoodleLine } from "@/components/DoodleAccents";
import { blogPosts } from "@/data/blogData";
import NotFound from "./NotFound";

const BlogPost = () => {
    const { id } = useParams<{ id: string }>();
    const post = blogPosts.find((p) => p.id === id);

    if (!post) {
        return <NotFound />;
    }

    const doodleMap = {
        "google-blue": <DoodleLine className="w-full h-full text-google-blue opacity-20" />,
        "google-red": <DoodleCircle className="w-full h-full text-google-red opacity-20" />,
        "google-green": <DoodleCross className="w-full h-full text-google-green opacity-20" />,
        "google-yellow": <DoodleCircle className="w-full h-full text-google-yellow opacity-20" />,
    };

    return (
        <Layout>
            <section className="section-padding relative min-h-screen">
                <div className="container px-4 md:px-6">
                    <AnimatedSection>
                        <Link
                            to="/blog"
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
                                <div className={`aspect-square rounded-2xl overflow-hidden bg-secondary/30 flex items-center justify-center ${post.image ? 'p-0' : 'p-12'} border-2 border-${post.color}/20`}>
                                    {post.image ? (
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-full object-contain p-4 transition-transform duration-500 hover:scale-105"
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
                                        <p className="text-sm text-muted-foreground">Published on</p>
                                        <p className="font-medium">{post.date}</p>
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-sm text-muted-foreground">Read time</p>
                                        <p className="font-medium">{post.readTime}</p>
                                    </div>
                                </div>
                            </AnimatedSection>
                        </div>

                        {/* Right Column - Content */}
                        <div className="lg:col-span-8">
                            <AnimatedSection delay={0.2}>
                                <h1 className="heading-lg mb-6">{post.title}</h1>
                                <div
                                    className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground"
                                    dangerouslySetInnerHTML={{ __html: post.content }}
                                />
                            </AnimatedSection>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default BlogPost;
