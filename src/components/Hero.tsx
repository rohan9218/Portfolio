import { Code, Cpu, Database, Download, ExternalLink, Github, Globe, Mail, Server } from 'lucide-react';
import { motion } from 'motion/react';
import { TypeAnimation } from 'react-type-animation';
import { cn } from "../lib/utils";
import profileImage from '../assets/photo.jpeg';

export default function Hero() {
  {/*const profileImage =
    'C:/Users/rohan/Downloads/rohan-suresh-desai-portfolio/src/assets/photo.jpeg';
*/}
  const resumeLink =
    'https://drive.google.com/file/d/1EWbUhn5MQllxw89e737lFzWV_yBEz4h0/view';

  const techIcons = [
    { icon: Globe, color: 'text-blue-400', label: 'React' },
    { icon: Server, color: 'text-green-400', label: 'Node.js' },
    { icon: Database, color: 'text-yellow-400', label: 'MongoDB' },
    { icon: Code, color: 'text-orange-400', label: 'JavaScript' },
    { icon: Github, color: 'text-white', label: 'GitHub' },
    { icon: Cpu, color: 'text-purple-400', label: 'Express' },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Open for opportunities
          </div>

          <h1 className="text-5xl md:text-7xl font-bold font-display leading-[1.1] mb-6">
            Hi, I'm <span className="gradient-text">Rohan Desai</span>
          </h1>

          <div className="text-2xl md:text-3xl font-display font-medium text-slate-400 mb-8 h-10">
            <TypeAnimation
              sequence={[
                'Full Stack Developer',
                2000,
                'MERN Stack Developer',
                2000,
                'React Developer',
                2000,
                'Node.js Developer',
                2000,
                'Full Stack Engineer',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>

          <p className="text-lg text-slate-400 max-w-xl mb-10 leading-relaxed">
            Motivated MCA student with hands-on experience in full-stack development,
            REST APIs, backend systems, database management, and scalable web
            application development.
          </p>

          <div className="flex flex-wrap gap-4">
            <motion.a
              href={resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-all shadow-lg shadow-blue-600/20"
            >
              <Download size={20} />
              Download Resume
            </motion.a>

            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl font-semibold transition-all"
            >
              <ExternalLink size={20} />
              View Projects
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-8 py-4 bg-transparent text-slate-300 hover:text-white font-semibold transition-all"
            >
              <Mail size={20} />
              Contact Me
            </motion.a>
          </div>

          {/* Tech Icons */}
          <div className="flex items-center gap-6 mt-16 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            {techIcons.map((item, idx) => (
              <div key={idx} className="group relative">
                <item.icon
                  className={cn(
                    'w-8 h-8 transition-transform group-hover:-translate-y-2',
                    item.color
                  )}
                />
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative w-72 h-72 md:w-[450px] md:h-[450px]">
            <div className="absolute inset-0 border-2 border-dashed border-blue-500/30 rounded-full animate-[spin_20s_linear_infinite]" />

            <div className="absolute inset-[15px] rounded-full overflow-hidden border-4 border-white/10 bg-slate-900 shadow-2xl relative">
              <img
                src={profileImage}
                alt="Rohan Suresh Desai"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    'https://lh3.googleusercontent.com/d/1CDvUwSNAURmWea82CNnbj4T8RjGF9rJU';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-40" />
            </div>

            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-4 -right-4 p-4 glass-card shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-500">
                  <Database size={24} />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium tracking-wider">
                    DATABASE
                  </div>
                  <div className="text-sm font-bold">MongoDB</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 1,
              }}
              className="absolute top-1/2 -left-12 p-4 glass-card shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-500">
                  <Globe size={24} />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium tracking-wider">
                    FRONTEND
                  </div>
                  <div className="text-sm font-bold">React.js</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}