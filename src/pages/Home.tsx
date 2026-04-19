import React from 'react';
import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { bestsellers } from '../data/products';

export default function Home() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="font-sans text-brand-text bg-brand-base min-h-screen flex flex-col"
    >
      {/* 1. Navbar & Hero Section */}
      <div className="flex-grow-0 pt-8 pb-10">
        <Navbar />

        {/* Hero Area */}
        <section id="home" className="container mx-auto px-6 lg:px-16 max-w-7xl mt-12 md:mt-20 flex flex-col-reverse md:flex-row items-center gap-[40px]">
          <div className="flex-1 max-w-lg">
            <h1 className="font-serif text-[42px] md:text-[52px] leading-[1.1] text-brand-heading font-normal mb-[20px]">
              Baked Fresh,<br />Shared with Love.
            </h1>
            <p className="text-[18px] leading-[1.6] text-brand-subtext mb-[30px]">
              แบรนด์ Homemade ของครอบครัว Bakery ขนมหวาน เค้ก และคุกกี้ 
              ส่งมอบความอบอุ่น โฮมเมด ความจริงใจ และคุณภาพ
            </p>
            <span className="block mt-[16px] italic text-brand-accent font-serif tracking-wide">
              "อบอุ่นด้วยความสุขในทุกคำ"
            </span>
          </div>
          <div className="flex-1 w-full max-w-md mx-auto relative">
            <div className="h-[380px] md:h-[450px] bg-brand-border rounded-t-[200px] rounded-b-none overflow-hidden relative shadow-card">
              <img
                src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=1000"
                alt="Delicious homemade bakery"
                className="w-full h-full object-cover opacity-90"
              />
            </div>
          </div>
        </section>
      </div>

      {/* 2. Our Bestsellers */}
      <section id="products" className="bg-brand-base py-[80px]">
        <div className="container mx-auto px-6 lg:px-16 max-w-7xl text-center">
          <h2 className="font-serif text-[36px] text-brand-heading font-normal mb-[40px]">Signature Products</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px]">
            {bestsellers.map((item) => (
              <div key={item.id} className="bg-white rounded-[32px] p-[24px] flex flex-col items-center text-center shadow-card transition-transform hover:-translate-y-1">
                <div className="w-[100px] h-[100px] rounded-full bg-brand-base mb-[15px] flex items-center justify-center overflow-hidden relative shadow-inner">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="font-serif text-[18px] mb-[8px] text-brand-heading leading-tight">{item.englishName}</h3>
                <p className="text-brand-subtext text-[13px] mb-[12px]">{item.name}</p>
                <div className="mt-auto flex flex-col items-center gap-1 w-full">
                  <div className="flex items-center gap-1 text-brand-accent text-[12px] bg-brand-base/50 px-2 py-1 rounded-full">
                    <Star size={12} className="fill-brand-accent" />
                    <span>{item.rating} Rating</span>
                  </div>
                  <p className="text-brand-primary font-bold text-[16px] mt-2">{item.price} THB</p>
                </div>
              </div>
            ))}
          </div>

          <Link to="/products" className="mt-[50px] inline-block bg-transparent border border-brand-primary text-brand-primary px-[36px] py-[16px] rounded-[12px] tracking-[1px] text-[14px] font-semibold uppercase hover:bg-brand-primary hover:text-white transition-colors">
            View Full Menu
          </Link>
        </div>
      </section>

      {/* 3. Tradition Meets Taste */}
      <section id="about" className="bg-white py-[80px]">
        <div className="container mx-auto px-6 lg:px-16 max-w-7xl flex flex-col md:flex-row items-center gap-[60px]">
          <div className="flex-1 w-full order-2 md:order-1 relative">
             <div className="h-[400px] bg-brand-border rounded-[48px] overflow-hidden shadow-card">
              <img
                src="https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=1000&q=80"
                alt="Baker working with dough"
                className="w-full h-full object-cover opacity-90"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          <div className="flex-1 order-1 md:order-2 space-y-[20px]">
            <h2 className="font-serif text-[36px] md:text-[46px] leading-[1.1] text-brand-heading font-normal">
              Background <br/><span className="italic text-brand-accent text-[32px]">Meets Taste</span>
            </h2>
            <p className="text-[16px] leading-[1.6] text-brand-subtext">
              "แบรนด์นี้เกิดจากคุณแม่เริ่มหัดทำขนม และมีความสุขกับการทำเค้กและขนมหวาน 
              ทำขึ้นด้วยวัตถุดิบที่คัดสรร เมื่อได้รับคำชมและการบอกต่อจากคนรอบข้าง จึงเกิดแรงบันดาลใจที่จะพัฒนาเป็นแบรนด์ 
              Homemade Cake & Dessert ที่ส่งมอบรสชาติและความรู้สึกแบบขนมที่คุณแม่ทำ"
            </p>
            <p className="text-[16px] leading-[1.6] text-brand-subtext">
              ความตั้งใจของเราไม่ใช่เพียงการขายขนม แต่คือการสร้าง <strong className="font-semibold text-brand-primary text-[15px]">"ความสุขเล็กๆ ผ่านรสชาติ"</strong>
            </p>
          </div>
        </div>
      </section>

      {/* 4. Special Season */}
      <section id="special" className="bg-brand-base py-[80px]">
        <div className="container mx-auto px-6 lg:px-16 max-w-7xl flex flex-col md:flex-row items-center gap-[60px]">
          <div className="flex-1 space-y-[20px]">
            <h2 className="font-serif text-[36px] md:text-[46px] leading-[1.1] text-brand-heading font-normal">
              Special <br/><span className="italic text-brand-accent text-[32px]">Season</span>
            </h2>
            <p className="text-[16px] leading-[1.6] text-brand-primary font-semibold">
              "ใส่ใจคุณภาพ เพื่อคนพิเศษ"
            </p>
            <p className="text-[16px] leading-[1.6] text-brand-subtext">
              อบอุ่นเป็นครอบครัว และทันสมัย สื่อถึงความพิถีพิถันของ PunSuk ในการสร้างสรรค์ 
              ผลิตภัณฑ์ที่ดีที่สุด เพื่อมอบให้กับผู้บริโภคคนสำคัญของเรา เป็นตัวแทนของความรู้สึกดีๆ ทุกเทศกาล
            </p>
             <Link to="/special" className="mt-[20px] inline-block bg-brand-primary text-white px-[32px] py-[14px] rounded-[12px] tracking-[1px] text-[13px] font-semibold uppercase hover:opacity-90 transition-opacity">
              Explore Collections
            </Link>
          </div>
          <div className="flex-1 w-full relative">
            <div className="h-[400px] bg-brand-border rounded-t-[200px] rounded-b-[40px] overflow-hidden shadow-card">
              <img
                src="image/4.jpg"
                alt="Christmas cake"
                className="w-full h-full object-cover opacity-90"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
}
