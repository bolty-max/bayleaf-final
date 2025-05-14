import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { BookOpen, ChevronDown } from 'lucide-react';

const AboutSection: React.FC = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  
  const stats = [
    { number: 15, label: 'Years of Experience', subtext: 'Since 2010', color: 'spice' },
    { number: 50, label: 'Authentic Recipes', subtext: 'Traditional dishes', color: 'leaf' },
    { number: 1000, label: 'Happy Customers', subtext: 'Monthly', color: 'chili' }
  ];

  const features = [
    {
      title: 'Authentic Ingredients',
      description: 'We import spices directly from South India, ensuring the most authentic and fresh flavors in every dish we serve.',
      color: 'spice'
    },
    {
      title: 'Traditional Recipes',
      description: 'Our recipes have been passed down through generations, preserving the authentic methods and techniques of South Indian cooking.',
      color: 'leaf'
    },
    {
      title: 'Modern Ambiance',
      description: 'Experience the perfect blend of traditional South Indian hospitality with modern German elegance in our thoughtfully designed space.',
      color: 'chili'
    }
  ];

  return (
    <section id="about" className="relative py-24 pb-32 overflow-hidden bg-gradient-to-b from-cream-50 to-cream-100">
      <div className="container mx-auto px-4 pr-6 box-border relative z-10 overflow-y-auto scrollbar-thin scrollbar-thumb-spice-400 scrollbar-track-cream-100">
        {/* Section Header */}
        <div ref={textRef} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center mb-4"
          >
            <BookOpen className="mr-2 text-spice-600" size={20} />
            <span className="uppercase tracking-widest text-sm text-spice-600">Our Heritage</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            Our Story
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            From the vibrant streets of Chennai to the heart of Germany, we bring authentic 
            South Indian flavors with a passion for tradition and quality.
          </motion.p>
        </div>
        
        <div ref={contentRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:pr-8"
          >
            <h3 className="font-display text-2xl md:text-3xl mb-6 text-gray-900">
              A Legacy of Flavor & Tradition
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our journey began in the bustling streets of Chennai, where our founder Chef Rajan 
              learned the art of South Indian cuisine from his grandmother. Every morning, they 
              would visit the local spice markets, selecting the finest ingredients for their 
              family restaurant.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Today, we continue this tradition in Germany, importing our spices directly from 
              trusted farmers in South India. Our dishes are a testament to the rich culinary 
              heritage of South India, prepared with authentic recipes that have been perfected 
              over generations.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.2 }}
                  className="flex items-center"
                >
                  <div className={`w-16 h-16 rounded-full bg-${stat.color}-100 flex items-center justify-center text-${stat.color}-600 mr-4`}>
                    <span className="text-2xl font-bold">{stat.number}+</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">{stat.label}</h4>
                    <p className="text-sm text-gray-500">{stat.subtext}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="h-[600px] canvas-container rounded-lg overflow-hidden shadow-xl scrollbar-none"
          >
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.2 }}
                whileHover={{ y: -10 }}
                className={`bg-${feature.color}-50 p-8 rounded-lg shadow-md transform transition-all duration-300 hover:shadow-xl`}
              >
                <div className={`w-12 h-12 rounded-full bg-${feature.color}-500 text-white flex items-center justify-center mb-4`}>
                  <span className="font-bold text-xl">{index + 1}</span>
                </div>
                <h3 className="font-display text-xl mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      
      {/* Scroll Down Indicator - Moved outside the container and fixed positioning */}
      <div className="absolute left-1/2 bottom-8 transform -translate-x-1/2 text-center">
        <Link
          to="menu"
          spy={true}
          smooth={true}
          offset={-80}
          duration={800}
          className="text-gray-600 flex flex-col items-center cursor-pointer hover:text-spice-600 transition-colors"
        >
          <span className="text-sm uppercase tracking-wider mb-2">Discover Our Menu</span>
          <ChevronDown size={20} className="animate-bounce" />
        </Link>
      </div>
    </section>
  );
};

export default AboutSection;