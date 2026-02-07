import { useState } from "react";
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
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/60">
      <div className="container-wide flex items-center justify-between h-[4.25rem]">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="flex gap-1">
            <span className="w-2.5 h-2.5 rounded-full bg-google-blue transition-transform duration-200 group-hover:scale-110" />
            <span className="w-2.5 h-2.5 rounded-full bg-google-red transition-transform duration-200 group-hover:scale-110 delay-75" />
            <span className="w-2.5 h-2.5 rounded-full bg-google-yellow transition-transform duration-200 group-hover:scale-110 delay-100" />
            <span className="w-2.5 h-2.5 rounded-full bg-google-green transition-transform duration-200 group-hover:scale-110 delay-150" />
          </div>
          <span className="font-semibold text-foreground tracking-tight text-[0.9rem]">GDG Campus</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-9">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative text-sm font-medium transition-colors duration-200 ${location.pathname === link.path
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground"
                }`}
            >
              {link.name}
              {location.pathname === link.path && (
                <motion.div
                  layoutId="nav-indicator"
                  className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-google-blue rounded-full"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" as const }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border overflow-hidden"
          >
            <div className="container-wide py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileOpen(false)}
                  className={`text-sm font-medium py-2 transition-colors duration-200 ${location.pathname === link.path
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                    }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
