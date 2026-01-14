import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <img src={logo} alt="GemFrame" className="h-6 w-auto" />
          </a>

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
