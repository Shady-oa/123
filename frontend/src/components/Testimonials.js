import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Mwangi",
      position: "CEO, Nairobi Tech Solutions",
      company: "Nairobi Tech Solutions",
      rating: 5,
      text: "Shaynex Enterprise transformed our office space completely. Their construction and ICT teams worked seamlessly together, delivering a modern workspace that perfectly suits our needs. The project was completed on time and within budget.",
      image: "https://images.pexels.com/photos/7520156/pexels-photo-7520156.jpeg"
    },
    {
      id: 2,
      name: "David Kimani",
      position: "Operations Manager, East Africa Logistics",
      company: "East Africa Logistics",
      rating: 5,
      text: "We've been working with Shaynex for over 3 years now. Their logistics and supply chain solutions have improved our efficiency by 40%. The team is professional, reliable, and always delivers on their promises.",
      image: "https://images.pexels.com/photos/865530/pexels-photo-865530.jpeg"
    },
    {
      id: 3,
      name: "Grace Wanjiku",
      position: "Marketing Director, Kisii Financial Group",
      company: "Kisii Financial Group",
      rating: 5,
      text: "The rebranding project exceeded our expectations. From strategy to execution, Shaynex handled everything professionally. Our new brand identity has significantly improved our market presence and customer engagement.",
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg"
    },
    {
      id: 4,
      name: "Peter Ochieng",
      position: "Facilities Manager, Mombasa Port Authority",
      company: "Mombasa Port Authority",
      rating: 5,
      text: "Shaynex provides comprehensive cleaning and maintenance services for our facilities. Their attention to detail and consistent quality has made them our preferred partner. Highly recommended for any organization.",
      image: "https://images.pexels.com/photos/32941160/pexels-photo-32941160.jpeg"
    }
  ];

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
    <section className="py-20 bg-white">
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
            What Our <span className="text-yellow-600">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about their experience working with Shaynex Enterprise.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-600 to-yellow-500 mx-auto mt-8 rounded-full"></div>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-yellow-600/20">
                <Quote className="w-12 h-12" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                "{testimonial.text}"
              </p>

              {/* Client Info */}
              <div className="flex items-center gap-4">
                <div className="relative">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600">{testimonial.position}</p>
                  <p className="text-yellow-600 text-sm font-semibold">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Client Logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-12">
            Trusted by Leading Organizations
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-center">
            {[
              "Nairobi Tech Solutions",
              "East Africa Logistics",
              "Kisii Financial Group", 
              "Mombasa Port Authority",
              "Kenya Business Summit",
              "Regional Transport Authority"
            ].map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="text-gray-600 font-semibold text-sm">{client}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-gray-900 to-black rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Join Our <span className="text-yellow-400">Success Stories?</span>
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help transform your business with our comprehensive solutions.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-yellow-600 to-yellow-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-200"
            >
              Start Your Success Story
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;