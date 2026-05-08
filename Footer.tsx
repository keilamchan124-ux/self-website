import { Braces, Code, Database, MousePointerClick, Paintbrush, Box, HardDrive, Figma, Github } from 'lucide-react';
import { motion } from 'motion/react';

export default function TechStack() {
  const techs = [
    { name: 'Flutter', icon: <Code className="w-5 h-5 text-primary" /> },
    { name: 'Firebase', icon: <Database className="w-5 h-5 text-primary" /> },
    { name: 'JSON 題庫系統', icon: <Braces className="w-5 h-5 text-primary" /> },
    { name: 'AdMob', icon: <MousePointerClick className="w-5 h-5 text-primary" /> },
    { name: 'Tailwind CSS', icon: <Paintbrush className="w-5 h-5 text-primary" /> },
    { name: 'Riverpod', icon: <Box className="w-5 h-5 text-primary" /> },
    { name: 'SQLite', icon: <HardDrive className="w-5 h-5 text-primary" /> },
    { name: 'Figma', icon: <Figma className="w-5 h-5 text-primary" /> },
    { name: 'GitHub', icon: <Github className="w-5 h-5 text-primary" /> },
  ];

  return (
    <section id="tech" className="max-w-[1120px] mx-auto w-full px-6 py-12 md:py-24">
      <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start">
        <motion.div 
          className="flex flex-col gap-2 border-l-4 border-primary pl-5 md:w-1/3"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-on-surface tracking-tight">Tech Stack</h2>
          <p className="text-on-surface-variant text-lg">我常用的開發工具</p>
        </motion.div>
        <motion.div 
          className="flex flex-wrap gap-4 md:gap-4 md:w-2/3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
        >
          {techs.map((tech, i) => (
            <motion.span 
              key={i} 
              className="px-5 py-3 bg-surface-container hover:bg-surface-container-high border border-outline-variant/30 rounded-full text-base font-medium text-on-surface flex items-center gap-3 transition-colors cursor-default"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              whileHover={{ scale: 1.05 }}
            >
              {tech.icon}
              {tech.name}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
