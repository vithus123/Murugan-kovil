import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Donations = () => {
  const [selectedDonation, setSelectedDonation] = useState(null);

  const donationTypes = [
    {
      id: 1,
      title: 'அன்னதானம்',
      icon: '🍲',
      description: 'பக்தர்களுக்கு நித்ய அன்னதானம் வழங்க உதவுங்கள்',
      amounts: [500, 1000, 2500, 5000],
      gradient: 'from-amber-500 to-orange-500',
    },
    {
      id: 2,
      title: 'பூஜை நிதியுதவி',
      icon: '🪔',
      description: 'தினசரி பூஜைகள் மற்றும் சிறப்பு விழாக்களுக்கு',
      amounts: [300, 500, 1000, 2000],
      gradient: 'from-rose-500 to-pink-500',
    },
    {
      id: 3,
      title: 'கோவில் மேம்பாடு',
      icon: '🛕',
      description: 'கோவில் பராமரிப்பு மற்றும் அபிவிருத்திக்கு',
      amounts: [1000, 2500, 5000, 10000],
      gradient: 'from-orange-500 to-red-500',
    },
    {
      id: 4,
      title: 'மூலிகை மலை பாதுகாப்பு',
      icon: '🌿',
      description: 'மலையின் மூலிகை வளத்தை பாதுகாக்க',
      amounts: [500, 1000, 2500, 5000],
      gradient: 'from-green-500 to-emerald-500',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-amber-900 via-orange-900 to-rose-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="text-9xl absolute top-10 left-10">🙏</div>
          
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-6xl mb-6">🙏</div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ fontFamily: 'Noto Sans Tamil, serif' }}>
              தானம் செய்ய
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-amber-300 to-transparent mx-auto mb-4"></div>
            <p className="text-xl text-amber-200" style={{ fontFamily: 'Noto Sans Tamil, sans-serif' }}>
              முருகப்பெருமானின் சேவையில் பங்கேற்க
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-amber-200"
          >
            <div className="text-5xl mb-6">📿</div>
            <p className="text-2xl md:text-3xl text-amber-900 font-bold mb-4" style={{ fontFamily: 'Noto Sans Tamil, serif' }}>
              "தானம் தர்மம் செய்வோர் செல்வம் பெருகும்"
            </p>
            <p className="text-lg text-amber-700" style={{ fontFamily: 'Noto Sans Tamil, sans-serif' }}>
              உங்கள் பங்களிப்பு கோவில் வளர்ச்சியிலும் பக்தர்களின் நலனிலும் முக்கிய பங்கு வகிக்கும்
            </p>
          </motion.div>
        </div>
      </section>

      {/* Donation Types */}
      <section className="py-20 bg-gradient-to-br from-white via-amber-50 to-rose-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-amber-900 mb-4" style={{ fontFamily: 'Noto Sans Tamil, serif' }}>
              நன்கொடை வகைகள்
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-orange-600 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {donationTypes.map((donation, index) => (
              <motion.div
                key={donation.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all border-2 border-amber-100 overflow-hidden group"
              >
                <div className={`bg-gradient-to-br ${donation.gradient} p-8 text-white`}>
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                    className="text-6xl mb-4"
                  >
                    {donation.icon}
                  </motion.div>
                  <h3 className="text-3xl font-bold mb-2" style={{ fontFamily: 'Noto Sans Tamil, serif' }}>
                    {donation.title}
                  </h3>
                  <p className="text-white/90" style={{ fontFamily: 'Noto Sans Tamil, sans-serif' }}>
                    {donation.description}
                  </p>
                </div>

                <div className="p-8">
                  <p className="text-sm text-amber-700 mb-4 font-medium" style={{ fontFamily: 'Noto Sans Tamil, sans-serif' }}>
                    நன்கொடை தொகையை தேர்வு செய்யவும்:
                  </p>
                  
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-4 bg-gradient-to-r ${donation.gradient} text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all`}
                    style={{ fontFamily: 'Noto Sans Tamil, sans-serif' }}
                  >
                    நன்கொடை அளிக்க
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

         

      {/* Bank Details */}
      <section className="py-20 bg-gradient-to-br from-white via-amber-50 to-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-amber-600 to-orange-600 rounded-3xl p-8 md:p-12 shadow-2xl text-white"
          >
            <div className="text-center mb-8">
              <div className="text-5xl mb-4">🏦</div>
              <h3 className="text-3xl font-bold mb-2" style={{ fontFamily: 'Noto Sans Tamil, serif' }}>
                வங்கி விவரங்கள்
              </h3>
              <p className="text-amber-100" style={{ fontFamily: 'Noto Sans Tamil, sans-serif' }}>
                நேரடி பணப்பரிமாற்றத்திற்கு
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 space-y-4">
              <div className="flex justify-between items-center border-b border-white/20 pb-3">
                <span className="text-amber-100">வங்கி பெயர்:</span>
                <span className="font-semibold">Bank of Ceylon</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/20 pb-3">
                <span className="text-amber-100" style={{ fontFamily: 'Noto Sans Tamil, sans-serif' }}>
                  கணக்கு பெயர்:
                </span>
                <span className="font-semibold" style={{ fontFamily: 'Noto Sans Tamil, sans-serif' }}>
                  ஈழத்துப் பழனி முருகன் ஆலயம்
                </span>
              </div>
              <div className="flex justify-between items-center border-b border-white/20 pb-3">
                <span className="text-amber-100">Account Number:</span>
                <span className="font-semibold text-lg">XXXX XXXX XXXX</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-amber-100">Branch:</span>
                <span className="font-semibold">Vavuniya</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Thank You Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="text-6xl mb-6">🙏</div>
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-6" style={{ fontFamily: 'Noto Sans Tamil, serif' }}>
              உங்கள் பங்களிப்புக்கு நன்றி
            </h2>
            <p className="text-xl text-amber-800 leading-relaxed" style={{ fontFamily: 'Noto Sans Tamil, sans-serif' }}>
              உங்கள் நன்கொடை கோவில் சேவைகளை தொடர உதவும். முருகப்பெருமான் உங்களுக்கும் 
              உங்கள் குடும்பத்திற்கும் ஆசீர்வாதம் அளிப்பார்.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Donations;
