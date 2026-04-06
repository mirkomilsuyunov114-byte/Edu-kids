/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Star, 
  Play, 
  Users, 
  Clock, 
  Award, 
  ChevronDown, 
  MessageCircle, 
  ArrowRight,
  ShieldCheck,
  Zap,
  Smile,
  BookOpen,
  Target,
  Heart
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Components ---

const Button = ({ children, variant = 'primary', className = '', ...props }: any) => {
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-200',
    secondary: 'bg-orange-500 text-white hover:bg-orange-600 shadow-lg shadow-orange-200',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50',
    ghost: 'text-slate-600 hover:bg-slate-100'
  };
  
  return (
    <button 
      className={`px-8 py-4 rounded-2xl font-bold transition-all active:scale-95 flex items-center justify-center gap-2 ${variants[variant as keyof typeof variants]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

const SectionHeading = ({ title, subtitle, centered = true }: { title: string, subtitle?: string, centered?: boolean }) => (
  <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
    <h2 className="text-3xl md:text-4xl text-slate-900 mb-4">{title}</h2>
    {subtitle && <p className="text-lg text-slate-600 max-w-2xl mx-auto">{subtitle}</p>}
  </div>
);

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-slate-200 py-4">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left font-semibold text-lg text-slate-800 hover:text-blue-600 transition-colors"
      >
        {question}
        <ChevronDown className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pt-4 text-slate-600 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- Main Application ---

export default function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-screen bg-white selection:bg-blue-100 overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">E</div>
            <span className="font-display font-bold text-xl tracking-tight">EduKids</span>
          </div>
          <div className="hidden md:flex items-center gap-8 font-medium text-slate-600">
            <a href="#problem" className="hover:text-blue-600 transition-colors">Nega biz?</a>
            <a href="#how" className="hover:text-blue-600 transition-colors">Qanday ishlaydi?</a>
            <a href="#pricing" className="hover:text-blue-600 transition-colors">Narxlar</a>
            <a href="#faq" className="hover:text-blue-600 transition-colors">FAQ</a>
          </div>
          <Button variant="primary" className="hidden md:flex !py-2 !px-6 !text-sm" onClick={() => setShowModal(true)}>
            Bepul dars
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
        <div className="absolute top-20 right-[-10%] w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-50 -z-10"></div>
        <div className="absolute bottom-10 left-[-5%] w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-50 -z-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-bold mb-6">
              <Star className="w-4 h-4 fill-current" />
              <span>4–10 yoshli bolalar uchun maxsus</span>
            </div>
            <h1 className="text-5xl md:text-7xl mb-6 leading-[1.1]">
              Farzandingiz <span className="text-blue-600">Ingliz tilida</span> erkin gaplashsin!
            </h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-lg">
              O‘yinlar va qiziqarli metodika orqali bolangiz 3 oy ichida ilk natijalarga erishadi. Birinchi dars mutlaqo bepul!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" onClick={() => setShowModal(true)}>
                Bepul darsga yozilish
              </Button>
              <Button variant="outline">
                Kurs haqida video
                <Play className="w-4 h-4 fill-current" />
              </Button>
            </div>
            <div className="mt-10 flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1,2,3,4].map(i => (
                  <img 
                    key={i}
                    src={`https://picsum.photos/seed/child${i}/100/100`} 
                    className="w-10 h-10 rounded-full border-2 border-white object-cover"
                    alt="Student"
                    referrerPolicy="no-referrer"
                  />
                ))}
              </div>
              <p className="text-sm text-slate-500">
                <span className="font-bold text-slate-900">1,200+</span> ota-onalar bizga ishonishadi
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="https://picsum.photos/seed/learning/800/1000" 
                alt="Happy kid learning English" 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl z-20 flex items-center gap-3 animate-bounce">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                <CheckCircle2 />
              </div>
              <div>
                <p className="text-xs text-slate-500">Natija</p>
                <p className="font-bold text-sm">100% Kafolat</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading 
            title="Ota-onalarni nimalar qiynaydi?"
            subtitle="Biz ko‘plab ota-onalar bilan gaplashdik va ularning asosiy xavotirlarini aniqladik."
          />
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Clock className="w-8 h-8 text-orange-500" />,
                title: "Vaqt yetishmasligi",
                text: "Bolani repetitorga olib borish va kutish juda ko‘p vaqt oladi."
              },
              {
                icon: <Smile className="w-8 h-8 text-blue-500" />,
                title: "Zerikarli darslar",
                text: "Maktabdagi quruq grammatika bolani o‘qishdan bezdirib qo‘yadi."
              },
              {
                icon: <Target className="w-8 h-8 text-purple-500" />,
                title: "Natija yo‘qligi",
                text: "Yillab o‘qisa ham, bola hali ham gapirishga qiynaladi."
              }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-3xl bg-slate-50 hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-slate-100">
                <div className="mb-6">{item.icon}</div>
                <h3 className="text-xl mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 bg-blue-600 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-20 h-20 border-4 border-white rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 border-4 border-white rotate-45"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl mb-8 leading-tight">Bizning yechim: O‘yin orqali ta’lim</h2>
              <p className="text-xl text-blue-100 mb-10 leading-relaxed">
                Biz bolalarni majburlamaymiz. Biz ularni ingliz tili olamiga qiziqtiramiz. Har bir dars — bu yangi sarguzasht!
              </p>
              <ul className="space-y-6">
                {[
                  "Interaktiv o‘yinlar va multfilmlar",
                  "Jonli muloqotga asoslangan darslar",
                  "Psixologik yondashuv",
                  "Har haftalik natija hisoboti"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-lg">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <Button variant="secondary" className="mt-12" onClick={() => setShowModal(true)}>
                Bepul sinov darsini boshlash
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="https://picsum.photos/seed/kid1/400/400" className="rounded-2xl shadow-lg" alt="Kid learning" referrerPolicy="no-referrer" />
              <img src="https://picsum.photos/seed/kid2/400/400" className="rounded-2xl shadow-lg mt-8" alt="Kid learning" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="how" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading 
            title="Qanday boshlaymiz?"
            subtitle="Atigi 3 ta oddiy qadamda farzandingiz ingliz tilini o‘rganishni boshlaydi."
          />
          <div className="grid md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -z-10"></div>
            {[
              {
                step: "01",
                title: "Ro‘yxatdan o‘ting",
                text: "Saytda ariza qoldiring va biz siz bilan 15 daqiqa ichida bog‘lanamiz."
              },
              {
                step: "02",
                title: "Bepul dars",
                text: "Bola darajasini aniqlaymiz va birinchi qiziqarli darsni o‘tkazamiz."
              },
              {
                step: "03",
                title: "O‘qishni boshlang",
                text: "Sizga mos tarifni tanlang va guruhga qo‘shiling."
              }
            ].map((item, i) => (
              <div key={i} className="text-center bg-white p-8">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg shadow-blue-200">
                  {item.step}
                </div>
                <h3 className="text-xl mb-4">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading title="Ota-onalar nima deyishadi?" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Malika Ahmedova",
                role: "3 farzand onasi",
                text: "O‘g‘lim darslarni intiqlik bilan kutadi. Ilgari ingliz tilini yomon ko‘rardi, hozir esa o‘zi mustaqil multfilmlar ko‘ryapti."
              },
              {
                name: "Jasur Karimov",
                role: "Tadbirkor",
                text: "Sifat va natija uchun rahmat. O‘qituvchilar juda professional va bolalar tili bilan gaplashishadi."
              },
              {
                name: "Nigora Usmonova",
                role: "Uy bekasi",
                text: "Narxlari ham hamyonbop, natijasi esa kutilganidan a’lo. Tavsiya qilaman barchaga!"
              }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                <div className="flex gap-1 mb-4">
                  {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 fill-orange-400 text-orange-400" />)}
                </div>
                <p className="text-slate-700 italic mb-6 leading-relaxed">"{item.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-200 rounded-full overflow-hidden">
                    <img src={`https://picsum.photos/seed/parent${i}/100/100`} alt={item.name} referrerPolicy="no-referrer" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">{item.name}</p>
                    <p className="text-xs text-slate-500">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading 
            title="Sizga mos tarifni tanlang"
            subtitle="Hech qanday yashirin to‘lovlar yo‘q. Sifatli ta’lim hamma uchun."
          />
          <div className="grid md:grid-cols-3 gap-8">
            {/* Basic */}
            <div className="p-8 rounded-3xl border border-slate-200 hover:border-blue-200 transition-all">
              <h3 className="text-xl mb-2">Boshlang‘ich</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">350,000</span>
                <span className="text-slate-500"> /oy</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-slate-600"><CheckCircle2 className="w-5 h-5 text-green-500" /> Haftada 2 marta dars</li>
                <li className="flex items-center gap-3 text-slate-600"><CheckCircle2 className="w-5 h-5 text-green-500" /> Guruhda 10 bola</li>
                <li className="flex items-center gap-3 text-slate-600"><CheckCircle2 className="w-5 h-5 text-green-500" /> Elektron materiallar</li>
              </ul>
              <Button variant="outline" className="w-full" onClick={() => setShowModal(true)}>Tanlash</Button>
            </div>
            
            {/* Standard */}
            <div className="p-8 rounded-3xl border-2 border-blue-600 relative bg-white shadow-xl scale-105 z-10">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                TAVSIYA ETILADI
              </div>
              <h3 className="text-xl mb-2">Standart</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">500,000</span>
                <span className="text-slate-500"> /oy</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-slate-600"><CheckCircle2 className="w-5 h-5 text-green-500" /> Haftada 3 marta dars</li>
                <li className="flex items-center gap-3 text-slate-600"><CheckCircle2 className="w-5 h-5 text-green-500" /> Guruhda 6 bola</li>
                <li className="flex items-center gap-3 text-slate-600"><CheckCircle2 className="w-5 h-5 text-green-500" /> Bonus: Speaking club</li>
                <li className="flex items-center gap-3 text-slate-600"><CheckCircle2 className="w-5 h-5 text-green-500" /> Ota-onalar uchun hisobot</li>
              </ul>
              <Button variant="primary" className="w-full" onClick={() => setShowModal(true)}>Hozir boshlash</Button>
            </div>

            {/* Premium */}
            <div className="p-8 rounded-3xl border border-slate-200 hover:border-blue-200 transition-all">
              <h3 className="text-xl mb-2">Premium</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">900,000</span>
                <span className="text-slate-500"> /oy</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-slate-600"><CheckCircle2 className="w-5 h-5 text-green-500" /> Individual darslar</li>
                <li className="flex items-center gap-3 text-slate-600"><CheckCircle2 className="w-5 h-5 text-green-500" /> Maxsus dastur</li>
                <li className="flex items-center gap-3 text-slate-600"><CheckCircle2 className="w-5 h-5 text-green-500" /> 24/7 qo‘llab-quvvatlash</li>
                <li className="flex items-center gap-3 text-slate-600"><CheckCircle2 className="w-5 h-5 text-green-500" /> Sertifikat</li>
              </ul>
              <Button variant="outline" className="w-full" onClick={() => setShowModal(true)}>Tanlash</Button>
            </div>
          </div>
          <p className="text-center mt-12 text-slate-500 flex items-center justify-center gap-2">
            <ShieldCheck className="w-5 h-5" />
            14 kun ichida pulni qaytarish kafolati
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4">
          <SectionHeading title="Ko‘p so‘raladigan savollar" />
          <div className="space-y-2">
            <FAQItem 
              question="Darslar onlaynmi yoki oflayn?" 
              answer="Bizda ham onlayn, ham oflayn darslar mavjud. Onlayn darslarimiz Zoom orqali interaktiv tarzda o‘tiladi." 
            />
            <FAQItem 
              question="Bolam ingliz tilini umuman bilmasa ham bo‘ladimi?" 
              answer="Albatta! Kursimiz aynan 'nol'dan boshlovchi bolalar uchun mo‘ljallangan." 
            />
            <FAQItem 
              question="To‘lovni qanday amalga oshirsa bo‘ladi?" 
              answer="To‘lovni Click, Payme yoki bank kartalari orqali amalga oshirishingiz mumkin." 
            />
            <FAQItem 
              question="Agar darslar yoqmasa-chi?" 
              answer="Birinchi darsimiz bepul. Agar kursni boshlaganingizdan so‘ng 14 kun ichida yoqmasa, pulingizni to‘liq qaytarib beramiz." 
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <h2 className="text-4xl md:text-6xl mb-8 leading-tight">Farzandingiz kelajagini bugundan boshlang!</h2>
            <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
              Hozir ro‘yxatdan o‘ting va birinchi bepul darsga ega bo‘ling. Joylar soni cheklangan!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" className="!px-12 !py-5 text-lg" onClick={() => setShowModal(true)}>
                Bepul darsga yozilish
              </Button>
              <Button variant="ghost" className="text-white hover:bg-white/10 border border-white/20">
                Biz bilan bog‘lanish
                <MessageCircle className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-900 text-slate-400">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-2">
              <div className="flex items-center gap-2 text-white mb-6">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold">E</div>
                <span className="font-display font-bold text-xl">EduKids</span>
              </div>
              <p className="max-w-sm">
                Bolalar uchun eng zamonaviy va qiziqarli ingliz tili ta’lim markazi. Biz bilan kelajak porloq!
              </p>
            </div>
            <div>
              <h4 className="text-white mb-6">Sahifalar</h4>
              <ul className="space-y-4">
                <li><a href="#" className="hover:text-white transition-colors">Asosiy</a></li>
                <li><a href="#how" className="hover:text-white transition-colors">Qanday ishlaydi</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Narxlar</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white mb-6">Bog‘lanish</h4>
              <ul className="space-y-4">
                <li>+998 90 123 45 67</li>
                <li>Toshkent sh., Chilonzor tumani</li>
                <li>info@edukids.uz</li>
              </ul>
            </div>
          </div>
          <div className="pt-12 border-t border-slate-800 text-sm flex flex-col md:row justify-between gap-4">
            <p>© 2026 EduKids. Barcha huquqlar himoyalangan.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white">Maxfiylik siyosati</a>
              <a href="#" className="hover:text-white">Foydalanish shartlari</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Modal / Lead Form */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowModal(false)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white w-full max-w-lg rounded-[2.5rem] p-8 md:p-12 shadow-2xl overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-blue-600"></div>
              <button 
                onClick={() => setShowModal(false)}
                className="absolute top-6 right-6 text-slate-400 hover:text-slate-900"
              >
                <Zap className="w-6 h-6 rotate-45" />
              </button>
              
              <div className="text-center mb-8">
                <h2 className="text-3xl mb-3">Bepul darsga yoziling</h2>
                <p className="text-slate-600">Ma’lumotlaringizni qoldiring, biz sizga qo‘ng‘iroq qilamiz.</p>
              </div>
              
              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Rahmat! Tez orada bog‘lanamiz.'); setShowModal(false); }}>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Ismingiz</label>
                  <input 
                    type="text" 
                    placeholder="Masalan: Malika" 
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Telefon raqamingiz</label>
                  <input 
                    type="tel" 
                    placeholder="+998 __ ___ __ __" 
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Bolaning yoshi</label>
                  <select className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 outline-none transition-all">
                    <option>4-5 yosh</option>
                    <option>6-7 yosh</option>
                    <option>8-10 yosh</option>
                  </select>
                </div>
                <Button variant="primary" className="w-full !py-5 mt-4">
                  Yuborish
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <p className="text-center text-xs text-slate-400 mt-4">
                  Tugmani bosish orqali siz shaxsiy ma’lumotlarni qayta ishlashga rozilik berasiz.
                </p>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Floating WhatsApp/Telegram */}
      <div className="fixed bottom-8 right-8 z-40 flex flex-col gap-4">
        <a href="#" className="w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
          <MessageCircle className="w-7 h-7" />
        </a>
      </div>
    </div>
  );
}
