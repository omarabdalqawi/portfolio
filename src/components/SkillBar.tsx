// import React from 'react';

// interface SkillBarProps {
//   skill: string;
//   level: number;
//   isDark: boolean;

// }

// const SkillBar: React.FC<SkillBarProps> = ({ skill, level, isDark }) => {
//   return (
//     <div className="mb-4">
//       <div className="flex justify-between mb-1">
//         <span className="text-base font-medium">{skill}</span>
//         <span className="text-sm text-gray-400">{level}%</span>
//       </div>
//       <div className="w-full bg-gray-700 rounded-full h-2.5">
//         <div 
//           className="bg-blue-500 h-2.5 rounded-full transition-all duration-1000 ease-out"
//           style={{ width: `${level}%` }}
//         ></div>
//       </div>
//     </div>
//   );
// }

// export default SkillBar;
import React from 'react';

interface SkillBarProps {
  skill: string;
  level: number;
  isDark: boolean;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill, level, isDark }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className={`text-base font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
          {skill}
        </span>
        <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>
          {level}%
        </span>
      </div>
      <div className={`w-full ${isDark ? 'bg-gray-700' : 'bg-gray-200'} rounded-full h-2.5`}>
        <div 
          className="bg-blue-500 h-2.5 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
}

export default SkillBar;