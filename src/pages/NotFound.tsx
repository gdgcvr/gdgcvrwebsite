import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import {
  DoodleSquiggle,
  DoodleDots,
  DoodleSpark,
  DoodleCircle,
} from "@/components/DoodleAccents";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      {/* Doodle Accents — same pattern used across Team, Index, etc. */}
      <DoodleSquiggle className="absolute top-24 left-[10%] w-32 opacity-8 text-google-red" />
      <DoodleDots className="absolute bottom-32 right-[8%] w-16 h-16 opacity-8 text-google-yellow" />
      <DoodleCircle className="absolute top-1/3 right-[12%] w-20 h-20 opacity-8 text-google-blue" />
      <DoodleSpark className="absolute bottom-1/3 left-[15%] w-10 h-10 opacity-8 text-google-green" />

      <section className="relative min-h-[80vh] flex items-center justify-center px-4 md:px-8 pt-28 pb-16">
        <div className="relative z-10 w-full max-w-[800px]">
          <AnimatedSection>
            <div className="text-center">
              {/* Large 404 */}
              <motion.h1
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-[8rem] md:text-[12rem] font-bold leading-none tracking-tighter"
              >
                <motion.span
                  className="text-transparent bg-clip-text bg-gradient-to-r from-google-blue via-google-red to-google-yellow bg-[length:200%_auto]"
                  animate={{ backgroundPosition: ["0% 50%", "200% 50%"] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  404
                </motion.span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <h2 className="heading-lg mb-4">Page not found</h2>
                <p className="body-lg text-muted-foreground max-w-md mx-auto mb-10">
                  The page{" "}
                  <code className="px-2 py-0.5 bg-secondary rounded-md text-sm font-mono text-foreground border border-border">
                    {location.pathname}
                  </code>{" "}
                  doesn't exist or has been moved.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Link
                  to="/"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-foreground text-background rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  Go Home
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/events"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-secondary text-foreground rounded-full font-semibold border border-border hover:bg-secondary/80 transition-all duration-300"
                >
                  View Events
                </Link>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
