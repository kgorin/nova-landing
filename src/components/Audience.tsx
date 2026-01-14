import { Layers, Eye, Palette } from "lucide-react";

const audiences = [
  {
    icon: Layers,
    title: "Generative AI teams",
    description: "Training models for image or video generation, product visualisation, avatars, creative tools and marketing content.",
  },
  {
    icon: Eye,
    title: "Computer vision teams",
    description: "Working on detection, tracking, recognition in retail, industry, mobility, sports, healthcare and other applied fields.",
  },
  {
    icon: Palette,
    title: "AI studios & agencies",
    description: "Delivering AI-powered campaigns or tools for brands and needing bespoke data for unique use cases.",
  },
];

const Audience = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-mesh opacity-30" />
      
      <div className="container-custom relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="section-title mb-6">
            Superpowering AI teams who care about{" "}
            <span className="text-gradient">real-world performance</span>
          </h2>
        </div>

        {/* Audience cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {audiences.map((audience, index) => (
            <div
              key={index}
              className="feature-card text-center"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-6" style={{ background: "var(--gradient-primary)" }}>
                <audience.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-4 font-display">
                {audience.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {audience.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Audience;
