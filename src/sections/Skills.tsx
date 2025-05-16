// import SkillBar from '../components/SkillBar';
// import React from 'react';
// const Skills = () => {
//   const skills = [
//     { name: 'Flutter & Dart', level: 90 },
//     { name: 'BLoC Pattern', level: 85 },
//     { name: 'API Integration', level: 80 },
//     { name: 'Firebase', level: 85 },
//     { name: 'UI/UX Design', level: 75 },
//     { name: 'Git & GitHub', level: 80 },
//   ];

//   return (
//     <section id="skills" className="py-20">
//       <div className="max-w-4xl mx-auto">
//         <h2 className="text-3xl font-bold mb-12 text-center">Technical Skills</h2>
        
//         <div className="grid md:grid-cols-2 gap-8">
//           {skills.map((skill) => (
//             <SkillBar 
//               key={skill.name}
//               skill={skill.name}
//               level={skill.level}
//               isDark={isDark}
//             />
//           ))}
//         </div>

//         <div className="mt-16">
//           <h3 className="text-2xl font-bold mb-6">Key Projects</h3>
//           <div className="space-y-8">
//             <div className="bg-gray-800 p-6 rounded-lg hover:transform hover:scale-105 transition-all">
//               <h4 className="text-xl font-semibold mb-2">Donation Platform (Takaful App)</h4>
//               <p className="text-gray-400">
//                 A full-featured donation app with RTL support, BLoC state management, 
//                 and multiple payment method integrations.
//               </p>
//             </div>
            
//             <div className="bg-gray-800 p-6 rounded-lg hover:transform hover:scale-105 transition-all">
//               <h4 className="text-xl font-semibold mb-2">Charity Organization Registration Portal</h4>
//               <p className="text-gray-400">
//                 Secure multi-step registration form with API integration and 
//                 responsive design.
//               </p>
//             </div>
            
//             <div className="bg-gray-800 p-6 rounded-lg hover:transform hover:scale-105 transition-all">
//               <h4 className="text-xl font-semibold mb-2">E-commerce Store</h4>
//               <p className="text-gray-400">
//                 Custom e-commerce platform with real-time data fetching and 
//                 advanced BLoC patterns.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Skills;
import React from 'react';
import SkillBar from '../components/SkillBar';

interface SkillsProps {
  isDark: boolean;
}

const Skills: React.FC<SkillsProps> = ({ isDark }) => {
  const skills = [
    { name: 'Flutter & Dart', level: 90 },
    { name: 'BLoC Pattern', level: 85 },
    { name: 'API Integration', level: 80 },
    { name: 'Firebase', level: 85 },
    { name: 'UI/UX Design', level: 75 },
    { name: 'Git & GitHub', level: 80 },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className={`text-3xl font-bold mb-12 text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>
          Technical Skills
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill) => (
            <SkillBar 
              key={skill.name}
              skill={skill.name}
              level={skill.level}
              isDark={isDark}
            />
          ))}
        </div>

        <div className="mt-16">
          <h3 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Key Projects
          </h3>
          <div className="space-y-8">
            <div className={`${isDark ? 'bg-gray-800' : 'bg-gray-100'} p-6 rounded-lg hover:transform hover:scale-105 transition-all`}>
              <h4 className={`text-xl font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Donation Platform (Takaful App)
              </h4>
              <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                A full-featured donation app with RTL support, BLoC state management, 
                and multiple payment method integrations.
              </p>
            </div>
            
            <div className={`${isDark ? 'bg-gray-800' : 'bg-gray-100'} p-6 rounded-lg hover:transform hover:scale-105 transition-all`}>
              <h4 className={`text-xl font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Charity Organization Registration Portal
              </h4>
              <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                Secure multi-step registration form with API integration and 
                responsive design.
              </p>
            </div>
            
            <div className={`${isDark ? 'bg-gray-800' : 'bg-gray-100'} p-6 rounded-lg hover:transform hover:scale-105 transition-all`}>
              <h4 className={`text-xl font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                E-commerce Store
              </h4>
              <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                Custom e-commerce platform with real-time data fetching and 
                advanced BLoC patterns.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;