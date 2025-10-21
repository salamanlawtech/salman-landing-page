import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHandshake, 
  faFileContract, 
  faBalanceScale, 
  faLandmark, 
  faBuilding,
  faLightbulb,
  faBook,
  faGraduationCap,
  faGlobe,
  faClock
} from '@fortawesome/free-solid-svg-icons';

export default function Services() {
  const services = [
    {
      title: "الاستشارات القانونية",
      description: "استشارات قانونية شاملة في جميع المجالات",
      icon: <FontAwesomeIcon icon={faLightbulb} className="w-8 h-8" />,
      price: "من 500 ريال",
      duration: "60 دقيقة",
      features: [
        "استشارة شخصية مع محامي متخصص",
        "تحليل قانوني شامل للحالة",
        "خطة عمل واضحة ومحددة",
        "متابعة لمدة أسبوع مجاناً"
      ],
      popular: false
    },
    {
      title: "صياغة العقود",
      description: "صياغة ومراجعة العقود بجميع أنواعها",
      icon: <FontAwesomeIcon icon={faFileContract} className="w-8 h-8" />,
      price: "من 1,000 ريال",
      duration: "3-5 أيام عمل",
      features: [
        "صياغة عقود مخصصة",
        "مراجعة قانونية دقيقة",
        "ضمان الحماية القانونية",
        "تعديلات مجانية لمدة شهر"
      ],
      popular: true
    },
    {
      title: "التمثيل القانوني",
      description: "تمثيل أمام المحاكم والجهات القضائية",
      icon: <FontAwesomeIcon icon={faBalanceScale} className="w-8 h-8" />,
      price: "حسب القضية",
      duration: "حسب مدة القضية",
      features: [
        "تمثيل أمام جميع المحاكم",
        "إعداد المرافعات والدفوع",
        "متابعة شاملة للقضية",
        "تقارير دورية للعميل"
      ],
      popular: false
    },
    {
      title: "التحكيم والوساطة",
      description: "حل النزاعات خارج المحاكم",
      icon: <FontAwesomeIcon icon={faHandshake} className="w-8 h-8" />,
      price: "من 2,000 ريال",
      duration: "1-3 أشهر",
      features: [
        "وساطة متخصصة",
        "تحكيم معتمد",
        "حلول سريعة وفعالة",
        "توفير في التكاليف والوقت"
      ],
      popular: false
    },
    {
      title: "الخدمات الحكومية",
      description: "إنجاز المعاملات الحكومية والرسمية",
      icon: <FontAwesomeIcon icon={faLandmark} className="w-8 h-8" />,
      price: "من 300 ريال",
      duration: "1-7 أيام عمل",
      features: [
        "استخراج التراخيص",
        "تجديد الوثائق",
        "المعاملات الحكومية",
        "متابعة حتى الإنجاز"
      ],
      popular: false
    },
    {
      title: "الاستشارات الشركات",
      description: "خدمات قانونية متكاملة للشركات",
      icon: <FontAwesomeIcon icon={faBuilding} className="w-8 h-8" />,
      price: "باقات شهرية",
      duration: "خدمة مستمرة",
      features: [
        "استشارات قانونية مستمرة",
        "مراجعة العقود والاتفاقيات",
        "الامتثال القانوني",
        "دعم قانوني على مدار الساعة"
      ],
      popular: true
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/5 via-transparent to-secondary/5"></div>
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.06]">
        <div className="w-full h-full" style={{
          backgroundImage: `linear-gradient(rgba(197,165,102,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(197,165,102,0.3) 1px, transparent 1px)`,
          backgroundSize: '45px 45px'
        }}></div>
      </div>
      
      {/* Decorative Grid Accent */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="w-full h-full" style={{
          backgroundImage: `linear-gradient(rgba(197,165,102,0.8) 2px, transparent 2px), linear-gradient(90deg, rgba(197,165,102,0.8) 2px, transparent 2px)`,
          backgroundSize: '100px 100px'
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
            خدماتنا القانونية
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
            نقدم مجموعة شاملة من الخدمات القانونية المتخصصة لتلبية جميع احتياجاتكم
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group relative">
              {/* Enhanced Card Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-secondary/20 to-secondary/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
              
              {/* Main Card */}
              <div className={`relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-500 transform hover:-translate-y-2 ${
                service.popular ? 'border-secondary/60 shadow-lg shadow-secondary/20' : 'border-secondary/20 hover:border-secondary/40'
              }`}>
                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-secondary to-yellow-600 text-black px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                      الأكثر طلباً
                    </span>
                  </div>
                )}

                {/* Service Header */}
                <div className="text-center mb-6">
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {service.description}
                  </p>
                  
                  {/* Price and Duration */}
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-secondary">
                      {service.price}
                    </div>
                    <div className="text-sm text-gray-400">
                      المدة: {service.duration}
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3 space-x-reverse">
                      <span className="text-secondary text-lg mt-0.5">✓</span>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Action Button */}
                <button
                  className={`w-full font-semibold py-3 px-6 rounded-lg transition-all duration-300 ${
                    service.popular
                      ? 'bg-secondary hover:bg-secondary/90 text-black'
                      : 'border-2 border-secondary text-secondary hover:bg-secondary hover:text-black'
                  }`}
                >
                  طلب الخدمة
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="mt-20">
          <div className="relative">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/10 via-secondary/5 to-secondary/10 rounded-2xl blur-xl"></div>
            
            <div className="relative bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-sm rounded-2xl p-8 border border-secondary/20">
              <div className="text-center mb-12">
                <h3 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
                  خدمات إضافية متخصصة
                </h3>
                <div className="flex items-center justify-center space-x-3 space-x-reverse mb-6">
                  <div className="w-12 h-0.5 bg-secondary/60"></div>
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <div className="w-16 h-0.5 bg-secondary"></div>
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <div className="w-12 h-0.5 bg-secondary/60"></div>
                </div>
                <p className="text-gray-300 mb-8 max-w-3xl mx-auto text-lg">
                  نقدم أيضاً خدمات متخصصة أخرى حسب احتياجاتكم الخاصة
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-secondary/20 to-secondary/10 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-secondary/20 hover:border-secondary/40 transition-all duration-300 transform hover:-translate-y-1">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary/20 transition-colors duration-300">
                        <FontAwesomeIcon icon={faBook} className="w-8 h-8 text-secondary" />
                      </div>
                      <h4 className="font-bold text-white mb-2 text-lg">البحوث القانونية</h4>
                      <p className="text-gray-300 text-sm leading-relaxed">دراسات وبحوث قانونية متخصصة ومعمقة</p>
                    </div>
                  </div>
                </div>
                
                <div className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-secondary/20 to-secondary/10 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-secondary/20 hover:border-secondary/40 transition-all duration-300 transform hover:-translate-y-1">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary/20 transition-colors duration-300">
                        <FontAwesomeIcon icon={faGraduationCap} className="w-8 h-8 text-secondary" />
                      </div>
                      <h4 className="font-bold text-white mb-2 text-lg">التدريب القانوني</h4>
                      <p className="text-gray-300 text-sm leading-relaxed">دورات تدريبية متخصصة في القانون</p>
                    </div>
                  </div>
                </div>
                
                <div className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-secondary/20 to-secondary/10 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-secondary/20 hover:border-secondary/40 transition-all duration-300 transform hover:-translate-y-1">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary/20 transition-colors duration-300">
                        <FontAwesomeIcon icon={faGlobe} className="w-8 h-8 text-secondary" />
                      </div>
                      <h4 className="font-bold text-white mb-2 text-lg">الاستشارات الدولية</h4>
                      <p className="text-gray-300 text-sm leading-relaxed">قانون دولي وتجارة خارجية</p>
                    </div>
                  </div>
                </div>
                
                <div className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-secondary/20 to-secondary/10 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-secondary/20 hover:border-secondary/40 transition-all duration-300 transform hover:-translate-y-1">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary/20 transition-colors duration-300">
                        <FontAwesomeIcon icon={faClock} className="w-8 h-8 text-secondary" />
                      </div>
                      <h4 className="font-bold text-white mb-2 text-lg">خدمة 24/7</h4>
                      <p className="text-gray-300 text-sm leading-relaxed">دعم قانوني طارئ على مدار الساعة</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Call to Action */}
        <div className="text-center mt-20">
          <div className="relative">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/5 via-secondary/10 to-secondary/5 rounded-2xl blur-2xl"></div>
            
            <div className="relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-sm rounded-2xl p-10 max-w-5xl mx-auto border border-secondary/30 shadow-2xl">
              <div className="text-center">
                <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FontAwesomeIcon icon={faLightbulb} className="w-10 h-10 text-secondary" />
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
                  هل تحتاج خدمة مخصصة؟
                </h3>
                
                <div className="flex items-center justify-center space-x-3 space-x-reverse mb-6">
                  <div className="w-16 h-0.5 bg-secondary/60"></div>
                  <div className="w-3 h-3 bg-secondary rounded-full"></div>
                  <div className="w-20 h-0.5 bg-secondary"></div>
                  <div className="w-3 h-3 bg-secondary rounded-full"></div>
                  <div className="w-16 h-0.5 bg-secondary/60"></div>
                </div>
                
                <p className="text-gray-300 mb-8 max-w-3xl mx-auto text-lg leading-relaxed">
                  تواصل معنا لمناقشة احتياجاتك الخاصة وسنقوم بتصميم حلول قانونية مناسبة ومتخصصة لك
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="group relative overflow-hidden bg-secondary hover:bg-secondary/90 text-black font-bold px-10 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-secondary/25 cursor-pointer">
                    <span className="relative z-10">احجز استشارة مجانية</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                  <button className="group border-2 border-secondary text-secondary hover:bg-secondary hover:text-black font-bold px-10 py-4 rounded-full transition-all duration-300 transform hover:scale-105 cursor-pointer">
                    اطلب عرض سعر
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}