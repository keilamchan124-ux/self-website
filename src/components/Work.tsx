import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

const projects = [
  {
    title: 'HKSI QuizHelper',
    desc: <>HKSI 證券及期貨從業員資格考試題庫（Papers 1, 7 & 8）<br />超過 500 道中英雙語題目</>,
    imageUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/eb/8c/28/eb8c28bf-8242-95f0-9635-d9dd50bc64cc/AppIcon-1x_U007emarketing-0-11-0-85-220-0.png/512x512bb.jpg',
    points: ['模擬考試功能', '詳盡題目解析'],
    tags: ['Flutter', 'Firebase', 'AdMob', 'In-App Purchase', 'Riverpod'],
    href: 'https://apps.apple.com/us/app/hksi-%E9%A1%8C%E5%BA%AB%E5%8A%A9%E6%89%8B/id6767101439?l=zh-Hant-TW',
  },
  {
    title: '2026 香港考車筆試練習',
    desc: <>香港駕駛執照筆試模擬練習 App<br />章節練習 + 限時模擬考試</>,
    imageUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/cd/74/47/cd744751-51e4-6f08-6421-9cf4b7d54ce7/AppIcon-1x_U007emarketing-0-11-0-85-220-0.png/512x512bb.jpg',
    points: ['分章練習模式', '擬真限時考試'],
    tags: ['Flutter', 'Firebase', 'Local Notifications', 'JSON 題庫'],
    href: 'https://apps.apple.com/us/app/2026%E9%A6%99%E6%B8%AF%E8%80%83%E8%BB%8A%E7%AD%86%E8%A9%A6%E7%B7%B4%E7%BF%92/id6762205990',
  },
  {
    title: '2026 基本法及國安法模擬試題',
    desc: <>基本法及香港國安法模擬試題 App<br />隨機模擬考 + 離線查閱 + 詳盡解釋</>,
    imageUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/b3/c2/b1/b3c2b13d-ddef-bd10-afbb-b88d5b115134/AppIcon-1x_U007emarketing-0-11-0-85-220-0.png/512x512bb.jpg',
    points: ['支援離線使用', '即時評分系統'],
    tags: ['Flutter', 'Firebase', 'Offline-first', 'JSON 題庫'],
    href: 'https://apps.apple.com/us/app/2026%E5%9F%BA%E6%9C%AC%E6%B3%95%E5%8F%8A%E5%9C%8B%E5%AE%89%E6%B3%95%E6%A8%A1%E6%93%AC%E8%A9%A6%E9%A1%8C/id6756670660',
  },
  {
    title: '2026 CFA Exam Practice',
    desc: <>CFA Level 1 模擬練習 App（支援中英繁簡）<br />完整 Mock Exam + 分題目練習</>,
    imageUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/a1/8c/57/a18c57cb-8212-35a6-0480-16c96ba7c07a/AppIcon-1x_U007emarketing-0-11-0-85-220-0.png/512x512bb.jpg',
    points: ['支援中英雙語', '考試趨勢分析'],
    tags: ['Flutter', 'Firebase', 'Multi-language', 'In-App Purchase'],
    href: 'https://apps.apple.com/us/app/2026-cfa-%E8%80%83%E8%A9%A6%E9%A1%8C%E5%BA%AB/id6762739176?l=zh-Hant-TW',
  },
];

export default function Work() {
  return (
    <section id="work" className="max-w-[1120px] mx-auto w-full px-6 py-12 md:py-24">
      <div className="flex flex-col gap-10 md:gap-16">
        <motion.div 
          className="flex flex-col gap-2 border-l-4 border-primary pl-5"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-on-surface tracking-tight">My Projects</h2>
          <p className="text-on-surface-variant text-lg">已開發的考試專用 App 展示</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {projects.map((project, i) => (
            <motion.a 
              key={i} 
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block cursor-pointer group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="bg-surface-container-lowest border border-outline-variant rounded-2xl overflow-hidden flex flex-col group hover:border-primary/50 hover:bg-surface-container-low transition-all duration-300 h-full hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1">
                <div className="p-10 flex items-center justify-center bg-surface-container w-full border-b border-outline-variant/30 relative overflow-hidden">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title}
                    className="w-32 h-32 rounded-[28px] shadow-lg group-hover:scale-110 transition-transform duration-700 ease-out object-cover relative z-10" 
                  />
                  {/* Background blur effect for icon */}
                  <img src={project.imageUrl} alt="" className="absolute inset-0 w-full h-full object-cover blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />
                </div>
                <div className="p-8 flex flex-col gap-5 h-full">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl md:text-2xl font-semibold text-on-surface group-hover:text-primary transition-colors tracking-tight">
                        {project.title}
                      </h3>
                      <p className="text-on-surface-variant text-base mt-3 mb-5 leading-relaxed">
                        {project.desc}
                      </p>
                      <ul className="text-sm text-on-surface-variant/90 flex flex-col gap-2 mb-4 font-medium">
                        {project.points.map((pt, j) => (
                          <li key={j}>• {pt}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-surface-container p-2 rounded-full group-hover:bg-primary/10 transition-colors">
                      <ArrowUpRight className="text-on-surface w-5 h-5 group-hover:text-primary transition-colors flex-shrink-0" />
                    </div>
                  </div>
                  <div className="flex gap-2 flex-wrap mt-auto pt-4 border-t border-outline-variant/30">
                    {project.tags.map((tag, j) => (
                      <span key={j} className="px-3 py-1.5 bg-surface-container rounded-lg font-mono text-on-surface-variant text-xs uppercase tracking-wider font-semibold group-hover:bg-surface group-hover:text-on-surface transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
