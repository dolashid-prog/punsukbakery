import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { specialCollections } from '../data/specials';

export default function Special() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % specialCollections.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + specialCollections.length) % specialCollections.length);
  };

  const currentItem = specialCollections[currentIndex];

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
                 src="image/4.jpg" 
                 alt="Special Season" 
                 className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                 referrerPolicy="no-referrer"
              />
            </div>
        </div>
      </section>

      {/* Special Carousel Section */}
      <section className="bg-brand-base pb-[100px]">
        <div className="container mx-auto px-6 lg:px-16 max-w-7xl text-center">
          <h2 className="font-serif text-[42px] text-brand-heading font-normal mb-[40px]">Special Season</h2>
          
          <div className="bg-white rounded-none p-8 md:p-16 shadow-sm mx-auto max-w-5xl relative">
            <div className="mb-12 min-h-[48px] md:min-h-[60px] flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.h3
                  key={currentIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="font-serif text-[32px] md:text-[42px] text-brand-heading font-normal leading-tight"
                >
                  {currentItem.title}
                </motion.h3>
              </AnimatePresence>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">
              
              {/* Left Button Desktop */}
              <button 
                onClick={handlePrev} 
                className="hidden md:flex bg-black text-white rounded-full w-12 h-12 items-center justify-center hover:bg-brand-primary transition-colors flex-shrink-0"
              >
                <ChevronLeft size={24} />
              </button>

              {/* Image */}
              <div className="w-full md:w-1/2 flex justify-center">
                 <div className="w-full aspect-[4/3] relative">
                    <AnimatePresence custom={direction}>
                      <motion.div
                        key={currentIndex}
                        custom={direction}
                        variants={{
                          enter: (dir) => ({ x: dir > 0 ? 50 : -50, opacity: 0 }),
                          center: { x: 0, opacity: 1, zIndex: 1 },
                          exit: (dir) => ({ x: dir < 0 ? 50 : -50, opacity: 0, zIndex: 0 })
                        }}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="absolute inset-0 w-full h-full bg-[#f5f5f5] rounded-3xl overflow-hidden shadow-2xl border-[6px] border-[#e0e0e0]"
                      >
                         <img
                            src={currentItem.image}
                            alt={currentItem.title}
                            className="w-full h-full object-cover mix-blend-multiply"
                            referrerPolicy="no-referrer"
                          />
                      </motion.div>
                    </AnimatePresence>
                 </div>
              </div>

              {/* Mobile Arrows */}
              <div className="flex md:hidden gap-6 mt-4">
                 <button 
                  onClick={handlePrev} 
                  className="bg-black text-white rounded-full w-12 h-12 flex items-center justify-center hover:bg-brand-primary transition-colors"
                >
                  <ChevronLeft size={24} />
                </button>
                <button 
                  onClick={handleNext} 
                  className="bg-black text-white rounded-full w-12 h-12 flex items-center justify-center hover:bg-brand-primary transition-colors"
                >
                  <ChevronRight size={24} />
                </button>
              </div>

              {/* Text & Action */}
              <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left h-full justify-center">
                <div className="min-h-[140px] flex items-center mb-8">
                  <AnimatePresence mode="wait" custom={direction}>
                    <motion.div
                      key={currentIndex}
                      custom={direction}
                      variants={{
                        enter: (dir) => ({ x: dir > 0 ? 20 : -20, opacity: 0 }),
                        center: { x: 0, opacity: 1 },
                        exit: (dir) => ({ x: dir < 0 ? 20 : -20, opacity: 0 })
                      }}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.3 }}
                    >
                      <p className="text-[14px] md:text-[16px] leading-[1.8] text-brand-heading font-medium max-w-md">
                        "{currentItem.description}"
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>
                <button className="bg-[#8b8b8b] text-white px-[40px] py-[14px] rounded-full tracking-[1px] text-[14px] font-medium hover:bg-brand-primary transition-colors mt-auto md:mt-0">
                  Order now
                </button>
              </div>

              {/* Right Button Desktop */}
              <button 
                onClick={handleNext} 
                className="hidden md:flex bg-black text-white rounded-full w-12 h-12 items-center justify-center hover:bg-brand-primary transition-colors flex-shrink-0"
              >
                <ChevronRight size={24} />
              </button>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
}
