import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/Section";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/data/services";
import { Phone, CreditCard } from "lucide-react";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Gloss Stone Auto Beauty" },
      { name: "description", content: "Detailed pricing for exterior, interior, complete packages, ceramic coatings and add-on services." },
      { property: "og:title", content: "Pricing — Gloss Stone Auto Beauty" },
      { property: "og:description", content: "Transparent pricing for every detailing package." },
    ],
  }),
  component: PricingPage,
});

function PricingPage() {
  return (
    <>
      <PageHero
        title="PRICING"
        subtitle="Transparent pricing for every package. Final pricing depends on vehicle size and condition."
      />

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((cat) => <ServiceCard key={cat.title} category={cat} />)}
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
