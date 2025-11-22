import React from 'react';
import { Globe } from 'lucide-react';

interface LanguagesProps {
  isDark: boolean;
  isArabic: boolean;
}

const Languages: React.FC<LanguagesProps> = ({ isDark, isArabic }) => {
  const languages = [
    {
      name: { en: 'Arabic', ar: 'العربية' },
      level: { en: 'Native', ar: 'اللغة الأم' },
      percentage: 100
    },
    {
      name: { en: 'English', ar: 'الإنجليزية' },
      level: { en: 'Good Working Knowledge', ar: 'معرفة عمل جيدة' },
      percentage: 75
    }
  ];

  return (
    <section id="languages" className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className={`flex items-center mb-8 ${isArabic ? 'flex-row-reverse' : ''}`} data-aos="fade-up">
          <Globe className="text-blue-400 mr-3" size={24} />
          <h2 className="text-3xl font-bold">
            {isArabic ? 'اللغات' : 'Languages'}
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {languages.map((language, index) => (
            <div 
              key={index}
              className={`${isDark ? 'bg-gray-800' : 'bg-gray-100'} p-6 rounded-lg ${isArabic ? 'text-right' : 'text-left'}`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <h3 className="text-xl font-semibold mb-2">
                {isArabic ? language.name.ar : language.name.en}
              </h3>
              <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} mb-3`}>
                {isArabic ? language.level.ar : language.level.en}
              </p>
              <div className="w-full bg-gray-700 rounded-full h-2.5">
                <div 
                  className="bg-blue-500 h-2.5 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${language.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Languages;