import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiTwitter, FiGithub } from 'react-icons/fi';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const offices = [
    {
      city: "New York",
      address: "123 Tech Avenue, NY 10001",
      phone: "+1 (555) 123-4567",
      email: "ny@techvision.com"
    },
    {
      city: "London",
      address: "456 Innovation Street, EC1A 1BB",
      phone: "+44 20 7123 4567",
      email: "london@techvision.com"
    },
    {
      city: "Singapore",
      address: "789 Digital Road, 018956",
      phone: "+65 6789 0123",
      email: "singapore@techvision.com"
    }
  ];

  return (
    <section id="contact" className="continuous-section py-12 relative flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">Contact Us</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-white mb-4">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-xl text-gray-300">
            Ready to start your digital transformation journey? Get in touch with our experts.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            className="bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800/50 p-6"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
              >
                Send Message
                <FiMail className="w-4 h-4" />
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div className="space-y-6">
            {/* Global Offices */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {offices.map((office, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800/50 hover:border-blue-500/50 transition-all duration-300"
                >
                  <h4 className="text-xl font-bold text-white mb-4">{office.city}</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-gray-600">
                      <FiMapPin className="w-5 h-5 text-blue-600" />
                      <span>{office.address}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <FiPhone className="w-5 h-5 text-blue-600" />
                      <span>{office.phone}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <FiMail className="w-5 h-5 text-blue-600" />
                      <span>{office.email}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="bg-gray-900/50 backdrop-blur-sm p-4 rounded-xl border border-gray-800/50">
              <h4 className="text-xl font-bold text-white mb-6">Connect With Us</h4>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors"
                >
                  <FiLinkedin className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors"
                >
                  <FiTwitter className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors"
                >
                  <FiGithub className="w-6 h-6" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 