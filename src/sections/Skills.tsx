import React from 'react';
import SkillBar from '../components/SkillBar';

interface SkillsProps {
  isDark: boolean;
  isArabic: boolean;
}

const Skills: React.FC<SkillsProps> = ({ isDark, isArabic }) => {
  const skills = [
    { name: 'Flutter & Dart', level: 90 },
    { name: 'Kotlin', level: 75 },
    { name: 'BLoC Pattern', level: 85 },
    { name: 'RESTful APIs Integration', level: 80 },
    { name: 'Stripe Payment Gateway', level: 70 },
    { name: 'Firebase', level: 85 },
    { name: 'Git & Version Control', level: 80 },
    { name: 'HTML / CSS / PHP', level: 65 },
    { name: 'Responsive & RTL Design', level: 80 },
    { name: 'Figma to Flutter UI', level: 85 },
    { name: 'Native Android Development', level: 70 },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          {isArabic ? 'المهارات التقنية' : 'Technical Skills'}
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skills.slice(0, 6).map((skill) => (
            <SkillBar 
              key={skill.name}
              skill={skill.name}
              level={skill.level}
              isDark={isDark}
            />
          ))}
        </div>
        
        {skills.length > 6 && (
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            {skills.slice(6).map((skill) => (
              <SkillBar 
                key={skill.name}
                skill={skill.name}
                level={skill.level}
                isDark={isDark}

              />
            ))}
          </div>
        )}
       
      </div>
    </section>
  );
}

export default Skills;