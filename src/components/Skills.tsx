import { Code2, Database, Library, Lightbulb, Server, Terminal } from 'lucide-react';
import { motion } from 'motion/react';

const skillCategories = [
  {
    title: 'Frontend Skills',
    icon: Code2,
    skills: [
      { name: 'HTML', level: 95 },
      { name: 'CSS', level: 90 },
      { name: 'JavaScript', level: 85 },
      { name: 'React.js', level: 88 },
      { name: 'Tailwind CSS', level: 92 },
    ],
  },
  {
    title: 'Backend Skills',
    icon: Server,
    skills: [
      { name: 'Node.js', level: 82 },
      { name: 'Express.js', level: 85 },
      { name: 'REST APIs', level: 90 },
      { name: 'ASP.NET', level: 75 },
    ],
  },
  {
    title: 'Database Skills',
    icon: Database,
    skills: [
      { name: 'MongoDB', level: 85 },
      { name: 'MySQL', level: 80 },
      { name: 'SQL Server', level: 78 },
    ],
  },
  {
    title: 'Languages',
    icon: Terminal,
    skills: [
      { name: 'Java', level: 80 },
      { name: 'C#', level: 75 },
      { name: 'JavaScript', level: 88 },
      { name: 'Python', level: 85 },

    ],
  },
  {
    title: 'Tools',
    icon: Library,
    skills: [
      { name: 'Git & GitHub', level: 90 },
      { name: 'Postman', level: 88 },
      { name: 'VS Code', level: 95 },
      { name: 'Google AI Studio', level: 88 },

    ],
  },
  {
    title: 'Core Skills',
    icon: Lightbulb,
    skills: [
      { name: 'DBMS', level: 85 },
      { name: 'Problem Solving', level: 90 },
      { name: 'Software Engineering', level: 85 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-[#030712]/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-display mb-4"
          >
            My Expertise
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIdx) => (
            <motion.div
              key={categoryIdx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIdx * 0.1 }}
              className="p-8 glass-card hover:border-blue-500/30 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all">
                  <category.icon size={24} />
                </div>
                <h3 className="text-xl font-bold font-display">{category.title}</h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-semibold text-slate-300">{skill.name}</span>
                      <span className="text-xs font-bold text-blue-500">{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: categoryIdx * 0.1 + skillIdx * 0.05 }}
                        className="h-full bg-gradient-to-r from-blue-600 to-indigo-500 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
