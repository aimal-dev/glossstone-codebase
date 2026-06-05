import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/Section";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Gloss Stone Auto Beauty" },
      { name: "description", content: "Frequently asked questions about Gloss Stone Auto Beauty's mobile detailing services, pricing, ceramic coatings and booking." },
      { property: "og:title", content: "FAQ — Gloss Stone Auto Beauty" },
      { property: "og:description", content: "Answers to common questions about our detailing services." },
    ],
  }),
  component: FAQPage,
});

const faqs = [
  {
    q: "How do I book an appointment?",
    a: "The fastest way is to call or text (540) 305-0499. You can also email Andrew@GlossStoneAuto.com. Spots are limited each week, so booking ahead is recommended.",
  },
  {
    q: "Are your prices fixed?",
    a: "Listed prices are starting points. Final pricing can vary depending on vehicle size, condition, and any add-on services needed. We'll give you a clear quote before any work begins.",
  },
  {
    q: "What's the difference between Mini, Full, and Signature details?",
    a: "Mini covers the essentials — a quick refresh. Full includes deeper cleaning of all surfaces. Signature is our top-tier service: meticulous deep cleaning, restoration of every surface, and finishing touches that deliver show-quality results.",
  },
  {
    q: "How long does a ceramic coating last?",
    a: "Our automotive ceramic coatings provide long-lasting protection — typically multiple years with proper maintenance. We'll walk you through care recommendations after application.",
  },
  {
    q: "Do you offer paint correction?",
    a: "Yes. We offer paint correction at $50/hour, as well as our Signature 3 Stage Polish package. Paint correction removes swirls, light scratches, and oxidation to restore depth and clarity.",
  },
  {
    q: "Can you remove pet hair and odors?",
    a: "Absolutely. Our Odor / Pet Hair Removal service ($40) tackles deep-set hair and lingering smells. For severe cases, additional deep cleaning may be recommended.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept Visa, Mastercard, American Express, Apple Pay, Cash App and Venmo.",
  },
  {
    q: "Do you service all vehicle types?",
    a: "Yes — cars, trucks, SUVs and more. Larger vehicles or those in heavy condition may carry an adjusted price; we'll always confirm before starting.",
  },
];

function FAQPage() {
  return (
    <>
      <PageHero
        title="FREQUENTLY ASKED"
        subtitle="Everything you need to know before booking your detail."
      />

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="rounded-xl bg-gradient-card border border-border px-6 data-[state=open]:border-primary transition-all"
              >
                <AccordionTrigger className="text-left font-display tracking-wider text-base md:text-lg text-silver hover:no-underline py-5">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-5">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 text-center text-muted-foreground">
            Still have questions?{" "}
            <a href="tel:5403050499" className="text-primary hover:underline font-semibold">
              Call (540) 305-0499
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
