import React from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  ArrowUp,
  ExternalLink
} from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const services = [
    "General Supplies",
    "Consultancy Services", 
    "Construction",
    "Professional Services",
    "Printing & Branding",
    "Transport & Logistics",
    "Cleaning Services",
    "Event Management",
    "ICT Services"
  ];

  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Our Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
    { name: "Get Quote", href: "#contact" }
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-yellow-600 to-yellow-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold">SHAYNEX</span>
                <span className="text-sm text-yellow-400 font-semibold">ENTERPRISE</span>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed">
              Your trusted partner for comprehensive business solutions across East Africa. 
              We deliver excellence in every project with our unified approach and diverse expertise.
            </p>
            
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.2, y: -3 }}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-600 transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-6 text-yellow-400">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href="#services" 
                    className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 text-sm flex items-center gap-2"
                  >
                    <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-6 text-yellow-400">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 text-sm flex items-center gap-2"
                  >
                    <ExternalLink className="w-3 h-3" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            
            <div className="mt-8">
              <h4 className="text-sm font-semibold text-yellow-400 mb-4">Business Hours</h4>
              <div className="space-y-2 text-sm text-gray-300">
                <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                <p>Saturday: 9:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-6 text-yellow-400">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  <p>Magsons Plaza</p>
                  <p>Kisii, Kenya</p>
                  <p>East Africa</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  <p>+254 123 456 789</p>
                  <p>+254 987 654 321</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  <p>info@shaynexenterprise.co.ke</p>
                  <p>projects@shaynexenterprise.co.ke</p>
                </div>
              </div>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 w-full bg-gradient-to-r from-yellow-600 to-yellow-500 text-white py-3 px-6 rounded-full font-semibold text-sm hover:shadow-lg transition-all duration-200"
            >
              Get Free Quote
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-400">
              © 2024 Shaynex Enterprise. All rights reserved. | Unified Approach. Diverse Expertise.
            </div>
            
            <div className="flex items-center gap-6">
              <a href="#" className="text-sm text-gray-400 hover:text-yellow-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-yellow-400 transition-colors">
                Terms of Service
              </a>
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-8 h-8 bg-yellow-600 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors duration-200"
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;