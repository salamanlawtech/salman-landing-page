import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faStar, 
  faTrophy, 
  faLightbulb, 
  faHandshake, 
  faChartBar, 
  faCheckCircle, 
  faCalendarAlt, 
  faUsers, 
  faMapMarkerAlt, 
  faPercentage,
  faPhone,
  faCalendar
} from '@fortawesome/free-solid-svg-icons';

import LeaderProfile from './LeaderProfile';
export default function About() {
  const milestones = [
    {
      year: "2008",
      title: "تأسيس المكتب",
      description: "بدأت رحلتنا بتأسيس مكتب سلمان الفيفي للمحاماة في مكة المكرمة"
    },
    {
      year: "2012",
      title: "التوسع الأول",
      description: "افتتاح فرع جدة وتوسيع نطاق الخدمات القانونية"
    },
    {
      year: "2016",
      title: "الاعتماد الدولي",
      description: "حصلنا على اعتماد ISO 9001 لجودة الخدمات القانونية"
    },
    {
      year: "2020",
      title: "التحول الرقمي",
      description: "إطلاق منصة رقمية متطورة لخدمة العملاء"
    },
    {
      year: "2024",
      title: "مجموعة سلمان الفيفي",
      description: "تطوير المكتب ليصبح مجموعة شاملة للخدمات القانونية"
    }
  ];

  const teamMembers = [
    {
      name: "المحامي سلمان الفيفي",
      position: "الشريك المؤسس والمدير التنفيذي",
      experience: "20+ سنة خبرة",
      specialization: "القانون التجاري والشركات",
      education: "ماجستير القانون - جامعة الملك سعود",
      achievements: "أكثر من 500 قضية مكسوبة",
      image: "/backgrounds/salman-avatar.jpeg"
    }
  ];

  const values = [
    {
      title: "النزاهة",
      description: "نلتزم بأعلى معايير النزاهة والشفافية في جميع تعاملاتنا",
      icon: <FontAwesomeIcon icon={faStar} className="w-8 h-8" />
    },
    {
      title: "التميز",
      description: "نسعى دائماً لتقديم خدمات قانونية متميزة تفوق توقعات عملائنا",
      icon: <FontAwesomeIcon icon={faTrophy} className="w-8 h-8" />
    },
    {
      title: "الابتكار",
      description: "نستخدم أحدث التقنيات والأساليب في تقديم الخدمات القانونية",
      icon: <FontAwesomeIcon icon={faLightbulb} className="w-8 h-8" />
    },
    {
      title: "الالتزام",
      description: "نلتزم بالمواعيد والوعود ونضع مصلحة العميل في المقدمة",
      icon: <FontAwesomeIcon icon={faHandshake} className="w-8 h-8" />
    }
  ];

  const achievements = [
    {
      number: "500+",
      label: "قضية مكسوبة",
      icon: <FontAwesomeIcon icon={faChartBar} className="w-8 h-8" />
    },
    {
      number: "1000+",
      label: "عميل راضي",
      icon: <FontAwesomeIcon icon={faCheckCircle} className="w-8 h-8" />
    },
    {
      number: "15+",
      label: "سنة خبرة",
      icon: <FontAwesomeIcon icon={faCalendarAlt} className="w-8 h-8" />
    },
    {
      number: "20+",
      label: "محامي متخصص",
      icon: <FontAwesomeIcon icon={faUsers} className="w-8 h-8" />
    },
    {
      number: "3",
      label: "فروع في المملكة",
      icon: <FontAwesomeIcon icon={faMapMarkerAlt} className="w-8 h-8" />
    },
    {
      number: "95%",
      label: "نسبة نجاح",
      icon: <FontAwesomeIcon icon={faPercentage} className="w-8 h-8" />
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/5 via-transparent to-secondary/5"></div>
      <div className="absolute top-0 right-1/3 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      
      {/* Subtle Professional Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        {/* Corner Accent Elements */}
        <div className="absolute top-8 left-8 w-20 h-20 border-l-2 border-t-2 border-secondary/20"></div>
        <div className="absolute top-8 right-8 w-20 h-20 border-r-2 border-t-2 border-secondary/20"></div>
        <div className="absolute bottom-8 left-8 w-20 h-20 border-l-2 border-b-2 border-secondary/20"></div>
        <div className="absolute bottom-8 right-8 w-20 h-20 border-r-2 border-b-2 border-secondary/20"></div>
        
        {/* Floating Geometric Shapes */}
        <div className="absolute top-32 left-1/4 w-3 h-3 bg-secondary/30 rotate-45 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-secondary/40 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/3 left-1/3 w-4 h-4 border border-secondary/25 rotate-45 animate-pulse delay-2000"></div>
        <div className="absolute bottom-1/4 right-1/5 w-2 h-2 bg-secondary/35 animate-pulse delay-3000"></div>
        
        {/* Enhanced Professional Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.08]">
          <div className="w-full h-full" style={{
            backgroundImage: `linear-gradient(rgba(197,165,102,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(197,165,102,0.4) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        {/* Additional Decorative Grid */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="w-full h-full" style={{
            backgroundImage: `linear-gradient(rgba(197,165,102,0.6) 2px, transparent 2px), linear-gradient(90deg, rgba(197,165,102,0.6) 2px, transparent 2px)`,
            backgroundSize: '120px 120px'
          }}></div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center mb-28">
          <div className="relative inline-block">
            {/* Decorative Elements Around Title */}
            <div className="absolute -top-4 -left-4 w-8 h-8 border-2 border-primary/30 rotate-45"></div>
            <div className="absolute -top-4 -right-4 w-8 h-8 border-2 border-secondary/30 rotate-45"></div>
            
            <h2 className="text-5xl md:text-7xl font-bold text-primary mb-8 leading-tight">
              نبذة عن مجموعة سلمان الفيفي
            </h2>
            
            {/* Enhanced Underline */}
            <div className="flex items-center justify-center space-x-4 space-x-reverse">
              <div className="w-16 h-0.5 bg-secondary/50"></div>
              <div className="w-3 h-3 bg-primary rounded-full"></div>
              <div className="w-24 h-1 bg-primary rounded-full"></div>
              <div className="w-3 h-3 bg-secondary rounded-full"></div>
              <div className="w-16 h-0.5 bg-primary/50"></div>
            </div>
          </div>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mt-10 leading-relaxed font-light">
            رحلة من التميز والإبداع في تقديم الخدمات القانونية منذ عام 2008
          </p>
        </div>

        {/* Enhanced Story Section */}
        <div className="mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Our Story Section */}
            <div className="relative group">
              <div className="absolute inset-0 bg-primary/5 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative bg-gray-800/90 backdrop-blur-lg rounded-3xl p-10 border border-gray-700/50 group-hover:border-primary/30 transition-all duration-500 shadow-xl">
                <div className="mb-8">
                  <h3 className="text-4xl font-bold text-white mb-4">قصتنا</h3>
                  <div className="w-20 h-1 bg-primary rounded-full"></div>
                </div>
                <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
                  <p className="relative pl-6 border-l-2 border-primary group-hover:border-primary/80 transition-colors duration-300">
                    بدأت مجموعة سلمان الفيفي للمحاماة والاستشارات القانونية رحلتها في عام 2008 برؤية واضحة: 
                    تقديم خدمات قانونية متميزة تجمع بين الخبرة العميقة والتقنيات الحديثة.
                  </p>
                  <p className="relative pl-6 border-l-2 border-secondary group-hover:border-secondary/80 transition-colors duration-300">
                    على مدار أكثر من 15 عاماً، نمت المجموعة لتصبح واحدة من أبرز المكاتب القانونية في المملكة، 
                    حيث نخدم عملاءنا من الأفراد والشركات بأعلى معايير المهنية والجودة.
                  </p>
                  <p className="relative pl-6 border-l-2 border-primary group-hover:border-primary/80 transition-colors duration-300">
                    نفخر بفريقنا المتخصص من المحامين ذوي الخبرة الواسعة في مختلف مجالات القانون، 
                    والذين يعملون بتفانٍ لحماية حقوق عملائنا وتحقيق أهدافهم القانونية.
                  </p>
                </div>
              </div>
            </div>

            {/* Our Vision and Mission Section */}
            <div className="relative group">
              <div className="absolute inset-0 bg-secondary/5 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative bg-gray-800/90 backdrop-blur-lg rounded-3xl p-10 border border-gray-700/50 group-hover:border-secondary/30 transition-all duration-500 shadow-xl">
                <div className="mb-10">
                  <h3 className="text-3xl font-bold text-white mb-4">رؤيتنا ورسالتنا</h3>
                  <div className="w-24 h-1 bg-secondary rounded-full"></div>
                </div>
                
                <div className="space-y-10">
                  <div className="group/vision">
                    <div className="border-r-4 border-primary pr-6 group-hover/vision:border-primary/80 transition-colors duration-300">
                      <h4 className="text-2xl font-bold text-primary mb-4 group-hover/vision:text-secondary transition-colors">
                        رؤيتنا
                      </h4>
                      <p className="text-gray-300 leading-relaxed text-lg group-hover/vision:text-gray-200 transition-colors duration-300">
                        أن نكون المرجع الأول للخدمات القانونية في المملكة العربية السعودية، 
                        ونموذجاً يُحتذى به في التميز والابتكار القانوني.
                      </p>
                    </div>
                  </div>
                  
                  <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
                  
                  <div className="group/mission">
                    <div className="border-r-4 border-secondary pr-6 group-hover/mission:border-secondary/80 transition-colors duration-300">
                      <h4 className="text-2xl font-bold text-secondary mb-4 group-hover/mission:text-primary transition-colors">
                        رسالتنا
                      </h4>
                      <p className="text-gray-300 leading-relaxed text-lg group-hover/mission:text-gray-200 transition-colors duration-300">
                        تقديم خدمات قانونية شاملة ومتميزة تحمي حقوق عملائنا وتحقق أهدافهم، 
                        من خلال فريق متخصص وتقنيات حديثة، مع الالتزام بأعلى معايير النزاهة والمهنية.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* Enhanced Values Section */}
        <div className="mb-32">
          <div className="text-center mb-20">
            <div className="relative inline-block">
              {/* Section Decorative Elements */}
              <div className="absolute -top-2 -left-2 w-6 h-6 border-l-2 border-t-2 border-primary/40"></div>
              <div className="absolute -top-2 -right-2 w-6 h-6 border-r-2 border-t-2 border-secondary/40"></div>
              
              <h3 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                قيمنا الأساسية
              </h3>
              
              {/* Enhanced Section Underline */}
              <div className="flex items-center justify-center space-x-3 space-x-reverse">
                <div className="w-12 h-0.5 bg-primary/60"></div>
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                <div className="w-16 h-0.5 bg-secondary"></div>
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <div className="w-12 h-0.5 bg-secondary/60"></div>
              </div>
            </div>
            
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
              المبادئ التي توجه عملنا وتحدد هويتنا المهنية
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="group relative">
                {/* Enhanced Card Glow Effect */}
                <div className="absolute -inset-1 bg-primary/15 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                
                {/* Main Card with Professional Design */}
                <div className="relative text-center bg-gray-800/90 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/30 group-hover:border-primary/40 group-hover:scale-[1.02] transition-all duration-500 h-full shadow-xl group-hover:shadow-2xl group-hover:shadow-primary/20">
                  
                  {/* Enhanced Icon Container */}
                  <div className="relative mb-8">
                    <div className="w-24 h-24 bg-primary/10 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 border border-primary/20 shadow-lg group-hover:shadow-primary/30">
                      <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                        <span className="text-white transform group-hover:scale-110 transition-transform duration-300">{value.icon}</span>
                      </div>
                    </div>
                    
                    {/* Icon Background Glow */}
                    <div className="absolute inset-0 w-24 h-24 bg-primary/10 rounded-3xl mx-auto blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  
                  {/* Enhanced Content */}
                  <h4 className="text-xl font-bold text-secondary mb-5 group-hover:text-primary transition-all duration-300">{value.title}</h4>
                  <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-100 transition-colors duration-300">{value.description}</p>
                  
                  {/* Professional Decorative Elements */}
                  <div className="absolute top-6 right-6 w-3 h-3 border border-primary/20 rotate-45 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="absolute bottom-6 left-6 w-2 h-2 bg-secondary/30 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                  
                  {/* Corner Accent */}
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-primary/10 rounded-br-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            ))}
            </div>
          </div>
        </div>

        {/* Leadership Team Section */}
        <div>
          <LeaderProfile>

          </LeaderProfile>

          

        {/* Enhanced Certifications Section */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-primary mb-4">
              الاعتمادات والعضويات
            </h3>
            <div className="w-24 h-1 bg-primary rounded-full mx-auto"></div>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                icon: (
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                  </svg>
                ), 
                title: "هيئة المحامين السعودية", 
                desc: "عضوية فعالة ومعتمدة" 
              },
              { 
                icon: (
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"/>
                    <path d="M12 18L13.09 20.26L16 21L13.09 21.74L12 24L10.91 21.74L8 21L10.91 20.26L12 18Z"/>
                  </svg>
                ), 
                title: "نقابة المحامين العرب", 
                desc: "عضو مؤسس" 
              },
              { 
                icon: (
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ), 
                title: "الاتحاد الدولي للمحامين", 
                desc: "شراكة استراتيجية" 
              },
              { 
                icon: (
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"/>
                  </svg>
                ), 
                title: "ISO 9001:2015", 
                desc: "شهادة الجودة الدولية" 
              }
            ].map((cert, index) => (
                <div key={index} className="group relative">
                  {/* Card Glow Effect */}
                  <div className="absolute -inset-1 bg-primary/10 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition duration-500"></div>
                  
                  {/* Main Certification Card */}
                  <div className="relative text-center bg-gray-800/60 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/30 group-hover:border-primary/40 group-hover:scale-105 transition-all duration-300 h-full shadow-xl">
                    
                    {/* Icon Container */}
                    <div className="relative mb-4">
                      <div className="w-16 h-16 bg-secondary/20 rounded-xl flex items-center justify-center mx-auto group-hover:scale-110 transition-all duration-300 shadow-lg">
                        <span className="text-secondary">{cert.icon}</span>
                      </div>
                    </div>
                    
                    {/* Title */}
                    <h4 className="font-bold text-white mb-2 group-hover:text-primary transition-all duration-300 text-sm leading-tight">{cert.title}</h4>
                    
                    {/* Description */}
                    <p className="text-gray-300 text-xs leading-relaxed group-hover:text-gray-100 transition-colors duration-300">{cert.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Call to Action Section */}
        <div className="text-center">
          <div className="relative max-w-4xl mx-auto">
            {/* Enhanced Background Effects */}
            <div className="absolute inset-0 bg-primary/20 rounded-4xl blur-3xl animate-pulse"></div>
            <div className="absolute -inset-4 bg-secondary/10 rounded-4xl blur-2xl opacity-50"></div>
            
            {/* Enhanced Main Container */}
            <div className="relative bg-gray-800/95 backdrop-blur-2xl rounded-4xl p-16 border-2 border-primary/40 shadow-3xl hover:shadow-primary/30 transition-all duration-1000 group">
              
              {/* Enhanced Decorative Corner Elements */}
              <div className="absolute top-6 left-6 w-6 h-6 border-l-2 border-t-2 border-primary/40 group-hover:border-primary/80 transition-colors duration-700"></div>
              <div className="absolute top-6 right-6 w-6 h-6 border-r-2 border-t-2 border-secondary/40 group-hover:border-secondary/80 transition-colors duration-700"></div>
              <div className="absolute bottom-6 left-6 w-6 h-6 border-l-2 border-b-2 border-secondary/40 group-hover:border-secondary/80 transition-colors duration-700"></div>
              <div className="absolute bottom-6 right-6 w-6 h-6 border-r-2 border-b-2 border-primary/40 group-hover:border-primary/80 transition-colors duration-700"></div>
              
              {/* Enhanced Floating Particles */}
              <div className="absolute top-12 left-1/4 w-2 h-2 bg-primary/30 rounded-full animate-pulse delay-500"></div>
              <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-secondary/40 rounded-full animate-pulse delay-1000"></div>
              <div className="absolute bottom-1/3 left-1/3 w-3 h-3 border border-primary/20 rotate-45 animate-pulse delay-1500"></div>
              <div className="absolute bottom-12 right-1/5 w-1 h-1 bg-primary/35 animate-pulse delay-2000"></div>
              
              <div className="mb-10">
                <div className="relative inline-block mb-6">
                  {/* Enhanced Title Decorations */}
                  <div className="absolute -top-3 -left-6 w-12 h-12 border-2 border-primary/30 rotate-45 opacity-0 group-hover:opacity-100 transition-all duration-700 animate-pulse"></div>
                  <div className="absolute -top-3 -right-6 w-12 h-12 border-2 border-secondary/30 rotate-45 opacity-0 group-hover:opacity-100 transition-all duration-700 animate-pulse delay-300"></div>
                  
                  <h3 className="text-4xl font-black text-primary mb-6 group-hover:text-white transition-colors duration-700 tracking-wide">
                    انضم إلى عائلة عملائنا المميزين
                  </h3>
                </div>
                
                {/* Enhanced Underline */}
                <div className="flex items-center justify-center space-x-3 space-x-reverse mb-8">
                  <div className="w-12 h-0.5 bg-secondary/60 group-hover:bg-secondary transition-colors duration-700"></div>
                  <div className="w-3 h-3 bg-primary rounded-full group-hover:scale-125 transition-transform duration-500 shadow-lg shadow-primary/50"></div>
                  <div className="w-20 h-1 bg-primary rounded-full group-hover:bg-secondary transition-colors duration-700 shadow-lg shadow-primary/30"></div>
                  <div className="w-3 h-3 bg-secondary rounded-full group-hover:scale-125 transition-transform duration-500 delay-100 shadow-lg shadow-secondary/50"></div>
                  <div className="w-12 h-0.5 bg-primary/60 group-hover:bg-primary transition-colors duration-700"></div>
                </div>
                
                <p className="text-gray-300 text-xl leading-relaxed max-w-3xl mx-auto group-hover:text-gray-100 transition-colors duration-700 font-light">
                  اكتشف الفرق الذي يمكن أن تحدثه الخبرة والمهنية في حماية حقوقك القانونية
                </p>
              </div>
              
              {/* Enhanced Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-8 justify-center">
                <button className="group/btn relative overflow-hidden bg-primary text-white font-bold px-12 py-5 rounded-full transition-all duration-500 hover:scale-110 shadow-2xl hover:shadow-primary/50 hover:bg-secondary border-2 border-primary hover:border-secondary cursor-pointer">
                  {/* Button Background Effects */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary opacity-0 group-hover/btn:opacity-100 transition-opacity duration-700"></div>
                  <div className="absolute -inset-2 bg-primary/20 rounded-full blur-xl opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></div>
                  
                  <span className="relative flex items-center justify-center space-x-4 space-x-reverse">
                    <span className="text-lg">تواصل معنا اليوم</span>
                    <FontAwesomeIcon icon={faPhone} className="text-lg group-hover/btn:translate-x-2 group-hover/btn:scale-125 transition-all duration-500" />
                  </span>
                </button>
                
                <button className="group/btn relative overflow-hidden border-3 border-secondary text-secondary hover:text-white font-bold px-12 py-5 rounded-full transition-all duration-500 hover:scale-110 shadow-xl hover:shadow-secondary/50 hover:bg-secondary cursor-pointer">
                  {/* Button Background Effects */}
                  <div className="absolute inset-0 bg-secondary opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute -inset-2 bg-secondary/20 rounded-full blur-xl opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></div>
                  
                  <span className="relative flex items-center justify-center space-x-4 space-x-reverse">
                    <span className="text-lg">احجز استشارة مجانية</span>
                    <FontAwesomeIcon icon={faCalendar} className="text-lg group-hover/btn:translate-x-2 group-hover/btn:scale-125 transition-all duration-500" />
                  </span>
                </button>
              </div>
              
              {/* Enhanced Bottom Accent */}
              <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-primary/40 to-transparent group-hover:via-primary/80 transition-all duration-700 rounded-b-4xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}