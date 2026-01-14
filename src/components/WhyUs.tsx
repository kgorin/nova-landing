import { Target, Shield, Minimize2, MessageCircle } from "lucide-react";

const benefits = [
  {
    icon: Target,
    title: "Real-world alignment",
    description: "We prioritise scenarios and edge cases that actually matter for your product — not just pretty images.",
  },
  {
    icon: Shield,
    title: "Legal clarity",
    description: "We design collection and licensing with training usage in mind from day one, so your legal and compliance teams sleep better.",
  },
  {
    icon: Minimize2,
    title: "Focused scope, not chaos",
    description: "Smaller, more relevant datasets often outperform massive but noisy collections. We help you define that sweet spot.",
  },
  {
    icon: MessageCircle,
    title: "Human communication",
    description: "Direct access to our team throughout the process. No black boxes, no ticket systems — just clear collaboration.",
  },
];

const WhyUs = () => {
  return (
    <section className="section-padding relative">
      <div className="container-custom">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="section-title mb-6">
            Why teams choose{" "}
            <span className="text-gradient">GemFrame</span>
          </h2>
        </div>

        {/* Benefits grid */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="feature-card flex items-start gap-4"
            >
              <div className="p-3 rounded-xl shrink-0" style={{ background: "var(--gradient-primary)" }}>
                <benefit.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 font-display">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
