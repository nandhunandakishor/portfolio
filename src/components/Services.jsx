import React from 'react';
import { motion } from 'framer-motion';
import {
  FaLaptopCode, FaServer, FaMobileAlt, FaDatabase, FaPaintBrush, FaTools
} from 'react-icons/fa';

const services = [
  { icon: <FaLaptopCode />, title: 'Frontend Development', desc: 'Building responsive & interactive UIs.', color: 'text-blue-400' },
  { icon: <FaServer />, title: 'Backend Development', desc: 'Developing secure & scalable backends.', color: 'text-yellow-400' },
  { icon: <FaMobileAlt />, title: 'Mobile Optimization', desc: 'Ensuring seamless mobile experiences.', color: 'text-green-400' },
  { icon: <FaDatabase />, title: 'Database Management', desc: 'Handling MySQL, PostgreSQL & MongoDB.', color: 'text-red-400' },
  { icon: <FaPaintBrush />, title: 'UI/UX Design', desc: 'Designing clean & modern interfaces.', color: 'text-pink-400' },
  { icon: <FaTools />, title: 'Website Maintenance', desc: 'Providing ongoing support & updates.', color: 'text-purple-400' }
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.5, type: 'spring' }
  }),
};

function Services() {
  return (
    <div
    id='services'
     className="bg-gradient-to-br from-black via-gray-900 to-black py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Title */}
        <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 animate-pulse drop-shadow-lg">
          My Services
        </h2>

        {/* Subtitle */}
        <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
          I offer a range of <span className="text-white font-semibold">high-quality development services</span>, helping businesses and individuals build <span className="text-white font-semibold">modern, scalable</span>, and <span className="text-white font-semibold">visually stunning</span> web applications.
        </p>

        {/* Services Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-gray-800/90 backdrop-blur-md p-6 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-700"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
              variants={cardVariants}
            >
              <div className={`text-4xl ${service.color} mb-4`}>{service.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
              <p className="text-gray-300">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
