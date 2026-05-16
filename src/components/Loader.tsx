import { motion } from 'motion/react';

export default function Loader() {
  return (
    <div className="fixed inset-0 z-[100] bg-[#030712] flex items-center justify-center">
      <div className="relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold font-display tracking-tighter mb-8"
        >
          Rohan<span className="text-blue-500">.dev</span>
        </motion.div>

        <div className="flex justify-center gap-2">
           {[0, 1, 2].map((i) => (
             <motion.div
               key={i}
               animate={{
                 y: [0, -10, 0],
                 opacity: [0.3, 1, 0.3],
               }}
               transition={{
                 duration: 0.6,
                 repeat: Infinity,
                 delay: i * 0.1,
               }}
               className="w-2 h-2 rounded-full bg-blue-500"
             />
           ))}
        </div>
      </div>
    </div>
  );
}
