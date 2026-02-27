import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 h-[72px] bg-background border-b border-border">
      <div className="container h-full flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Adhivio" className="h-9" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Features
          </a>
          <a href="#install" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Install
          </a>
          <a href="#privacy" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Privacy
          </a>

          {/* FIXED ABOUT LINK */}
          <Link
            to="/about"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            About
          </Link>

          <a
            href="https://github.com/4kAurora07/adhivio-docs/releases/download/v1.0/adhivio.apk"
            className="inline-flex items-center justify-center h-10 px-6 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Download APK
          </a>
        </nav>

        {/* Mobile Button */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background border-b border-border px-6 pb-6 space-y-4">
          <a
            href="#features"
            className="block text-sm font-medium text-muted-foreground"
            onClick={() => setMobileOpen(false)}
          >
            Features
          </a>
          <a
            href="#install"
            className="block text-sm font-medium text-muted-foreground"
            onClick={() => setMobileOpen(false)}
          >
            Install
          </a>
          <a
            href="#privacy"
            className="block text-sm font-medium text-muted-foreground"
            onClick={() => setMobileOpen(false)}
          >
            Privacy
          </a>

          {/* FIXED MOBILE ABOUT LINK */}
          <Link
            to="/about"
            className="block text-sm font-medium text-muted-foreground"
            onClick={() => setMobileOpen(false)}
          >
            About
          </Link>

          <a
            href="https://github.com/4kAurora07/adhivio-docs/releases/download/v1.0/adhivio.apk"
            className="inline-flex items-center justify-center h-10 px-6 rounded-lg bg-primary text-primary-foreground text-sm font-semibold"
          >
            Download APK
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;