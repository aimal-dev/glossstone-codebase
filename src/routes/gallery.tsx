import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/Section";
import { gallery } from "@/data/gallery";
import { Phone } from "lucide-react";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Photo Gallery — Gloss Stone Auto Beauty" },
      { name: "description", content: "Browse real detailing work from Gloss Stone Auto Beauty — exterior shines, interior deep cleans, and showroom finishes." },
      { property: "og:title", content: "Photo Gallery — Gloss Stone Auto Beauty" },
      { property: "og:description", content: "Real detailing work from Gloss Stone Auto Beauty." },
      { property: "og:image", content: gallery[0].src },
      { name: "twitter:image", content: gallery[0].src },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <>
      <PageHero
        title="PHOTO GALLERY"
        subtitle="Real vehicles, real results. Every photo on this page is work we've delivered."
      />

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((item) => (
              <figure
                key={item.src}
                className="group relative overflow-hidden rounded-xl border border-border bg-card shadow-card hover:border-primary transition-all"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 bg-gradient-to-t from-background/95 via-background/70 to-transparent p-4 pt-10">
                  <span className="text-sm font-medium text-silver">{item.caption}</span>
                  <span className="text-[10px] font-semibold tracking-[0.2em] text-primary uppercase">
                    {item.category}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-16 text-center rounded-2xl bg-gradient-card border-red-glow p-10">
            <h2 className="font-display text-3xl md:text-4xl tracking-wide text-gradient-silver">
              WANT YOUR VEHICLE TO LOOK LIKE THIS?
            </h2>
            <p className="mt-3 text-muted-foreground">Book your detail today — limited spots each week.</p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <a
                href="tel:5403050499"
                className="inline-flex items-center gap-2 rounded-md bg-gradient-red px-7 py-4 text-base font-semibold text-primary-foreground shadow-red"
              >
                <Phone className="h-4 w-4" /> (540) 305-0499
              </a>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-card/50 px-7 py-4 text-base font-semibold text-foreground hover:border-primary transition-all"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
