import { ServiceCategory } from "@/data/services";
import { Sparkles } from "lucide-react";

export function ServiceCard({ category }: { category: ServiceCategory }) {
  return (
    <div className="relative rounded-xl bg-gradient-card border-red-glow p-6 md:p-8 shadow-card hover:shadow-glow transition-all duration-300">
      <h3 className="font-display text-2xl tracking-wider text-gradient-silver mb-6">
        {category.title.toUpperCase()}
      </h3>
      <ul className="space-y-4">
        {category.items.map((item) => (
          <li key={item.name} className="relative">
            {item.popular && (
              <span className="absolute -left-8 -top-1 hidden md:inline-block rotate-[-90deg] origin-bottom-left bg-primary text-primary-foreground text-[9px] font-bold tracking-widest px-2 py-0.5 rounded">
                MOST POPULAR
              </span>
            )}
            <div className="flex items-baseline gap-2">
              <span className={`text-sm md:text-base ${item.popular ? "text-foreground font-semibold" : "text-silver-muted"}`}>
                {item.popular && <Sparkles className="inline h-3.5 w-3.5 mr-1 text-primary" />}
                {item.name}
              </span>
              <span className="flex-1 border-b border-dotted border-border/60 mx-1 mb-1" />
              <span className="font-display text-lg text-foreground tracking-wide">{item.price}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
