import { CheckCircle2 } from "lucide-react";

const Solution = () => {
  return (
    <section className="section-padding relative">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          {/* Gem icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-8 glow-primary" style={{ background: "var(--gradient-primary)" }}>
            <svg className="w-8 h-8 text-primary-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" />
            </svg>
          </div>

          <h2 className="section-title mb-6">
            What <span className="text-gradient">GemFrame</span> does
          </h2>
          
          <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-8">
            GemFrame provides unique, scenario-specific photo and video datasets — or organises 
            custom shoots so that your generative and computer vision models see the world the 
            way your product actually needs them to.
          </p>

          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full card-glass">
            <CheckCircle2 className="w-5 h-5 text-gem-cyan" />
            <span className="text-muted-foreground">
              We focus on quality, legal clarity and real-world relevance — not vanity metrics.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
