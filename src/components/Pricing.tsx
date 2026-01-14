import { Check } from "lucide-react";

const pricingPoints = [
  "Start with a pilot project: a clearly scoped dataset for one use case.",
  "Define pricing based on volume, complexity, annotation and licensing.",
  "Keep the initial scope small enough to de-risk, but large enough to be meaningful.",
];

const structures = [
  "Per-project pricing for a defined dataset",
  "Per-package pricing for bundles of related scenarios",
  "Custom pricing for ongoing data partnerships",
];

const Pricing = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-mesh opacity-30" />
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
            <h2 className="section-title mb-6">
              Start with a{" "}
              <span className="text-gradient">test dataset</span>
            </h2>
            <p className="section-subtitle mx-auto">
              We don't believe in guessing your budget or forcing you into rigid tiers.
            </p>
          </div>

          {/* Main card */}
          <div className="card-glass rounded-3xl p-8 md:p-10 mb-8">
            <h3 className="text-xl font-semibold mb-6 font-display">Our approach:</h3>
            <ul className="space-y-4 mb-8">
              {pricingPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-gem-cyan/20 shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-gem-cyan" />
                  </div>
                  <span className="text-foreground/90">{point}</span>
                </li>
              ))}
            </ul>

            <div className="border-t border-border pt-6">
              <h4 className="text-sm font-medium text-muted-foreground mb-4">Typical structures include:</h4>
              <div className="flex flex-wrap gap-3">
                {structures.map((structure, index) => (
                  <span key={index} className="px-4 py-2 rounded-full bg-secondary text-sm text-foreground/80">
                    {structure}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
