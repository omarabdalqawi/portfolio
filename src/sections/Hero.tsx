import React from 'react';
import { ArrowDown } from 'lucide-react';

interface HeroProps {
  isDark: boolean;
}

const Hero: React.FC<HeroProps> = ({ isDark }) => {
  return (
    <section className="min-h-screen flex items-center justify-center relative">
      <div className="text-center space-y-6 animate-fadeIn">
        <div className="relative w-48 h-48 mx-auto mb-8">
          <img
            src="/omar-profile.webp"
            alt="Omar Murrah"
            className="rounded-full object-cover w-full h-full border-4 border-blue-500 shadow-xl"
          />
          <div className="absolute inset-0 rounded-full bg-blue-500 opacity-10 animate-pulse"></div>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text animate-gradient">
          Omar Murrah
        </h1>
        <h2 className={`text-2xl md:text-3xl ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
          Flutter Developer | Mobile App Specialist
        </h2>
        <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'} max-w-2xl mx-auto`}>
          Passionate about creating beautiful, high-performance mobile applications
          with seamless user experiences.
        </p>
        <div className="flex justify-center gap-4">
          <a href="#about" 
            className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-all transform hover:scale-105">
            Learn More
          </a>
          <a href="mailto:mrah07068@gmail.com"
            className={`px-6 py-3 border border-blue-500 rounded-full hover:bg-blue-500/10 transition-all transform hover:scale-105 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
            Contact Me
          </a>
        </div>
      </div>
      <div className="absolute bottom-8 animate-bounce">
        <ArrowDown size={24} />
      </div>
    </section>
  );
}

export default Hero;