import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const templeFeatures = [
    {
      title: 'அமைவிடம்',
      description: 'வவுனியா மாவட்டத்தின் சிதம்பரபுரம் பகுதியில் அமைந்துள்ள இந்த ஆலயம், "ஈழத்து பழனி" என அழைக்கப்படுகிறது.',
      icon: '📍',
    },
    {
      title: 'மலைக்கோயில்',
      description: 'சுமார் 200 மீட்டர் உயரமான மலையில், 400 படிகள் ஏறிச் சென்று மூலவரை தரிசிக்கலாம்.',
      icon: '⛰️',
    },
    {
      title: 'மூலிகை மலை',
      description: 'இந்த மலையில் அரிதான மூலிகைகள் காணப்படுகின்றன.',
      icon: '🌿',
    },
    
    {
      title: 'விழாக்கள்',
      description: 'ஆண்டுத் திருவிழாக் காலங்களில் பக்தர்கள் பெருமளவில் கலந்து கொள்வர்.',
      icon: '🎉',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-amber-900 via-rose-900 to-amber-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
            className="absolute top-10 right-10 text-9xl"
          >
            🦚
          </motion.div>
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
            className="absolute bottom-10 left-10 text-9xl"
          >
            🦚
          </motion.div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ fontFamily: 'Noto Sans Tamil, serif' }}>
              கோவில் பற்றி
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-amber-300 to-transparent mx-auto"></div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gradient-to-br from-white via-amber-50 to-rose-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border-2 border-amber-200 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-amber-100/50 to-transparent rounded-full blur-3xl"></div>
              <div className="relative z-10">
                <div className="text-6xl mb-6 text-center">🕉️</div>
                <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-6 text-center" style={{ fontFamily: 'Noto Sans Tamil, serif' }}>
                  கோவிலின் வரலாறு
                </h2>
                <p className="text-lg md:text-xl text-amber-800 leading-relaxed text-center mb-8" style={{ fontFamily: 'Noto Sans Tamil, sans-serif' }}>
                  வவுனியா, சிதம்பரபுரத்தில் அமைந்துள்ள அருள்மிகு ஈழத்துப் பழனி முருகன் ஆலயம், 
                  சுமார் 200 மீட்டர் உயரமான மலையில், 400 படிக்கட்டுகளை ஏறிச் செல்லக்கூடிய ஒரு 
                  புகழ்மிக்க முருகன் தலமாகும். மூலிகை வளம் மிக்க இந்த மலையில் பக்தர்கள் நீண்ட தூரம் 
                  நடந்து வந்து வழிபடுகின்றனர்.
                </p>
                
              </div>
            </div>
          </motion.div>

          {/* Special Highlight */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="bg-gradient-to-br from-amber-600 via-orange-600 to-rose-600 rounded-3xl shadow-2xl p-8 md:p-12 text-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <div className="text-9xl absolute top-5 right-5">⭐</div>
                <div className="text-9xl absolute bottom-5 left-5">⭐</div>
              </div>
              <div className="relative z-10 text-center">
                <div className="text-6xl mb-6">🏔️</div>
                <h3 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: 'Noto Sans Tamil, serif' }}>
                  சிறப்பு அம்சம்
                </h3>
                <p className="text-xl md:text-2xl leading-relaxed" style={{ fontFamily: 'Noto Sans Tamil, sans-serif' }}>
                  தமிழகத்தில் உள்ள பழனி முருகனைப் போலவே இங்கும் மலை மீது முருகன் வீற்றிருப்பதால், 
                  இது <span className="font-bold text-amber-200">ஈழத்து பழனி</span> என சிறப்பாகக் கூறப்படுகிறது.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-12 text-center" style={{ fontFamily: 'Noto Sans Tamil, serif' }}>
              கோவிலின் சிறப்புகள்
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {templeFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.03 }}
                  className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all border-2 border-amber-100 group"
                >
                  <div className="flex items-start space-x-4">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.6 }}
                      className="text-5xl flex-shrink-0 group-hover:scale-110 transition-transform"
                    >
                      {feature.icon}
                    </motion.div>
                    <div>
                      <h3 className="text-2xl font-bold text-amber-900 mb-3" style={{ fontFamily: 'Noto Sans Tamil, sans-serif' }}>
                        {feature.title}
                      </h3>
                      <p className="text-amber-700 leading-relaxed" style={{ fontFamily: 'Noto Sans Tamil, sans-serif' }}>
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Vision Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl shadow-xl p-8 md:p-12 border-2 border-amber-200">
              <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-8 text-center" style={{ fontFamily: 'Noto Sans Tamil, serif' }}>
                கோவிலின் நோக்கம்
              </h2>
              <div className="space-y-6 text-amber-800 text-lg leading-relaxed" style={{ fontFamily: 'Noto Sans Tamil, sans-serif' }}>
                <div className="flex items-start space-x-4">
                  <span className="text-3xl flex-shrink-0">🙏</span>
                  <p>
                    பக்தர்களுக்கு ஆன்மீக அமைதியும் முருகப்பெருமானின் அருளும் கிடைக்க வழிவகுத்தல்
                  </p>
                </div>
                <div className="flex items-start space-x-4">
                  <span className="text-3xl flex-shrink-0">🌟</span>
                  <p>
                    தமிழ் பண்பாட்டையும் ஹிந்து மத மரபுகளையும் பாதுகாத்தல் மற்றும் வளர்த்தல்
                  </p>
                </div>
                <div className="flex items-start space-x-4">
                  <span className="text-3xl flex-shrink-0">🤝</span>
                  <p>
                    சமூக நல்லிணக்கத்தை ஊக்குவித்தல் மற்றும் ஏழை எளியவர்களுக்கு உதவி செய்தல்
                  </p>
                </div>
                <div className="flex items-start space-x-4">
                  <span className="text-3xl flex-shrink-0">📿</span>
                  <p>
                    பாரம்பரிய பூஜைகள் மற்றும் விழாக்களை சிறப்பாக நடத்துதல்
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-20 bg-gradient-to-br from-amber-100 via-orange-50 to-rose-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4" style={{ fontFamily: 'Noto Sans Tamil, serif' }}>
              கோவில் சிலைகள்
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-orange-600 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
            'public/images/m1.jpg',
            'public/images/m2.jpg',
            'public/images/m3.jpg',
            

            ].map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="rounded-2xl overflow-hidden shadow-2xl aspect-square"
              >
                <img
                  src={image}
                  alt={`Temple ${index + 1}`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/400x400/F59E0B/FFFFFF?text=Murugan';
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
