// import React from 'react';
// import { Projector } from 'lucide-react';


// interface ProjectorsProps {
//   isDark: boolean;
//   isArabic: boolean;
// }

// const Projectors: React.FC<ProjectorsProps> = ({ isDark, isArabic }) => {
//   const projects = [
//     {
//       title: { en: 'Masroofi App', ar: 'تطبيق مصروفي' },
//       description: {
//         en: 'Daily expense management solution with savings, debt tracking, and financial reports. Supports three currencies with toggle feature, includes light/dark mode, charts, summaries, and settings.',
//         ar: 'حل إدارة المصروفات اليومية مع المدخرات وتتبع الديون والتقارير المالية. يدعم ثلاث عملات مع ميزة التبديل، ويشمل الوضع الفاتح/الداكن والرسوم البيانية والملخصات والإعدادات.'
//       }
//     },
//     {
//       title: { en: 'Donation Platform (Takaful App)', ar: 'منصة التبرعات (تطبيق تكافل)' },
//       description: {
//         en: 'Donation management system with user authentication, API integration, and payment gateway integration.',
//         ar: 'نظام إدارة التبرعات مع مصادقة المستخدم وتكامل API وبوابة الدفع.'
//       }
//     },
//     {
//       title: { en: 'Car Rental Website', ar: 'موقع تأجير السيارات' },
//       description: {
//         en: 'Static responsive website using HTML, CSS, and PHP for car rental services.',
//         ar: 'موقع ويب متجاوب ثابت باستخدام HTML و CSS و PHP لخدمات تأجير السيارات.'
//       }
//     },
//     {
//       title: { en: 'Travel Plan Website', ar: 'موقع خطة السفر' },
//       description: {
//         en: 'Simple trip planning website with HTML and PHP backend for travel management.',
//         ar: 'موقع تخطيط رحلات بسيط مع HTML و PHP للخلفية لإدارة السفر.'
//       }
//     }
//   ];

//   return (
//     <section id="projects" className="py-20">
//       <div className="max-w-4xl mx-auto px-4">
//         <div className={`flex items-center mb-8 ${isArabic ? 'flex-row-reverse' : ''}`} data-aos="fade-up">
//           <Projector className={`text-blue-400 mr-3`} size={24} />
//           <h2 className={`text-3xl font-bold ${isArabic ? 'text-right' : 'text-left'}`}>
//             {isArabic ? 'المشاريع' : 'Projects'}
//           </h2>
//         </div>

//         <div className="grid md:grid-cols-2 gap-8">
//           {projects.map((project, index) => (
//             <div
//               key={index}
//               className={`${isDark ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black'} p-6 rounded-lg ${isArabic ? 'text-right' : 'text-left'}`}
//               data-aos="fade-up"
//               data-aos-delay={index * 100}
//             >
//               <h3 className="text-xl font-semibold mb-2">
//                 {isArabic ? project.title.ar : project.title.en}
//               </h3>
//               <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} mb-3`}>
//                 {isArabic ? project.description.ar : project.description.en}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projectors;
/*
import React from 'react';
import { Projector } from 'lucide-react';

interface ProjectsProps {
  isDark: boolean;
  isArabic: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ isDark, isArabic }) => {

  const projects = [
    {
      title: { en: 'Masroofi App', ar: 'تطبيق مصروفي' },
      description: {
        en: 'Daily expense management solution with savings, debt tracking, and financial reports. Supports three currencies with toggle feature, includes light/dark mode, charts, summaries, and settings.',
        ar: 'حل إدارة المصروفات اليومية مع المدخرات وتتبع الديون والتقارير المالية. يدعم ثلاث عملات مع ميزة التبديل، ويشمل الوضع الفاتح/الداكن والرسوم البيانية والملخصات والإعدادات.'
      }
    },
    {
      title: { en: 'Donation Platform (Takaful App)', ar: 'منصة التبرعات (تطبيق تكافل)' },
      description: {
        en: 'Donation management system with user authentication, API integration, and payment gateway integration.',
        ar: 'نظام إدارة التبرعات مع مصادقة المستخدم وتكامل API وبوابة الدفع.'
      }
    },
    {
      title: { en: 'Car Rental Website', ar: 'موقع تأجير السيارات' },
      description: {
        en: 'Static responsive website using HTML, CSS, and PHP for car rental services.',
        ar: 'موقع ويب متجاوب ثابت باستخدام HTML و CSS و PHP لخدمات تأجير السيارات.'
      }
    },
    {
      title: { en: 'Travel Plan Website', ar: 'موقع خطة السفر' },
      description: {
        en: 'Simple trip planning website with HTML and PHP backend for travel management.',
        ar: 'موقع تخطيط رحلات بسيط مع HTML و PHP للخلفية لإدارة السفر.'
      }
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className={`flex flex-col items-center mb-8`} data-aos="fade-up">
          <Projector className="text-blue-400 mb-2" size={24} />
           <h2 className="text-3xl font-bold text-center">
           {isArabic ? 'المشاريع الرئيسية' : 'Key Projects'}
          </h2>
         </div>

        <div className="mt-16">
          <div className="space-y-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`
                  ${isDark ? 'bg-gray-800' : 'bg-gray-100'} 
                  p-6 rounded-lg 
                  hover:transform hover:scale-105 transition-all 
                  ${isArabic ? 'text-right' : 'text-left'}
                `}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <h4 className="text-xl font-semibold mb-2">
                  {isArabic ? project.title.ar : project.title.en}
                </h4>
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {isArabic ? project.description.ar : project.description.en}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
*/
import React from 'react';

import { ProjectorIcon } from "lucide-react";

interface ProjectsProps {
  isDark: boolean;
  isArabic: boolean;
  onProjectClick: (project: any) => void;

  
}

const Projects: React.FC<ProjectsProps> = ({ isDark, isArabic, onProjectClick }) => {
    // Data for all projects including detailed info
    const projectsData = [
        {
            title: { en: 'Masroofi App', ar: 'تطبيق مصروفي' },
            tagline: {
                en: 'Daily expense management solution with financial reports.',
                ar: 'حل إدارة المصروفات اليومية مع التقارير المالية.'
            },
            fullDescription: {
                en: "Masroofi is a comprehensive mobile application designed to help users manage their daily expenses effortlessly. The app features robust savings and debt tracking, multi-currency support (with a toggle feature for up to three currencies), and detailed financial reports. Users can view their spending habits through intuitive charts and summaries, making it easier to achieve their financial goals. The app also includes a sleek light/dark mode and a customizable settings page.",
                ar: "مصروفي هو تطبيق محمول شامل مصمم لمساعدة المستخدمين على إدارة مصروفاتهم اليومية بكل سهولة. يتميز التطبيق بتتبع قوي للمدخرات والديون، ودعم لعملات متعددة (مع ميزة التبديل لما يصل إلى ثلاث عملات)، وتقارير مالية مفصلة. يمكن للمستخدمين عرض أنماط إنفاقهم من خلال الرسوم البيانية والملخصات، مما يسهل عليهم تحقيق أهدافهم المالية. يتضمن التطبيق أيضًا وضعًا فاتحًا/داكنًا أنيقًا وصفحة إعدادات قابلة للتخصيص."
            },
            techStack: [
                { en: 'Kotlin', ar: 'كوتلن' },
                { en: 'Android SDK', ar: 'أندرويد SDK' },
                { en: 'SQLite', ar: 'SQLite' },
            ],
            images: [
                'https://placehold.co/1200x800/1e40af/ffffff?text=Masroofi+App+Screenshot+1',
                'https://placehold.co/1200x800/1e40af/ffffff?text=Masroofi+App+Screenshot+2',
                'https://placehold.co/1200x800/1e40af/ffffff?text=Masroofi+App+Screenshot+3'
            ],
        },
        {
            title: { en: 'Donation Platform (Takaful App)', ar: 'منصة التبرعات (تطبيق تكافل)' },
            tagline: {
                en: 'A donation management system with API integration.',
                ar: 'نظام لإدارة التبرعات مع تكامل واجهة برمجة التطبيقات.'
            },
            fullDescription: {
                en: "Takaful is a robust donation platform that streamlines the process of giving and receiving aid. It features a secure user authentication system, seamless API integration for managing donation campaigns, and a reliable Stripe payment gateway for transactions. The app uses Firebase for real-time notifications, ensuring users are always informed about their contributions and new opportunities to help. The platform is designed to be user-friendly and efficient, making philanthropy more accessible.",
                ar: "تكافل هو منصة تبرعات قوية تبسط عملية إعطاء واستلام المساعدة. يتميز بنظام مصادقة مستخدم آمن، وتكامل سلس مع واجهة برمجة التطبيقات لإدارة حملات التبرع، وبوابة دفع Stripe موثوقة للمعاملات. يستخدم التطبيق Firebase للإشعارات في الوقت الفعلي، مما يضمن أن المستخدمين على اطلاع دائم بمساهماتهم وفرص المساعدة الجديدة. تم تصميم المنصة لتكون سهلة الاستخدام وفعالة، مما يجعل العمل الخيري أكثر سهولة."
            },
            techStack: [
                { en: 'Flutter', ar: 'فلاتر' },
                { en: 'Dart', ar: 'دارت' },
                { en: 'BLoC Pattern', ar: 'نمط BLoC' },
                { en: 'RESTful APIs Integration', ar: 'تكامل RESTful APIs' },
                { en: 'Stripe Payment Gateway', ar: 'بوابة الدفع Stripe' },
                { en: 'Firebase Notifications', ar: 'إشعارات Firebase' }
            ],
            images: [
                'https://placehold.co/1200x800/3c82f6/ffffff?text=Takaful+App+Screenshot+1',
                'https://placehold.co/1200x800/3c82f6/ffffff?text=Takaful+App+Screenshot+2',
                'https://placehold.co/1200x800/3c82f6/ffffff?text=Takaful+App+Screenshot+3'
            ],
        },
        {
            title: { en: 'Car Rental Website', ar: 'موقع تأجير السيارات' },
            tagline: {
                en: 'A static responsive website for car rental services.',
                ar: 'موقع ويب متجاوب لخدمات تأجير السيارات.'
            },
            fullDescription: {
                en: "This is a static, yet highly responsive, car rental website. Built using a combination of Laravel, PHP, HTML, and CSS, it provides a clean and intuitive user interface for browsing and selecting cars. The site is designed to be fast and efficient, ensuring a smooth user experience across all devices. While it is static in nature, its robust backend foundation allows for future scalability to include dynamic features like reservations and user accounts.",
                ar: "هذا موقع ويب ثابت ولكنه متجاوب للغاية لتأجير السيارات. تم بناؤه باستخدام مزيج من Laravel و PHP و HTML و CSS، ويوفر واجهة مستخدم نظيفة وبديهية لتصفح واختيار السيارات. تم تصميم الموقع ليكون سريعًا وفعالًا، مما يضمن تجربة مستخدم سلسة على جميع الأجهزة. وعلى الرغم من أنه ثابت بطبيعته، فإن أساسه الخلفي القوي يسمح بالتوسع المستقبلي ليشمل ميزات ديناميكية مثل الحجوزات وحسابات المستخدمين."
            },
            techStack: [
                { en: 'Laravel', ar: 'لارافيل' },
                { en: 'PHP', ar: 'PHP' },
                { en: 'HTML', ar: 'HTML' },
                { en: 'CSS', ar: 'CSS' },
            ],
            images: [
                'https://placehold.co/1200x800/581c87/ffffff?text=Car+Rental+Website+Screenshot+1',
                'https://placehold.co/1200x800/581c87/ffffff?text=Car+Rental+Website+Screenshot+2',
                'https://placehold.co/1200x800/581c87/ffffff?text=Car+Rental+Website+Screenshot+3'
            ],
        },
        {
            title: { en: 'Travel Plan Website', ar: 'موقع خطة السفر' },
            tagline: {
                en: 'A simple trip planning website with a PHP backend.',
                ar: 'موقع تخطيط رحلات بسيط مع خلفية PHP.'
            },
            fullDescription: {
                en: "This simple travel planning website allows users to manage their trips and itineraries. Developed with HTML, CSS, and Bootstrap for the frontend, and PHP for the backend, it provides essential tools for organizing travel details. Users can add destinations, create daily schedules, and keep track of important information. The use of Bootstrap ensures a clean and responsive layout that works well on both desktop and mobile devices.",
                ar: "يسمح موقع تخطيط الرحلات البسيط هذا للمستخدمين بإدارة رحلاتهم ومساراتهم. تم تطويره باستخدام HTML و CSS و Bootstrap للواجهة الأمامية، و PHP للخلفية، ويوفر أدوات أساسية لتنظيم تفاصيل السفر. يمكن للمستخدمين إضافة وجهات، وإنشاء جداول يومية، وتتبع المعلومات الهامة. يضمن استخدام Bootstrap تصميمًا نظيفًا ومتجاوبًا يعمل بشكل جيد على كل من أجهزة الكمبيوتر المكتبية والمحمولة."
            },
            techStack: [
                { en: 'HTML', ar: 'HTML' },
                { en: 'CSS', ar: 'CSS' },
                { en: 'Bootstrap', ar: 'بوتستراب' },
                { en: 'PHP', ar: 'PHP' }
            ],
            images: [
                'https://placehold.co/1200x800/0d9488/ffffff?text=Travel+Plan+Website+Screenshot+1',
                'https://placehold.co/1200x800/0d9488/ffffff?text=Travel+Plan+Website+Screenshot+2',
                'https://placehold.co/1200x800/0d9488/ffffff?text=Travel+Plan+Website+Screenshot+3'
            ],
        }
    ];
    return (
        <section id="projects" className="py-20">
            <div className="max-w-4xl mx-auto px-4">
                <div className={`flex flex-col items-center mb-8`}>
                    <ProjectorIcon className="text-blue-400 mb-2" size={24} />
                    <h2 className="text-3xl font-bold text-center">
                        {isArabic ? 'المشاريع الرئيسية' : 'Key Projects'}
                    </h2>
                </div>
                <div className="mt-16">
                    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                        {projectsData.map((project, index) => (
                            <div
                                key={index}
                                onClick={() => onProjectClick(project)}
                                className={`
                                    ${isDark ? 'bg-gray-800' : 'bg-gray-100'}
                                    p-6 rounded-lg cursor-pointer
                                    hover:transform hover:scale-105 transition-all
                                    ${isArabic ? 'text-right' : 'text-left'}
                                    shadow-xl
                                `}
                            >
                                <h4 className="text-xl font-semibold mb-2">
                                    {isArabic ? project.title.ar : project.title.en}
                                </h4>
                                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                    {isArabic ? project.tagline.ar : project.tagline.en}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Projects;
