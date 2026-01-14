import { ArrowRight, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-mesh" />
      <div className="gradient-orb w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20" />
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Headline */}
          <h2 className="section-title text-3xl md:text-4xl lg:text-5xl mb-6">
            Tell us what your model{" "}
            <span className="text-gradient">needs to see</span>
          </h2>

          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            If you know your model deserves better data — or you're just tired of patching 
            together half-relevant datasets — we should talk.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a href="mailto:hello@gemframe.ai?subject=Intro%20Call%20Request" className="btn-primary flex items-center gap-2">
              Book an intro call
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="mailto:hello@gemframe.ai?subject=Sample%20Data%20Request" className="btn-secondary">
              Request sample data
            </a>
          </div>

          {/* Email option */}
          <div className="card-glass rounded-2xl p-6 inline-flex flex-col items-center gap-3">
            <p className="text-sm text-muted-foreground">Prefer email?</p>
            <a 
              href="mailto:hello@gemframe.ai" 
              className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span className="font-medium">hello@gemframe.ai</span>
            </a>
            <p className="text-xs text-muted-foreground">
              Write with a short description of your use case
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
