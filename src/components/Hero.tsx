import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero">
      {/* Background effects */}
      <div className="absolute inset-0 bg-mesh" />
      <div className="absolute inset-0 grid-pattern opacity-40" />
      
      {/* Gradient orbs */}
      <div className="gradient-orb w-[500px] h-[500px] -top-48 -left-48" />
      <div className="gradient-orb w-[400px] h-[400px] -bottom-32 -right-32" style={{ animationDelay: "-4s" }} />
      
      <div className="container-custom relative z-10 text-center py-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full card-glass mb-8 animate-fade-up">
          <Sparkles className="w-4 h-4 text-gem-cyan" />
          <span className="text-sm font-medium text-muted-foreground">
            Unique visual datasets for AI training
          </span>
        </div>

        {/* Main headline */}
        <h1 className="section-title text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          <span className="text-gradient">GemFrame</span>
          <br />
          <span className="text-foreground">Your models deserve</span>
          <br />
          <span className="text-foreground">better data</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 animate-fade-up leading-relaxed" style={{ animationDelay: "0.2s" }}>
          We help AI teams get clean and unique photo and video data for training 
          generative models and computer vision systems — tailored to your real-world 
          use cases, not synthetic benchmarks.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <a href="#contact" className="btn-primary flex items-center gap-2">
            Book a 20-minute intro call
            <ArrowRight className="w-4 h-4" />
          </a>
          <a href="#contact" className="btn-secondary">
            Request sample data
          </a>
        </div>

        {/* Trust note */}
        <p className="text-sm text-muted-foreground animate-fade-up" style={{ animationDelay: "0.4s" }}>
          No sales pressure — just a quick check if we can help your use case.
        </p>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
