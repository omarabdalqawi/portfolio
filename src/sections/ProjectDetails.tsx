import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Projector as ProjectorIcon,
  Code,
} from "lucide-react";

interface ProjectDetailProps {
  project: {
    title: { en: string; ar: string };
    tagline: { en: string; ar: string };
    fullDescription: { en: string; ar: string };
    techStack: { en: string; ar: string }[];
    images: string[];
  };
  isDark: boolean;
  isArabic: boolean;
  onBack: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({
  project,
  isDark,
  isArabic,
  onBack,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % project.images.length
    );
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) =>
        (prevIndex - 1 + project.images.length) % project.images.length
    );
  };

  return (
    <div className="py-16">
      {/* <button
        onClick={onBack}
        className={`flex items-center justify-center mb-10 w-44 h-12 rounded-full font-semibold transition-transform duration-300 ease-in-out transform hover:scale-105 ${
          isDark ? 'bg-gray-700 text-white shadow-lg' : 'bg-gray-200 text-gray-900 shadow-md'
        }`}
      >
        <ChevronLeft size={20} className="mr-2" />
        {isArabic ? 'العودة إلى المشاريع' : 'Back to Projects'}
      </button> */}
      <button
        onClick={onBack}
        className={`
    flex items-center justify-center mb-10 w-44 h-12 rounded-full font-semibold
    transition-transform duration-300 ease-in-out transform hover:scale-105
    ${
      isDark
        ? "bg-gray-700 text-white shadow-lg"
        : "bg-gray-200 text-gray-900 shadow-md"
    }
    hidden md:flex
  `}
      >
        <ChevronLeft size={20} className="mr-2" />
        {isArabic ? "العودة إلى المشاريع" : "Back to Projects"}
      </button>

      <div className="max-w-6xl mx-auto">
        {/* العنوان والوصف القصير */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-6">
          {isArabic ? project.title.ar : project.title.en}
        </h1>
        <p
          className={`text-center mb-12 text-lg ${
            isDark ? "text-gray-300" : "text-gray-600"
          }`}
        >
          {isArabic ? project.tagline.ar : project.tagline.en}
        </p>

        {/* معرض الصور */}
        <div className="relative overflow-hidden rounded-3xl mb-12 shadow-2xl transition-all duration-500 h-64 sm:h-80 md:h-96 lg:h-[600px]">
          <img
            src={project.images[currentImageIndex]}
            alt={isArabic ? project.title.ar : project.title.en}
            className="w-full h-full object-cover rounded-3xl transition-opacity duration-700"
            key={currentImageIndex}
          />
          {project.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className={`absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full transition-colors duration-300 ${
                  isDark
                    ? "bg-gray-800/60 hover:bg-gray-700/80"
                    : "bg-white/60 hover:bg-white/80"
                } text-white`}
              >
                <ChevronLeft size={30} />
              </button>
              <button
                onClick={nextImage}
                className={`absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full transition-colors duration-300 ${
                  isDark
                    ? "bg-gray-800/60 hover:bg-gray-700/80"
                    : "bg-white/60 hover:bg-white/80"
                } text-white`}
              >
                <ChevronRight size={30} />
              </button>
            </>
          )}
        </div>

        {/* تفاصيل المشروع */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* التقنيات */}
          <div
            className={`md:col-span-1 rounded-3xl p-8 shadow-2xl transition-all duration-300 ${
              isDark ? "bg-gray-800" : "bg-gray-100"
            }`}
          >
            <h3 className="text-2xl font-bold mb-4 flex items-center">
              <Code size={24} className="mr-2 text-blue-400" />
              {isArabic ? "التقنيات المستخدمة" : "Technologies Used"}
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, index) => (
                <span
                  key={index}
                  className={`px-4 py-1 rounded-full text-sm font-semibold transition-colors duration-300 ${
                    isDark
                      ? "bg-blue-600/20 text-blue-400"
                      : "bg-blue-100 text-blue-700"
                  }`}
                >
                  {isArabic ? tech.ar : tech.en}
                </span>
              ))}
            </div>
          </div>

          {/* الوصف */}
          <div
            className={`md:col-span-2 rounded-3xl p-8 shadow-2xl transition-all duration-300 ${
              isDark ? "bg-gray-800" : "bg-gray-100"
            }`}
          >
            <h3 className="text-2xl font-bold mb-4 flex items-center">
              <ProjectorIcon size={24} className="mr-2 text-blue-400" />
              {isArabic ? "وصف المشروع" : "Project Description"}
            </h3>
            <p
              className={`text-lg leading-relaxed ${
                isDark ? "text-gray-300" : "text-gray-600"
              }`}
            >
              {isArabic
                ? project.fullDescription.ar
                : project.fullDescription.en}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
