'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/', id: 'nav-home' },
    { name: 'About', href: '/about', id: 'nav-about' },
    { name: 'Investment Thesis', href: '/investment-thesis', id: 'nav-investment' },
    { name: 'Portfolio', href: '/portfolio', id: 'nav-portfolio' },
    { name: 'Team', href: '/team', id: 'nav-team' },
    { name: 'Countries', href: '/countries', id: 'nav-countries' },
    { name: 'Contact', href: '/contact', id: 'nav-contact' },
    { name: 'News', href: '/news', id: 'nav-news' },
  ];

  return (
    <header id="header-main" className="bg-primary text-primary-foreground sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 py-4" aria-label="Main navigation">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold" id="logo-link">
            Bruttt
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-6">
            {navigation.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                id={item.id}
                className="hover:text-accent transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            id="btn-mobile-menu"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 flex flex-col gap-4">
            {navigation.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                id={`${item.id}-mobile`}
                className="hover:text-accent transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
