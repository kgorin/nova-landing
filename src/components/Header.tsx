import { useState, useEffect } from "react";
import logo from "@/assets/logo.png";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3 card-glass" : "py-5"
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <img src={logo} alt="GemFrame" className="h-12 w-auto" />
        </a>

        {/* CTA */}
        <a href="#contact" className="btn-primary text-sm py-2.5 px-5">
          Get in touch
        </a>
      </div>
    </header>
  );
};

export default Header;
