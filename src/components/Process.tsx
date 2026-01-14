const steps = [
  {
    number: "01",
    title: "Use-case call",
    duration: "20–30 minutes",
    description: "We clarify your task: model type, scenario, constraints, data volumes and legal requirements.",
  },
  {
    number: "02",
    title: "Data concept & scope",
    description: "We propose a concrete dataset concept: example scenes, volumes, formats, delivery schedule and licensing options.",
  },
  {
    number: "03",
    title: "Collection & quality checks",
    description: "We either assemble from existing resources or organise a custom shoot, then run basic quality checks agreed with you.",
  },
  {
    number: "04",
    title: "Delivery & iteration",
    description: "You get a test subset first. Based on your feedback, we adjust and then deliver the full dataset.",
  },
];

const Process = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-mesh opacity-40" />
      
      <div className="container-custom relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="section-title mb-6">
            From idea to dataset in{" "}
            <span className="text-gradient">four steps</span>
          </h2>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-6 left-full w-full h-px bg-gradient-to-r from-primary/50 to-transparent z-0" />
              )}
              
              <div className="feature-card relative z-10 h-full">
                <div className="step-number mb-5">
                  {step.number}
                </div>
                <h3 className="text-lg font-semibold mb-1 font-display">
                  {step.title}
                </h3>
                {step.duration && (
                  <p className="text-sm text-gem-cyan mb-3">{step.duration}</p>
                )}
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="text-center">
          <p className="text-muted-foreground">
            No one-size-fits-all packs.{" "}
            <span className="text-foreground">Every project starts from your actual model and use case.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Process;
