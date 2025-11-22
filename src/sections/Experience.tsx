import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

interface ExperienceProps {
  isDark: boolean;
  isArabic: boolean;
}

const Experience: React.FC<ExperienceProps> = ({ isDark, isArabic }) => {
  const experiences = [
    'Developed and launched cross-platform mobile applications using Flutter',
    'Integrated RESTful APIs with proper error handling',
    'Designed modern interfaces for both dark and light themes',
    'Integrated Stripe for secure online payments',
    'Followed clean architecture using BLoC pattern'
  ];

  const experiencesAr = [
    'تطوير وإطلاق تطبيقات موبايل متعددة المنصات باستخدام Flutter',
    'تكامل RESTful APIs مع معالجة الأخطاء المناسبة',
    'تصميم واجهات حديثة للأوضاع الفاتحة والداكنة',
    'تكامل Stripe للمدفوعات الآمنة عبر الإنترنت',
    'اتباع البنية النظيفة باستخدام نمط BLoC'
  ];

  return (
    <section id="experience" className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className={`flex items-center mb-8 ${isArabic ? 'flex-row-reverse' : ''}`} data-aos="fade-up">
          <Briefcase className="text-blue-400 mr-3" size={24} />
          <h2 className="text-3xl font-bold" >
            {isArabic ? 'الخبرة' : 'Experience'}
          </h2>
        </div>
        
        <div className={`${isDark ? 'bg-gray-800' : 'bg-gray-100'} p-8 rounded-lg ${isArabic ? 'text-right' : 'text-left'}`} data-aos="fade-up">
          <div className={`flex items-center mb-4 ${isArabic ? 'flex-row-reverse' : ''}`}>
            <Calendar className="text-blue-400 mr-3" size={20} />
            <h3 className="text-xl font-semibold">
              {isArabic ? 'مطور موبايل مستقل (2023 – الان)' : 'Freelance Mobile Developer (2023 – Present)'}
            </h3>
          </div>
          
          <ul className={`space-y-3 ${isDark ? 'text-gray-300' : 'text-gray-700'} ${isArabic ? 'list-inside' : 'ml-6'}`}>
            {(isArabic ? experiencesAr : experiences).map((item, index) => (
              <li key={index} className="flex items-start" data-aos="fade-up" data-aos-delay={index * 100}>
                <span className="text-blue-400 mr-2 mt-1">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Experience;