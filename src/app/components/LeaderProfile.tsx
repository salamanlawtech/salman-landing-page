import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faGraduationCap, faStar, faTrophy } from '@fortawesome/free-solid-svg-icons';

export default function LeaderProfile() {
  const leader = {
    name: "سلمان بن محمد الفيفي",
    position: "المؤسس والشريك الإداري",
    image: "/backgrounds/salman-avatar.jpeg",
    education: "بكالوريوس الحقوق - جامعة الملك سعود، ماجستير القانون التجاري - جامعة الملك عبدالعزيز",
    specialization: "القانون التجاري، قانون الشركات، التقاضي، الاستشارات القانونية",
    experience: "أكثر من 15 عاماً في مجال المحاماة والاستشارات القانونية",
    achievements: "عضو الهيئة السعودية للمحامين، حاصل على ترخيص مزاولة المهنة من وزارة العدل"
  };

  return (
    <div className="mb-32">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h3 className="text-4xl font-bold text-primary mb-4">
          قائد المكتب
        </h3>
        <div className="w-24 h-1 bg-primary rounded-full mx-auto"></div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto">
        <div className="bg-gray-800/60 backdrop-blur-lg rounded-2xl overflow-hidden border border-gray-700/30 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
            
            {/* Left Side - Image (Full Frame) */}
            <div className="lg:col-span-1 p-6 bg-gray-800/40 flex items-center justify-center">
              <div className="relative w-full h-full">
                <div className="w-full h-80 lg:h-96 rounded-xl overflow-hidden shadow-lg border-2 border-primary/20">
                  {leader.image ? (
                    <img 
                      src={leader.image} 
                      alt={leader.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-primary flex items-center justify-center">
                      <span className="text-white text-4xl font-bold">{leader.name.split(' ')[1]?.[0] || leader.name[0]}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Right Side - Information (Larger) */}
            <div className="lg:col-span-2 p-8">
              {/* Name and Position */}
              <div className="mb-8">
                <h4 className="text-2xl font-bold text-white mb-2">
                  {leader.name}
                </h4>
                <p className="text-secondary text-lg font-medium">
                  {leader.position}
                </p>
              </div>

              {/* Information Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Education */}
                <div className="group">
                  <div className="flex items-start space-x-3 space-x-reverse p-4 rounded-lg hover:bg-gray-700/30 transition-colors duration-300">
                    <div className="w-10 h-10 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0 me-4">
                      <FontAwesomeIcon icon={faGraduationCap} className="text-secondary text-sm" />
                    </div>
                    <div>
                      <h5 className="text-white font-semibold mb-1 text-sm">التعليم</h5>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {leader.education}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Specialization */}
                <div className="group">
                  <div className="flex items-start space-x-3 space-x-reverse p-4 rounded-lg hover:bg-gray-700/30 transition-colors duration-300">
                    <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 me-4">
                      <FontAwesomeIcon icon={faStar} className="text-primary text-sm" />
                    </div>
                    <div>
                      <h5 className="text-white font-semibold mb-1 text-sm">التخصص</h5>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {leader.specialization}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Experience */}
                <div className="group">
                  <div className="flex items-start space-x-3 space-x-reverse p-4 rounded-lg hover:bg-gray-700/30 transition-colors duration-300">
                    <div className="w-10 h-10 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0 me-4">
                      <FontAwesomeIcon icon={faCalendar} className="text-secondary text-sm" />
                    </div>
                    <div>
                      <h5 className="text-white font-semibold mb-1 text-sm">الخبرة</h5>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {leader.experience}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Achievements */}
                <div className="group">
                  <div className="flex items-start space-x-3 space-x-reverse p-4 rounded-lg hover:bg-gray-700/30 transition-colors duration-300">
                    <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 me-4">
                      <FontAwesomeIcon icon={faTrophy} className="text-primary text-sm" />
                    </div>
                    <div>
                      <h5 className="text-white font-semibold mb-1 text-sm">الإنجازات</h5>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {leader.achievements}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}