import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, ExternalLink, Building, Truck, Printer, Calendar } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All Projects', icon: Eye },
    { id: 'construction', label: 'Construction', icon: Building },
    { id: 'logistics', label: 'Logistics', icon: Truck },
    { id: 'branding', label: 'Branding', icon: Printer },
    { id: 'events', label: 'Events', icon: Calendar }
  ];

  const projects = [
    {
      id: 1,
      title: "Corporate Office Complex",
      category: "construction",
      description: "Modern 12-story office building with sustainable design features and state-of-the-art facilities.",
      image: "https://images.unsplash.com/photo-1591955506264-3f5a6834570a",
      client: "Kisii Development Corporation",
      duration: "18 months",
      value: "$2.5M"
    },
    {
      id: 2,
      title: "Supply Chain Optimization",
      category: "logistics",
      description: "Comprehensive logistics solution reducing delivery time by 40% and operational costs by 30%.",
      image: "https://images.unsplash.com/photo-1473445730015-841f29a9490b",
      client: "East Africa Trading Co.",
      duration: "6 months",
      value: "$800K"
    },
    {
      id: 3,
      title: "Complete Brand Identity",
      category: "branding",
      description: "Full rebranding including logo design, corporate materials, and digital presence.",
      image: "https://images.unsplash.com/photo-1597852666450-23bab302763e",
      client: "Nyanza Financial Services",
      duration: "3 months",
      value: "$50K"
    },
    {
      id: 4,
      title: "Annual Conference 2024",
      category: "events",
      description: "3-day international conference with 500+ attendees, full event management and hospitality.",
      image: "https://images.unsplash.com/photo-1523521803700-b3bcaeab0150",
      client: "Kenya Business Summit",
      duration: "2 months",
      value: "$200K"
    },
    {
      id: 5,
      title: "Industrial Warehouse",
      category: "construction",
      description: "50,000 sq ft warehouse with modern loading facilities and automated systems.",
      image: "https://images.pexels.com/photos/439416/pexels-photo-439416.jpeg",
      client: "Mombasa Logistics Hub",
      duration: "12 months",
      value: "$1.8M"
    },
    {
      id: 6,
      title: "Fleet Management System",
      category: "logistics",
      description: "Digital transformation of transport operations with GPS tracking and route optimization.",
      image: "https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg",
      client: "Regional Transport Authority",
      duration: "8 months",
      value: "$600K"
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-gray-50">
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
            Our <span className="text-yellow-600">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of successful projects across various industries, showcasing our expertise and commitment to excellence.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-600 to-yellow-500 mx-auto mt-8 rounded-full"></div>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
                activeFilter === category.id
                  ? 'bg-gradient-to-r from-yellow-600 to-yellow-500 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
              }`}
            >
              <category.icon className="w-4 h-4" />
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-yellow-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {project.value}
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-200 text-sm">{project.client}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div>
                      <span className="font-semibold">Duration:</span> {project.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      <span>Completed</span>
                    </div>
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-gradient-to-r from-yellow-600 to-yellow-500 text-white py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Case Study
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 mb-8">
            Ready to start your next project? Let's discuss how we can help bring your vision to life.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-black text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-800 transition-colors duration-200"
          >
            Start Your Project
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;