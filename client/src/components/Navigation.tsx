import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";

type NavItem = {
  label: string;
  href: string;
};

const navItems: NavItem[] = [
  { label: "Início", href: "#hero" },
  { label: "O que é", href: "#what-is" },
  { label: "Três Eixos", href: "#three-pillars" },
  { label: "Manifesto", href: "/manifesto" },
  { label: "Sobre o Autor", href: "#author" },
  { label: "Contato", href: "#contact" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location, setLocation] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);

    // Rota (começa com /) — usa wouter
    if (href.startsWith("/")) {
      setLocation(href);
      return;
    }

    // Âncora (#...) — se não estivermos na home, navega pra home + âncora
    if (href.startsWith("#")) {
      if (location !== "/") {
        setLocation("/" + href);
        return;
      }
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "glass-dark shadow-2xl border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => handleNavClick(location === "/" ? "#hero" : "/")}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-2xl font-display font-bold text-primary">
                NG
              </span>
            </div>
            <span className="font-display font-semibold text-xl text-foreground hidden sm:block">
              NeoGovernança
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Button
                key={item.href}
                variant="ghost"
                onClick={() => handleNavClick(item.href)}
                className="font-body text-sm hover:text-primary transition-all duration-300 hover:scale-105"
              >
                {item.label}
              </Button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 animate-in slide-in-from-top">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Button
                  key={item.href}
                  variant="ghost"
                  onClick={() => handleNavClick(item.href)}
                  className="font-body text-left justify-start hover:text-primary transition-colors"
                >
                  {item.label}
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
