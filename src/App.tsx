import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Goals from './sections/Goals';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import ProjectDetail from './sections/ProjectDetails';
import Contact from './sections/Contact';

function App() {
  const [isDark, setIsDark] = useState(true);
  const [isArabic, setIsArabic] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      AOS.init({
        duration: 1000,
        once: true,
        offset: 100,
        disable: 'mobile' 
      });
    }, 100);
    
    document.documentElement.classList.toggle('dark', isDark);
    document.documentElement.dir = isArabic ? 'rtl' : 'ltr';
    
    return () => clearTimeout(timer);
  }, [isDark, isArabic]);

  const toggleTheme = () => setIsDark(!isDark);
  const toggleLanguage = () => setIsArabic(!isArabic);

 const handleProjectClick = (project: React.SetStateAction<null>) => {
        setSelectedProject(project);
        window.scrollTo(0, 0); // Scroll to top on page change
    };
    
const handleBackClick = () => {
  window.location.reload();
};

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDark ? 'bg-gradient-to-b from-gray-900 to-gray-800 text-white' : 'bg-gradient-to-b from-gray-100 to-white text-gray-900'
    }`}>
      <Navbar isDark={isDark} toggleTheme={toggleTheme} isArabic={isArabic} toggleLanguage={toggleLanguage}  
       onBack={selectedProject ? handleBackClick : null} 
      />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8">
                        {selectedProject ? (
                    <ProjectDetail
                        project={selectedProject}
                        isDark={isDark}
                        isArabic={isArabic}
                        onBack={handleBackClick}
                    />
                ) : (
                    <>
        <Hero isDark={isDark} isArabic={isArabic} />
        <About isDark={isDark} isArabic={isArabic} />
        <Goals isDark={isDark} isArabic={isArabic} />
        <Skills isDark={isDark} isArabic={isArabic} />
        <Experience isDark={isDark} isArabic={isArabic} />
        <Projects
                            isDark={isDark}
                            isArabic={isArabic}
                            onProjectClick={handleProjectClick}
                        />
        {/* <Projects isDark={isDark} isArabic={isArabic} /> */}
        <Contact isDark={isDark} isArabic={isArabic} />
         </>
                )}
      </main>
      <Footer isDark={isDark} isArabic={isArabic} />
    </div>
  );
};
export default App;
