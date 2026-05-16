import { motion } from 'motion/react';
import { MapPin, Mail, Phone, GraduationCap, User, Calendar } from 'lucide-react';

const stats = [
  { label: 'Location', value: 'Sangli, MH, India', icon: MapPin },
  { label: 'Email', value: 'rohandesai9218@gmail.com', icon: Mail },
  { label: 'Phone', value: '8766484845', icon: Phone },
  { label: 'Education', value: 'MCA Student', icon: GraduationCap },
  { label: 'Role', value: 'Full Stack Dev', icon: User },
  { label: 'Experience', value: 'Internship', icon: Calendar },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-display mb-4"
          >
            About Me
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold font-display mb-6">
              Passionate about building scalable <span className="text-blue-500">Full Stack</span> applications.
            </h3>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              I am a motivated MCA student and Full Stack Developer with practical experience in
              React.js, Node.js, Express.js, MongoDB, MySQL, ASP.NET, REST APIs, backend debugging,
              and performance optimization. Passionate about building scalable applications and
              solving real-world technical problems.
            </p>
            <p className="text-lg text-slate-400 mb-10 leading-relaxed">
              My journey in tech is driven by curiosity and a desire to create impact THROUGH code.
              I enjoy tackling complex problems and turning ideas into functional, beautiful
              digital experiences.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 glass-card text-center hover:border-blue-500/30 transition-all group">
                <div className="text-3xl font-bold text-white mb-1 group-hover:text-blue-500 transition-colors">MCA</div>
                <div className="text-sm font-medium text-slate-500 uppercase tracking-widest">Education</div>
              </div>
              <div className="p-6 glass-card text-center hover:border-blue-500/30 transition-all group">
                <div className="text-3xl font-bold text-white mb-1 group-hover:text-blue-500 transition-colors">8+</div>
                <div className="text-sm font-medium text-slate-500 uppercase tracking-widest">Projects</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="p-6 glass-card group hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                    <stat.icon size={24} />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
                      {stat.label}
                    </div>
                    <div className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors">
                      {stat.value}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
