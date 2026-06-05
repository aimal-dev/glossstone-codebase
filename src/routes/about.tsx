import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, SectionHeading } from "@/components/Section";
import { Award, Heart, Shield, Sparkles, Droplets } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Gloss Stone Auto Beauty" },
      { name: "description", content: "Gloss Stone Auto Beauty is a premium mobile detailing service built on craftsmanship, premium products, and obsessive attention to detail." },
      { property: "og:title", content: "About — Gloss Stone Auto Beauty" },
      { property: "og:description", content: "The story behind The Signature of Quality." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        title="ABOUT GLOSS STONE"
        subtitle="The Signature of Quality — built one vehicle at a time."
      />

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 md:px-6 space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            Gloss Stone Auto Beauty was founded on a simple belief: every vehicle deserves to look as
            good as the day it left the showroom — and then some. What started as a passion for clean
            cars and meticulous craftsmanship has grown into a trusted detailing service for drivers
            who refuse to accept anything less than perfection.
          </p>
          <p>
            From a quick hand wash to multi-stage paint correction and long-lasting ceramic coatings,
            every package is delivered with the same standard of care. We use only premium-grade
            products, proven techniques, and a process refined through years of hands-on experience.
          </p>
          <p>
            We're not in the business of cutting corners. We're in the business of bringing out the
            very best in your vehicle — inside and out. That's the Gloss Stone signature.
          </p>
        </div>

        <div className="mx-auto max-w-7xl px-4 md:px-6 mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Sparkles, title: "Quality First", desc: "Every detail done right — no shortcuts, ever." },
            { icon: Shield, title: "Premium Products", desc: "Professional-grade compounds, polishes & coatings." },
            { icon: Award, title: "Proven Process", desc: "A repeatable system that delivers consistent results." },
            { icon: Heart, title: "Treated Like Our Own", desc: "Every vehicle gets the same care and respect." },
          ].map((v) => (
            <div key={v.title} className="rounded-xl bg-gradient-card border border-border p-6 text-center">
              <div className="h-12 w-12 rounded-md bg-gradient-red flex items-center justify-center mx-auto mb-4 shadow-red">
                <v.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-display text-lg tracking-wider text-silver">{v.title.toUpperCase()}</h3>
              <p className="text-sm text-muted-foreground mt-2">{v.desc}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto max-w-7xl px-4 md:px-6 mt-20">
          <SectionHeading
            eyebrow="Why Gloss Stone"
            title="OBSESSIVE ATTENTION TO EVERY DETAIL"
            description="We treat every vehicle like our own. Premium products, proven process, signature results."
          />
          <div className="grid gap-6 md:grid-cols-3 mt-14">
            {[
              { icon: Sparkles, title: "Signature Finish", desc: "Show-quality results on every job, every time." },
              { icon: Shield, title: "Paint Protection", desc: "Sealants and ceramic coatings that last." },
              { icon: Award, title: "Trusted Quality", desc: "Trained detailer using only premium-grade products." },
              { icon: Droplets, title: "Mobile Service", desc: "Convenience without compromise on quality." },
              { icon: Sparkles, title: "Interior Restoration", desc: "Deep cleans, odor removal & pet hair extraction." },
              { icon: Shield, title: "Paint Correction", desc: "Swirls, scratches & oxidation — gone." },
            ].map((f) => (
              <div key={`why-${f.title}`} className="rounded-xl bg-gradient-card border border-border p-6 hover:border-primary transition-all group">
                <div className="h-12 w-12 rounded-md bg-gradient-red flex items-center justify-center mb-4 shadow-red group-hover:scale-110 transition-transform">
                  <f.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl tracking-wider text-silver mb-2">{f.title.toUpperCase()}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto max-w-3xl px-4 md:px-6 text-center mt-20">
          <p className="font-script text-4xl text-gradient-silver">The Signature Of Quality</p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center rounded-md bg-gradient-red px-7 py-4 text-base font-semibold text-primary-foreground shadow-red"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </>
  );
}
