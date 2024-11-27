import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { FiStar, FiArrowLeft, FiArrowRight, FiMapPin } from 'react-icons/fi';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "CTO, TechCorp Global",
    company: "TechCorp Global",
    image: "/testimonials/client1.jpg", // Add client image
    quote: "TechVision transformed our digital infrastructure completely. Their innovative solutions helped us achieve a 40% increase in operational efficiency.",
    rating: 5,
    location: "New York, USA"
  },
  {
    id: 2,
    name: "David Chen",
    position: "CEO, InnovateTech",
    company: "InnovateTech Solutions",
    image: "/testimonials/client2.jpg",
    quote: "The AI solutions implemented by TechVision revolutionized our customer service. We've seen a 60% improvement in customer satisfaction scores.",
    rating: 5,
    location: "Singapore"
  },
  {
    id: 3,
    name: "Emma Thompson",
    position: "Digital Director, FutureScale",
    company: "FutureScale Inc",
    image: "/testimonials/client3.jpg",
    quote: "Working with TechVision has been transformative. Their cloud migration expertise saved us 45% in infrastructure costs while improving performance.",
    rating: 5,
    location: "London, UK"
  }
];

const companyLogos = [
  { id: 1, name: "TechCorp", logo: "/logos/techcorp.png" },
  { id: 2, name: "InnovateTech", logo: "/logos/innovatetech.png" },
  { id: 3, name: "FutureScale", logo: "/logos/futurescale.png" },
  { id: 4, name: "GlobalTech", logo: "/logos/globaltech.png" },
  { id: 5, name: "DigiCorp", logo: "/logos/digicorp.png" },
  { id: 6, name: "TechGiant", logo: "/logos/techgiant.png" }
];

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="testimonials" className="continuous-section py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">TESTIMONIALS</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-300">
            Success stories from businesses we've helped transform
          </p>
        </motion.div>

        <div className="relative">
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="max-w-4xl mx-auto">
              <div className="bg-gray-900/50 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-gray-800/50">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="w-24 h-24 md:w-32 md:h-32 relative">
                    <img
                      src={testimonials[currentTestimonial].image}
                      alt={testimonials[currentTestimonial].name}
                      className="rounded-full object-cover w-full h-full border-2 border-blue-500/30"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-blue-500/10 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
                      <FiMapPin className="w-3 h-3 text-blue-400" />
                      <span className="text-xs text-blue-300">{testimonials[currentTestimonial].location}</span>
                    </div>
                  </div>
                  
                  <div className="flex-1 text-center md:text-left">
                    <div className="flex justify-center md:justify-start gap-1 mb-4">
                      {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                        <FiStar key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <blockquote className="text-xl text-gray-300 mb-6">
                      "{testimonials[currentTestimonial].quote}"
                    </blockquote>
                    <div>
                      <div className="font-bold text-white text-lg">
                        {testimonials[currentTestimonial].name}
                      </div>
                      <div className="text-blue-400">
                        {testimonials[currentTestimonial].position}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center gap-4 mt-8">
                <button
                  onClick={() => setCurrentTestimonial(prev => (prev === 0 ? testimonials.length - 1 : prev - 1))}
                  className="p-2 rounded-full border border-gray-800/50 hover:border-blue-500/50 bg-gray-900/50 backdrop-blur-sm text-gray-300 hover:text-white transition-all duration-300"
                >
                  <FiArrowLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={() => setCurrentTestimonial(prev => (prev === testimonials.length - 1 ? 0 : prev + 1))}
                  className="p-2 rounded-full border border-gray-800/50 hover:border-blue-500/50 bg-gray-900/50 backdrop-blur-sm text-gray-300 hover:text-white transition-all duration-300"
                >
                  <FiArrowRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Trusted by Companies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20"
        >
          <h3 className="text-center text-gray-400 mb-12">Trusted by Industry Leaders</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {companyLogos.map((company) => (
              <motion.div
                key={company.id}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-900/30 backdrop-blur-sm p-6 rounded-xl border border-gray-800/30 hover:border-blue-500/30 transition-all duration-300"
              >
                <img
                  src={company.logo}
                  alt={company.name}
                  className="h-12 w-auto mx-auto opacity-50 hover:opacity-100 transition-all duration-300"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials; 