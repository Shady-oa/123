import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Target, Shield, Globe, Zap } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "We deliver exceptional quality in every project, exceeding client expectations consistently."
    },
    {
      icon: Shield,
      title: "Reliability",
      description: "Your trusted partner for dependable services, delivered on time and within budget."
    },
    {
      icon: Globe,
      title: "Innovation",
      description: "Embracing cutting-edge solutions to drive business growth and operational efficiency."
    },
    {
      icon: Zap,
      title: "Speed",
      description: "Rapid response times and efficient execution to keep your business moving forward."
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed", description: "Across various industries" },
    { number: "98%", label: "Client Satisfaction", description: "Consistently high ratings" },
    { number: "14", label: "Industry Sectors", description: "Diverse expertise" },
    { number: "24/7", label: "Support Available", description: "Round-the-clock assistance" }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-yellow-600">Shaynex Enterprise</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your unified partner for diverse business solutions, combining expertise across multiple industries to deliver comprehensive services under one roof.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-600 to-yellow-500 mx-auto mt-8 rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/7520156/pexels-photo-7520156.jpeg"
                alt="Professional team"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-8 -right-8 bg-gradient-to-r from-yellow-600 to-yellow-500 text-white p-6 rounded-2xl shadow-xl">
                <div className="text-3xl font-bold">5+</div>
                <div className="text-sm font-semibold">Years of Excellence</div>
              </div>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Unified Approach. Diverse Expertise.
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                At Shaynex Enterprise, we believe in the power of consolidation. Instead of juggling multiple vendors and suppliers, we provide a single point of contact for all your business needs. From construction and logistics to professional services and ICT solutions, our integrated approach ensures seamless coordination and accountability.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Based in Kisii, Kenya, we serve corporate clients, SMEs, and public sector organizations across East Africa. Our commitment to quality, reliability, and innovation has earned us the trust of over 500 satisfied clients.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-50 p-4 rounded-xl">
                <div className="text-2xl font-bold text-yellow-600 mb-2">500+</div>
                <div className="text-sm text-gray-600">Projects Delivered</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-xl">
                <div className="text-2xl font-bold text-yellow-600 mb-2">98%</div>
                <div className="text-sm text-gray-600">Client Retention</div>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-yellow-600 to-yellow-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-200"
            >
              Download Company Profile
            </motion.button>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Core Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="text-center group"
              >
                <div className="bg-yellow-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-100 transition-colors">
                  <value.icon className="w-8 h-8 text-yellow-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-gray-900 to-black rounded-3xl p-12 text-white"
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            Trusted by Businesses Across <span className="text-yellow-400">East Africa</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-xl font-semibold mb-1">{stat.label}</div>
                <div className="text-gray-400 text-sm">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;