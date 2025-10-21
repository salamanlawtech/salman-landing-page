'use client';

import { useState, useEffect } from 'react';

const AppBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { href: '#hero', label: 'الرئيسية' },
    { href: '#about', label: 'نبذة' },
    { href: '#specializations', label: 'الاختصاصات' },
    { href: '#services', label: 'الخدمات' },
    { href: '#why-us', label: 'لماذا نحن' },
    { href: '#fee-estimation', label: 'تقدير الأتعاب' },
    { href: '#location', label: 'الموقع' },
    { href: '#contact', label: 'التواصل' },
  ];

  const handleMenuClick = (href: string) => {
    setIsMenuOpen(false);
    // Smooth scroll to section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out overflow-hidden ${
        isScrolled 
          ? 'bg-primary/75 backdrop-blur-2xl shadow-2xl border-b border-secondary/50' 
          : 'bg-gradient-to-br from-primary/88 via-primary/82 to-primary/88 backdrop-blur-xl border-b border-secondary/30'
      }`}
    >
      {/* Grid Pattern Starting from Logo Area (Right Side) */}
      <div className="absolute right-0 top-0 w-2/5 h-full overflow-hidden">
        <div 
          className={`absolute inset-0 transition-all duration-700 ${
            isScrolled 
              ? 'opacity-25'
              : 'opacity-35'
          }`}
          style={{
            backgroundImage: `
              linear-gradient(
                rgba(197,165,102,0.15) 1px, 
                transparent 1px
              ),
              linear-gradient(90deg, 
                rgba(197,165,102,0.15) 1px, 
                transparent 1px
              )
            `,
            backgroundSize: `${isScrolled ? '18px 18px' : '22px 22px'}`,
            maskImage: 'linear-gradient(270deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 20%, rgba(0,0,0,0.6) 40%, rgba(0,0,0,0.3) 70%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(270deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 20%, rgba(0,0,0,0.6) 40%, rgba(0,0,0,0.3) 70%, transparent 100%)'
          }}
        ></div>
      </div>

      {/* Gradient Overlay */}
      <div className={`absolute inset-0 transition-all duration-700 ${
        isScrolled 
          ? 'bg-gradient-to-r from-secondary/3 via-transparent to-secondary/3'
          : 'bg-gradient-to-r from-secondary/10 via-secondary/4 to-secondary/10'
      }`}></div>

      {/* Additional Blur Effect when Scrolled */}
      <div className={`absolute inset-0 transition-all duration-700 ${
        isScrolled 
          ? 'bg-gradient-to-b from-primary/20 via-primary/10 to-transparent backdrop-blur-sm'
          : 'opacity-0'
      }`}></div>

      {/* Subtle Border Glow */}
      <div className={`absolute bottom-0 left-0 right-0 h-px transition-all duration-700 ${
        isScrolled 
          ? 'bg-gradient-to-r from-transparent via-secondary/60 to-transparent shadow-lg shadow-secondary/20'
          : 'bg-gradient-to-r from-transparent via-secondary/40 to-transparent'
      }`}></div>

      {/* Subtle Animated Dots */}
      <div className="absolute inset-0 opacity-20">
        <div className={`absolute top-2 left-10 w-1 h-1 bg-secondary rounded-full transition-all duration-1000 ${isScrolled ? 'animate-pulse' : ''}`}></div>
        <div className={`absolute top-4 right-20 w-1 h-1 bg-secondary rounded-full transition-all duration-1000 delay-300 ${isScrolled ? 'animate-pulse' : ''}`}></div>
        <div className={`absolute bottom-2 left-1/3 w-1 h-1 bg-secondary rounded-full transition-all duration-1000 delay-500 ${isScrolled ? 'animate-pulse' : ''}`}></div>
        <div className={`absolute bottom-3 right-1/4 w-1 h-1 bg-secondary rounded-full transition-all duration-1000 delay-700 ${isScrolled ? 'animate-pulse' : ''}`}></div>
      </div>
      <div className="container mx-auto px-4 py-3 relative z-10">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-1 group cursor-pointer">
            <div className="w-12 h-12 relative overflow-hidden">
              <img 
                src="/identity/logo.png" 
                alt="مجموعة سلمان الفيفي" 
                className={`w-full h-full object-contain transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 ${
                  isScrolled ? 'filter brightness-110' : ''
                }`}
              />
              {/* Subtle glow effect on hover */}
              <div className="absolute inset-0 bg-secondary/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
            </div>
            <div className="transition-all duration-300 group-hover:translate-x-1">
              <div className={`text-xl font-bold text-secondary transition-all duration-300 group-hover:text-white ${
                isScrolled ? 'text-lg' : 'text-xl'
              }`}>
                مجموعة سلمان الفيفي
              </div>
              <div className={`text-xs text-white/80 transition-all duration-300 group-hover:text-white/90 ${
                isScrolled ? 'text-xs' : 'text-xs'
              }`}>
                للمحاماة والاستشارات القانونية
              </div>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-reverse space-x-8">
            {menuItems.map((item, index) => (
              <button
                key={item.href}
                onClick={() => handleMenuClick(item.href)}
                className={`text-white hover:text-secondary transition-all duration-300 font-medium relative group cursor-pointer ${
                  item.href === '#contact' ? 'mr-4' : ''
                } transform hover:scale-105 hover:-translate-y-0.5`}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
                {/* Subtle background glow on hover */}
                <span className="absolute inset-0 bg-secondary/10 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></span>
              </button>
            ))}
          </div>

          {/* Contact Button */}
          <div className="hidden md:flex items-center space-x-reverse space-x-4">
            <button
              onClick={() => handleMenuClick('#contact')}
              className="bg-secondary text-primary px-6 py-2 rounded-full font-medium hover:bg-secondary/90 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-secondary/30 relative overflow-hidden group cursor-pointer"
            >
              <span className="relative z-10">تواصل معنا</span>
              {/* Pulse effect */}
              <div className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 opacity-0 group-hover:opacity-100"></div>
              {/* Animated border */}
              <div className="absolute inset-0 rounded-full border-2 border-white/30 scale-110 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-700"></div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white hover:text-secondary transition-all duration-300 p-2 rounded-lg hover:bg-white/10 group cursor-pointer"
          >
            <svg 
              className={`w-6 h-6 transition-all duration-300 group-hover:scale-110 ${isMenuOpen ? 'rotate-90' : 'group-hover:rotate-12'}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 space-y-2">
            {menuItems.map((item, index) => (
              <button
                key={item.href}
                onClick={() => handleMenuClick(item.href)}
                className={`block w-full text-right px-4 py-3 text-white hover:text-secondary hover:bg-secondary/10 transition-all duration-300 rounded-lg transform hover:translate-x-2 hover:scale-[1.02] group relative overflow-hidden cursor-pointer ${
                  isMenuOpen ? 'animate-slideInRight' : ''
                }`}
                style={{
                  animationDelay: `${index * 50}ms`,
                  animationFillMode: 'both'
                }}
              >
                <span className="relative z-10">{item.label}</span>
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-r from-secondary/5 to-secondary/10 translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                {/* Border accent */}
                <div className="absolute right-0 top-0 bottom-0 w-1 bg-secondary scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></div>
              </button>
            ))}
            <div className="pt-4 border-t border-secondary/20">
              <button
                onClick={() => handleMenuClick('#contact')}
                className={`w-full bg-secondary text-primary px-6 py-3 rounded-full font-medium hover:bg-secondary/90 transition-all duration-300 transform hover:scale-105 hover:shadow-lg relative overflow-hidden group cursor-pointer ${
                  isMenuOpen ? 'animate-slideInUp' : ''
                }`}
                style={{
                  animationDelay: `${menuItems.length * 50 + 100}ms`,
                  animationFillMode: 'both'
                }}
              >
                <span className="relative z-10">تواصل معنا</span>
                {/* Ripple effect */}
                <div className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AppBar;