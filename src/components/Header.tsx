import { motion } from 'motion/react';
import { useState } from 'react';

export default function Header() {
  return (
    <motion.header 
      className="bg-background/80 w-full top-0 sticky backdrop-blur-md border-b border-outline-variant/30 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="max-w-[1120px] mx-auto w-full px-6 flex justify-between items-center h-20">
        <a href="#" className="text-2xl font-bold text-primary tracking-tighter hover:opacity-80 transition-opacity">
          Keilam C.
        </a>
        <nav className="hidden md:flex items-center gap-8 font-medium">
          <a href="#work" className="text-on-surface-variant hover:text-primary transition-colors duration-200">My Projects</a>
          <a href="#services" className="text-on-surface-variant hover:text-primary transition-colors duration-200">Services</a>
          <a href="#tech" className="text-on-surface-variant hover:text-primary transition-colors duration-200">Tech Stack</a>
          <a href="#contact" className="text-on-surface-variant hover:text-primary transition-colors duration-200">Contact</a>
        </nav>
      </div>
    </motion.header>
  );
}
