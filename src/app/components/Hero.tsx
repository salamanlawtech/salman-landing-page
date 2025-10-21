'use client';

import { useState, useEffect, useRef } from 'react';

export default function Hero() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLElement>(null);

  const texts = [
    'نحن نساعدك في تحقيق العدالة',
    'نحن ندافع عن حقوقك بقوة',
    'نحن لسنا مجرد مكتب محاماة',
    'نحن شركاؤك في النجاح',
    'نحن نحمي مصالحك القانونية',
    'نحن نقف معك في كل خطوة'
  ];

  useEffect(() => {
    const handleTyping = () => {
      const fullText = texts[currentTextIndex];
      
      if (isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(50);
      } else {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(100);
      }

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentTextIndex, typingSpeed, texts]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/backgrounds/hero-background.jpeg')`
        }}
      ></div>
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>
      
      {/* Gradient Grid Pattern Overlay */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Left Side Grid with Gradient Fade */}
        <div 
          className="absolute left-0 top-0 w-1/2 h-full opacity-15"
          style={{
            backgroundImage: `linear-gradient(rgba(197,165,102,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(197,165,102,0.4) 1px, transparent 1px)`,
            backgroundSize: '45px 45px',
            maskImage: 'linear-gradient(90deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.6) 30%, rgba(0,0,0,0.3) 60%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(90deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.6) 30%, rgba(0,0,0,0.3) 60%, transparent 100%)'
          }}
        ></div>
        
        {/* Right Side Grid with Gradient Fade */}
        <div 
          className="absolute right-0 top-0 w-1/2 h-full opacity-15"
          style={{
            backgroundImage: `linear-gradient(rgba(197,165,102,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(197,165,102,0.4) 1px, transparent 1px)`,
            backgroundSize: '45px 45px',
            maskImage: 'linear-gradient(270deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.6) 30%, rgba(0,0,0,0.3) 60%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(270deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.6) 30%, rgba(0,0,0,0.3) 60%, transparent 100%)'
          }}
        ></div>
      </div>
      
      {/* Scroll-based Blur Effect */}
      <div 
        className="absolute inset-0 pointer-events-none transition-all duration-500 ease-out"
        style={{
          background: `radial-gradient(circle at center, 
            rgba(255, 255, 255, ${Math.min(scrollY / 2000, 0.15)}) 0%, 
            rgba(255, 255, 255, ${Math.min(scrollY / 3000, 0.08)}) 40%, 
            transparent 70%)`,
          backdropFilter: `blur(${Math.min(scrollY / 100, 12)}px)`,
          WebkitBackdropFilter: `blur(${Math.min(scrollY / 100, 12)}px)`,
        }}
      />

      {/* Typing Effect Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Main Typing Text */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight min-h-[120px] md:min-h-[180px] flex items-center justify-center text-center">
            <span className="inline-block">
              {currentText}
              <span className="animate-pulse text-secondary">|</span>
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 mt-8 font-medium text-center">
            مجموعة سلمان الفيفي للمحاماة والاستشارات القانونية
          </p>
          
          {/* Decorative Elements */}
          <div className="flex justify-center items-center mt-12 gap-4">
            <div className="w-16 h-0.5 bg-secondary"></div>
            <div className="w-18 h-18">
              <img 
                src="/identity/logo.png" 
                alt="مجموعة سلمان الفيفي" 
                className="w-full h-full object-contain"
              />
            </div>
            <div className="w-16 h-0.5 bg-secondary"></div>
          </div>
        </div>
      </div>
    </section>
  );
}