const Footer = () => {
  return (
    <footer className="bg-footer py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <span className="text-lg font-bold text-footer-foreground">Adhivio</span>

          <nav className="flex items-center gap-6">
            <a href="#features" className="text-sm text-footer-foreground/60 hover:text-footer-foreground transition-colors">Features</a>
            <a href="#install" className="text-sm text-footer-foreground/60 hover:text-footer-foreground transition-colors">Install</a>
            <a href="#privacy" className="text-sm text-footer-foreground/60 hover:text-footer-foreground transition-colors">Privacy</a>
            <a href="/about" className="text-sm text-footer-foreground/60 hover:text-footer-foreground transition-colors">About</a>
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
