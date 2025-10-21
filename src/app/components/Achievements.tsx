'use client';

import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faGavel, 
  faUsers, 
  faCalendarAlt, 
  faMapMarkerAlt, 
  faPercentage, 
  faTrophy,
  faHandshake,
  faChartLine
} from '@fortawesome/free-solid-svg-icons';

const Achievements = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    cases: 0,
    clients: 0,
    experience: 0,
    branches: 0,
    successRate: 0,
    awards: 0
  });

  const sectionRef = useRef<HTMLDivElement>(null);

  const achievements = [
    {
      id: 'cases',
      finalNumber: 750,
      suffix: '+',
      label: 'قضية مكسوبة',
      icon: faGavel,
      color: 'from-[#C5A566] to-yellow-600',
      bgColor: 'bg-[#C5A566]/20',
      description: 'نجحنا في كسب أكثر من 750 قضية'
    },
    {
      id: 'clients',
      finalNumber: 1200,
      suffix: '+',
      label: 'عميل راضي',
      icon: faUsers,
      color: 'from-[#C5A566] to-yellow-600',
      bgColor: 'bg-[#C5A566]/20',
      description: 'خدمنا أكثر من 1200 عميل بنجاح'
    },
    {
      id: 'experience',
      finalNumber: 18,
      suffix: '+',
      label: 'سنة خبرة',
      icon: faCalendarAlt,
      color: 'from-[#C5A566] to-yellow-600',
      bgColor: 'bg-[#C5A566]/20',
      description: 'خبرة تمتد لأكثر من 18 عاماً'
    },
    {
      id: 'branches',
      finalNumber: 5,
      suffix: '',
      label: 'فروع في المملكة',
      icon: faMapMarkerAlt,
      color: 'from-[#C5A566] to-yellow-600',
      bgColor: 'bg-[#C5A566]/20',
      description: '5 فروع تغطي أنحاء المملكة'
    },
    {
      id: 'successRate',
      finalNumber: 97,
      suffix: '%',
      label: 'نسبة نجاح',
      icon: faPercentage,
      color: 'from-[#C5A566] to-yellow-600',
      bgColor: 'bg-[#C5A566]/20',
      description: 'نسبة نجاح عالية تصل إلى 97%'
    },
    {
      id: 'awards',
      finalNumber: 12,
      suffix: '+',
      label: 'جائزة وتقدير',
      icon: faTrophy,
      color: 'from-[#C5A566] to-yellow-600',
      bgColor: 'bg-[#C5A566]/20',
      description: 'حصلنا على أكثر من 12 جائزة'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          startCountingAnimation();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const startCountingAnimation = () => {
    achievements.forEach((achievement) => {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const increment = achievement.finalNumber / steps;
      let current = 0;
      let step = 0;

      const timer = setInterval(() => {
        step++;
        current = Math.min(current + increment, achievement.finalNumber);
        
        setCounters(prev => ({
          ...prev,
          [achievement.id]: Math.floor(current)
        }));

        if (step >= steps || current >= achievement.finalNumber) {
          setCounters(prev => ({
            ...prev,
            [achievement.id]: achievement.finalNumber
          }));
          clearInterval(timer);
        }
      }, duration / steps);
    });
  };

  return (
    <section 
      ref={sectionRef}
      className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden"
    >
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        {/* Grid Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
            backgroundSize: '30px 30px'
          }}
        ></div>
        
        {/* Secondary Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(255, 215, 0, 0.2) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255, 215, 0, 0.2) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        ></div>

        {/* Animated Background Patterns */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-32 h-32 bg-secondary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/3 right-20 w-24 h-24 bg-primary/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-secondary/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
          <div className="absolute bottom-10 right-10 w-28 h-28 bg-primary/10 rounded-full blur-2xl animate-pulse delay-500"></div>
        </div>

        {/* Geometric Patterns */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-secondary rotate-45"></div>
          <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-primary rounded-full"></div>
          <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-secondary rotate-45"></div>
          <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-primary rounded-full"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="relative inline-block">
            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-8 w-16 h-16 border-2 border-secondary/30 rotate-45 opacity-50"></div>
            <div className="absolute -top-4 -right-8 w-16 h-16 border-2 border-primary/30 rotate-45 opacity-50"></div>
            
            <h2 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-secondary via-yellow-400 to-secondary mb-6 tracking-wide">
              إنجازاتنا بالأرقام
            </h2>
            
            {/* Animated Underline */}
            <div className="relative">
              <div className="h-2 bg-gradient-to-r from-transparent via-secondary to-transparent rounded-full mx-auto max-w-md"></div>
              <div className="absolute inset-0 h-2 bg-gradient-to-r from-secondary to-yellow-400 rounded-full mx-auto max-w-md animate-pulse"></div>
            </div>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mt-8 leading-relaxed">
            أرقام تعكس التزامنا بالتميز والجودة في تقديم الخدمات القانونية
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <div
              key={achievement.id}
              className={`group relative transform transition-all duration-700 hover:scale-105 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{
                transitionDelay: `${index * 150}ms`
              }}
            >
              {/* Enhanced Glow Effect */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${achievement.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-700`}></div>
              
              {/* Main Card */}
              <div className={`relative ${achievement.bgColor} backdrop-blur-xl rounded-3xl p-8 border border-white/10 group-hover:border-white/30 transition-all duration-700 shadow-2xl group-hover:shadow-3xl overflow-hidden`}>
                
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-4 right-4 w-20 h-20 border border-white/20 rounded-full"></div>
                  <div className="absolute bottom-4 left-4 w-16 h-16 border border-white/10 rotate-45"></div>
                </div>

                {/* Icon Container */}
                <div className="relative mb-6">
                  <div className={`w-20 h-20 bg-gradient-to-br ${achievement.color} rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-700 shadow-xl`}>
                    <FontAwesomeIcon 
                      icon={achievement.icon} 
                      className="text-white text-2xl"
                    />
                  </div>
                  
                  {/* Icon Glow */}
                  <div className={`absolute inset-0 w-20 h-20 bg-gradient-to-br ${achievement.color} rounded-2xl mx-auto blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-700`}></div>
                </div>

                {/* Number Display */}
                <div className="text-center mb-4">
                  <div className={`text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r ${achievement.color} mb-2 transition-all duration-500 group-hover:scale-110`}>
                    {counters[achievement.id as keyof typeof counters]}{achievement.suffix}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gray-200 transition-colors duration-300">
                    {achievement.label}
                  </h3>
                  
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {achievement.description}
                  </p>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-6 right-6 w-3 h-3 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse"></div>
                <div className="absolute bottom-6 left-6 w-2 h-2 bg-secondary/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse delay-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section with Additional Info */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-secondary/10 via-secondary/20 to-secondary/10 rounded-3xl p-8 border border-secondary/20 backdrop-blur-sm">
            <div className="flex items-center justify-center mb-4">
              <FontAwesomeIcon icon={faHandshake} className="text-secondary text-3xl mr-4" />
              <FontAwesomeIcon icon={faChartLine} className="text-secondary text-3xl" />
            </div>
            <h3 className="text-2xl font-bold text-secondary mb-3">
              شراكة نجاح مستمرة
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
              هذه الأرقام ليست مجرد إحصائيات، بل شهادة على التزامنا بتقديم أفضل الخدمات القانونية 
              وبناء علاقات طويلة الأمد مع عملائنا الكرام
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;