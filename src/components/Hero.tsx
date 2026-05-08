import { Bot, Globe, Smartphone } from 'lucide-react';
import { motion } from 'motion/react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/20 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="max-w-[1120px] mx-auto w-full px-6 pt-12 pb-16 md:pt-20 md:pb-32">
        <motion.div 
          className="w-full md:w-fit mx-auto flex flex-col items-start"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
        <motion.h1 
          className="text-5xl md:text-7xl font-bold text-on-surface tracking-tight leading-[1.1] md:leading-[1.1]"
          variants={itemVariants}
        >
          香港獨立 App 開發者
        </motion.h1>
        
        <motion.div className="flex flex-wrap gap-3 mt-6" variants={itemVariants}>
          <span className="px-5 py-2.5 bg-surface-container border border-outline-variant rounded-full text-sm font-medium flex items-center gap-2 text-primary-fixed-dim">
            <Smartphone className="w-4 h-4" /> iOS
          </span>
          <span className="px-5 py-2.5 bg-surface-container border border-outline-variant rounded-full text-sm font-medium flex items-center gap-2 text-primary-fixed-dim">
            <Bot className="w-4 h-4" /> Android
          </span>
          <span className="px-5 py-2.5 bg-surface-container border border-outline-variant rounded-full text-sm font-medium flex items-center gap-2 text-primary-fixed-dim">
            <Globe className="w-4 h-4" /> Web
          </span>
        </motion.div>

        <motion.div className="text-lg text-on-surface-variant mt-8 flex flex-col gap-6" variants={itemVariants}>
          <p className="text-xl md:text-2xl font-medium text-on-surface">
            已獨立開發上架 4 款香港考試題庫 App
          </p>
          <div className="text-left text-on-surface-variant/90 text-base md:text-lg">
            <p className="mb-3 font-medium text-on-surface">接案項目：</p>
            <ul className="list-disc list-outside ml-6 flex flex-col gap-2">
              <li>手機 App 開發（iOS + Android）</li>
              <li>公司或個人網站設計與開發</li>
              <li>後台功能與資料庫整合</li>
              <li>App / 網站界面設計與使用體驗優化</li>
            </ul>
          </div>
        </motion.div>

        <motion.div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-12 w-full sm:w-auto" variants={itemVariants}>
          <a 
            href="#contact" 
            className="w-full sm:w-auto inline-flex items-center justify-center text-on-primary font-medium px-8 py-4 rounded-xl transition-all duration-300 bg-primary hover:bg-primary/90 hover:scale-105 shadow-[0_0_15px_rgba(173,199,255,0.3)] text-lg"
          >
            聯絡我
          </a>
          <a 
            href="#work" 
            className="w-full sm:w-auto inline-flex items-center justify-center bg-transparent text-on-surface border border-outline-variant font-medium px-8 py-4 rounded-xl hover:bg-surface-container-low transition-colors tracking-widest text-lg"
          >
            查看作品
          </a>
        </motion.div>
      </motion.div>
      </div>
    </section>
  );
}
