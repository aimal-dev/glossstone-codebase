import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.jpg";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/pricing", label: "Pricing" },
  { to: "/before-after", label: "Before / After" },
  { to: "/gallery", label: "Gallery" },
  { to: "/about", label: "About" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src={logo}
            alt="Gloss Stone Auto Beauty logo"
            width={48}
            height={48}
            className="h-12 w-12 rounded-md object-cover ring-1 ring-border group-hover:ring-primary transition-all"
          />
          <div className="leading-tight">
            <div className="font-display text-lg tracking-wider text-gradient-silver">
              GLOSS STONE
            </div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-primary">
              Auto Beauty
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md"
              activeProps={{ className: "px-4 py-2 text-sm font-medium text-primary rounded-md" }}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="tel:5403050499"
            className="ml-3 inline-flex items-center rounded-md bg-gradient-red px-5 py-2 text-sm font-semibold text-primary-foreground shadow-red hover:opacity-90 transition-opacity"
          >
            (540) 305-0499
          </a>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <nav className="lg:hidden border-t border-border bg-background px-4 py-4 space-y-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="block px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-card rounded-md"
              activeProps={{ className: "block px-4 py-3 text-sm font-medium text-primary bg-card rounded-md" }}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="tel:5403050499"
            className="block text-center mt-2 rounded-md bg-gradient-red px-5 py-3 text-sm font-semibold text-primary-foreground"
          >
            Call (540) 305-0499
          </a>
        </nav>
      )}
    </header>
  );
}
