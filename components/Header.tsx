import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { PROFILE } from '../constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);
      setVisible(lastScrollY > currentScrollY || currentScrollY < 10);
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 transform ${visible ? 'translate-y-0' : '-translate-y-full'} ${isScrolled ? 'bg-navy/90 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'}`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">

        <a href="#" className="relative group z-50">
          <div className="text-green font-mono text-2xl font-bold border-2 border-green rounded-lg w-10 h-10 flex items-center justify-center hover:bg-green/10 transition-colors">
            A
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-mono text-lightest-slate hover:text-green transition-colors flex items-center gap-1 group"
            >
              <span className="group-hover:text-green">{link.name}</span>
            </a>
          ))}
          <a
            href={PROFILE.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-green text-sm font-mono border border-green rounded hover:bg-green/10 transition-all duration-300"
          >
            LinkedIn
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-green z-50 relative"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

        {/* Mobile Nav Overlay */}
        <div className={`fixed inset-0 bg-light-navy/95 backdrop-blur-sm z-40 flex flex-col items-center justify-center gap-8 transition-all duration-300 md:hidden ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex flex-col items-center gap-2 group"
            >
              <span className="text-lightest-slate font-sans text-xl font-semibold group-hover:text-green transition-colors">{link.name}</span>
            </a>
          ))}
          <a
            href={PROFILE.linkedinUrl}
            className="px-8 py-3 mt-4 text-green border border-green rounded font-mono hover:bg-green/10 transition-colors"
          >
            Resume / LinkedIn
          </a>
        </div>

      </div>
    </header>
  );
};

export default Header;