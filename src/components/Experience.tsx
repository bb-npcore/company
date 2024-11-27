import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const experiences = [
  {
    year: "2023",
    title: "AI & Machine Learning Excellence",
    description: "Launched advanced AI solutions helping clients achieve 40% efficiency improvement",
    achievements: ["500+ AI implementations", "15 Industry awards", "30% Client cost reduction"]
  },
  {
    year: "2021",
    title: "Cloud Innovation Leader",
    description: "Recognized as a leading cloud solutions provider with global partnerships",
    achievements: ["1000+ Cloud migrations", "AWS Premier Partner", "Azure Gold Partner"]
  },
  {
    year: "2019",
    title: "Digital Transformation Pioneer",
    description: "Expanded digital transformation services across 15 new markets",
    achievements: ["200+ Enterprise clients", "24/7 Support launch", "ISO 27001 Certification"]
  },
  {
    year: "2016",
    title: "Global Expansion",
    description: "Established presence in Asia and Europe with 5 new offices",
    achievements: ["International team growth", "Multi-region delivery", "Cultural diversity"]
  },
  {
    year: "2008",
    title: "Company Founded",
    description: "Started with a vision to transform businesses through technology",
    achievements: ["First enterprise client", "Core team formation", "Innovation focus"]
  }
];

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">Our Journey</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-white mb-4">
            Milestones That Define Us
          </h2>
          <p className="text-xl text-gray-300">
            A timeline of innovation, growth, and technological excellence
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-400/20"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={`relative mb-16 ${
                index % 2 === 0 ? 'lg:ml-auto lg:pl-32' : 'lg:mr-auto lg:pr-32'
              } lg:w-1/2`}
            >
              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-4 w-8 h-8 bg-blue-500 rounded-full border-4 border-gray-900 shadow-lg"></div>

              <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-800/50 hover:border-blue-500/50 transition-all duration-300">
                <div className="inline-block px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full font-semibold mb-4">
                  {exp.year}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{exp.title}</h3>
                <p className="text-gray-300 mb-6">{exp.description}</p>
                <div className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <div key={i} className="flex items-center gap-2 text-gray-400">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                      <span>{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 