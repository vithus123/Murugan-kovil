import React from "react";
import { motion } from "framer-motion";

const Pooja = () => {
  const dailyPooja = [
    { time: "05:00 - 06:00", name: "காலை விஸ்வரூப தரிசனம்", type: "regular" },
    { time: "06:00 - 07:00", name: "காலை பூஜை", type: "regular" },
    { time: "08:00 - 09:00", name: "கால சந்தி பூஜை", type: "regular" },
    { time: "12:00 - 13:00", name: "உச்சிகால பூஜை", type: "regular" },
    { time: "17:00 - 18:00", name: "சாயரட்ச பூஜை", type: "regular" },
    { time: "18:30 - 19:30", name: "இரவு பூஜை", type: "regular" },
  ];

  const festivals = [
    {
      name: "தைப்பூசம்",
      month: "தை மாதம்",
      description: "காவடி ஆட்டம் மற்றும் சிறப்பு அபிஷேகம்",
      color: "from-amber-500 to-orange-500",
      icon: "🎊",
    },
    {
      name: "பங்குனி உத்திரம்",
      month: "பங்குனி மாதம்",
      description: "திருக்கல்யாண மகோற்சவம்",
      color: "from-rose-500 to-pink-500",
      icon: "💍",
    },
    {
      name: "கந்த சஷ்டி",
      month: "ஐப்பசி மாதம்",
      description: "சூரசம்ஹாரம் மற்றும் கவச பாராயணம்",
      color: "from-orange-500 to-red-500",
      icon: "⚔️",
    },
    {
      name: "வைகாசி விசாகம்",
      month: "வைகாசி மாதம்",
      description: "முருகப்பெருமான் அவதார தினம்",
      color: "from-yellow-500 to-amber-500",
      icon: "🎉",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-amber-900 via-orange-900 to-rose-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="text-9xl absolute top-10 left-10">🪔</div>
          <div className="text-9xl absolute bottom-10 right-10">🕉️</div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-6xl mb-6">📿</div>
            <h1
              className="text-5xl md:text-6xl font-bold mb-6"
              style={{ fontFamily: "Noto Sans Tamil, serif" }}
            >
              பூஜை நேர அட்டவணை
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-amber-300 to-transparent mx-auto mb-4"></div>
            <p
              className="text-xl text-amber-200"
              style={{ fontFamily: "Noto Sans Tamil, sans-serif" }}
            >
              தினசரி வழிபாடு நேரங்கள் மற்றும் சிறப்பு பூஜைகள்
            </p>
          </motion.div>
        </div>
      </section>

      {/* Daily Pooja Schedule */}
      <section className="py-20 bg-gradient-to-br from-white via-amber-50 to-orange-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2
              className="text-4xl font-bold text-amber-900 mb-4"
              style={{ fontFamily: "Noto Sans Tamil, serif" }}
            >
              தினசரி பூஜை நேரங்கள்
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-orange-600 mx-auto"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-amber-200"
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-amber-600 to-orange-600 text-white">
                    <th
                      className="px-6 py-4 text-left text-lg font-bold"
                      style={{ fontFamily: "Noto Sans Tamil, sans-serif" }}
                    >
                      நேரம்
                    </th>
                    <th
                      className="px-6 py-4 text-left text-lg font-bold"
                      style={{ fontFamily: "Noto Sans Tamil, sans-serif" }}
                    >
                      பூஜை
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {dailyPooja.map((pooja, index) => (
                    <motion.tr
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className={`border-b border-amber-100 hover:bg-amber-50 transition-colors ${
                        index % 2 === 0 ? "bg-white" : "bg-amber-50/30"
                      }`}
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl">⏰</span>
                          <span className="text-lg font-semibold text-amber-900">
                            {pooja.time}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className="text-lg text-amber-800"
                          style={{ fontFamily: "Noto Sans Tamil, sans-serif" }}
                        >
                          {pooja.name}
                        </span>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Major Festivals */}
      <section className="py-20 bg-gradient-to-br from-white via-amber-50 to-orange-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2
              className="text-4xl font-bold text-amber-900 mb-4"
              style={{ fontFamily: "Noto Sans Tamil, serif" }}
            >
              முக்கிய விழாக்கள்
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-orange-600 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {festivals.map((festival, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className={`bg-gradient-to-br ${festival.color} rounded-3xl p-8 shadow-2xl text-white relative overflow-hidden group`}
              >
                <div className="absolute top-0 right-0 text-9xl opacity-10 group-hover:opacity-20 transition-opacity">
                  {festival.icon}
                </div>
                <div className="relative z-10">
                  <div className="text-5xl mb-4">{festival.icon}</div>
                  <h3
                    className="text-3xl font-bold mb-2"
                    style={{ fontFamily: "Noto Sans Tamil, serif" }}
                  >
                    {festival.name}
                  </h3>
                  <p
                    className="text-white/90 text-lg mb-4"
                    style={{ fontFamily: "Noto Sans Tamil, sans-serif" }}
                  >
                    {festival.month}
                  </p>
                  <p
                    className="text-white/80 leading-relaxed"
                    style={{ fontFamily: "Noto Sans Tamil, sans-serif" }}
                  >
                    {festival.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-amber-900 via-orange-900 to-rose-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="text-9xl absolute top-5 left-5">🦚</div>
          <div className="text-9xl absolute bottom-5 right-5">🦚</div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-6xl mb-6">🙏</div>
            <h2
              className="text-3xl md:text-4xl font-bold mb-6"
              style={{ fontFamily: "Noto Sans Tamil, serif" }}
            >
              பூஜைகளில் பங்கேற்க
            </h2>
            <p
              className="text-xl text-amber-200 mb-8"
              style={{ fontFamily: "Noto Sans Tamil, sans-serif" }}
            >
              நீங்களும் பூஜைகளை நடத்த விரும்பினால் எங்களை தொடர்பு கொள்ளவும்
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 bg-white text-amber-900 rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all"
              style={{ fontFamily: "Noto Sans Tamil, sans-serif" }}
            >
              தொடர்பு கொள்ள
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Pooja;
