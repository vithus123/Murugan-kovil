import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    'https://upload.wikimedia.org/wikipedia/commons/3/3f/Lord_Murugan.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/2/2c/Murugan_statue.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/5/59/Thaipusam_Murugan.jpg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: '🏔️',
      title: '200 மீட்டர் உயரம்',
      description: 'மலைமீது அமைந்துள்ள அற்புத கோவில்',
    },
    {
      icon: '🌿',
      title: 'மூலிகை மலை',
      description: 'அரிதான மூலிகைகள் கொண்ட புனித மலை',
    },
    {
      icon: '🚶',
      title: '400 படிக்கட்டுகள்',
      description: 'ஆன்மீக பயணத்திற்கு வழி',
    },
    {
      icon: '🙏',
      title: 'ஈழத்து பழனி',
      description: 'இலங்கையின் புகழ்பெற்ற முருகன் தலம்',
    },
  ];

  const galleryImages = [
    {
      url: 'public/images/m11.jpg',
      title: 'முருகப்பெருமான்',
    },
    {
      url: 'public/images/m6.webp',
      title: 'தைப்பூச விழா',
    },
    {
      url: 'public/images/m4.webp',
      title: ' மகோற்சவம்',
    },
    {
      url: 'public/images/m12.jpg',
      title: 'வேலுடன் முருகன்',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Images with Parallax */}
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: currentImageIndex === index ? 1 : 0 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0"
            >
              <div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: `url(${image})`,
                  filter: 'brightness(0.5)',
                }}
              />
            </motion.div>
          ))}
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-amber-950/80 via-rose-950/60 to-amber-950/90"></div>
        </div>

        {/* Peacock Feather Decorations */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          className="absolute top-20 right-10 w-32 h-32 text-amber-400/20 text-9xl"
        >
          🦚
        </motion.div>
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-20 left-10 w-32 h-32 text-amber-400/20 text-9xl"
        >
          🦚
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.h1
              className="text-9xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-amber-200 via-orange-300 to-amber-200 bg-clip-text text-transparent"
              style={{ fontFamily: 'Noto Sans Tamil, serif' }}
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              ஈழத்துப் பழனி முருகன் ஆலயம்
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="mb-8"
            >
              <p className="text-2xl md:text-4xl text-amber-100 font-semibold mb-4" style={{ fontFamily: 'Noto Sans Tamil, sans-serif' }}>
                ஓம் சரவண பவ
              </p>
              <div className="w-32 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-6"></div>
              <p className="text-lg md:text-xl text-amber-200 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'Noto Sans Tamil, sans-serif' }}>
                வவுனியா, சிதம்பரபுரத்தில் அமைந்துள்ள 200 மீட்டர் உயர மலையில்<br />
                400 படிக்கட்டுகளை ஏறி வழிபடக்கூடிய புகழ்மிக்க முருகன் தலம்
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link to="/about">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-full font-semibold shadow-2xl hover:shadow-amber-500/50 transition-all"
                  style={{ fontFamily: 'Noto Sans Tamil, sans-serif' }}
                >
                  கோவில் பற்றி அறிக
                </motion.button>
              </Link>
              <Link to="/events">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold border-2 border-white/30 hover:bg-white/20 transition-all"
                  style={{ fontFamily: 'Noto Sans Tamil, sans-serif' }}
                >
                  விழாக்கள்
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
           
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-white via-amber-50 to-rose-50 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-amber-200/30 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-orange-200/30 to-transparent rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4" style={{ fontFamily: 'Noto Sans Tamil, serif' }}>
              கோவிலின் சிறப்புகள்
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-orange-600 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all border border-amber-100 group"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className="text-6xl mb-4 group-hover:scale-110 transition-transform"
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-amber-900 mb-2" style={{ fontFamily: 'Noto Sans Tamil, sans-serif' }}>
                  {feature.title}
                </h3>
                <p className="text-amber-700" style={{ fontFamily: 'Noto Sans Tamil, sans-serif' }}>
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Highlight Section */}
      <section className="py-20 bg-gradient-to-r from-amber-900 via-rose-900 to-amber-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-9xl">🦚</div>
          <div className="absolute bottom-10 right-10 text-9xl">🦚</div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="text-6xl mb-6">⭐</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: 'Noto Sans Tamil, serif' }}>
              இலங்கையின் பழனி
            </h2>
            <p className="text-xl md:text-2xl leading-relaxed text-amber-100" style={{ fontFamily: 'Noto Sans Tamil, sans-serif' }}>
              தமிழகத்தில் உள்ள பழனி முருகனைப் போலவே இங்கும் மலை மீது முருகன் வீற்றிருப்பதால், 
              இது <span className="text-amber-300 font-bold">ஈழத்து பழனி</span> என சிறப்பாகக் கூறப்படுகிறது.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20 bg-gradient-to-br from-amber-50 via-white to-rose-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4" style={{ fontFamily: 'Noto Sans Tamil, serif' }}>
              படத் தொகுப்பு
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-orange-600 mx-auto mb-4"></div>
            <p className="text-amber-700 text-lg" style={{ fontFamily: 'Noto Sans Tamil, sans-serif' }}>
              கோவிலின் அழகிய காட்சிகள்
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="group relative overflow-hidden rounded-2xl shadow-xl aspect-square cursor-pointer"
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/400x400/F59E0B/FFFFFF?text=Murugan';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white font-bold text-lg" style={{ fontFamily: 'Noto Sans Tamil, sans-serif' }}>
                      {image.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/events">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all"
                style={{ fontFamily: 'Noto Sans Tamil, sans-serif' }}
              >
                மேலும் பார்க்க
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-amber-100 via-orange-50 to-rose-100 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="text-9xl absolute top-5 left-20">🕉️</div>
          <div className="text-9xl absolute bottom-5 right-20">🪔</div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-6" style={{ fontFamily: 'Noto Sans Tamil, serif' }}>
              முருகப்பெருமானின் ஆசீர்வாதத்தைப் பெறுங்கள்
            </h2>
            <p className="text-xl text-amber-800 mb-8" style={{ fontFamily: 'Noto Sans Tamil, sans-serif' }}>
              பூஜைகள், விழாக்கள் மற்றும் தானம் பற்றி மேலும் அறிய
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/pooja">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-amber-700 to-orange-700 text-white rounded-full font-semibold shadow-xl"
                  style={{ fontFamily: 'Noto Sans Tamil, sans-serif' }}
                >
                  பூஜை நேரம்
                </motion.button>
              </Link>
              <Link to="/donations">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-amber-900 rounded-full font-semibold shadow-xl border-2 border-amber-300"
                  style={{ fontFamily: 'Noto Sans Tamil, sans-serif' }}
                >
                  தானம் செய்ய
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
