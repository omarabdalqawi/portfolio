import React from 'react';
import { Award, Briefcase, Headphones } from 'lucide-react';

interface AboutProps {
  isDark: boolean;
  isArabic: boolean;
}

const About: React.FC<AboutProps> = ({ isDark, isArabic }) => {
  return (
    <section id="about" className="py-20" data-aos="fade-up">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center" data-aos="fade-up">
          {isArabic ? 'عني' : 'About Me'}
        </h2>
        <div className="grid md:grid-cols-1 gap-8 mb-12" data-aos="fade-up" data-aos-delay="200">
          <div className="flex justify-center">
            <div
              className={`max-w-3xl ${isDark ? 'text-gray-300' : 'text-gray-700'} space-y-4 text-center text-sm leading-relaxed`}
              dir={isArabic ? 'rtl' : 'ltr'}
            >
             <p
                className={`${isDark ? 'text-gray-300' : 'text-gray-700'} text-center max-w-3xl mx-auto text-base leading-relaxed`}
                dir={isArabic ? 'rtl' : 'ltr'}
                 >
                     {isArabic
                         ? 'أنا عمر مره، مطور تطبيقات موبايل متخصص في Flutter وأملك أساسًا قويًا في Kotlin. أركز على بناء تطبيقات متعددة المنصات بجودة عالية وتجربة مستخدم سلسة، مع بنية قوية وتكامل مع الـ APIs. ماهر في بوابات الدفع والتصميم المتجاوب وأسعى لتقديم حلول رقمية قابلة للتوسع وذات تأثير.'
                         : "I'm Omar Murrah, a mobile app developer specialized in Flutter with a solid foundation in Kotlin. I focus on building high-quality cross-platform apps with seamless user experience, robust architecture, and API integration. Skilled in payment gateways and responsive design, I aim to deliver scalable and impactful digital solutions."}
              </p>
  


              <div className="mt-6 flex justify-center">
                <a
                  href="/portfolio/omar-cv.pdf"
                  download="Omar_Murrah_CV.pdf"
                  className="inline-flex items-center px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-all transform hover:scale-105"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  {isArabic ? 'تحميل السيرة الذاتية' : 'Download CV'}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center`}
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div
            className={`rounded-2xl p-6 shadow-md transition-all duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 ${
            isDark ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900'
             }`}
          >
            <Award className="mx-auto mb-4 text-blue-400 flex-shrink-0" size={32} />
            <h4 className="text-lg font-semibold">{isArabic ? 'الخبرة' : 'Experience'}</h4>
            <p className="text-sm text-gray-400 mt-1">{isArabic ? 'سنتان من العمل' : '2 Years Working'}</p>
          </div>

          <div
             className={`rounded-2xl p-6 shadow-md transition-all duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 ${
             isDark ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900'
             }`}
          >
            <Briefcase className="mx-auto mb-4 text-blue-400 flex-shrink-0" size={32} />
            <h4 className="text-lg font-semibold">{isArabic ? 'المشاريع المنجزة' : 'Completed'}</h4>
            <p className="text-sm text-gray-400 mt-1">{isArabic ? '+12 مشروع' : '12+ Projects'}</p>
          </div>

          <div
             className={`rounded-2xl p-6 shadow-md transition-all duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 ${
            isDark ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900'
             }`}
          >
            <Headphones className="mx-auto mb-4 text-blue-400 flex-shrink-0" size={32} />
            <h4 className="text-lg font-semibold">{isArabic ? 'الدعم الفني' : 'Support'}</h4>
            <p className="text-sm text-gray-400 mt-1">{isArabic ? 'متاح 24/7' : 'Online 24/7'}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
