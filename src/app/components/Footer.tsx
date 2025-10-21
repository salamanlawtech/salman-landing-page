'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPhone, 
  faEnvelope, 
  faMapMarkerAlt, 
  faClock,
  faGavel,
  faShieldAlt,
  faUsers,
  faAward
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faInstagram
} from '@fortawesome/free-brands-svg-icons';


export default function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    'القانون التجاري',
    'القانون المدني',
    'القانون الجنائي',
    'قانون الأحوال الشخصية',
    'قانون العمل',
    'القانون العقاري'
  ];

  const quickLinks = [
    { name: 'الرئيسية', href: '#home' },
    { name: 'من نحن', href: '#about' },
    { name: 'خدماتنا', href: '#services' },
    { name: 'تقدير الأتعاب', href: '#fee-estimation' },
    { name: 'موقعنا', href: '#location' },
    { name: 'تواصل معنا', href: '#contact' }
  ];

  const socialLinks = [
    { icon: faFacebook, href: '#', label: 'Facebook', color: 'hover:bg-blue-600' },
    { icon: faTwitter, href: '#', label: 'Twitter', color: 'hover:bg-blue-400' },
    { icon: faLinkedin, href: '#', label: 'LinkedIn', color: 'hover:bg-blue-700' },
    { icon: faInstagram, href: '#', label: 'Instagram', color: 'hover:bg-pink-600' }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(197,165,102,0.08),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(197,165,102,0.06),transparent_50%)]"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(135deg,transparent_25%,rgba(197,165,102,0.02)_50%,transparent_75%)]"></div>
        
        {/* Grid Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-8"
          style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px)`,
            backgroundSize: '45px 45px'
          }}
        ></div>
        
        {/* Secondary Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-4"
          style={{
            backgroundImage: `linear-gradient(rgba(197, 165, 102, 0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(197, 165, 102, 0.1) 1px, transparent 1px)`,
            backgroundSize: '90px 90px'
          }}
        ></div>

        {/* Geometric Elements */}
        <div className="absolute top-10 right-20 w-20 h-20 border border-secondary/15 rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-16 h-16 border border-secondary/20 rotate-45"></div>
        <div className="absolute top-1/3 left-1/4 w-12 h-12 bg-secondary/5 rounded-lg rotate-12"></div>
        
        {/* Dot Pattern */}
        <div className="absolute inset-0 opacity-[0.015]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(197,165,102,0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="group">
                {/* Logo and Company Name - Same as AppBar */}
                <div className="flex items-center gap-3 mb-6 group cursor-pointer">
                  <div className="w-12 h-12 relative overflow-hidden">
                    <img 
                      src="/identity/logo.png" 
                      alt="مجموعة سلمان الفيفي" 
                      className="w-full h-full object-contain transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
                    />
                    {/* Subtle glow effect on hover */}
                    <div className="absolute inset-0 bg-secondary/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                  </div>
                  <div className="transition-all duration-300 group-hover:translate-x-1">
                    <div className="text-xl font-bold text-secondary transition-all duration-300 group-hover:text-white">
                      مجموعة سلمان الفيفي
                    </div>
                    <div className="text-xs text-white/80 transition-all duration-300 group-hover:text-white/90">
                      للمحاماة والاستشارات القانونية
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  نقدم خدمات قانونية متميزة بخبرة تزيد عن 15 عاماً في مختلف مجالات القانون، 
                  مع التزامنا بأعلى معايير المهنية والنزاهة.
                </p>

                {/* Key Features */}
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-300">
                    <FontAwesomeIcon icon={faShieldAlt} className="text-secondary w-4 h-4 mr-2" />
                    <span>خبرة أكثر من 15 عاماً</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <FontAwesomeIcon icon={faUsers} className="text-secondary w-4 h-4 mr-2" />
                    <span>فريق من المحامين المتخصصين</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <FontAwesomeIcon icon={faAward} className="text-secondary w-4 h-4 mr-2" />
                    <span>معتمدون من وزارة العدل</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="lg:col-span-1">
              <h4 className="text-lg font-bold text-secondary mb-6">خدماتنا القانونية</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <a 
                      href="#services" 
                      className="text-gray-300 hover:text-secondary transition-colors duration-300 text-sm flex items-center group"
                    >
                      <span className="w-2 h-2 bg-secondary/60 rounded-full mr-3 group-hover:bg-secondary transition-colors duration-300"></span>
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-1">
              <h4 className="text-lg font-bold text-secondary mb-6">روابط سريعة</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      className="text-gray-300 hover:text-secondary transition-colors duration-300 text-sm flex items-center group"
                    >
                      <span className="w-2 h-2 bg-secondary/60 rounded-full mr-3 group-hover:bg-secondary transition-colors duration-300"></span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h4 className="text-lg font-bold text-secondary mb-6">معلومات التواصل</h4>
              
              <div className="space-y-4">
                {/* Address */}
                <div className="flex items-start">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="text-secondary w-4 h-4 mt-1 mr-3 flex-shrink-0" />
                  <div className="text-sm text-gray-300">
                    <p>شارع إبراهيم الخليل، حي العزيزية</p>
                    <p>مكة المكرمة 24231، المملكة العربية السعودية</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center">
                  <FontAwesomeIcon icon={faPhone} className="text-secondary w-4 h-4 mr-3" />
                  <div className="text-sm text-gray-300">
                    <p>+966 50 123 4567</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center">
                  <FontAwesomeIcon icon={faEnvelope} className="text-secondary w-4 h-4 mr-3" />
                  <div className="text-sm text-gray-300">
                    <p>info@salmanlaw.sa</p>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start">
                  <FontAwesomeIcon icon={faClock} className="text-secondary w-4 h-4 mt-1 mr-3 flex-shrink-0" />
                  <div className="text-sm text-gray-300">
                    <p>الأحد - الخميس: 8:00 ص - 6:00 م</p>
                    <p>الجمعة: 2:00 م - 6:00 م</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-8">
                <h5 className="text-sm font-semibold text-white mb-4">تابعونا على</h5>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className={`w-10 h-10 bg-gray-800 ${social.color} rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 group hover:scale-110 hover:shadow-lg`}
                    >
                      <FontAwesomeIcon icon={social.icon} className="text-lg" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              
              {/* Copyright */}
              <div className="text-sm text-gray-400 text-center md:text-right">
                <p>
                  © {currentYear} مكتب سلمان للمحاماة والاستشارات القانونية. جميع الحقوق محفوظة.
                </p>
              </div>

              {/* Legal Links */}
              <div className="flex flex-wrap justify-center md:justify-start space-x-6 space-x-reverse text-sm">
                <a href="#" className="text-gray-400 hover:text-secondary transition-colors duration-300">
                  سياسة الخصوصية
                </a>
                <a href="#" className="text-gray-400 hover:text-secondary transition-colors duration-300">
                  شروط الاستخدام
                </a>
                <a href="#" className="text-gray-400 hover:text-secondary transition-colors duration-300">
                  إخلاء المسؤولية
                </a>
              </div>
            </div>

            {/* Professional Notice */}
            <div className="mt-4 pt-4 border-t border-gray-800/50">
              <p className="text-xs text-gray-500 text-center leading-relaxed">
                مكتب سلمان للمحاماة والاستشارات القانونية مرخص من وزارة العدل بالمملكة العربية السعودية. 
                جميع المعلومات المقدمة في هذا الموقع هي لأغراض إعلامية فقط ولا تشكل استشارة قانونية رسمية.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}