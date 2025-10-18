import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
}

export default function Header({ activeSection }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact Us' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="bg-[#2c2c2c] text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollToSection('home')}>
            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
               <img src="/logo.png" alt="logo" className='w-11' />
            </div>
            <div>
              <h1 className="text-2xl font-bold">NR Infra Steel</h1>
              <p className="text-xs text-orange-400">Building The Future</p>
            </div>
          </div>

          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                }}
                className={`hover:text-orange-500 transition-colors ${
                  activeSection === item.id ? 'text-orange-500 font-semibold' : ''
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="tel:9697786999"
            className="hidden md:flex items-center space-x-2 bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-lg transition-colors"
          >
            <Phone size={18} />
            <span>9697 786 999</span>
          </a>

          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                }}
                className={`block w-full text-left py-2 hover:text-orange-500 transition-colors ${
                  activeSection === item.id ? 'text-orange-500 font-semibold' : ''
                }`}
              >
                {item.label}
              </a>
            ))}
            <a
              href="tel:9697786999"
              className="flex items-center space-x-2 text-orange-500 py-2"
            >
              <Phone size={18} />
              <span>9697 786 999</span>
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
