import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 h-[72px] bg-background border-b border-border">
      <div className="container h-full flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">A</span>
          </div>
          <span className="text-xl font-bold text-primary">Adhivio</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Features</a>
          <a href="#install" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Install</a>
          <a href="#privacy" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Privacy</a>
          <a href="#" className="inline-flex items-center justify-center h-10 px-6 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity">
            Download APK
          </a>
        </nav>

        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-background border-b border-border px-6 pb-6 space-y-4">
          <a href="#features" className="block text-sm font-medium text-muted-foreground" onClick={() => setMobileOpen(false)}>Features</a>
          <a href="#install" className="block text-sm font-medium text-muted-foreground" onClick={() => setMobileOpen(false)}>Install</a>
          <a href="#privacy" className="block text-sm font-medium text-muted-foreground" onClick={() => setMobileOpen(false)}>Privacy</a>
          <a href="#" className="inline-flex items-center justify-center h-10 px-6 rounded-lg bg-primary text-primary-foreground text-sm font-semibold">
            Download APK
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
