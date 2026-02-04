import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-amber-950 via-rose-950 to-amber-900 text-white overflow-hidden">
      {/* Peacock Pattern Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-amber-500 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-orange-500 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Temple Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center">
                <span className="text-2xl">🦚</span>
              </div>
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
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <p className="text-amber-100">info@eezhathupalani.lk</p>
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

<p className="text-amber-200 text-sm text-center md:text-left mt-1">
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

            <div className="flex items-center space-x-4">
              <motion.a
                whileHover={{ scale: 1.1, rotate: 5 }}
                href="#"
                className="w-10 h-10 bg-amber-800/50 hover:bg-amber-700 rounded-full flex items-center justify-center transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, rotate: -5 }}
                href="#"
                className="w-10 h-10 bg-amber-800/50 hover:bg-amber-700 rounded-full flex items-center justify-center transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, rotate: 5 }}
                href="#"
                className="w-10 h-10 bg-amber-800/50 hover:bg-amber-700 rounded-full flex items-center justify-center transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
              </motion.a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-amber-600 via-orange-500 to-amber-600"></div>
    </footer>
  );
};

export default Footer;
