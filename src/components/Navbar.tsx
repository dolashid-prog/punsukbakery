import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <header className="container mx-auto px-6 lg:px-16 max-w-7xl flex items-center justify-between">
      <div className="flex items-center">
        <Link to="/">
          <img 
            src="image/logo1.png"
            alt="PunSuk Bakery Logo"
            className="h-[50px] md:h-[70px] w-auto object-contain"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              document.getElementById('fallback-text-logo')?.classList.remove('hidden');
            }}
          />
          <span id="fallback-text-logo" className="hidden font-serif text-[28px] font-bold text-brand-primary tracking-[1px] uppercase">
            PunSuk <span className="font-sans font-normal text-brand-primary/60 lowercase text-[20px] ml-1">ปันสุข</span>
          </span>
        </Link>
      </div>

      <nav className="hidden md:flex gap-[30px] text-[14px] uppercase tracking-[1px] text-brand-primary font-semibold">
        {isHome ? (
          <>
            <a href="#products" className="hover:opacity-75 transition-opacity">Products</a>
            <a href="#special" className="hover:opacity-75 transition-opacity">Special</a>
            <a href="#about" className="hover:opacity-75 transition-opacity">Our Story</a>
            <a href="#contact" className="hover:opacity-75 transition-opacity">Contact</a>
          </>
        ) : (
          <>
            <Link 
              to="/products" 
              className={`transition-all ${location.pathname === '/products' ? 'text-brand-heading border-b-[2px] border-brand-heading pb-1' : 'hover:opacity-75'}`}
            >
              Products
            </Link>
            <Link 
              to="/special" 
              className={`transition-all ${location.pathname === '/special' ? 'text-brand-heading border-b-[2px] border-brand-heading pb-1' : 'hover:opacity-75'}`}
            >
              Special
            </Link>
            <a href="#contact" className="hover:opacity-75 transition-opacity">Contact</a>
          </>
        )}
      </nav>

      <button
        className="md:hidden text-brand-primary"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {isMobileMenuOpen && (
        <nav className="md:hidden absolute top-[80px] left-6 right-6 flex flex-col space-y-4 text-[14px] uppercase tracking-[1px] text-brand-primary font-semibold bg-white p-6 rounded-2xl shadow-card z-50">
          {isHome ? (
            <>
              <a href="#products" onClick={() => setIsMobileMenuOpen(false)}>Products</a>
              <a href="#special" onClick={() => setIsMobileMenuOpen(false)}>Special</a>
              <a href="#about" onClick={() => setIsMobileMenuOpen(false)}>Our Story</a>
              <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
            </>
          ) : (
            <>
              <Link 
                to="/products" 
                onClick={() => setIsMobileMenuOpen(false)}
                className={`transition-colors w-fit ${location.pathname === '/products' ? 'text-brand-heading border-b-[2px] border-brand-heading pb-1' : ''}`}
              >
                Products
              </Link>
              <Link 
                to="/special" 
                onClick={() => setIsMobileMenuOpen(false)}
                className={`transition-colors w-fit ${location.pathname === '/special' ? 'text-brand-heading border-b-[2px] border-brand-heading pb-1' : ''}`}
              >
                Special
              </Link>
              <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
            </>
          )}
        </nav>
      )}
    </header>
  );
}
