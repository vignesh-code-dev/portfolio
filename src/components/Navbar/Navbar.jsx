import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-bold tracking-wide text-blue-600"
        >
          Vignesh<span className="text-slate-900"> Mahamuni</span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-slate-700 hover:text-blue-600 transition font-medium"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Hire Me Button */}
        <a
          href="#contact"
          className="hidden md:inline-flex rounded-full bg-blue-600 px-5 py-2.5 text-white font-medium hover:bg-blue-700 transition"
        >
          Hire Me
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-slate-800"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <nav className="flex flex-col px-6 py-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="py-3 text-slate-700 hover:text-blue-600 transition"
              >
                {item.name}
              </a>
            ))}

            <a
              href="#contact"
              className="mt-4 rounded-lg bg-blue-600 text-white text-center py-3 hover:bg-blue-700 transition"
            >
              Hire Me
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
