import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiMonitor, FiCloud, FiDatabase, FiSmartphone, FiShield, FiTrendingUp } from 'react-icons/fi';

const services = [
  {
    id: 1,
    title: 'Custom Software Development',
    description: 'Tailored enterprise solutions built with cutting-edge technologies. Our expert team delivers scalable, secure, and innovative software that drives business growth.',
    icon: <FiMonitor className="w-8 h-8" />,
    features: ['Web Applications', 'Enterprise Software', 'API Integration']
  },
  {
    id: 2,
    title: 'Cloud Solutions',
    description: 'Comprehensive cloud services for modern businesses. We help you migrate, optimize, and manage your cloud infrastructure for maximum efficiency.',
    icon: <FiCloud className="w-8 h-8" />,
    features: ['AWS & Azure', 'Cloud Migration', 'DevOps']
  },
  {
    id: 3,
    title: 'Data Analytics',
    description: 'Transform your data into actionable insights. Our analytics solutions help you make data-driven decisions and unlock business potential.',
    icon: <FiDatabase className="w-8 h-8" />,
    features: ['Big Data', 'BI Solutions', 'Predictive Analytics']
  },
  {
    id: 4,
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.',
    icon: <FiSmartphone className="w-8 h-8" />,
    features: ['iOS & Android', 'React Native', 'Flutter']
  },
  {
    id: 5,
    title: 'Cybersecurity',
    description: 'Protect your digital assets with our comprehensive security solutions. We ensure your business stays safe in the digital world.',
    icon: <FiShield className="w-8 h-8" />,
    features: ['Security Audit', 'Threat Protection', 'Compliance']
  },
  {
    id: 6,
    title: 'Digital Transformation',
    description: 'Strategic digital solutions that modernize your business processes and drive innovation across your organization.',
    icon: <FiTrendingUp className="w-8 h-8" />,
    features: ['Process Automation', 'Legacy Modernization', 'Digital Strategy']
  }
];

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="services" className="continuous-section py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">
            OUR SERVICES
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-white mb-4">
            Comprehensive IT Solutions for Your Business
          </h2>
          <p className="text-xl text-gray-300">
            Leverage our expertise to transform your business with cutting-edge technology solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-800/50 hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="text-blue-400 mb-4 group-hover:text-blue-300 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-300 mb-4">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-400">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 