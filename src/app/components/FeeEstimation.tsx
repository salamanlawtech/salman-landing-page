'use client';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';

export default function FeeEstimation() {
  const [selectedService, setSelectedService] = useState('');
  const [caseComplexity, setCaseComplexity] = useState('');
  const [estimatedDuration, setEstimatedDuration] = useState('');
  const [clientType, setClientType] = useState('');
  const [urgency, setUrgency] = useState('');
  const [estimatedFee, setEstimatedFee] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const services = [
    { id: 'civil', name: 'القضايا المدنية', baseFee: 15000 },
    { id: 'commercial', name: 'القضايا التجارية', baseFee: 25000 },
    { id: 'criminal', name: 'القضايا الجنائية', baseFee: 20000 },
    { id: 'family', name: 'قضايا الأحوال الشخصية', baseFee: 12000 },
    { id: 'labor', name: 'قضايا العمل', baseFee: 10000 },
    { id: 'real_estate', name: 'القضايا العقارية', baseFee: 18000 },
    { id: 'intellectual', name: 'الملكية الفكرية', baseFee: 22000 },
    { id: 'consultation', name: 'استشارة قانونية', baseFee: 500 }
  ];

  const complexityMultipliers = [
    { id: 'simple', name: 'بسيطة', multiplier: 1 },
    { id: 'medium', name: 'متوسطة', multiplier: 1.5 },
    { id: 'complex', name: 'معقدة', multiplier: 2.5 },
    { id: 'very_complex', name: 'معقدة جداً', multiplier: 4 }
  ];

  const durationMultipliers = [
    { id: 'short', name: 'أقل من شهر', multiplier: 0.8 },
    { id: 'medium', name: '1-6 أشهر', multiplier: 1 },
    { id: 'long', name: '6-12 شهر', multiplier: 1.3 },
    { id: 'very_long', name: 'أكثر من سنة', multiplier: 1.8 }
  ];

  const clientTypeMultipliers = [
    { id: 'individual', name: 'فرد', multiplier: 1 },
    { id: 'small_business', name: 'شركة صغيرة', multiplier: 1.2 },
    { id: 'medium_business', name: 'شركة متوسطة', multiplier: 1.5 },
    { id: 'large_business', name: 'شركة كبيرة', multiplier: 2 }
  ];

  const urgencyMultipliers = [
    { id: 'normal', name: 'عادي', multiplier: 1 },
    { id: 'urgent', name: 'عاجل', multiplier: 1.3 },
    { id: 'very_urgent', name: 'عاجل جداً', multiplier: 1.6 }
  ];

  const calculateFee = () => {
    const service = services.find(s => s.id === selectedService);
    const complexity = complexityMultipliers.find(c => c.id === caseComplexity);
    const duration = durationMultipliers.find(d => d.id === estimatedDuration);
    const client = clientTypeMultipliers.find(c => c.id === clientType);
    const urgent = urgencyMultipliers.find(u => u.id === urgency);

    if (service && complexity && duration && client && urgent) {
      const baseFee = service.baseFee;
      const totalMultiplier = complexity.multiplier * duration.multiplier * client.multiplier * urgent.multiplier;
      const calculatedFee = Math.round(baseFee * totalMultiplier);
      setEstimatedFee(calculatedFee);
      setShowResult(true);
    }
  };

  const resetCalculator = () => {
    setSelectedService('');
    setCaseComplexity('');
    setEstimatedDuration('');
    setClientType('');
    setUrgency('');
    setEstimatedFee(0);
    setShowResult(false);
  };

  const isFormComplete = selectedService && caseComplexity && estimatedDuration && clientType && urgency;

  return (
    <section id="fee-estimation" className="py-20 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/5 via-transparent to-secondary/5"></div>
      
      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: '25px 25px'
        }}
      ></div>
      
      {/* Secondary Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-8"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 215, 0, 0.15) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255, 215, 0, 0.15) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      ></div>
      
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
            تقدير الأتعاب
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
            احصل على تقدير مبدئي لأتعاب الخدمات القانونية بناءً على تفاصيل قضيتك
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Calculator Form */}
          <div className="group relative">
            {/* Enhanced Card Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-secondary/20 to-secondary/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
            
            <div className="relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-sm rounded-2xl p-8 border border-secondary/20 hover:border-secondary/40 transition-all duration-500">
              <h3 className="text-2xl font-bold text-secondary mb-6">حاسبة تقدير الأتعاب</h3>
              
              <div className="space-y-6">
                {/* Service Type */}
                <div>
                  <label className="block text-sm font-semibold text-secondary mb-3">
                    نوع الخدمة المطلوبة
                  </label>
                  <select
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full p-3 bg-gray-800/50 border border-secondary/30 rounded-lg text-white focus:ring-2 focus:ring-secondary focus:border-secondary transition-all duration-300"
                  >
                    <option value="">اختر نوع الخدمة</option>
                    {services.map(service => (
                      <option key={service.id} value={service.id}>
                        {service.name}
                      </option>
                    ))}
                  </select>
                </div>

              {/* Case Complexity */}
                <div>
                  <label className="block text-sm font-semibold text-secondary mb-3">
                    درجة تعقيد القضية
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {complexityMultipliers.map(complexity => (
                      <button
                        key={complexity.id}
                        onClick={() => setCaseComplexity(complexity.id)}
                        className={`p-3 rounded-lg border-2 transition-all duration-300 ${
                          caseComplexity === complexity.id
                            ? 'border-secondary bg-secondary text-black'
                            : 'border-gray-600 text-gray-300 hover:border-secondary'
                        }`}
                      >
                        {complexity.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Duration */}
                <div>
                  <label className="block text-sm font-semibold text-secondary mb-3">
                    المدة المتوقعة
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {durationMultipliers.map(duration => (
                      <button
                        key={duration.id}
                        onClick={() => setEstimatedDuration(duration.id)}
                        className={`p-3 rounded-lg border-2 transition-all duration-300 cursor-pointer ${
                          estimatedDuration === duration.id
                            ? 'border-secondary bg-secondary text-black'
                            : 'border-gray-600 text-gray-300 hover:border-secondary'
                        }`}
                      >
                        {duration.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Client Type */}
                <div>
                  <label className="block text-sm font-semibold text-secondary mb-3">
                    نوع العميل
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {clientTypeMultipliers.map(client => (
                      <button
                        key={client.id}
                        onClick={() => setClientType(client.id)}
                        className={`p-3 rounded-lg border-2 transition-all duration-300 cursor-pointer ${
                          clientType === client.id
                            ? 'border-secondary bg-secondary text-black'
                            : 'border-gray-600 text-gray-300 hover:border-secondary'
                        }`}
                      >
                        {client.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Urgency */}
                <div>
                  <label className="block text-sm font-semibold text-secondary mb-3">
                    درجة الاستعجال
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {urgencyMultipliers.map(urgent => (
                      <button
                        key={urgent.id}
                        onClick={() => setUrgency(urgent.id)}
                        className={`p-3 rounded-lg border-2 transition-all duration-300 cursor-pointer ${
                          urgency === urgent.id
                            ? 'border-secondary bg-secondary text-black'
                            : 'border-gray-600 text-gray-300 hover:border-secondary'
                        }`}
                      >
                        {urgent.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Calculate Button */}
                <div className="flex gap-3">
                  <button
                    onClick={calculateFee}
                    disabled={!isFormComplete}
                    className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      isFormComplete
                        ? 'bg-secondary hover:bg-secondary/90 text-black cursor-pointer'
                        : 'bg-gray-700 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    احسب التقدير
                  </button>
                  <button
                    onClick={resetCalculator}
                    className="px-6 py-3 border-2 border-secondary text-secondary hover:bg-secondary hover:text-black rounded-lg font-semibold transition-all duration-300 cursor-pointer"
                  >
                    إعادة تعيين
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Results and Information */}
          <div className="space-y-8">
            {/* Estimation Result */}
            {showResult && (
              <div className="group relative">
                {/* Enhanced Card Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-secondary/30 to-secondary/20 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition-all duration-700"></div>
                
                <div className="relative bg-gradient-to-br from-secondary/20 to-secondary/10 backdrop-blur-sm rounded-2xl p-8 border border-secondary/40">
                  <h3 className="text-2xl font-bold text-secondary mb-4">التقدير المبدئي</h3>
                  <div className="text-center">
                    <div className="text-5xl font-bold text-secondary mb-2">
                      {estimatedFee.toLocaleString()} ريال
                    </div>
                    <p className="text-gray-300 mb-6">
                      هذا تقدير مبدئي قابل للتعديل حسب تفاصيل القضية
                    </p>
                    <div className="bg-black/30 rounded-lg p-4 border border-secondary/20">
                      <h4 className="font-semibold text-secondary mb-2">يشمل التقدير:</h4>
                      <ul className="text-sm space-y-1 text-gray-300">
                        <li>• أتعاب المحاماة الأساسية</li>
                        <li>• رسوم المحكمة والإجراءات</li>
                        <li>• تكاليف الخبراء والشهود</li>
                        <li>• المصاريف الإدارية</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Pricing Information */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-secondary/20 to-secondary/10 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition-all duration-700"></div>
              
              <div className="relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-sm rounded-2xl p-8 border border-secondary/20 hover:border-secondary/40 transition-all duration-500">
                <h3 className="text-2xl font-bold text-secondary mb-6">معلومات التسعير</h3>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-secondary pl-4">
                    <h4 className="font-semibold text-secondary mb-2 flex items-center space-x-2 space-x-reverse">
                      <FontAwesomeIcon icon={faLightbulb} className="text-secondary" />
                      <span>نصائح مهمة</span>
                    </h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• التقدير المعروض هو تقدير مبدئي فقط</li>
                      <li>• الأتعاب النهائية تحدد بعد دراسة القضية</li>
                      <li>• نوفر خطط دفع مرنة ومناسبة</li>
                      <li>• استشارة أولية مجانية لمدة 30 دقيقة</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-secondary pl-4">
                    <h4 className="font-semibold text-secondary mb-2">📋 ما يؤثر على التسعير</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• تعقيد القضية ومتطلباتها</li>
                      <li>• عدد الجلسات المتوقعة</li>
                      <li>• الحاجة لخبراء متخصصين</li>
                      <li>• المدة الزمنية المطلوبة</li>
                    </ul>
                  </div>

                  <div className="bg-secondary/10 rounded-lg p-4 border border-secondary/20">
                    <h4 className="font-semibold text-secondary mb-2">🎯 ضمانات الجودة</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• شفافية كاملة في التسعير</li>
                      <li>• لا توجد رسوم خفية</li>
                      <li>• ضمان استرداد في حالة عدم الرضا</li>
                      <li>• تقارير دورية عن سير القضية</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact for Consultation */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-secondary/40 to-secondary/20 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition-all duration-700"></div>
              
              <div className="relative bg-gradient-to-r from-secondary/20 to-secondary/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-secondary/30">
                <h3 className="text-2xl font-bold text-secondary mb-4">احصل على استشارة مجانية</h3>
                <p className="mb-6 text-gray-300">
                  تواصل معنا الآن لمناقشة قضيتك والحصول على تقدير دقيق للأتعاب
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
  onClick={() =>
    window.open(
      "https://wa.me/966555935722?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85%D8%8C%20%D8%A3%D8%B1%D8%BA%D8%A8%20%D9%81%D9%8A%20%D8%A7%D8%B3%D8%AA%D8%B4%D8%A7%D8%B1%D8%A9%20%D9%82%D8%A7%D9%86%D9%88%D9%86%D9%8A%D8%A9.",
      "_blank"
    )
  }
  className="bg-secondary text-black px-8 py-3 rounded-lg font-semibold hover:bg-secondary/90 transition-all duration-300 transform hover:scale-105 cursor-pointer"
>
  اتصل الآن
</button>
                  <button className="border-2 border-secondary text-secondary px-8 py-3 rounded-lg font-semibold hover:bg-secondary hover:text-black transition-all duration-300 transform hover:scale-105 cursor-pointer">
                    راسلنا
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 group relative">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-xl blur opacity-50 group-hover:opacity-75 transition-all duration-500"></div>
          
          <div className="relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-yellow-500/30">
            <div className="flex items-start space-x-3 space-x-reverse">
              <div className="text-yellow-400 text-xl">⚠️</div>
              <div>
                <h4 className="font-semibold text-yellow-400 mb-2">إخلاء مسؤولية</h4>
                <p className="text-gray-300 text-sm">
                  التقديرات المعروضة هي تقديرات مبدئية لأغراض التوجيه فقط. الأتعاب النهائية قد تختلف بناءً على الظروف الفعلية للقضية والخدمات المطلوبة. يُنصح بالحصول على استشارة مباشرة لتقييم دقيق.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
