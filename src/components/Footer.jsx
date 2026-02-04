import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-amber-950 via-rose-950 to-amber-900 text-white overflow-hidden">
      
      {/* Background Gradient Circles (Optional) */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-amber-500 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-orange-500 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">

          {/* Temple Info with Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3 mb-4">
              
              {/* Logo Circle */}
             
                <img 
                  src="/images/logo.png" // <-- Replace with your logo path
                  alt="Temple Logo"
                  className="w-12 h-12 object-contain"
                />
              

              <h3 className="text-xl font-bold" style={{ fontFamily: 'Noto Sans Tamil, sans-serif' }}>
                ஈழத்துப் பழனி முருகன் ஆலயம்
              </h3>
            </div>
            <p className="text-amber-200 text-sm leading-relaxed" style={{ fontFamily: 'Noto Sans Tamil, sans-serif' }}>
              வவுனியா, சிதம்பரபுரத்தில் அமைந்துள்ள புகழ்மிக்க முருகன் தலம்
            </p>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-lg font-bold mb-4 text-amber-300">தொடர்பு விவரங்கள்</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <svg className="w-5 h-5 text-amber-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-amber-100" style={{ fontFamily: 'Noto Sans Tamil, sans-serif' }}>
                  சிதம்பரபுரம், வவுனியா மாவட்டம், இலங்கை
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <p className="text-amber-100">+94 XX XXX XXXX</p>
              </div>
             
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-lg font-bold mb-4 text-amber-300">விரைவு இணைப்புகள்</h4>
            <div className="grid grid-cols-2 gap-2">
              {[
                { path: '/', label: 'முகப்பு' },
                { path: '/about', label: 'கோவில் பற்றி' },
                { path: '/pooja', label: 'பூஜை நேரம்' },
                { path: '/events', label: 'விழாக்கள்' },
                { path: '/donations', label: 'தானம்' },
                { path: '/contact', label: 'தொடர்பு' },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-amber-200 hover:text-white transition-colors text-sm"
                  style={{ fontFamily: 'Noto Sans Tamil, sans-serif' }}
                >
                  • {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-amber-800/30 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-amber-200 text-sm text-center md:text-left">
              © 2026 ஈழத்துப் பழனி முருகன் ஆலயம்.
            </p>

            <p className="text-amber-200 text-sm text-center md:text-center mt-1">
              Sponsored by{" "}
              <a
                href="https://spectronx.ca/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-300 hover:text-yellow-200 "
              >
                SpectronX Technologies
              </a>
            </p>

         
      
          </div>
        </div>
      </div>
      {/* Decorative Bottom Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-amber-600 via-orange-500 to-amber-600"></div>
    </footer>
  );
};

export default Footer;
