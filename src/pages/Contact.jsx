import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const contactInfo = [
    {
      icon: "📍",
      title: "முகவரி",
      details: ["சிதம்பரபுரம்", "வவுனியா மாவட்டம்", "இலங்கை"],
    },
    {
      icon: "📞",
      title: "தொலைபேசி",
      details: ["+94 XX XXX XXXX", "+94 XX XXX XXXX"],
    },
    {
      icon: "⏰",
      title: "நேரம்",
      details: ["காலை 7:00 - இரவு 6:00", "எல்லா நாட்களும்"],
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-amber-900 via-orange-900 to-rose-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="text-9xl absolute top-10 left-10">📞</div>
          <div className="text-9xl absolute bottom-10 right-10">📍</div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-6xl mb-6">📞</div>
            <h1
              className="text-5xl md:text-6xl font-bold mb-6"
              style={{ fontFamily: "Noto Sans Tamil, serif" }}
            >
              தொடர்பு கொள்ள
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-amber-300 to-transparent mx-auto mb-4"></div>
           
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-gradient-to-br from-white via-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all border-2 border-amber-200 text-center group"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className="text-6xl mb-4 group-hover:scale-110 transition-transform"
                >
                  {info.icon}
                </motion.div>
                <h3
                  className="text-2xl font-bold text-amber-900 mb-4"
                  style={{ fontFamily: "Noto Sans Tamil, sans-serif" }}
                >
                  {info.title}
                </h3>
                <div className="space-y-2">
                  {info.details.map((detail, idx) => (
                    <p
                      key={idx}
                      className="text-amber-700"
                      style={{ fontFamily: "Noto Sans Tamil, sans-serif" }}
                    >
                      {detail}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Map (Full Width) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl overflow-hidden shadow-2xl border-2 border-amber-200"
          >
            <div className="bg-gradient-to-r from-amber-600 to-orange-600 p-6 text-white">
              <div className="flex items-center space-x-3">
                <span className="text-4xl">🗺️</span>
                <div>
                  <h3
                    className="text-2xl font-bold"
                    style={{ fontFamily: "Noto Sans Tamil, serif" }}
                  >
                    கோவில் இருப்பிடம்
                  </h3>
                  <p
                    className="text-amber-100"
                    style={{ fontFamily: "Noto Sans Tamil, sans-serif" }}
                  >
                    எங்களை எளிதாக கண்டுபிடிக்க
                  </p>
                </div>
              </div>
            </div>

            <div className="h-96 lg:h-[550px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3942.5!2d80.5!3d8.75!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwNDUnMDAuMCJOIDgwwrAzMCcwMC4wIkU!5e0!3m2!1sen!2slk!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Temple Location"
              ></iframe>
            </div>

            <div className="p-6 bg-amber-50">
              <a
                href="https://maps.app.goo.gl/ZcwLLWeoV3h5odLK8"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center space-x-2"
                  style={{ fontFamily: "Noto Sans Tamil, sans-serif" }}
                >
                  <span>📍</span>
                  <span>Google Maps இல் திறக்க</span>
                </motion.button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Directions Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-amber-200"
          >
            <div className="text-center mb-8">
              <div className="text-5xl mb-4">🚗</div>
              <h2
                className="text-3xl font-bold text-amber-900 mb-2"
                style={{ fontFamily: "Noto Sans Tamil, serif" }}
              >
                எங்களை அடைவது எப்படி?
              </h2>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 bg-amber-50 rounded-2xl p-6">
                <span className="text-3xl flex-shrink-0">1️⃣</span>
                <div>
                  <h4
                    className="text-xl font-bold text-amber-900 mb-2"
                    style={{ fontFamily: "Noto Sans Tamil, sans-serif" }}
                  >
                    வவுனியாவிலிருந்து
                  </h4>
                  <p
                    className="text-amber-800 leading-relaxed"
                    style={{ fontFamily: "Noto Sans Tamil, sans-serif" }}
                  >
                    ஏ9 வீதி வழியாக தாண்டிக்குளம் சந்திப்பு வரவும்
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-amber-50 rounded-2xl p-6">
                <span className="text-3xl flex-shrink-0">2️⃣</span>
                <div>
                  <h4
                    className="text-xl font-bold text-amber-900 mb-2"
                    style={{ fontFamily: "Noto Sans Tamil, sans-serif" }}
                  >
                    வேப்பங்குளம் வீதி
                  </h4>
                  <p
                    className="text-amber-800 leading-relaxed"
                    style={{ fontFamily: "Noto Sans Tamil, sans-serif" }}
                  >
                    தாண்டிகுளம் சந்திப்பிலிருந்து வேப்பங்குளம் வீதி ஊடாக செல்லவும்
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-amber-50 rounded-2xl p-6">
                <span className="text-3xl flex-shrink-0">3️⃣</span>
                <div>
                  <h4
                    className="text-xl font-bold text-amber-900 mb-2"
                    style={{ fontFamily: "Noto Sans Tamil, sans-serif" }}
                  >
                    மலை ஏறுதல்
                  </h4>
                  <p
                    className="text-amber-800 leading-relaxed"
                    style={{ fontFamily: "Noto Sans Tamil, sans-serif" }}
                  >
                    400 படிக்கட்டுகளை ஏறி சிதம்பரபுரம் முருகன் ஆலயத்தை அடையவும்
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      
            
       
    </div>
  );
};

export default Contact;
