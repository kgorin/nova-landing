import { AlertCircle, Database, FileQuestion, Target } from "lucide-react";

const problems = [
  {
    icon: Database,
    text: "Open-source datasets are overused, outdated or misaligned with your niche.",
  },
  {
    icon: FileQuestion,
    text: "Generic stock photos and videos don't reflect your real scenarios, objects or environments.",
  },
  {
    icon: AlertCircle,
    text: "Internal data is hard to collect, annotate and make legally safe for training.",
  },
  {
    icon: Target,
    text: "Off-the-shelf datasets rarely match your edge cases — unusual angles, rare combinations, specific lighting or motion.",
  },
];

const Problem = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-mesh opacity-50" />
      
      <div className="container-custom relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="section-title mb-6">
            Your models are only as good as{" "}
            <span className="text-gradient">your data</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Most AI teams don't struggle with building models — they struggle with finding the right data.
          </p>
        </div>

        {/* Problem grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="feature-card flex items-start gap-4"
            >
              <div className="p-3 rounded-xl bg-destructive/10 shrink-0">
                <problem.icon className="w-5 h-5 text-destructive" />
              </div>
              <p className="text-foreground/90 leading-relaxed">
                {problem.text}
              </p>
            </div>
          ))}
        </div>

        {/* Result statement */}
        <div className="card-glass rounded-2xl p-8 text-center max-w-3xl mx-auto">
          <p className="text-lg text-muted-foreground leading-relaxed">
            As a result, you waste time patching datasets together, debugging weird model behavior 
            and explaining to stakeholders why{" "}
            <span className="text-foreground font-medium">"it works on paper, but not in production"</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Problem;
