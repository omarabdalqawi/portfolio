import React, { useState } from 'react';
import { Mail, Phone, MessageSquare, Send, MapPin } from 'lucide-react';

interface ContactProps {
  isDark: boolean;
  isArabic: boolean;
}

const Contact: React.FC<ContactProps> = ({ isDark, isArabic }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Message from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.open(`mailto:mrah07068@gmail.com?subject=${subject}&body=${body}`);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center" data-aos="fade-up">
          {isArabic ? 'تواصل معي' : 'Contact Me'}
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className={`${isArabic ? 'text-right' : 'text-left'}`} data-aos="fade-right">
            <h3 className="text-2xl font-semibold mb-6">
              {isArabic ? 'معلومات التواصل' : 'Contact Information'}
            </h3>
            
            <div className="space-y-4">
              <div className={`flex items-center ${isArabic ? 'space-x-reverse space-x-3 flex-row-reverse' : 'space-x-3'}`}>
                <Mail className="text-blue-400 flex-shrink-0" size={20} />
                <a href="mailto:mrah07068@gmail.com" className="hover:text-blue-400 transition-colors">
                  mrah07068@gmail.com
                </a>
              </div>
              
              <div className={`flex items-center ${isArabic ? 'space-x-reverse space-x-3 flex-row-reverse' : 'space-x-3'}`}>
                <Phone className="text-blue-400 flex-shrink-0" size={20} />
                <a href="tel:+967776811203" className="hover:text-blue-400 transition-colors">
                  +967 776811203
                </a>
              </div>
              
              <div className={`flex items-center ${isArabic ? 'space-x-reverse space-x-3 flex-row-reverse' : 'space-x-3'}`}>
                <MessageSquare className="text-blue-400 flex-shrink-0" size={20} />
                <a 
                  href="https://wa.me/+967776811203" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  {isArabic ? 'واتساب' : 'WhatsApp'}
                </a>
              </div>
              
              <div className={`flex items-center ${isArabic ? 'space-x-reverse space-x-3 flex-row-reverse' : 'space-x-3'}`}>
                <MapPin className="text-blue-400 flex-shrink-0" size={20} />
                <span>{isArabic ? 'صنعاء، اليمن' : 'Sana\'a, Yemen'}</span>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div data-aos="fade-left">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className={`block text-sm font-medium mb-2 ${isArabic ? 'text-right' : 'text-left'}`}>
                  {isArabic ? 'الاسم' : 'Name'}
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg border ${
                    isDark 
                      ? 'bg-gray-800 border-gray-700 text-white' 
                      : 'bg-white border-gray-300 text-gray-900'
                  } focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                    isArabic ? 'text-right' : 'text-left'
                  }`}
                  placeholder={isArabic ? 'اسمك الكامل' : 'Your full name'}
                />
              </div>
              
              <div>
                <label className={`block text-sm font-medium mb-2 ${isArabic ? 'text-right' : 'text-left'}`}>
                  {isArabic ? 'البريد الإلكتروني' : 'Email'}
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg border ${
                    isDark 
                      ? 'bg-gray-800 border-gray-700 text-white' 
                      : 'bg-white border-gray-300 text-gray-900'
                  } focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                    isArabic ? 'text-right' : 'text-left'
                  }`}
                  placeholder={isArabic ? 'بريدك الإلكتروني' : 'your.email@example.com'}
                />
              </div>
              
              <div>
                <label className={`block text-sm font-medium mb-2 ${isArabic ? 'text-right' : 'text-left'}`}>
                  {isArabic ? 'الرسالة' : 'Message'}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    isDark 
                      ? 'bg-gray-800 border-gray-700 text-white' 
                      : 'bg-white border-gray-300 text-gray-900'
                  } focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none ${
                    isArabic ? 'text-right' : 'text-left'
                  }`}
                  placeholder={isArabic ? 'اكتب رسالتك هنا...' : 'Write your message here...'}
                />
              </div>
              
              <button
                type="submit"
                className={`w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center ${
                  isArabic ? 'space-x-reverse space-x-2 flex-row-reverse' : 'space-x-2'
                }`}
              >
                <Send size={20} />
                <span>{isArabic ? 'إرسال الرسالة' : 'Send Message'}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
