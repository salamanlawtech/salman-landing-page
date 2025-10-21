'use client';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="relative py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(197,165,102,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(197,165,102,0.08),transparent_50%)]"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_25%,rgba(197,165,102,0.03)_50%,transparent_75%)]"></div>
        
        {/* Grid Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.06) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255, 255, 255, 0.06) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        ></div>
        
        {/* Secondary Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(rgba(197, 165, 102, 0.15) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(197, 165, 102, 0.15) 1px, transparent 1px)`,
            backgroundSize: '80px 80px'
          }}
        ></div>
        
        {/* Geometric Elements */}
        <div className="absolute top-20 right-10 w-32 h-32 border border-secondary/20 rounded-full"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 border border-secondary/25 rotate-45"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-secondary/10 rounded-lg rotate-12"></div>
        
        {/* Dot Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(197,165,102,0.3) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4 relative">
              تواصل معنا
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-secondary/50 to-secondary rounded-full"></div>
            </h2>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            نحن هنا لخدمتكم ومساعدتكم في جميع احتياجاتكم القانونية
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-secondary/20 to-secondary/10 rounded-xl blur opacity-75 group-hover:opacity-100 transition-all duration-500"></div>
              
              <div className="relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm rounded-xl p-8 border border-secondary/30">
                <h3 className="text-2xl font-bold text-secondary mb-6">
                  معلومات التواصل
                </h3>
                
                <div className="space-y-6">
                  {/* Phone */}
                  <div className="flex items-start space-x-4 space-x-reverse">
                    <div className="flex-shrink-0 w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                      <FontAwesomeIcon icon={faPhone} className="text-black text-lg" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">الهاتف</h4>
                      <p className="text-gray-300">+966 50 123 4567</p>
                      <p className="text-gray-300">+966 11 456 7890</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start space-x-4 space-x-reverse">
                    <div className="flex-shrink-0 w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                      <span className="text-black text-xl">📧</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">البريد الإلكتروني</h4>
                      <p className="text-gray-300">info@salmanlaw.sa</p>
                      <p className="text-gray-300">consultation@salmanlaw.sa</p>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start space-x-4 space-x-reverse">
                    <div className="flex-shrink-0 w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                      <FontAwesomeIcon icon={faMapMarkerAlt} className="text-black text-lg" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">العنوان</h4>
                      <p className="text-gray-300">
                        شارع إبراهيم الخليل، حي العزيزية<br />
                مكة المكرمة 24231<br />
                        المملكة العربية السعودية
                      </p>
                    </div>
                  </div>

                  {/* Working Hours */}
                  <div className="flex items-start space-x-4 space-x-reverse">
                    <div className="flex-shrink-0 w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                      <span className="text-black text-xl">🕒</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">ساعات العمل</h4>
                      <p className="text-gray-300">
                        الأحد - الخميس: 8:00 ص - 6:00 م<br />
                        الجمعة: 2:00 م - 6:00 م<br />
                        السبت: مغلق
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500/20 to-red-400/10 rounded-xl blur opacity-75 group-hover:opacity-100 transition-all duration-500"></div>
              
              <div className="relative bg-gradient-to-br from-red-900/20 to-red-800/20 backdrop-blur-sm rounded-xl p-6 border border-red-500/30">
                <h4 className="text-lg font-bold text-red-400 mb-3">
                  للحالات الطارئة
                </h4>
                <p className="text-red-300 mb-2">
                  متوفرون على مدار الساعة للحالات القانونية العاجلة
                </p>
                <p className="text-red-400 font-semibold">
                  📱 +966 55 999 8888
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-secondary/20 to-secondary/10 rounded-xl blur opacity-75 group-hover:opacity-100 transition-all duration-500"></div>
            
            <div className="relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm rounded-xl p-8 border border-secondary/30">
              <h3 className="text-2xl font-bold text-secondary mb-6">
                أرسل لنا رسالة
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                    الاسم الكامل *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary transition-all duration-300 text-white placeholder-gray-400"
                    placeholder="أدخل اسمك الكامل"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                    البريد الإلكتروني *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary transition-all duration-300 text-white placeholder-gray-400"
                    placeholder="example@email.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                    رقم الهاتف
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary transition-all duration-300 text-white placeholder-gray-400"
                    placeholder="+966 5X XXX XXXX"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-white mb-2">
                    موضوع الاستشارة *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary transition-all duration-300 text-white"
                  >
                    <option value="" className="text-gray-400">اختر موضوع الاستشارة</option>
                    <option value="commercial">القانون التجاري</option>
                    <option value="civil">القانون المدني</option>
                    <option value="criminal">القانون الجنائي</option>
                    <option value="family">قانون الأحوال الشخصية</option>
                    <option value="labor">قانون العمل</option>
                    <option value="real-estate">القانون العقاري</option>
                    <option value="other">أخرى</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                    تفاصيل الاستشارة *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary transition-all duration-300 resize-vertical text-white placeholder-gray-400"
                    placeholder="اكتب تفاصيل استشارتك هنا..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-secondary hover:bg-secondary/90 text-black font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-secondary/25 cursor-pointer"
                >
                  إرسال الرسالة
                </button>
              </form>

              <p className="text-sm text-gray-400 mt-4 text-center">
                * سنقوم بالرد عليكم خلال 24 ساعة
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}