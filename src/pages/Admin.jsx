import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Admin = () => {
  const [activeTab, setActiveTab] = useState('events');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [credentials, setCredentials] = useState({ username: '', password: '' });

  const handleLogin = (e) => {
    e.preventDefault();
    // Simple authentication (in production, use proper authentication)
    if (credentials.username === 'admin' && credentials.password === 'admin123') {
      setIsAuthenticated(true);
    } else {
      alert('Invalid credentials');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 w-full max-w-md border-2 border-amber-200"
        >
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">🔐</div>
            <h1 className="text-3xl font-bold text-amber-900 mb-2" style={{ fontFamily: 'Noto Sans Tamil, serif' }}>
              நிர்வாக பதிவு
            </h1>
            <p className="text-amber-700" style={{ fontFamily: 'Noto Sans Tamil, sans-serif' }}>
              நிர்வாக பகுதிக்கு உள்நுழைக
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-amber-900 font-semibold mb-2">Username</label>
              <input
                type="text"
                required
                value={credentials.username}
                onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                className="w-full px-4 py-3 border-2 border-amber-200 rounded-xl focus:outline-none focus:border-amber-500"
                placeholder="Enter username"
              />
            </div>

            <div>
              <label className="block text-amber-900 font-semibold mb-2">Password</label>
              <input
                type="password"
                required
                value={credentials.password}
                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                className="w-full px-4 py-3 border-2 border-amber-200 rounded-xl focus:outline-none focus:border-amber-500"
                placeholder="Enter password"
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              Login
            </motion.button>
          </form>

          <p className="text-center text-sm text-amber-600 mt-6">
            Demo: admin / admin123
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold text-amber-900 mb-2" style={{ fontFamily: 'Noto Sans Tamil, serif' }}>
              நிர்வாக பகுதி
            </h1>
            <p className="text-amber-700" style={{ fontFamily: 'Noto Sans Tamil, sans-serif' }}>
              நிகழ்வுகள், படங்கள் மற்றும் அறிவிப்புகளை நிர்வகிக்கவும்
            </p>
          </div>
          <button
            onClick={() => setIsAuthenticated(false)}
            className="px-6 py-3 bg-red-600 text-white rounded-xl font-semibold hover:bg-red-700 transition-colors"
          >
            வெளியேறு
          </button>
        </div>

        {/* Tabs */}
        <div className="flex space-x-2 mb-8 bg-white rounded-2xl p-2 shadow-lg border-2 border-amber-200">
          {['events', 'gallery', 'announcements'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-3 px-6 rounded-xl font-semibold transition-all ${
                activeTab === tab
                  ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white'
                  : 'text-amber-900 hover:bg-amber-50'
              }`}
              style={{ fontFamily: 'Noto Sans Tamil, sans-serif' }}
            >
              {tab === 'events' && 'நிகழ்வுகள்'}
              {tab === 'gallery' && 'படத் தொகுப்பு'}
              {tab === 'announcements' && 'அறிவிப்புகள்'}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 border-2 border-amber-200">
          {activeTab === 'events' && (
            <div>
              <h2 className="text-2xl font-bold text-amber-900 mb-6" style={{ fontFamily: 'Noto Sans Tamil, serif' }}>
                புதிய நிகழ்வு சேர்க்க
              </h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-amber-900 font-semibold mb-2" style={{ fontFamily: 'Noto Sans Tamil, sans-serif' }}>
                      நிகழ்வு தலைப்பு
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border-2 border-amber-200 rounded-xl focus:outline-none focus:border-amber-500"
                      placeholder="தலைப்பை உள்ளிடவும்"
                    />
                  </div>
                  <div>
                    <label className="block text-amber-900 font-semibold mb-2">தேதி</label>
                    <input
                      type="date"
                      className="w-full px-4 py-3 border-2 border-amber-200 rounded-xl focus:outline-none focus:border-amber-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-amber-900 font-semibold mb-2" style={{ fontFamily: 'Noto Sans Tamil, sans-serif' }}>
                    விவரம்
                  </label>
                  <textarea
                    rows="5"
                    className="w-full px-4 py-3 border-2 border-amber-200 rounded-xl focus:outline-none focus:border-amber-500 resize-none"
                    placeholder="விவரத்தை உள்ளிடவும்"
                  ></textarea>
                </div>

                <div>
                  <label className="block text-amber-900 font-semibold mb-2" style={{ fontFamily: 'Noto Sans Tamil, sans-serif' }}>
                    படங்கள்
                  </label>
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    className="w-full px-4 py-3 border-2 border-amber-200 rounded-xl focus:outline-none focus:border-amber-500"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
                  style={{ fontFamily: 'Noto Sans Tamil, sans-serif' }}
                >
                  நிகழ்வை சேர்க்க
                </motion.button>
              </form>
            </div>
          )}

          {activeTab === 'gallery' && (
            <div>
              <h2 className="text-2xl font-bold text-amber-900 mb-6" style={{ fontFamily: 'Noto Sans Tamil, serif' }}>
                படத் தொகுப்பில் சேர்க்க
              </h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-amber-900 font-semibold mb-2" style={{ fontFamily: 'Noto Sans Tamil, sans-serif' }}>
                    படத்தின் தலைப்பு
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border-2 border-amber-200 rounded-xl focus:outline-none focus:border-amber-500"
                    placeholder="தலைப்பை உள்ளிடவும்"
                  />
                </div>

                <div>
                  <label className="block text-amber-900 font-semibold mb-2" style={{ fontFamily: 'Noto Sans Tamil, sans-serif' }}>
                    படம் பதிவேற்ற
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    className="w-full px-4 py-3 border-2 border-amber-200 rounded-xl focus:outline-none focus:border-amber-500"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
                  style={{ fontFamily: 'Noto Sans Tamil, sans-serif' }}
                >
                  படத்தை சேர்க்க
                </motion.button>
              </form>
            </div>
          )}

          {activeTab === 'announcements' && (
            <div>
              <h2 className="text-2xl font-bold text-amber-900 mb-6" style={{ fontFamily: 'Noto Sans Tamil, serif' }}>
                புதிய அறிவிப்பு
              </h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-amber-900 font-semibold mb-2" style={{ fontFamily: 'Noto Sans Tamil, sans-serif' }}>
                    அறிவிப்பு தலைப்பு
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border-2 border-amber-200 rounded-xl focus:outline-none focus:border-amber-500"
                    placeholder="தலைப்பை உள்ளிடவும்"
                  />
                </div>

                <div>
                  <label className="block text-amber-900 font-semibold mb-2" style={{ fontFamily: 'Noto Sans Tamil, sans-serif' }}>
                    அறிவிப்பு விவரம்
                  </label>
                  <textarea
                    rows="5"
                    className="w-full px-4 py-3 border-2 border-amber-200 rounded-xl focus:outline-none focus:border-amber-500 resize-none"
                    placeholder="விவரத்தை உள்ளிடவும்"
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
                  style={{ fontFamily: 'Noto Sans Tamil, sans-serif' }}
                >
                  அறிவிப்பை வெளியிட
                </motion.button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Admin;
