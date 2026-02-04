import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { path: "/", label: "முகப்பு" },
    { path: "/about", label: "கோவில் பற்றி" },
    { path: "/pooja", label: "பூஜை நேரம்" },
    { path: "/events", label: "விழாக்கள்" },
    { path: "/donations", label: "தானம்" },
    { path: "/contact", label: "தொடர்பு" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-gradient-to-b from-black/50 to-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            {/* Logo Image */}
            <img
              src="/images/logo.png"
              alt="Murugan Kovil Logo"
              
              className="w-12 h-12 md:w-14 md:h-14 object-contain"
            />

            <div className="hidden md:block">
              <h1
                className={`font-bold text-lg leading-tight transition-colors ${
                  isScrolled ? "text-amber-900" : "text-white"
                }`}
                style={{ fontFamily: "Noto Sans Tamil, sans-serif" }}
              >
                ஈழத்துப் பழனி முருகன் ஆலயம்
              </h1>

              <p
                className={`text-xs ${
                  isScrolled ? "text-amber-700" : "text-amber-200"
                }`}
              >
                Eezhathu Palani Murugan Temple
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  location.pathname === link.path
                    ? isScrolled
                      ? "bg-amber-900 text-white"
                      : "bg-white/20 text-white backdrop-blur-sm"
                    : isScrolled
                    ? "text-amber-900 hover:bg-amber-100"
                    : "text-white hover:bg-white/10"
                }`}
                style={{ fontFamily: "Noto Sans Tamil, sans-serif" }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg ${
              isScrolled ? "text-amber-900" : "text-white"
            }`}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:hidden py-4 bg-white/95 backdrop-blur-md rounded-b-2xl shadow-xl"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg mx-2 my-1 font-medium transition-all ${
                  location.pathname === link.path
                    ? "bg-amber-900 text-white"
                    : "text-amber-900 hover:bg-amber-50"
                }`}
                style={{ fontFamily: "Noto Sans Tamil, sans-serif" }}
              >
                {link.label}
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
