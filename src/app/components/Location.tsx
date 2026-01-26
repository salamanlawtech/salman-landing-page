'use client';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faMapMarkerAlt, faUser } from '@fortawesome/free-solid-svg-icons';

export default function Location() {
  const [activeTab, setActiveTab] = useState('map');

  const officeInfo = {
    name: "مجموعة سلمان الفيفي للمحاماة والاستشارات القانونية",
    address: "3154 محمد بن ابي بكر الصديق، حي العسيلة، 8014، مكة 24423",
    phone: "+966 55 593 5722",
    email: "info@salmanlaw.sa",
    workingHours: {
      weekdays: "الأحد - الخميس: 8:00 ص - 6:00 م",
      friday: "الجمعة: 2:00 م - 6:00 م",
      saturday: "السبت: مغلق"
    },
    coordinates: {
      lat: 21.4225,
      lng: 39.8262
    }
  };

  const branches = [
    {
      city: "مكة المكرمة",
      address: "شارع إبراهيم الخليل، حي العزيزية",
      phone: "+966 12 123 4567",
      manager: "المحامي سلمان الفيفي",
      isMain: true
    },
    {
      city: "جدة",
      address: "شارع التحلية، حي الروضة",
      phone: "+966 12 234 5678",
      manager: "المحامي أحمد العلي",
      isMain: false
    },
    {
      city: "الدمام",
      address: "شارع الملك عبدالعزيز، حي الفيصلية",
      phone: "+966 13 345 6789",
      manager: "المحامية فاطمة السعد",
      isMain: false
    }
  ];



  return (
    <section id="location" className="relative py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(197,165,102,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(197,165,102,0.08),transparent_50%)]"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_25%,rgba(197,165,102,0.03)_50%,transparent_75%)]"></div>
        
        {/* Grid Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-12"
          style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255, 255, 255, 0.08) 1px, transparent 1px)`,
            backgroundSize: '35px 35px'
          }}
        ></div>
        
        {/* Secondary Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-6"
          style={{
            backgroundImage: `linear-gradient(rgba(197, 165, 102, 0.2) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(197, 165, 102, 0.2) 1px, transparent 1px)`,
            backgroundSize: '70px 70px'
          }}
        ></div>

      {/* Geometric Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-secondary/20 rounded-full"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 border border-secondary/25 rotate-45"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-secondary/10 rounded-lg rotate-12"></div>
      
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
            موقعنا
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-secondary/50 to-secondary rounded-full"></div>
          </h2>
        </div>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          نحن في قلب مكة المكرمة، في موقع استراتيجي يسهل الوصول إليه من جميع أنحاء المدينة المقدسة
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="flex justify-center mb-12">
        <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-1 flex border border-secondary/30">
          <button
            onClick={() => setActiveTab('map')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 cursor-pointer ${
              activeTab === 'map'
                ? 'bg-secondary text-black shadow-lg'
                : 'text-secondary hover:bg-secondary/20'
            }`}
          >
            الخريطة
          </button>
          <button
            onClick={() => setActiveTab('branches')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 cursor-pointer ${
              activeTab === 'branches'
                ? 'bg-secondary text-black shadow-lg'
                : 'text-secondary hover:bg-secondary/20'
            }`}
          >
            الفروع
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <div className="min-h-[500px]">
        {/* Map Tab */}
        {activeTab === 'map' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Interactive Map */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-secondary/30 to-secondary/20 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition-all duration-700"></div>
              
              <div className="relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-secondary/30">
                <div className="h-96 bg-gradient-to-br from-secondary/20 to-secondary/10 flex items-center justify-center relative">
                  <div className="text-center">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="text-6xl mb-4 text-secondary" />
                    <h3 className="text-xl font-bold text-secondary mb-2">خريطة تفاعلية</h3>
                    <p className="text-gray-300">موقع مكتبنا الرئيسي في مكة المكرمة</p>
                  </div>

                  <div className="absolute top-20 left-20 w-4 h-4 bg-red-400 rounded-full animate-pulse shadow-lg"></div>
                  <div className="absolute bottom-32 right-24 w-3 h-3 bg-blue-400 rounded-full shadow-lg"></div>
                  <div className="absolute top-32 right-32 w-3 h-3 bg-green-400 rounded-full shadow-lg"></div>
                </div>
                <div className="p-4 bg-black/30 border-t border-secondary/20">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">إحداثيات GPS</span>
                    <span className="text-sm font-mono text-secondary">
                      {officeInfo.coordinates.lat}, {officeInfo.coordinates.lng}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Information */}
            <div className="space-y-6">
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-secondary/20 to-secondary/10 rounded-xl blur opacity-75 group-hover:opacity-100 transition-all duration-500"></div>
                
                <div className="relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm rounded-xl p-6 border border-secondary/30">
                  <h3 className="text-2xl font-bold text-secondary mb-4">معلومات المكتب الرئيسي</h3>
                
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3 space-x-reverse">
                      <FontAwesomeIcon icon={faMapMarkerAlt} className="text-secondary text-xl mt-1" />
                      <div>
                        <div className="font-semibold text-white">العنوان</div>
                        <div className="text-gray-300">{officeInfo.address}</div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3 space-x-reverse">
                      <FontAwesomeIcon icon={faPhone} className="text-secondary text-xl mt-1" />
                      <div>
                        <div className="font-semibold text-white">الهاتف</div>
                        <div className="text-gray-300">{officeInfo.phone}</div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3 space-x-reverse">
                      <div className="text-secondary text-xl">✉️</div>
                      <div>
                        <div className="font-semibold text-white">البريد الإلكتروني</div>
                        <div className="text-gray-300">{officeInfo.email}</div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3 space-x-reverse">
                      <div className="text-secondary text-xl">🕒</div>
                      <div>
                        <div className="font-semibold text-white">ساعات العمل</div>
                        <div className="text-gray-300 space-y-1">
                          <div>{officeInfo.workingHours.weekdays}</div>
                          <div>{officeInfo.workingHours.friday}</div>
                          <div>{officeInfo.workingHours.saturday}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-col sm:flex-row gap-3">
                    <button className="bg-secondary hover:bg-secondary/90 text-black font-semibold px-6 py-3 rounded-lg transition-colors duration-300 flex items-center justify-center cursor-pointer">
                      <span className="ml-2">🗺️</span>
                      فتح في خرائط جوجل
                    </button>
                    <button className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-black font-semibold px-6 py-3 rounded-lg transition-all duration-300 flex items-center justify-center cursor-pointer">
                      <span className="ml-2">📱</span>
                      مشاركة الموقع
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Branches Tab */}
         {activeTab === 'branches' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {branches.map((branch, index) => (
                <div key={index} className="group relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-secondary/20 to-secondary/10 rounded-xl blur opacity-75 group-hover:opacity-100 transition-all duration-500"></div>
                  
                  <div className={`relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm rounded-xl p-6 border transition-all duration-300 hover:shadow-2xl ${
                    branch.isMain
                      ? 'border-secondary/50 shadow-secondary/20'
                      : 'border-secondary/30 hover:border-secondary/50'
                  }`}>
                    <div className="text-center mb-4">
                      {branch.isMain && (
                        <div className="bg-secondary text-black text-xs font-bold px-3 py-1 rounded-full inline-block mb-3">
                          المكتب الرئيسي
                        </div>
                      )}
                      <h3 className="text-2xl font-bold text-secondary mb-2">{branch.city}</h3>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-start space-x-3 space-x-reverse">
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="text-secondary text-sm mt-1" />
                        <span className="text-gray-300 text-sm">{branch.address}</span>
                      </div>
                      
                      <div className="flex items-start space-x-3 space-x-reverse">
                        <FontAwesomeIcon icon={faPhone} className="text-secondary text-sm mt-1" />
                        <span className="text-gray-300 text-sm">{branch.phone}</span>
                      </div>
                      
                      <div className="flex items-start space-x-3 space-x-reverse">
                        <FontAwesomeIcon icon={faUser} className="text-secondary text-sm mt-1" />
                        <span className="text-gray-300 text-sm">{branch.manager}</span>
                      </div>
                    </div>

                    <div className="mt-6">
                      <button className="w-full bg-secondary hover:bg-secondary/90 text-black font-semibold py-2 px-4 rounded-lg transition-colors duration-300 cursor-pointer">
                        تفاصيل الفرع
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}


      </div>
    </div>
  </section>
  );
}
