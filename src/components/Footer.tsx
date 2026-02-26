import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-footer py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Adhivio" className="h-8 brightness-0 invert" />
          </div>

          <nav className="flex items-center gap-6">
            <a href="#features" className="text-sm text-footer-foreground/60 hover:text-footer-foreground transition-colors">Features</a>
            <a href="#install" className="text-sm text-footer-foreground/60 hover:text-footer-foreground transition-colors">Install</a>
            <a href="#privacy" className="text-sm text-footer-foreground/60 hover:text-footer-foreground transition-colors">Privacy</a>
          </nav>

          <p className="text-sm text-footer-foreground/40">
            © 2026 Adhivio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
