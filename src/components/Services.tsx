import { Check, GitMerge, Monitor, Smartphone } from 'lucide-react';
import { motion } from 'motion/react';

export default function Services() {
  const services = [
    {
      icon: <Smartphone className="text-primary w-8 h-8 group-hover:scale-110 transition-transform" />,
      title: 'App 開發',
      desc: '打造高效、跨平台的 iOS 與 Android App，開發快速，介面一致，支援後端資料管理、廣告變現同應用內購買功能。',
      points: ['跨平台開發', '完整功能整合'],
    },
    {
      icon: <Monitor className="text-primary w-8 h-8 group-hover:scale-110 transition-transform" />,
      title: '網站開發',
      desc: '響應式網站、Landing Page 及 Web App，搭配 Firebase 後端解決方案。',
      points: ['完美響應式', '現代化技術棧'],
    },
    {
      icon: <GitMerge className="text-primary w-8 h-8 group-hover:scale-110 transition-transform" />,
      title: 'App + 網站整合',
      desc: 'App 與網站同步開發及前後端整合，提供長期維護與技術支援。',
      points: ['前後端一體', '長期維護支援'],
    },
  ];

  return (
    <section id="services" className="max-w-[1120px] mx-auto w-full px-6 py-12 md:py-24">
      <div className="flex flex-col gap-10 md:gap-16">
        <motion.div 
          className="flex flex-col gap-2 border-l-4 border-primary pl-5 relative"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-on-surface tracking-tight">Services</h2>
          <p className="text-on-surface-variant text-lg">提供高效、清晰易用的技術解決方案</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, i) => (
            <motion.div 
              key={i} 
              className="bg-surface-container-lowest border border-outline-variant p-8 md:p-10 rounded-2xl hover:border-primary/50 hover:bg-surface-container-low transition-all duration-300 group flex flex-col gap-5 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5 cursor-default"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="p-4 bg-surface-container rounded-xl w-fit group-hover:bg-primary/10 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-on-surface tracking-tight">{service.title}</h3>
              <p className="text-on-surface-variant text-base leading-relaxed flex-1">
                {service.desc}
              </p>
              <ul className="text-sm md:text-base text-on-surface-variant flex flex-col gap-3 mt-4 pt-6 border-t border-outline-variant/50">
                {service.points.map((point, j) => (
                  <li key={j} className="flex items-center gap-3 font-medium">
                    <Check className="w-5 h-5 text-primary" /> {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
