import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <h1 className={`text-2xl font-bold ${scrolled ? 'text-blue-600' : 'text-white'}`}>
              TechVision
            </h1>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {['Home', 'Services', 'About', 'Experience', 'Testimonials', 'Contact'].map((item) => (
                <Link
                  key={item}
                  to={item.toLowerCase()}
                  smooth={true}
                  duration={500}
                  className={`cursor-pointer font-medium hover:text-blue-600 transition-colors ${
                    scrolled ? 'text-gray-700' : 'text-white'
                  }`}
                >
                  {item}
                </Link>
              ))}
              <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
                Get Started
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${scrolled ? 'text-gray-800' : 'text-white'}`}
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white shadow-lg rounded-lg mt-2 p-4"
          >
            {['Home', 'Services', 'About', 'Experience', 'Testimonials', 'Contact'].map((item) => (
              <Link
                key={item}
                to={item.toLowerCase()}
                smooth={true}
                duration={500}
                className="block py-2 text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar; 