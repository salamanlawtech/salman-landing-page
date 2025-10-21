import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faLightbulb, 
  faBuilding, 
  faFileContract, 
  faBalanceScale, 
  faUsers, 
  faBriefcase, 
  faHome, 
  faLandmark, 
  faCopyright,
  faGavel
} from '@fortawesome/free-solid-svg-icons';

export default function Specializations() {
  const specializations = [
    {
      title: "القانون التجاري",
      description: "تأسيس الشركات، العقود التجارية، والنزاعات التجارية",
      icon: <FontAwesomeIcon icon={faBuilding} className="w-8 h-8" />,
      features: [
        "تأسيس الشركات بجميع أنواعها",
        "صياغة ومراجعة العقود التجارية",
        "حل النزاعات التجارية",
        "الاستشارات القانونية للأعمال"
      ]
    },
    {
      title: "القانون المدني",
      description: "العقود المدنية، المسؤولية المدنية، والحقوق الشخصية",
      icon: <FontAwesomeIcon icon={faFileContract} className="w-8 h-8" />,
      features: [
        "صياغة العقود المدنية",
        "قضايا المسؤولية المدنية",
        "الحقوق الشخصية والمالية",
        "التعويضات والأضرار"
      ]
    },
    {
      title: "القانون الجنائي",
      description: "الدفاع في القضايا الجنائية والجزائية",
      icon: <FontAwesomeIcon icon={faBalanceScale} className="w-8 h-8" />,
      features: [
        "الدفاع في القضايا الجنائية",
        "الاستئناف والنقض",
        "الكفالة والإفراج",
        "الاستشارات الجنائية"
      ]
    },
    {
      title: "قانون الأحوال الشخصية",
      description: "الزواج، الطلاق، الحضانة، والميراث",
      icon: <FontAwesomeIcon icon={faUsers} className="w-8 h-8" />,
      features: [
        "قضايا الزواج والطلاق",
        "الحضانة والنفقة",
        "تقسيم الميراث",
        "الوصايا والأوقاف"
      ]
    },
    {
      title: "قانون العمل",
      description: "علاقات العمل، النزاعات العمالية، والتأمينات",
      icon: <FontAwesomeIcon icon={faBriefcase} className="w-8 h-8" />,
      features: [
        "عقود العمل والتوظيف",
        "النزاعات العمالية",
        "التأمينات الاجتماعية",
        "حقوق العمال وأصحاب العمل"
      ]
    },
    {
      title: "القانون العقاري",
      description: "البيع والشراء، الإيجار، والنزاعات العقارية",
      icon: <FontAwesomeIcon icon={faHome} className="w-8 h-8" />,
      features: [
        "عقود البيع والشراء العقاري",
        "عقود الإيجار والتأجير",
        "النزاعات العقارية",
        "التطوير العقاري"
      ]
    },
    {
      title: "القانون الإداري",
      description: "المنازعات الإدارية والحكومية",
      icon: <FontAwesomeIcon icon={faLandmark} className="w-8 h-8" />,
      features: [
        "المنازعات الإدارية",
        "العقود الحكومية",
        "التراخيص والتصاريح",
        "القضايا ضد الجهات الحكومية"
      ]
    },
    {
      title: "قانون الملكية الفكرية",
      description: "حماية العلامات التجارية وبراءات الاختراع",
      icon: <FontAwesomeIcon icon={faCopyright} className="w-8 h-8" />,
      features: [
        "تسجيل العلامات التجارية",
        "براءات الاختراع",
        "حقوق الطبع والنشر",
        "حماية الملكية الفكرية"
      ]
    }
  ];

  return (
    <section id="specializations" className="py-20 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/5 via-transparent to-secondary/5"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="w-full h-full" style={{
          backgroundImage: `linear-gradient(rgba(197,165,102,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(197,165,102,0.5) 1px, transparent 1px)`,
          backgroundSize: '55px 55px'
        }}></div>
      </div>
      
      {/* Large Grid Accent */}
      <div className="absolute inset-0 opacity-[0.01]">
        <div className="w-full h-full" style={{
          backgroundImage: `linear-gradient(rgba(197,165,102,0.9) 4px, transparent 4px), linear-gradient(90deg, rgba(197,165,102,0.9) 4px, transparent 4px)`,
          backgroundSize: '200px 200px'
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
            اختصاصاتنا القانونية
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
            نقدم خدمات قانونية شاملة في جميع مجالات القانون بخبرة ومهنية عالية
          </p>
        </div>

        {/* Specializations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specializations.map((spec, index) => (
            <div key={index} className="group relative">
              {/* Enhanced Card Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-secondary/20 to-secondary/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
              
              {/* Main Card */}
              <div className="relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-sm rounded-2xl p-6 border border-secondary/20 hover:border-secondary/40 transition-all duration-500 transform hover:-translate-y-2 group">
                {/* Icon */}
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-3xl text-secondary">
                      {spec.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-secondary transition-colors duration-300">
                    {spec.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {spec.description}
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-6">
                  {spec.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3 space-x-reverse">
                      <span className="text-secondary text-sm mt-1 font-bold">✓</span>
                      <span className="text-sm text-gray-300 leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Action Button */}
                <div className="pt-4 border-t border-secondary/20">
                  <button className="w-full bg-gradient-to-r from-secondary to-yellow-600 hover:from-yellow-600 hover:to-secondary text-black font-semibold py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-secondary/25 cursor-pointer">
                    استشارة مجانية
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-secondary/10 rounded-lg p-8 border border-secondary/20">
            <h3 className="text-2xl font-bold text-secondary mb-4">
              لم تجد اختصاصك؟
            </h3>
            <p className="text-white mb-6 max-w-2xl mx-auto">
              نحن نتعامل مع جميع أنواع القضايا القانونية. تواصل معنا للحصول على استشارة مخصصة لحالتك
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-secondary hover:bg-secondary/90 text-black font-semibold px-8 py-3 rounded-full transition-colors duration-300 cursor-pointer">
                تواصل معنا الآن
              </button>
              <button className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-black font-semibold px-8 py-3 rounded-full transition-all duration-300 cursor-pointer">
                جدولة موعد
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}