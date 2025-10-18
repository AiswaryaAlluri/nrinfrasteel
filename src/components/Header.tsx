import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = ['Home', 'Services', 'Gallery', 'About Us', 'Contact Us'];

  return (
    <header className="bg-[#2c2c2c] text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => onNavigate('Home')}>
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
              <button
                key={item}
                onClick={() => onNavigate(item)}
                className={`hover:text-orange-500 transition-colors ${
                  currentPage === item ? 'text-orange-500 font-semibold' : ''
                }`}
              >
                {item}
              </button>
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
              <button
                key={item}
                onClick={() => {
                  onNavigate(item);
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left py-2 hover:text-orange-500 transition-colors ${
                  currentPage === item ? 'text-orange-500 font-semibold' : ''
                }`}
              >
                {item}
              </button>
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
