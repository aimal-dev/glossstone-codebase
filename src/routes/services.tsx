import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/Section";
import { Phone, CreditCard } from "lucide-react";
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

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Gloss Stone Auto Beauty" },
      { name: "description", content: "Hand washes, interior detailing, paint correction, ceramic coatings and more — premium mobile detailing services." },
      { property: "og:title", content: "Services — Gloss Stone Auto Beauty" },
      { property: "og:description", content: "Detailing that brings out the best in your vehicle." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHero
        title="SERVICES"
        subtitle="Premium hand-crafted detailing — tap any service to view pricing."
      />

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {serviceTiles.map((tile) => (
              <Link
                key={tile.title}
                to="/pricing"
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

          <div className="mt-16 grid md:grid-cols-2 gap-6">
            <div className="rounded-xl bg-gradient-card border border-border p-8 text-center">
              <Phone className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-display text-2xl tracking-wider text-gradient-silver mb-2">BOOK YOUR DETAIL</h3>
              <p className="text-muted-foreground mb-5">Call or text to schedule. Limited spots available each week.</p>
              <a href="tel:5403050499" className="inline-flex items-center gap-2 rounded-md bg-gradient-red px-7 py-3 font-semibold text-primary-foreground shadow-red">
                (540) 305-0499
              </a>
            </div>
            <div className="rounded-xl bg-gradient-card border border-border p-8 text-center">
              <CreditCard className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-display text-2xl tracking-wider text-gradient-silver mb-2">PAYMENTS ACCEPTED</h3>
              <p className="text-muted-foreground">
                Visa · Mastercard · American Express · Apple Pay · Cash App · Venmo
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
