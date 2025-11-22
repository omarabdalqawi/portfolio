
import React from 'react';
import { Github, Linkedin, Mail, MessageSquare, Heart } from 'lucide-react';

interface FooterProps {
  isDark: boolean;
  isArabic: boolean;
}

const Footer: React.FC<FooterProps> = ({ isDark, isArabic }) => {
  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com',
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/omar-murrah-01ba7b362',
      label: 'LinkedIn'
    },
    {
      icon: Mail,
      href: 'mailto:mrah07068@gmail.com',
      label: 'Email'
    },
    {
      icon: MessageSquare,
      href: 'https://wa.me/+967776811203',
      label: 'WhatsApp'
    }
  ];

  return (
    <footer className={`${isDark ? 'bg-gray-900' : 'bg-gray-100'} py-12`}>
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex flex-col items-center space-y-6">
          {/* Social Links */}
          <div className={`flex ${isArabic ? 'space-x-reverse space-x-6' : 'space-x-6'}`} data-aos="fade-up">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-blue-500 hover:bg-blue-600 text-white transition-all transform hover:scale-110"
                aria-label={link.label}
              >
                <link.icon size={20} />
              </a>
            ))}
          </div>
          
          {/* Copyright */}
          <div className={`text-center ${isDark ? 'text-gray-400' : 'text-gray-600'}`} data-aos="fade-up" data-aos-delay="100">
            <p className={`flex items-center justify-center ${isArabic ? 'space-x-reverse space-x-2 flex-row-reverse' : 'space-x-2'}`}>
              <span>
                {isArabic 
                  ? `© ${new Date().getFullYear()} عمر مره. جميع الحقوق محفوظة.`
                  : `© ${new Date().getFullYear()} Omar Murrah. All rights reserved.`
                }
              </span>
              <Heart size={16} className="text-red-500" />
            </p>
            <p className="mt-2 text-sm">
              {isArabic 
                ? 'صُنع بحب في صنعاء، اليمن'
                : 'Made with love in Sana\'a, Yemen'
              }
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;