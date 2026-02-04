import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Events = () => {
  const events = [
    {
      id: 1,
      title: 'வவுனியா சிதம்பரபுரம் ஈழத்து பழனி முருகன் ஆலயம் மகோற்சவ கொடியேற்றம்',
      year: '2016',
      description: 'வவுனியா சிதம்பரபுரம் ஈழத்து பழனி முருகன் ஆலயத்தின் வருடாந்த மகோற்சவம் நேற்று 02.08.2016 செவ்வாய்கிழமையன்று ஆலயத்தின் பிரதம குருக்கள் சிவஸ்ரீ.வை.சிவசங்கரக்குருக்கள் தலைமையில் கொடியேற்றத்துடன் ஆரம்பமாகியுள்ளது! பத்து நாட்கள் அலங்கார திருவிழாவாக இடம்பெறும் மகோற்சவநிகழ்வுகள் தொடர்பாக அறிவதற்கு தொடர்ந்தும் எம்முடன் இணைந்திருங்கள்!',
      images: [
        'public/images/m8.webp'
      ],
    },
    {
      id: 2,
      title: 'மகோற்சவ அலங்கார பெருவிழா - தீர்த்தோற்சவம்',
      year: '2015',
      description: 'வவுனியா சிதம்பரபுரம் யாத்திரிகர் மலையில் அமைந்துள்ள ஈழத்து பழனி என அடியார்களால் அழைக்கப்படும் திருப்பழனி முருகன் ஆலயத்தின் வருடாந்த மகோற்சவ அலங்கார பெருவிழா 14.08.2015 அன்று கொடிஏற்றத்துடன் ஆரம்பமாகி பதினாறாம் நாளான இன்று 29.08.2015 சனிக்கிழமை தீர்த்தோற்சவம் மற்றும் கொடியிறக்க வைபவம் ஆகியன இடம்பெற்றன. மேற்படி உற்சவம் ஆலய பிரதமகுரு சிவாச்சாரிய திலகம் சிவஸ்ரீ சிவசங்கர குருக்ககள் மற்றும் சி.ஸ்ரீ.சங்கரசர்மா தலைமையில் இன்று காலை 10.30 மணிக்கு அஷ்டோத்ர(108) சங்காபிஷேகத்துடன் ஆரம்பமாகி தொடர்ந்து தீபாராதனைகள் மற்றும் மந்திர உச்சாடனங்களுடன் கூடிய வழிபாடு இடம்பெற்று மதியம் 1.00 மணியளவில் வள்ளி தெய்வயானை சமேத முருகபெருமான் வசந்தமண்டபத்தில் எழுந்தருளி வசந்த மண்டப பூஜை இடம்பெற்று தொடர்து எம்பெருமான் முருகபெருமான் ஆலய முன்றலில் தீர்த்தமாடி கொடியிறக்க உற்சவமும் இடம்பெற்று வள்ளி தெய்வயானை சமேத முருகபெருமான் வெளிவீதி வலம் வந்து பக்தர்களுக்கு அருள்புரிந்த நிகழ்வு இடம்பெற்றது.',
      images: [
       'public/images/m6.webp'
      ],
    },
  ];

  const thaipusam = {
    title: 'தைப்பூசம்',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Thaipusam_Murugan.jpg/640px-Thaipusam_Murugan.jpg',
      'https://www.omspiritualshop.com/cdn/shop/articles/murugan_kavadi_2000x1333_0cb1aac2-f171-4a24-bfa6-cc8a1214d8c2_1200x1200.jpg?v=1675939264',
      'https://www.nation.sc/images/2017/Feb/10/_DSC6964.JPG',
      
    ],
    significance: [
      'இது முருகப்பெருமானின் வல்லமை மற்றும் தீங்கு எதிர்ப்பு வெற்றியை நினைவுகூரும் திருவிழா.',
      'புராணம் படி, அம்மா பர்வதியம்மாள் முருகனை "வேல்" கொடுத்து, சூரபத்மனைக் கொன்றதாக இந்நாள் நினைக்கப்படுகிறது.',
      'எனவே பூரணிமை மற்றும் பூசம் நட்சத்திரம் சேரும் நாளில் இந்நாள் கொண்டாடப்படுகிறது.',
    ],
    practices: [
      'காவடி ஆட்டம் (Kavadi aattam) – கவடியைக் கையில் எடுத்துச் செல்வது',
      'பால் குடம் (Milk pots) ஏற்றல் மற்றும் ஆலய வழிபாடு',
      'சிலர் வெவ்வேறு வெளிப்பாடுகளில் புண்கலங்குகள் செய்வார்கள், ஆனால் இவை அனைத்தும் உடல் மற்றும் மனச் சுத்தத்திற்கு வழிபாடு என கருதப்படுகிறது',
    ],
    vrutham: [
      'சில பக்தர்கள் திருவிழாவுக்கு முன் விரதம் (fasting) செய்தாலும், முழு திருவிழாவை வழிபாடு மற்றும் மன அமைதிக்காக பயன்படுத்துவர்',
      'உள்ளூர் வழிபாடுகள் மற்றும் குடும்ப வழிபாடுகள் வெவ்வேறு விதத்தில் நடைபெறும் ஆனால் எல்லாம் முருகப் பெருமானின் அருளை பெற்று நல்ல வாழ்விற்கு வேண்டுதல் என்பதை குறிக்கின்றன',
    ],
  };

  const kandasashti = {
    title: 'கந்தசஷ்டி',
    description: 'கந்தசஷ்டி என்பது முருகப்பெருமானுக்கு மிகவும் முக்கியமான விரத/திருவிழா. ஐப்பசி மாதத்தில் (Oct–Nov) வரும் சுக்லபட்ச சஷ்டி முதல் 6 நாட்கள் தொடர்ந்து அனுஷ்டிக்கப்படும் விரதம் தான் கந்தசஷ்டி விரதம்.',
    meaning: [
      '"சஷ்டி" = தமிழ் மாதத்தில் வரும் 6-வது நாள்',
      '"கந்தன்" = முருகன்',
    ],
    significance: 'இந்த 6 நாட்கள் என்பது சூரபத்மன் என்ற அசுரனை முருகப்பெருமான் வென்ற சம்பவத்தை நினைவுகூரும் நாட்கள்.',
    kavasam: {
      title: 'கந்தசஷ்டி கவசம்',
      description: 'கந்தசஷ்டி கவசம் என்பது முருகனின் அருள் பாதுகாப்பை வேண்டி பாடப்படும் மிக சக்திவாய்ந்த பாடல்.',
      benefits: [
        'கெட்ட சக்திகள் விலகும்',
        'மனபயம் குறையும்',
        'நோய், தடைகள் குறையும்',
        'வாழ்க்கையில் முன்னேற்றம் கிடைக்கும்',
      ],
    },
    events: {
      day6: '6-வது நாள் – சூரசம்ஹாரம்: முருகன் சூரனை வெல்வது நாடக வடிவில் கோவில்களில் நடக்கும்',
      day7: 'அடுத்த நாள் – திருக்கல்யாணம்: முருகன் – வள்ளி/தெய்வானை கல்யாணம் (சுப நிகழ்வு)',
    },
  };

  const [selectedEventImage, setSelectedEventImage] = useState({});

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-amber-900 via-rose-900 to-orange-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
            className="text-9xl absolute top-10 right-10"
          >
            🔱
          </motion.div>
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
            className="text-9xl absolute bottom-10 left-10"
          >
            🔱
          </motion.div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-6xl mb-6">🔱</div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ fontFamily: 'Noto Sans Tamil, serif' }}>
              விழாக்கள் & நிகழ்வுகள்
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-amber-300 to-transparent mx-auto mb-4"></div>
            <p className="text-xl text-amber-200" style={{ fontFamily: 'Noto Sans Tamil, sans-serif' }}>
              கோவிலின் முக்கிய விழாக்கள் மற்றும் சிறப்பு நிகழ்வுகள்
            </p>
          </motion.div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-20 bg-gradient-to-br from-white via-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-amber-900 mb-4" style={{ fontFamily: 'Noto Sans Tamil, serif' }}>
              கடந்த நிகழ்வுகள்
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-orange-600 mx-auto"></div>
          </motion.div>

          <div className="space-y-12">
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-amber-200"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Image Slider */}
                  <div className="relative h-96 lg:h-auto">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={selectedEventImage[event.id] || 0}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        src={event.images[selectedEventImage[event.id] || 0]}
                        alt={event.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src = 'https://via.placeholder.com/800x600/F59E0B/FFFFFF?text=Event';
                        }}
                      />
                    </AnimatePresence>

                    {/* Navigation Buttons */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                      {event.images.map((_, imgIndex) => (
                        <button
                          key={imgIndex}
                          onClick={() =>
                            setSelectedEventImage({ ...selectedEventImage, [event.id]: imgIndex })
                          }
                          className={`w-3 h-3 rounded-full transition-all ${
                            (selectedEventImage[event.id] || 0) === imgIndex
                              ? 'bg-white w-8'
                              : 'bg-white/50'
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 lg:p-12">
                    <div className="inline-block px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full text-sm font-semibold mb-4">
                      {event.year}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-amber-900 mb-4" style={{ fontFamily: 'Noto Sans Tamil, serif' }}>
                      {event.title}
                    </h3>
                    <p className="text-amber-800 leading-relaxed" style={{ fontFamily: 'Noto Sans Tamil, sans-serif' }}>
                      {event.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Thaipusam */}
      <section className="py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="text-6xl mb-4">🔱</div>
            <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4" style={{ fontFamily: 'Noto Sans Tamil, serif' }}>
              {thaipusam.title}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-orange-600 mx-auto"></div>
          </motion.div>

          {/* Image Gallery */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            {thaipusam.images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="aspect-square rounded-xl overflow-hidden shadow-lg"
              >
                <img
                  src={image}
                  alt={`Thaipusam ${index + 1}`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/300x300/F59E0B/FFFFFF?text=Thaipusam';
                  }}
                />
              </motion.div>
            ))}
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-xl border-2 border-amber-200"
            >
              <h3 className="text-2xl font-bold text-amber-900 mb-4" style={{ fontFamily: 'Noto Sans Tamil, serif' }}>
                🔱 முக்கிய நோக்கம்
              </h3>
              <ul className="space-y-3 text-amber-800" style={{ fontFamily: 'Noto Sans Tamil, sans-serif' }}>
                {thaipusam.significance.map((item, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-xl border-2 border-amber-200"
            >
              <h3 className="text-2xl font-bold text-amber-900 mb-4" style={{ fontFamily: 'Noto Sans Tamil, serif' }}>
                🕉️ வழிபாடு மற்றும் செய்யும் பணிகள்
              </h3>
              <ul className="space-y-3 text-amber-800" style={{ fontFamily: 'Noto Sans Tamil, sans-serif' }}>
                {thaipusam.practices.map((item, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-xl border-2 border-amber-200"
            >
              <h3 className="text-2xl font-bold text-amber-900 mb-4" style={{ fontFamily: 'Noto Sans Tamil, serif' }}>
                🙏 பக்தர்களின் விரதம்
              </h3>
              <ul className="space-y-3 text-amber-800" style={{ fontFamily: 'Noto Sans Tamil, sans-serif' }}>
                {thaipusam.vrutham.map((item, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Kanda Sashti */}
      <section className="py-20 bg-gradient-to-br from-white via-amber-50 to-orange-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="text-6xl mb-4">⚔️</div>
            <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4" style={{ fontFamily: 'Noto Sans Tamil, serif' }}>
              {kandasashti.title}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-orange-600 mx-auto"></div>
          </motion.div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-amber-600 to-orange-600 rounded-3xl p-8 md:p-12 text-white shadow-2xl"
            >
              <p className="text-xl leading-relaxed mb-6" style={{ fontFamily: 'Noto Sans Tamil, sans-serif' }}>
                {kandasashti.description}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {kandasashti.meaning.map((item, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <p className="text-lg" style={{ fontFamily: 'Noto Sans Tamil, sans-serif' }}>
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border-2 border-amber-200"
            >
              <h3 className="text-3xl font-bold text-amber-900 mb-4" style={{ fontFamily: 'Noto Sans Tamil, serif' }}>
                🌟 கந்தசஷ்டி ஏன் கொண்டாடப்படுகிறது?
              </h3>
              <p className="text-xl text-amber-800 leading-relaxed" style={{ fontFamily: 'Noto Sans Tamil, sans-serif' }}>
                {kandasashti.significance}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-rose-50 to-orange-50 rounded-3xl p-8 md:p-12 shadow-xl border-2 border-rose-200"
            >
              <h3 className="text-3xl font-bold text-amber-900 mb-4" style={{ fontFamily: 'Noto Sans Tamil, serif' }}>
                🛡️ {kandasashti.kavasam.title}
              </h3>
              <p className="text-lg text-amber-800 mb-6 leading-relaxed" style={{ fontFamily: 'Noto Sans Tamil, sans-serif' }}>
                {kandasashti.kavasam.description}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {kandasashti.kavasam.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3 bg-white rounded-xl p-4 shadow-md">
                    <span className="text-2xl">✨</span>
                    <span className="text-amber-900 font-medium" style={{ fontFamily: 'Noto Sans Tamil, sans-serif' }}>
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-amber-200">
                <div className="text-4xl mb-4">⚔️</div>
                <h4 className="text-2xl font-bold text-amber-900 mb-3" style={{ fontFamily: 'Noto Sans Tamil, sans-serif' }}>
                  {kandasashti.events.day6.split(':')[0]}
                </h4>
                <p className="text-amber-800" style={{ fontFamily: 'Noto Sans Tamil, sans-serif' }}>
                  {kandasashti.events.day6.split(':')[1]}
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-amber-200">
                <div className="text-4xl mb-4">💍</div>
                <h4 className="text-2xl font-bold text-amber-900 mb-3" style={{ fontFamily: 'Noto Sans Tamil, sans-serif' }}>
                  {kandasashti.events.day7.split(':')[0]}
                </h4>
                <p className="text-amber-800" style={{ fontFamily: 'Noto Sans Tamil, sans-serif' }}>
                  {kandasashti.events.day7.split(':')[1]}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
