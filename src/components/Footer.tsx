import { Link } from "react-router-dom";
import { DoodleLine } from "@/components/DoodleAccents";

const Footer = () => (
  <footer className="border-t border-border bg-background relative">
    <DoodleLine className="absolute top-0 left-1/4 w-32 opacity-6 text-google-yellow -translate-y-1/2" />

    <div className="container-wide py-20">
      <div className="flex flex-col md:flex-row justify-between gap-14">
        <div className="max-w-sm">
          <div className="flex items-center gap-2.5 mb-5">
            <div className="flex gap-1">
              <span className="w-2 h-2 rounded-full bg-google-blue" />
              <span className="w-2 h-2 rounded-full bg-google-red" />
              <span className="w-2 h-2 rounded-full bg-google-yellow" />
              <span className="w-2 h-2 rounded-full bg-google-green" />
            </div>
            <span className="font-semibold text-foreground text-sm">GDG Campus</span>
          </div>
          <p className="text-sm text-muted-foreground leading-[1.8]">
            A Google-backed student developer community focused on learning, building, and growing together.
          </p>
        </div>

        <div className="flex gap-20">
          <div>
            <h4 className="text-xs font-semibold text-foreground uppercase tracking-[0.15em] mb-5">Navigate</h4>
            <div className="flex flex-col gap-3">
              {["Team", "Events", "Blog"].map((item) => (
                <Link
                  key={item}
                  to={`/${item.toLowerCase()}`}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-foreground uppercase tracking-[0.15em] mb-5">Connect</h4>
            <div className="flex flex-col gap-3">
              {["Twitter", "LinkedIn", "Instagram", "GitHub"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Google Developer Groups – Campus Chapter
        </p>
        <p className="text-xs text-muted-foreground">
          Built with ❤️ by student developers
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
