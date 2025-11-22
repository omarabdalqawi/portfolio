import React from 'react';
import { Target, Code, Users } from 'lucide-react';

interface GoalsProps {
  isDark: boolean;
  isArabic: boolean;
}

const Goals: React.FC<GoalsProps> = ({ isDark, isArabic }) => {
  const goals = [
    {
      icon: Code,
      title: { en: 'Technical Excellence', ar: 'التميز التقني' },
      description: { 
        en: 'Enhance my technical expertise in Flutter and Kotlin',
        ar: 'تعزيز خبرتي التقنية في Flutter و Kotlin'
      }
    },
    {
      icon: Target,
      title: { en: 'Impactful Solutions', ar: 'حلول مؤثرة' },
      description: { 
        en: 'Build impactful digital products that solve real-world problems',
        ar: 'بناء منتجات رقمية مؤثرة تحل مشاكل حقيقية'
      }
    },
    {
      icon: Users,
      title: { en: 'Team Collaboration', ar: 'التعاون الجماعي' },
      description: { 
        en: 'Collaborate with teams to deliver high-quality mobile experiences',
        ar: 'التعاون مع الفرق لتقديم تجارب موبايل عالية الجودة'
      }
    }
  ];

  return (
    <section id="goals" className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center" data-aos="fade-up">
          {isArabic ? 'أهدافي' : 'My Goals'}
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {goals.map((goal, index) => (
            <div 
              key={index}
              className={`${isDark ? 'bg-gray-800' : 'bg-gray-100'} p-6 rounded-lg hover:transform hover:scale-105 transition-all duration-300 ${isArabic ? 'text-right' : 'text-left'}`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className={`flex items-center mb-4 ${isArabic ? 'flex-row-reverse' : ''}`}>
                <goal.icon className="text-blue-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold">
                  {isArabic ? goal.title.ar : goal.title.en}
                </h3>
              </div>
              <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                {isArabic ? goal.description.ar : goal.description.en}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Goals;