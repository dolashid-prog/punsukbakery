import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'motion/react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { allProducts } from '../data/products';

export default function Products() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="font-sans text-brand-text bg-brand-base min-h-screen flex flex-col"
    >
      <div className="pt-8">
        <Navbar />
      </div>

      {/* Hero Image Section */}
      <section className="container mx-auto px-6 lg:px-16 max-w-7xl mt-10 mb-16">
        <div className="w-full h-[300px] md:h-[450px] bg-white rounded-[48px] p-3 md:p-4 shadow-[0_12px_40px_rgb(0,0,0,0.08)] border border-gray-100 relative overflow-hidden group">
            <div className="w-full h-full rounded-[36px] md:rounded-[40px] overflow-hidden relative shadow-inner">
              <div className="absolute inset-0 bg-black/5 z-10 pointer-events-none transition-opacity group-hover:opacity-0 mix-blend-multiply rounded-[36px] md:rounded-[40px]"></div>
              <img 
                 src="https://images.unsplash.com/photo-1542826438-bd32f43d626f?auto=format&fit=crop&w=1600&q=80" 
                 alt="Assortment of fresh baked goods" 
                 className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                 referrerPolicy="no-referrer"
              />
            </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="bg-brand-base pb-[100px]">
        <div className="container mx-auto px-6 lg:px-16 max-w-7xl text-center">
          <h2 className="font-serif text-[42px] text-brand-heading font-normal mb-[60px]">Our Bestsellers</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px] lg:gap-[30px]">
            {allProducts.map((item) => (
              <div key={item.id} className="group bg-white rounded-[32px] p-4 flex flex-col shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_12px_30px_rgb(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1.5 items-start text-left border border-gray-100">
                <div className="w-full aspect-square bg-[#f9f9f9] rounded-[24px] mb-5 overflow-hidden relative flex items-center justify-center">
                   <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover mix-blend-multiply group-hover:scale-110 transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="px-2 w-full flex flex-col flex-grow">
                  <h3 className="font-serif text-[20px] font-medium mb-1 text-brand-heading leading-tight">{item.englishName}</h3>
                  
                  <div className="mt-auto flex items-center justify-between w-full pt-4 pb-2">
                    <p className="text-brand-heading text-[16px] font-medium">{item.price} ฿</p>
                    <div className="flex items-center gap-1.5 bg-[#fff8eb] px-3 py-1 rounded-full text-brand-heading text-[13px] border border-[#fcedd2]">
                      <Star size={14} className="fill-[#F5A623] text-[#F5A623]" />
                      <span className="font-medium">{item.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
}
