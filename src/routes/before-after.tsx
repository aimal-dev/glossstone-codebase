import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/Section";
import { ImageOff } from "lucide-react";

export const Route = createFileRoute("/before-after")({
  head: () => ({
    meta: [
      { title: "Before & After — Gloss Stone Auto Beauty" },
      { name: "description", content: "See the transformations. Real before & after photos of paint correction, interior details and ceramic coatings." },
      { property: "og:title", content: "Before & After — Gloss Stone Auto Beauty" },
      { property: "og:description", content: "Real transformations from our detailing studio." },
    ],
  }),
  component: BeforeAfterPage,
});

const transformations = [
  { title: "Signature 3 Stage Polish", desc: "Years of swirls and oxidation removed. Mirror-deep gloss restored." },
  { title: "Full Interior Detail", desc: "Heavy soiling, pet hair and odors eliminated. Like-new cabin." },
  { title: "Paint Correction + Ceramic", desc: "Multi-stage correction sealed with long-lasting ceramic coating." },
  { title: "Headlight Restoration", desc: "Hazy yellow lenses restored to crystal clear in a single visit." },
  { title: "Engine Bay Deep Clean", desc: "Years of grime removed without damaging sensitive components." },
  { title: "Detox Wash w/ Sealant", desc: "Iron, tar and contamination removed. Hydrophobic sealant applied." },
];

function BeforeAfterPage() {
  return (
    <>
      <PageHero
        title="BEFORE & AFTER"
        subtitle="Real results from real customers. Every transformation is hand-crafted with premium products and proven process."
      />

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {transformations.map((t) => (
              <div key={t.title} className="rounded-xl bg-gradient-card border border-border overflow-hidden hover:border-primary transition-all">
                <div className="grid grid-cols-2 gap-px bg-border">
                  <div className="aspect-square bg-muted flex flex-col items-center justify-center text-muted-foreground relative">
                    <ImageOff className="h-8 w-8 mb-2 opacity-40" />
                    <span className="text-[10px] tracking-[0.3em] uppercase">Before</span>
                    <span className="absolute top-2 left-2 bg-background/80 text-[9px] font-bold tracking-widest px-2 py-0.5 rounded text-muted-foreground">
                      BEFORE
                    </span>
                  </div>
                  <div className="aspect-square bg-card flex flex-col items-center justify-center text-muted-foreground relative">
                    <ImageOff className="h-8 w-8 mb-2 opacity-40" />
                    <span className="text-[10px] tracking-[0.3em] uppercase">After</span>
                    <span className="absolute top-2 left-2 bg-gradient-red text-[9px] font-bold tracking-widest px-2 py-0.5 rounded text-primary-foreground">
                      AFTER
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg tracking-wider text-silver">{t.title.toUpperCase()}</h3>
                  <p className="text-sm text-muted-foreground mt-2">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center rounded-xl border border-dashed border-border p-8 max-w-2xl mx-auto">
            <p className="text-muted-foreground">
              Photo gallery coming soon. Follow us on{" "}
              <a href="https://www.facebook.com/gsautobeauty" target="_blank" rel="noopener" className="text-primary hover:underline">
                Facebook
              </a>{" "}
              for the latest transformations.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
