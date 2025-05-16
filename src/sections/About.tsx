// import React from 'react';
// import { Calendar, MapPin, Phone, Mail } from 'lucide-react';

// const About = () => {
//   return (
//     <section id="about" className="py-20">
//       <div className="max-w-4xl mx-auto">
//         <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        
//         <div className="grid md:grid-cols-2 gap-8">
//           <div className="space-y-4">
//             <div className="flex items-center space-x-3">
//               <Calendar className="text-blue-400" />
//               <span>Born May 17, 2002</span>
//             </div>
//             <div className="flex items-center space-x-3">
//               <MapPin className="text-blue-400" />
//               <span>Sana'a, Yemen</span>
//             </div>
//             <div className="flex items-center space-x-3">
//               <Phone className="text-blue-400" />
//               <span>776811203</span>
//             </div>
//             <div className="flex items-center space-x-3">
//               <Mail className="text-blue-400" />
//               <span>mrah07068@gmail.com</span>
//             </div>
//           </div>
          
//           <div className="space-y-4">
//             <p className="text-gray-300">
//               I'm a passionate Flutter developer with extensive experience in building 
//               high-performance, visually appealing mobile applications. My expertise 
//               includes BLoC state management, API integration, and custom UI design.
//             </p>
//             <p className="text-gray-300">
//               Currently pursuing a Bachelor's degree in Computer Science at Al-Wataniya 
//               University, expected to graduate in 2025.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default About;
import React from 'react';
import { Calendar, MapPin, Phone, Mail } from 'lucide-react';

interface AboutProps {
  isDark: boolean;
}

const About: React.FC<AboutProps> = ({ isDark }) => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className={`text-3xl font-bold mb-8 text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Calendar className="text-blue-500" />
              <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>Born May 17, 2002</span>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="text-blue-500" />
              <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>Sana'a, Yemen</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="text-blue-500" />
              <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>776811203</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="text-blue-500" />
              <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>mrah07068@gmail.com</span>
            </div>
          </div>
          
          <div className="space-y-4">
            <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>
              I'm a passionate Flutter developer with extensive experience in building 
              high-performance, visually appealing mobile applications. My expertise 
              includes BLoC state management, API integration, and custom UI design.
            </p>
            <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>
              Currently pursuing a Bachelor's degree in Computer Science at Al-Wataniya 
              University, expected to graduate in 2025.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;