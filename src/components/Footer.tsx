import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.jpg";
import { Phone, Mail, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-gradient-dark mt-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-12 grid gap-10 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo} alt="Gloss Stone" width={48} height={48} className="h-12 w-12 rounded-md object-cover" />
            <div>
              <div className="font-display text-lg tracking-wider text-gradient-silver">GLOSS STONE</div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-primary">Auto Beauty</div>
            </div>
          </div>
          <p className="mt-4 font-script text-2xl text-silver-muted">The Signature Of Quality</p>
          <p className="mt-3 text-sm text-muted-foreground max-w-xs">
            Premium mobile auto detailing crafted for drivers who refuse to settle.
          </p>
        </div>

        <div>
          <h4 className="font-display text-sm tracking-widest text-silver mb-4">EXPLORE</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/services" className="hover:text-primary">Services</Link></li>
            <li><Link to="/before-after" className="hover:text-primary">Before / After</Link></li>
            <li><Link to="/about" className="hover:text-primary">About</Link></li>
            <li><Link to="/faq" className="hover:text-primary">FAQ</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm tracking-widest text-silver mb-4">CONTACT</h4>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="tel:5403050499" className="flex items-center gap-3 text-muted-foreground hover:text-primary">
                <Phone className="h-4 w-4 text-primary" /> (540) 305-0499
              </a>
            </li>
            <li>
              <a href="mailto:Andrew@GlossStoneAuto.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary">
                <Mail className="h-4 w-4 text-primary" /> Andrew@GlossStoneAuto.com
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/gsautobeauty" target="_blank" rel="noopener" className="flex items-center gap-3 text-muted-foreground hover:text-primary">
                <Facebook className="h-4 w-4 text-primary" /> facebook.com/gsautobeauty
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Gloss Stone Auto Beauty. All rights reserved.
      </div>
    </footer>
  );
}
