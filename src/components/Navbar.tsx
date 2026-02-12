import logo from "@/assets/logo.png";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Team", path: "/team" },
  { name: "Events", path: "/events" },
  { name: "Blog", path: "/blog" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[95%] md:w-[90%] max-w-5xl transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl border-black/5 shadow-[0_6px_0_0_rgba(0,0,0,0.08)] py-3"
            : "bg-white/80 backdrop-blur-md border-black/5 shadow-[0_4px_0_0_rgba(0,0,0,0.05)] py-4"
        } border rounded-full px-6 flex items-center justify-between`}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="h-10 w-10 flex items-center justify-center">
            <img
              src={logo}
              alt="GDG CVR Logo"
              className="w-full h-full object-contain"
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
              to={link.path}
              className={`relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                location.pathname === link.path
                  ? "bg-white text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground hover:bg-white/50"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right Side: CTA + Mobile Toggle */}
        <div className="flex items-center gap-4">
          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 rounded-full hover:bg-secondary transition-colors text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown (Floating below nav) */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed top-28 left-1/2 -translate-x-1/2 z-40 w-[90%] max-w-sm bg-white rounded-3xl shadow-[0_8px_0_0_rgba(0,0,0,0.08)] border border-black/5 overflow-hidden md:hidden"
          >
            <div className="p-3 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileOpen(false)}
                  className={`w-full text-center px-4 py-3 rounded-2xl text-base font-medium transition-all ${
                    location.pathname === link.path
                      ? "bg-secondary text-foreground"
                      : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground hover:pl-6"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
