import { Mail } from 'lucide-react';
import { motion } from 'motion/react';
import emailjs from '@emailjs/browser';
import React, { useState } from 'react';

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.065-.301-.15-1.265-.462-2.406-1.485-.888-.795-1.484-1.77-1.66-2.07-.174-.3-.019-.465.13-.615.136-.135.301-.345.451-.523.146-.181.194-.301.297-.496.098-.202.049-.387-.024-.537-.075-.15-.672-1.62-.924-2.206-.24-.584-.487-.51-.672-.51-.172-.015-.371-.015-.571-.015-.2 0-.523.074-.797.359-.273.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.195 2.105 3.195 5.1 4.485.714.3 1.27.48 1.704.629.714.227 1.365.195 1.88.121.574-.091 1.767-.721 2.016-1.426.255-.705.255-1.29.18-1.425-.074-.135-.27-.21-.57-.345z"/>
      <path d="M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.334.101 11.893c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652c1.746.943 3.71 1.444 5.71 1.447h.006c6.585 0 11.946-5.336 11.949-11.896 0-3.176-1.24-6.165-3.48-8.45zm-8.475 18.407h-.005c-1.77 0-3.51-.475-5.025-1.374l-.36-.214-3.736.975.992-3.627-.235-.372a9.923 9.923 0 0 1-1.516-5.347c.002-5.46 4.453-9.914 9.932-9.914 2.655.001 5.145 1.035 7.02 2.91 1.875 1.875 2.91 4.365 2.91 7.02 0 5.46-4.453 9.914-9.932 9.914z"/>
    </svg>
  );
}

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    // 1. 用戶點擊「送出訊息」後，不要重新載入頁面 (preventDefault)
    e.preventDefault();
    
    // 2. 送出過程中顯示 loading 狀態，並把前一次狀態清空
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const form = e.currentTarget;
      const formData = new FormData(form);
      const name = formData.get('name') as string;
      const email = formData.get('email') as string;
      
      const subjectValue = formData.get('subject') as string;
      let subjectText = "其他諮詢";
      if (subjectValue === 'app') subjectText = "App 開發";
      else if (subjectValue === 'web') subjectText = "網站開發";
      else if (subjectValue === 'integration') subjectText = "前後端整合";

      const message = formData.get('message') as string;

      // 準備要傳送給 EmailJS 的範本參數 (Template Parameters)
      const templateParams = {
        name,
        email,
        subject: subjectText,
        message,
      };

      // 第一步：發送通知給站長自己的 Template
      await emailjs.send(
        'service_qaysh4m',       // Service ID
        'template_cm0ebkd',      // Template ID (Main)
        templateParams,
        'oi5b99T8BkwvbXCyu'      // Public Key
      );

      // 第二步：發送自動回覆給用戶的 Template
      await emailjs.send(
        'service_qaysh4m',       // Service ID
        'template_upyiern',      // Template ID (Auto-Reply)
        templateParams,
        'oi5b99T8BkwvbXCyu'      // Public Key
      );

      // 3. 成功後顯示友善的成功提示，並清空表單
      setSubmitStatus('success');
      form.reset(); 
    } catch (error) {
      // 4. 失敗時顯示錯誤提示
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
    } finally {
      // 無論成功或失敗，最後都復原按鈕狀態
      setIsSubmitting(false);
      
      // 5 秒後自動隱藏提示訊息
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    }
  };

  return (
    <section id="contact" className="max-w-[1120px] mx-auto w-full px-6 py-12 md:py-24">
      <motion.div 
        className="bg-surface-container-lowest border border-outline-variant/50 rounded-3xl p-8 md:p-16 flex flex-col md:flex-row gap-12 md:gap-20 justify-between shadow-2xl shadow-black/20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-col gap-8 md:w-1/2">
          <div className="flex flex-col gap-4 border-l-4 border-primary pl-5">
            <h2 className="text-3xl md:text-5xl font-bold text-on-surface tracking-tight">Contact</h2>
            <p className="text-on-surface-variant text-lg max-w-md leading-relaxed">
              有 App 或網站開發需求？<br />歡迎 Email 和 Whatsapp 聯絡我，一起討論。
            </p>
          </div>
          <div className="mt-2 flex flex-col items-start gap-4 w-full">
            <a href="mailto:keilamchan124@gmail.com" className="inline-flex items-center gap-3 font-mono text-sm md:text-base tracking-wider text-primary hover:bg-primary hover:text-on-primary transition-colors p-4 md:p-5 bg-surface-container rounded-xl group duration-300 break-all w-full md:w-auto">
              <Mail className="w-5 h-5 shrink-0 group-hover:scale-110 transition-transform duration-300" /> 
              <span className="truncate">keilamchan124@gmail.com</span>
            </a>
            <a href="https://wa.me/85255410891" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 font-mono text-sm md:text-base tracking-wider text-primary hover:bg-primary hover:text-on-primary transition-colors p-4 md:p-5 bg-surface-container rounded-xl group duration-300 w-full md:w-auto">
              <WhatsAppIcon className="w-5 h-5 shrink-0 group-hover:scale-110 transition-transform duration-300" /> 
              <span>+852 55410891</span>
            </a>
          </div>
        </div>

        <div className="md:w-1/2">
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
             <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-semibold text-on-surface-variant uppercase tracking-wider">姓名</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  placeholder="Kenneth" 
                  required
                  className="bg-surface border border-outline-variant/60 rounded-xl px-5 py-4 text-on-surface text-base focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 w-full placeholder:text-on-surface-variant/40 transition-all duration-200" 
                />
             </div>
             
             <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-semibold text-on-surface-variant uppercase tracking-wider">電子郵件</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  placeholder="hello@gmail.com" 
                  required
                  className="bg-surface border border-outline-variant/60 rounded-xl px-5 py-4 text-on-surface text-base focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 w-full placeholder:text-on-surface-variant/40 transition-all duration-200" 
                />
             </div>

             <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="text-sm font-semibold text-on-surface-variant uppercase tracking-wider">主題</label>
                <select 
                  id="subject" 
                  name="subject"
                  className="bg-surface border border-outline-variant/60 rounded-xl px-5 py-4 text-on-surface text-base focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 w-full appearance-none transition-all duration-200"
                >
                  <option value="app">App 開發</option>
                  <option value="web">網站開發</option>
                  <option value="integration">前後端整合</option>
                  <option value="other">其他諮詢</option>
                </select>
             </div>

             <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-semibold text-on-surface-variant uppercase tracking-wider">請描述你的專案需求</label>
                <textarea 
                  id="message" 
                  name="message"
                  rows={5}
                  required
                  placeholder="請描述您的專案需求..." 
                  className="bg-surface border border-outline-variant/60 rounded-xl px-5 py-4 text-on-surface text-base focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 w-full resize-none placeholder:text-on-surface-variant/40 transition-all duration-200" 
                />
             </div>

             {submitStatus === 'success' && (
               <div className="p-4 bg-[var(--color-primary-container)] text-[var(--color-on-primary-container)] rounded-xl border border-[var(--color-primary)]/20 animate-in fade-in slide-in-from-bottom-2 duration-300">
                 訊息已成功送出，感謝您的聯絡！我會盡快回覆。
               </div>
             )}

             {submitStatus === 'error' && (
               <div className="p-4 bg-red-100 text-red-800 rounded-xl border border-red-200 animate-in fade-in slide-in-from-bottom-2 duration-300">
                 送出失敗，請稍後再試。
               </div>
             )}

             <button 
               type="submit" 
               disabled={isSubmitting}
               className="mt-4 w-full md:w-auto inline-flex items-center justify-center bg-primary text-on-primary font-bold tracking-wide px-10 py-4 rounded-xl hover:bg-primary/90 transition-all duration-200 self-start shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:-translate-y-0 disabled:hover:shadow-none"
             >
               {isSubmitting ? '送出中...' : '送出訊息'}
             </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
}
