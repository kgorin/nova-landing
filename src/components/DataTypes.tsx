import { Camera, Video, Users, FileText } from "lucide-react";

const dataTypes = [
  {
    icon: Camera,
    title: "Photo datasets",
    description: "Still images with consistent scenarios, objects, backgrounds or styles — all ready for training or fine-tuning.",
  },
  {
    icon: Video,
    title: "Video datasets",
    description: "Short and long clips with controlled motion, angles and environments — ideal for temporal models and video generation.",
  },
  {
    icon: Users,
    title: "Custom shoots on demand",
    description: "If your use case is specific (location, actors, hardware, environment), we design and execute custom data collection.",
  },
  {
    icon: FileText,
    title: "Structured metadata & annotations",
    description: "Clear file structure, metadata, and where needed — basic annotation or segmentation agreed in advance.",
  },
];

const DataTypes = () => {
  return (
    <section className="section-padding relative">
      <div className="container-custom">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="section-title mb-6">
            Photo, video and more —{" "}
            <span className="text-gradient">uniquely tailored</span> to your use case
          </h2>
        </div>

        {/* Data type cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {dataTypes.map((type, index) => (
            <div
              key={index}
              className="feature-card"
            >
              <div className="p-3 rounded-xl bg-primary/10 inline-flex mb-5">
                <type.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-3 font-display">
                {type.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {type.description}
              </p>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="text-center">
          <p className="inline-flex items-center gap-2 px-5 py-3 rounded-full card-glass text-sm text-muted-foreground">
            <span className="text-gem-cyan">✦</span>
            We can start with small, well-defined pilots to make sure we're a fit before scaling.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DataTypes;
