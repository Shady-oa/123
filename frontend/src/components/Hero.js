import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Star } from 'lucide-react';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1554630049-9b98ee5d8c17?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMEtlbnlhfGVufDB8fHxibGFja19hbmRfd2hpdGV8MTc1MjI3MTY5NHww&ixlib=rb-4.1.0&q=85)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-left"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-block px-4 py-2 bg-yellow-600/20 text-yellow-400 rounded-full text-sm font-semibold backdrop-blur-sm border border-yellow-400/30">
                🏆 Kenya's Trusted Multi-Service Partner
              </span>
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            >
              <span className="block">Everything You</span>
              <span className="block text-yellow-400">Need Under</span>
              <span className="block">One Roof</span>
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl leading-relaxed"
            >
              From construction sites to corporate boardrooms, we deliver innovative, reliable, high-quality solutions with our unified approach and diverse expertise.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-8">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(212, 175, 55, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-yellow-600 to-yellow-500 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center gap-2 hover:shadow-lg transition-all duration-200"
              >
                Get Free Quote <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-200"
              >
                View Our Services
              </motion.button>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2 text-gray-300">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>500+ Projects Delivered</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>14 Industry Sectors</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>98% Client Retention</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Stats Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 gap-4"
          >
            <motion.div 
              variants={itemVariants}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <div className="text-yellow-400 text-3xl font-bold mb-2">9+</div>
              <div className="text-white font-semibold">Service Areas</div>
              <div className="text-gray-300 text-sm">Complete solutions</div>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <div className="text-yellow-400 text-3xl font-bold mb-2">24/7</div>
              <div className="text-white font-semibold">Support</div>
              <div className="text-gray-300 text-sm">Always available</div>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <div className="flex items-center gap-1 mb-2">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span className="text-yellow-400 text-3xl font-bold">4.9</span>
              </div>
              <div className="text-white font-semibold">Client Rating</div>
              <div className="text-gray-300 text-sm">Trusted quality</div>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <div className="text-yellow-400 text-3xl font-bold mb-2">5+</div>
              <div className="text-white font-semibold">Years</div>
              <div className="text-gray-300 text-sm">Industry experience</div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60"
      >
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-8 bg-gradient-to-b from-yellow-400 to-transparent rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;