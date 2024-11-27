import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiTarget, FiAward, FiUsers } from 'react-icons/fi';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const values = [
    {
      icon: <FiTarget className="w-6 h-6" />,
      title: "Our Mission",
      description: "To empower businesses through innovative technology solutions that drive growth and digital transformation."
    },
    {
      icon: <FiAward className="w-6 h-6" />,
      title: "Our Vision",
      description: "To be the global leader in delivering cutting-edge IT solutions that shape the future of digital business."
    },
    {
      icon: <FiUsers className="w-6 h-6" />,
      title: "Our Values",
      description: "Innovation, Excellence, Integrity, and Client Success drive everything we do."
    }
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">About Us</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-white mb-4">
            Driving Innovation Through Technology
          </h2>
          <p className="text-xl text-gray-300">
            We're on a mission to transform businesses through cutting-edge technology solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-blue-600 rounded-3xl transform rotate-6 scale-105 opacity-10"></div>
              <img
                src="/about-image.jpg" // Add your company image here
                alt="About TechVision"
                className="relative rounded-3xl shadow-xl"
              />
              <div className="absolute -bottom-8 -right-8 bg-white p-4 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-blue-600">15+</div>
                <div className="text-gray-600">Years of Excellence</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Transforming Businesses Through Technology Innovation
            </h3>
            <p className="text-gray-600">
              With over 15 years of experience, TechVision has been at the forefront of digital transformation, 
              helping businesses across the globe leverage technology to achieve their goals.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-gray-600">
                <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                <span>Global presence in 25+ countries</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                <span>500+ successful project deliveries</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                <span>98% client satisfaction rate</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="relative p-6 bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800/50 hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="text-blue-400 mb-4">{value.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
              <p className="text-gray-300">{value.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div className="mt-20 text-center">
          <div className="inline-flex items-center gap-8 bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-800/50">
            <div className="text-center px-8 border-r border-gray-700">
              <div className="text-4xl font-bold text-blue-400 mb-2">500+</div>
              <div className="text-gray-300">Projects Completed</div>
            </div>
            <div className="text-center px-8 border-r border-gray-700">
              <div className="text-4xl font-bold text-blue-400 mb-2">250+</div>
              <div className="text-gray-300">Team Members</div>
            </div>
            <div className="text-center px-8">
              <div className="text-4xl font-bold text-blue-400 mb-2">25+</div>
              <div className="text-gray-300">Countries Served</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 