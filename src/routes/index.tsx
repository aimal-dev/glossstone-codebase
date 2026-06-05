import { createFileRoute, Link } from "@tanstack/react-router";
import heroCar from "@/assets/hero-car.jpg";
import { services } from "@/data/services";
import { gallery } from "@/data/gallery";
import { ServiceCard } from "@/components/ServiceCard";
import { SectionHeading } from "@/components/Section";
import { ArrowRight, Phone } from "lucide-react";
import audiFront from "@/assets/gallery/audi-front.jpg";
import audiInteriorFront from "@/assets/gallery/audi-interior-front.jpg";
import audiDash from "@/assets/gallery/audi-dash.jpg";
import audiRear from "@/assets/gallery/audi-rear.jpg";
import audiInteriorRear from "@/assets/gallery/audi-interior-rear.jpg";
import ridgelineFront from "@/assets/gallery/ridgeline-front.jpg";
import ridgelineSide from "@/assets/gallery/ridgeline-side.jpg";
import ridgelineRear from "@/assets/gallery/ridgeline-rear.jpg";
import heroCarImg from "@/assets/hero-car.jpg";

const serviceTiles = [
  { title: "All-Hand Car Wash", image: ridgelineFront },
  { title: "Interior Detailing", image: audiInteriorFront },
  { title: "Paint Protection", image: audiFront },
  { title: "Ceramic Coatings", image: heroCarImg },
  { title: "Leather & Upholstery", image: audiInteriorRear },
  { title: "Paint Correction", image: audiRear },
  { title: "Dash & Trim Restore", image: audiDash },
  { title: "Wheel Detailing", image: ridgelineSide },
  { title: "Headlight Restore", image: ridgelineRear },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gloss Stone Auto Beauty — Premium Mobile Detailing" },
      { name: "description", content: "The Signature of Quality. Mobile auto detailing — hand washes, interior details, paint correction & ceramic coatings. Call (540) 305-0499." },
      { property: "og:title", content: "Gloss Stone Auto Beauty — Premium Mobile Detailing" },
      { property: "og:description", content: "Detailing that brings out the best in your vehicle." },
      { property: "og:image", content: heroCar },
      { name: "twitter:image", content: heroCar },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[40vh] md:min-h-[55vh] flex items-center overflow-hidden">
        <img
          src={heroCar}
          alt="Glossy black sports car detailed by Gloss Stone Auto Beauty"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/30" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at right, oklch(0.55 0.22 25 / 0.3), transparent 50%)" }} />

        <div className="relative mx-auto max-w-7xl px-4 md:px-6 py-8 md:py-12 w-full">
          <div className="max-w-2xl">
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl tracking-wide leading-[0.95] text-gradient-silver">
              DETAILING THAT BRINGS OUT THE <span className="text-gradient-red">BEST</span> IN YOUR VEHICLE
            </h1>
            <p className="font-script text-2xl md:text-3xl text-silver-muted mt-3">The Signature Of Quality</p>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl">
              Premium hand-crafted auto detailing from interior refreshers to ceramic coatings.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES TILES */}
      <section className="py-20 md:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeading
            eyebrow="What We Do"
            title="SERVICES"
            description="Tap any service to learn more about our signature process."
          />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5">
            {serviceTiles.map((tile) => (
              <Link
                key={tile.title}
                to="/services"
                className="group relative block overflow-hidden rounded-xl border border-border shadow-card hover:border-primary transition-all aspect-[5/3] sm:aspect-[4/3]"
              >
                <img
                  src={tile.image}
                  alt={tile.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-background/50 group-hover:bg-background/40 transition-all" />
                <div className="relative h-full w-full flex items-center justify-center p-6 text-center">
                  <h3 className="font-display text-2xl md:text-3xl tracking-wider text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] px-4 py-2 rounded-md bg-black/55 backdrop-blur-sm">
                    {tile.title.toUpperCase()}
                  </h3>
                </div>
                <span className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-red group-hover:w-full transition-all duration-500" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeading
            eyebrow="Recent Work"
            title="FROM OUR PHOTO GALLERY"
            description="A glimpse of vehicles we've recently brought back to life."
          />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.slice(0, 6).map((item) => (
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
          <div className="mt-12 text-center">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-card/50 px-7 py-4 text-base font-semibold text-foreground hover:border-primary transition-all"
            >
              View Full Gallery <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-4 md:px-6 text-center rounded-2xl bg-gradient-card border-red-glow p-10 md:p-16">
          <h2 className="font-display text-4xl md:text-5xl tracking-wide text-gradient-silver">BOOK YOUR DETAIL TODAY</h2>
          <p className="mt-4 text-muted-foreground text-lg">Limited spots available each week — call or text now.</p>
          <a
            href="tel:5403050499"
            className="mt-8 inline-flex items-center gap-3 rounded-md bg-gradient-red px-10 py-5 text-2xl font-display tracking-wider text-primary-foreground shadow-red"
          >
            <Phone className="h-5 w-5" /> (540) 305-0499
          </a>
          <p className="mt-4 text-sm text-muted-foreground">
            Or email <a href="mailto:Andrew@GlossStoneAuto.com" className="text-primary hover:underline">Andrew@GlossStoneAuto.com</a>
          </p>
        </div>
      </section>
    </>
  );
}
