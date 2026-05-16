import { motion } from 'motion/react';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';

const experiences = [
  {
    company: 'Aditya Infotech, Sangli',
    position: 'Full Stack Intern',
    duration: 'July 2025 – Sep 2025',
    responsibilities: [
      'Developed secure Car Rental System using React.js, Node.js, Express.js, MongoDB',
      'Implemented JWT authentication and built REST APIs',
      'Performed backend debugging and improved system performance',
      'Managed database operations using MongoDB Atlas',
      'Mastered Git, GitHub and Postman for API testing/version control',
      'Worked extensively on booking management and payment modules',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-display mb-4"
          >
            Professional Experience
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full"
          />
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-slate-800" />

          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative pl-10 md:pl-0 md:flex md:justify-between items-start mb-16"
            >
              {/* Dot */}
              <div className="absolute left-[-6px] md:left-1/2 md:-translate-x-1/2 top-0 w-3.5 h-3.5 rounded-full bg-blue-500 border-4 border-[#030712] z-10" />

              <div className="md:w-[45%] mb-8 md:mb-0 text-right hidden md:block">
                <div className="text-2xl font-bold font-display text-white">{exp.company}</div>
                <div className="text-blue-500 font-semibold mb-2">{exp.position}</div>
                <div className="flex items-center gap-2 text-slate-500 justify-end text-sm">
                  <Calendar size={14} />
                  {exp.duration}
                </div>
              </div>

              <div className="md:w-[45%]">
                <div className="md:hidden mb-4">
                  <div className="text-xl font-bold font-display text-white">{exp.company}</div>
                  <div className="text-blue-500 font-semibold">{exp.position}</div>
                  <div className="text-sm text-slate-500">{exp.duration}</div>
                </div>
                
                <div className="p-8 glass-card">
                  <ul className="space-y-4">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="flex gap-3 text-slate-400 group">
                        <CheckCircle2 size={18} className="text-blue-500 shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                        <span className="text-sm leading-relaxed">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
