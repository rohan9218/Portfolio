import { motion } from 'motion/react';
import { Github, ExternalLink, Code2 } from 'lucide-react';

const projects = [
  {
    title: 'Student and Result Analysis System',
    tech: ['React.js', 'Node.js', 'MongoDB'],
    description: 'Developed a student management and result analysis web application with ERP integration, dynamic reporting, backend APIs, and database management.',
    github: 'https://github.com/rohan9218',
    demo: '#',
    image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Online Pet Store and Care Center',
    tech: ['ASP.NET', 'C#', 'SQL Server'],
    description: 'Developed a pet store platform with user management, product ordering, secure database operations, and payment features.',
    github: 'https://github.com/rohan9218',
    demo: '#',
    image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Car Rental System',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    description: 'Built secure rental platform with JWT authentication, role-based access, booking management, backend APIs, and admin features.',
    github: 'https://github.com/rohan9218',
    demo: '#',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=800&auto=format&fit=crop',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-[#030712]/80">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold font-display mb-4"
            >
              Featured <span className="text-blue-500">Projects</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-400 max-w-lg"
            >
              A selection of my recent works ranging from full-stack ERP systems to secure e-commerce platforms.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <a
              href="https://github.com/rohan9218"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-500 font-semibold hover:underline group"
            >
              View All on GitHub
              <Github size={18} className="group-hover:rotate-12 transition-transform" />
            </a>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group glass-card overflow-hidden h-full flex flex-col"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-60" />
                <div className="absolute top-4 left-4 flex gap-2">
                  {project.tech.slice(0, 2).map((t) => (
                    <span key={t} className="px-2 py-1 rounded bg-[#030712]/80 backdrop-blur-md text-[10px] font-bold text-blue-400 uppercase tracking-tighter">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-bold font-display mb-4 group-hover:text-blue-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-8 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t) => (
                    <span key={t} className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 text-[10px] font-bold uppercase tracking-wider">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-white transition-colors"
                  >
                    <Github size={18} />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 text-sm font-bold text-blue-500 hover:text-blue-400 transition-colors"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
