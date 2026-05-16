import { motion } from 'motion/react';
import { GraduationCap, Landmark, Trophy, Award } from 'lucide-react';

const education = [
  {
    degree: 'Master of Computer Applications (MCA)',
    institute: 'Chintamanrao Institute of Management Development And Research (CIMDR)',
    duration: '2024–2026',
    score: 'CGPA: 8.0',
    icon: Landmark,
  },
  {
    degree: 'Bachelor of Computer Science',
    institute: 'Willingdon College, Sangli',
    duration: '2021–2024',
    score: 'CGPA: 8.18',
    icon: GraduationCap,
  },
];

const achievements = [
  {
    title: 'Hackathon Event Organizer',
    at: 'CIMDR',
    description: 'Successfully organized a college-level hackathon, coordinating teams and managing event logistics.',
    icon: Trophy,
  },
  {
    title: 'React JS Certification',
    description: 'Professional certification focusing on advanced React patterns, state management, and performance.',
    icon: Award,
  },
  {
    title: 'React Basics Certification',
    description: 'Foundational certification covering React components, hooks, and basic web principles.',
    icon: Award,
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Education */}
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold font-display mb-12 flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center text-white">
                <GraduationCap size={24} />
              </div>
              Education
            </motion.h2>

            <div className="space-y-6">
              {education.map((edu, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-8 glass-card hover:bg-white/10 transition-all group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all shrink-0">
                      <edu.icon size={20} />
                    </div>
                    <div>
                      <div className="text-xl font-bold font-display text-white mb-1">{edu.degree}</div>
                      <div className="text-blue-500 font-semibold mb-2">{edu.institute}</div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-500">{edu.duration}</span>
                        <span className="text-slate-400 font-bold px-3 py-1 rounded-full bg-white/5">{edu.score}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold font-display mb-12 flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-indigo-600 flex items-center justify-center text-white">
                <Trophy size={24} />
              </div>
              Achievements
            </motion.h2>

            <div className="space-y-6">
              {achievements.map((ach, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-8 glass-card hover:bg-white/10 transition-all group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-500 group-hover:bg-indigo-500 group-hover:text-white transition-all shrink-0">
                      <ach.icon size={20} />
                    </div>
                    <div>
                      <div className="text-xl font-bold font-display text-white mb-2">{ach.title}</div>
                      {ach.at && <div className="text-slate-500 text-sm font-semibold mb-2 uppercase tracking-widest">{ach.at}</div>}
                      <p className="text-sm text-slate-400 leading-relaxed">
                        {ach.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
