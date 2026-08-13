"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const REGISTER_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLScSyq_9bFmQHK13VK6uUy8oM1Ip2WKzZBK35K081t2pyxC46A/viewform";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Events", path: "/events" },
  { name: "Team", path: "/team" },
  { name: "Blog", path: "/blog" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);
  const pathname = usePathname();

  useEffect(() => {
    setHidden(false);
  }, [pathname]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setHidden(true);
      } else if (currentScrollY < lastScrollY.current) {
        setHidden(false);
      }
      
      setScrolled(currentScrollY > 20);
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isBlogPost = pathname.startsWith("/blog/") && pathname !== "/blog";
  const shouldHide = hidden && isBlogPost;

  return (
    <>
      <nav
        className={`fixed left-1/2 -translate-x-1/2 z-50 w-[95%] md:w-[90%] max-w-5xl transition-all duration-300 ${
          shouldHide ? "-top-24 opacity-0 pointer-events-none" : "top-5 opacity-100"
        } ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl border-black/5 shadow-[0_6px_0_0_rgba(0,0,0,0.08)] py-3"
            : "bg-white/80 backdrop-blur-md border-black/5 shadow-[0_4px_0_0_rgba(0,0,0,0.05)] py-4"
        } border rounded-full px-6 flex items-center justify-between`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="h-10 w-10 flex items-center justify-center relative">
            <Image
              src="/logo.png"
              alt="GDG CVR Logo"
              fill
              sizes="40px"
              priority
              className="object-contain"
            />
          </div>
          <span className="font-semibold text-foreground tracking-tight text-[1rem]">
            GDG CVR
          </span>
        </Link>

        {/* Desktop Links (Centered) */}
        <div className="hidden md:flex items-center gap-1 bg-secondary/30 p-1.5 rounded-full border border-black/5">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              aria-current={pathname === link.path ? "page" : undefined}
              className={`relative px-3.5 lg:px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                pathname === link.path
                  ? "bg-white text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground hover:bg-white/50"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right Side: CTA + Mobile Toggle */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Register CTA Button */}
          <a
            href={REGISTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-foreground text-background text-xs md:text-sm font-medium px-3.5 py-2 md:px-4 md:py-2 rounded-full hover:bg-neutral-800 transition-all duration-200 shadow-sm hover:shadow hover:scale-[1.02] active:scale-[0.98] group"
          >
            <span>Register Here</span>
            <ArrowUpRight
              size={15}
              className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 rounded-full hover:bg-secondary transition-colors text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown (Floating below nav) */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            id="mobile-menu"
            className="fixed top-24 inset-x-4 z-[100] max-w-sm mx-auto bg-white/95 backdrop-blur-xl rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.1)] border border-black/5 overflow-hidden md:hidden"
          >
            <div className="p-2 flex flex-col gap-1.5">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setMobileOpen(false)}
                  aria-current={pathname === link.path ? "page" : undefined}
                  className={`flex items-center justify-center w-full px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                    pathname === link.path
                      ? "bg-secondary text-foreground shadow-sm"
                      : "text-muted-foreground hover:bg-secondary/40 hover:text-foreground"
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              <div className="pt-2 mt-1 border-t border-black/5">
                <a
                  href={REGISTER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl text-base font-medium bg-foreground text-background hover:bg-neutral-800 shadow-sm transition-all duration-200"
                >
                  <span>Register Here</span>
                  <ArrowUpRight size={18} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
