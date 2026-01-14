const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md flex items-center justify-center" style={{ background: "var(--gradient-primary)" }}>
              <svg className="w-4 h-4 text-primary-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
              </svg>
            </div>
            <span className="font-semibold font-display text-gradient">GemFrame</span>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} GemFrame. All rights reserved.
          </p>

          {/* Email */}
          <a 
            href="mailto:hello@gemframe.ai" 
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            hello@gemframe.ai
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
