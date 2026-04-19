import React from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer id="contact" className="bg-white border-t border-brand-border mt-auto pt-16 pb-8 scroll-mt-12">
      <div className="container mx-auto px-6 lg:px-16 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-16">
          
          {/* Brand Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="inline-block mb-6">
              <img 
                src="/logo.png"
                alt="PunSuk Bakery Logo"
                className="h-[50px] md:h-[60px] w-auto object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  document.getElementById('fallback-text-logo-footer')?.classList.remove('hidden');
                }}
              />
              <span id="fallback-text-logo-footer" className="hidden font-serif text-[32px] font-bold text-brand-primary tracking-[1px] uppercase">
                PunSuk <span className="font-sans font-normal text-brand-primary/60 lowercase text-[22px] ml-1">ปันสุข</span>
              </span>
            </div>
            <p className="text-brand-subtext leading-[1.8] text-[15px] max-w-sm mb-8">
              ความตั้งใจของเราไม่ใช่เพียงการขายขนม แต่คือการสร้าง "ความสุขเล็กๆ ผ่านรสชาติ" อบอุ่นเหมือนขนมที่คุณแม่ทำให้ทานเสมอ
            </p>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-brand-base flex items-center justify-center text-brand-primary shadow-sm">
                <Facebook size={20} />
              </div>
              <div className="w-12 h-12 rounded-full bg-brand-base flex items-center justify-center text-brand-primary shadow-sm">
                <Instagram size={20} />
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col items-center md:items-center text-center md:text-left">
            <div className="w-full md:w-max">
              <h4 className="font-sans font-semibold text-[20px] uppercase tracking-wider text-brand-heading mb-6 md:text-left">Contact Us</h4>
              <div className="space-y-4 text-[15px] text-brand-subtext">
                <div className="flex items-start gap-4 justify-center md:justify-start transition-colors hover:text-brand-primary">
                  <MapPin size={22} className="text-brand-accent mt-1 flex-shrink-0" />
                  <span className="leading-relaxed text-left">
                    123 ถนนสุขุมวิท แขวงคลองเตย<br />
                    เขตคลองเตย กรุงเทพมหานคร 10110
                  </span>
                </div>
                <div className="flex items-center gap-4 justify-center md:justify-start transition-colors hover:text-brand-primary">
                  <Phone size={20} className="text-brand-accent flex-shrink-0" />
                  <span>080-123-4567</span>
                </div>
                <div className="flex items-center gap-4 justify-center md:justify-start transition-colors hover:text-brand-primary">
                  <Mail size={20} className="text-brand-accent flex-shrink-0" />
                  <span>Punsuk@gmail.com</span>
                </div>
              </div>
            </div>
          </div>

          {/* Operating Hours */}
          <div className="flex flex-col items-center md:items-end text-center md:text-right w-full">
             <div className="w-full md:w-max">
              <h4 className="font-sans font-semibold text-[20px] uppercase tracking-wider text-brand-heading mb-6 md:text-left">Opening Hours</h4>
              <div className="space-y-4 text-[15px] text-brand-subtext w-full min-w-[220px]">
                <div className="flex justify-between items-center border-b border-brand-border/60 pb-3">
                  <span>Tue - Fri</span>
                  <span className="font-medium text-brand-primary">08:00 - 18:00</span>
                </div>
                <div className="flex justify-between items-center border-b border-brand-border/60 pb-3">
                  <span>Sat - Sun</span>
                  <span className="font-medium text-brand-primary">09:00 - 19:00</span>
                </div>
                <div className="flex justify-between items-center pb-3 text-[#d35400] font-semibold">
                  <span>Monday</span>
                  <span>Closed</span>
                </div>
              </div>
             </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-brand-border flex justify-center md:justify-start text-[12px] text-[#999] uppercase tracking-[1.5px] text-center font-medium">
          <div>© 2026 Punsuk Bakery. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
