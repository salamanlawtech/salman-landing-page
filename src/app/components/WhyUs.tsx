import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullseye, faChartLine, faUsers, faClock, faDollarSign, faLock } from '@fortawesome/free-solid-svg-icons';

export default function WhyUs() {
  const advantages = [
    {
      title: "خبرة تمتد لسنوات",
      description: "فريق من المحامين ذوي الخبرة الواسعة في جميع مجالات القانون",
      icon: <FontAwesomeIcon icon={faBullseye} className="w-8 h-8" />,
      stats: "15+ سنة خبرة"
    },
    {
      title: "نسبة نجاح عالية",
      description: "سجل حافل من القضايا المكسوبة والنتائج الإيجابية لعملائنا",
      icon: <FontAwesomeIcon icon={faChartLine} className="w-8 h-8" />,
      stats: "95% نسبة نجاح"
    },
    {
      title: "فريق متخصص",
      description: "محامون متخصصون في مختلف فروع القانون",
      icon: <FontAwesomeIcon icon={faUsers} className="w-8 h-8" />,
      stats: "20+ محامي متخصص"
    },
    {
      title: "خدمة على مدار الساعة",
      description: "دعم قانوني متاح في أي وقت للحالات الطارئة",
      icon: <FontAwesomeIcon icon={faClock} className="w-8 h-8" />,
      stats: "24/7 متاح"
    },
    {
      title: "أسعار تنافسية",
      description: "خدمات قانونية عالية الجودة بأسعار مناسبة ومرونة في الدفع",
      icon: <FontAwesomeIcon icon={faDollarSign} className="w-8 h-8" />,
      stats: "أفضل الأسعار"
    },
    {
      title: "سرية تامة",
      description: "نضمن الحفاظ على سرية معلومات عملائنا بأعلى معايير الأمان",
      icon: <FontAwesomeIcon icon={faLock} className="w-8 h-8" />,
      stats: "سرية مضمونة"
    }
  ];

  const testimonials = [
    {
      name: "أحمد محمد العلي",
      role: "رجل أعمال",
      content: "خدمة متميزة وفريق محترف. ساعدوني في حل قضية تجارية معقدة بكفاءة عالية.",
      rating: 5
    },
    {
      name: "فاطمة سعد الغامدي",
      role: "مديرة شركة",
      content: "أنصح بشدة بمجموعة سلمان الفيفي. خبرة واسعة ونتائج مضمونة.",
      rating: 5
    },
    {
      name: "خالد عبدالله النمر",
      role: "مستثمر",
      content: "تعاملت معهم في عدة قضايا وكانت النتائج دائماً مرضية. فريق موثوق.",
      rating: 5
    }
  ];

  return (
    <section id="why-us" className="py-20 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/5 via-transparent to-secondary/5"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.05]">
        <div className="w-full h-full" style={{
          backgroundImage: `linear-gradient(rgba(197,165,102,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(197,165,102,0.4) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      {/* Subtle Accent Grid */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div className="w-full h-full" style={{
          backgroundImage: `linear-gradient(rgba(197,165,102,0.7) 3px, transparent 3px), linear-gradient(90deg, rgba(197,165,102,0.7) 3px, transparent 3px)`,
          backgroundSize: '150px 150px'
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
            لماذا مجموعة سلمان الفيفي؟
          </h2>
          
          {/* Enhanced Section Underline */}
          <div className="flex items-center justify-center space-x-3 space-x-reverse mb-6">
            <div className="w-12 h-0.5 bg-secondary/60"></div>
            <div className="w-2 h-2 bg-secondary rounded-full"></div>
            <div className="w-16 h-0.5 bg-secondary"></div>
            <div className="w-2 h-2 bg-secondary rounded-full"></div>
            <div className="w-12 h-0.5 bg-secondary/60"></div>
          </div>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            نحن الخيار الأمثل لجميع احتياجاتكم القانونية بفضل خبرتنا ومهنيتنا العالية
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {advantages.map((advantage, index) => (
            <div key={index} className="group relative">
              {/* Enhanced Card Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-secondary/20 to-secondary/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
              
              {/* Main Card */}
              <div className="relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-sm rounded-2xl p-8 border border-secondary/20 hover:border-secondary/40 transition-all duration-500 transform hover:-translate-y-2">
                <div className="text-center">
                  <div className="text-secondary text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    {advantage.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-secondary mb-4">
                    {advantage.title}
                  </h3>
                  <p className="text-gray-300 mb-6 text-base leading-relaxed">
                    {advantage.description}
                  </p>
                  <div className="bg-gradient-to-r from-secondary/20 to-secondary/30 rounded-full px-6 py-3 inline-block border border-secondary/30">
                    <span className="text-secondary font-bold text-sm">
                      {advantage.stats}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics Section */}
        <div className="bg-gradient-to-r from-gray-900/90 to-black/90 backdrop-blur-sm rounded-2xl p-10 mb-20 border border-secondary/30 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/5 to-transparent"></div>
          
          <div className="relative z-10">
            <h3 className="text-4xl font-bold text-secondary text-center mb-12">
              أرقامنا تتحدث عن نفسها
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="text-5xl font-bold text-secondary mb-3 transform group-hover:scale-110 transition-transform duration-300">500+</div>
                <div className="text-gray-300 font-medium">قضية مكسوبة</div>
              </div>
              <div className="text-center group">
                <div className="text-5xl font-bold text-secondary mb-3 transform group-hover:scale-110 transition-transform duration-300">1000+</div>
                <div className="text-gray-300 font-medium">عميل راضي</div>
              </div>
              <div className="text-center group">
                <div className="text-5xl font-bold text-secondary mb-3 transform group-hover:scale-110 transition-transform duration-300">15+</div>
                <div className="text-gray-300 font-medium">سنة خبرة</div>
              </div>
              <div className="text-center group">
                <div className="text-5xl font-bold text-secondary mb-3 transform group-hover:scale-110 transition-transform duration-300">95%</div>
                <div className="text-gray-300 font-medium">نسبة نجاح</div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h3 className="text-4xl font-bold text-secondary text-center mb-12">
            ماذا يقول عملاؤنا
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="group relative">
                {/* Card Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-secondary/20 to-secondary/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                
                {/* Main Card */}
                <div className="relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-sm rounded-2xl p-8 border border-secondary/20 hover:border-secondary/40 transition-all duration-500 transform hover:-translate-y-2">
                  <div className="flex items-center mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-secondary text-2xl">★</span>
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic text-lg leading-relaxed">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>
                  <div className="border-t border-secondary/20 pt-6">
                    <div className="font-bold text-secondary text-lg">{testimonial.name}</div>
                    <div className="text-sm text-gray-400 mt-1">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>



        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-sm rounded-2xl p-10 border border-secondary/30 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/10 via-transparent to-secondary/5"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-secondary mb-6">
                اختر الأفضل لحقوقك القانونية
              </h3>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
                انضم إلى آلاف العملاء الذين وثقوا بنا واختاروا مجموعة سلمان الفيفي لحماية حقوقهم
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="bg-secondary hover:bg-secondary/90 text-black font-bold px-10 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-secondary/20 cursor-pointer">
                  ابدأ معنا اليوم
                </button>
                <button className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-black font-bold px-10 py-4 rounded-full transition-all duration-300 transform hover:scale-105 cursor-pointer">
                  تعرف على فريقنا
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}