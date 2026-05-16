import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'motion/react';

export default function GithubSection() {
  const githubUrl = "https://github.com/rohan9218";

  return (
    <section id="github" className="py-24 bg-[#030712]/50 relative overflow-hidden">
      {/* Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl aspect-square bg-blue-600/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-display mb-4"
          >
            GitHub <span className="text-blue-500">Activity</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-3xl font-bold font-display leading-tight">
              Open Source Contributions & <span className="gradient-text">Project Ecosystem</span>
            </h3>
            <p className="text-lg text-slate-400 leading-relaxed">
              I am actively contributing to the developer community through various repositories.
              My GitHub reflects my journey from learning the basics to building complex
              full-stack applications.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 glass-card text-center">
                <div className="text-3xl font-bold text-white mb-1">10+</div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Contributions</div>
              </div>
              <div className="p-6 glass-card text-center">
                <div className="text-3xl font-bold text-white mb-1">8+</div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Repositories</div>
              </div>
            </div>

            <motion.a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-xl font-bold transition-all shadow-xl hover:shadow-white/10"
            >
              <Github size={20} />
              Visit GitHub Profile
              <ExternalLink size={16} />
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* GitHub Stats Card Placeholder 
            <div className="glass-card p-2 group hover:border-blue-500/30 transition-all overflow-hidden">
              <img
                src={`https://github-readme-stats.vercel.app/api?username=rohan9218&show_icons=true&theme=tokyonight&bg_color=030712&border_color=1e293b&title_color=3b82f6&icon_color=3b82f6&text_color=94a3b8`}
                alt="GitHub Stats"
                className="w-full h-auto rounded-xl"
              />
            </div>

            <div className="glass-card p-2 group hover:border-indigo-500/30 transition-all overflow-hidden">
              <img
                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=rohan9218&layout=compact&theme=tokyonight&bg_color=030712&border_color=1e293b&title_color=818cf8&icon_color=818cf8&text_color=94a3b8`}
                alt="Top Languages"
                className="w-full h-auto rounded-xl"
              />
            </div>*/}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
