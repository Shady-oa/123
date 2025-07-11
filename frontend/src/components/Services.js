import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Truck, 
  Printer, 
  Sparkles, 
  Calendar, 
  Monitor, 
  Briefcase,
  Package,
  Users
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Package,
      title: "General Supplies",
      description: "Complete range of office and industrial supplies delivered with reliability and efficiency.",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984",
      features: ["Office Supplies", "Industrial Equipment", "Bulk Orders"]
    },
    {
      icon: Users,
      title: "Consultancy",
      description: "Expert advisory services to optimize your business operations and strategic planning.",
      image: "https://images.unsplash.com/39/lIZrwvbeRuuzqOoWJUEn_Photoaday_CSD%20%281%20of%201%29-5.jpg",
      features: ["Business Strategy", "Process Optimization", "Market Analysis"]
    },
    {
      icon: Building2,
      title: "Construction",
      description: "End-to-end construction services from planning to completion with quality assurance.",
      image: "https://images.unsplash.com/photo-1591955506264-3f5a6834570a",
      features: ["Commercial Building", "Residential Projects", "Infrastructure"]
    },
    {
      icon: Briefcase,
      title: "Professional Services",
      description: "Specialized professional services tailored to meet your specific business requirements.",
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg",
      features: ["Legal Support", "Financial Services", "HR Solutions"]
    },
    {
      icon: Printer,
      title: "Printing & Branding",
      description: "Complete printing solutions and brand development to enhance your corporate identity.",
      image: "https://images.unsplash.com/photo-1597852666450-23bab302763e",
      features: ["Corporate Branding", "Digital Printing", "Marketing Materials"]
    },
    {
      icon: Truck,
      title: "Transport & Logistics",
      description: "Efficient logistics and transportation services for seamless supply chain management.",
      image: "https://images.unsplash.com/photo-1473445730015-841f29a9490b",
      features: ["Freight Services", "Warehouse Management", "Distribution"]
    },
    {
      icon: Sparkles,
      title: "Cleaning Services",
      description: "Professional cleaning and maintenance services for commercial and residential spaces.",
      image: "https://images.unsplash.com/photo-1578593195423-df7df9563457",
      features: ["Office Cleaning", "Deep Cleaning", "Maintenance"]
    },
    {
      icon: Calendar,
      title: "Event Management",
      description: "Comprehensive event planning and hospitality services for memorable experiences.",
      image: "https://images.unsplash.com/photo-1523521803700-b3bcaeab0150",
      features: ["Corporate Events", "Hospitality", "Venue Management"]
    },
    {
      icon: Monitor,
      title: "ICT Services",
      description: "Modern ICT solutions and equipment to keep your business technologically advanced.",
      image: "https://images.unsplash.com/photo-1484557052118-f32bd25b45b5",
      features: ["IT Infrastructure", "Equipment Supply", "Technical Support"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
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
            Our <span className="text-yellow-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions across multiple industries, delivered with expertise and reliability that sets us apart.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-600 to-yellow-500 mx-auto mt-8 rounded-full"></div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-3">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-yellow-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-yellow-600 rounded-full"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-yellow-600 to-yellow-500 text-white py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-200"
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 mb-8">
            Don't see what you're looking for? We customize our services to meet your specific needs.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-black text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-800 transition-colors duration-200"
          >
            Request Custom Solution
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;