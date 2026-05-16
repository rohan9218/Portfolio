import { motion } from 'motion/react';
import { Github, Mail, Linkedin, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-[#020617] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center mb-12">
          <div className="text-center md:text-left">
            <a href="#home" className="text-2xl font-bold font-display tracking-tighter">
              Rohan<span className="text-blue-500">.dev</span>
            </a>
            <p className="mt-4 text-sm text-slate-500 max-w-xs mx-auto md:mx-0">
              Building sustainable and scalable solutions with modern technologies.
              Always learning, always coding.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="flex gap-4">
              <a href="https://github.com/rohan9218" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/5 transition-all">
                <Github size={18} />
              </a>
              <a href="mailto:rohandesai9218@gmail.com" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/5 transition-all">
                <Mail size={18} />
              </a>
              {/* LinkedIn placeholder if needed */}
              <a href="https://www.linkedin.com/in/rohan-desai-16036a312" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/5 transition-all">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div className="text-center md:text-right">
            <nav className="flex flex-wrap justify-center md:justify-end gap-6 text-sm font-medium text-slate-400 mb-4">
              <a href="#home" className="hover:text-blue-500 transition-colors">Home</a>
              <a href="#about" className="hover:text-blue-500 transition-colors">About</a>
              <a href="#skills" className="hover:text-blue-500 transition-colors">Skills</a>
              <a href="#projects" className="hover:text-blue-500 transition-colors">Projects</a>
            </nav>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 gap-6">
          <p className="text-xs text-slate-500 font-medium">
            © {new Date().getFullYear()} Rohan Suresh Desai. All rights reserved.
          </p>

          <div className="flex items-center gap-2 text-xs text-slate-600">
            <span>Crafted with</span>
            <span className="text-red-500 text-lg">♥</span>
            <span>using React & Tailwind</span>
          </div>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-600/20"
          >
            <ArrowUp size={20} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
