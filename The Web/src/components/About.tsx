import React from 'react';
import { motion } from 'framer-motion';
interface AboutProps {
  isDark?: boolean;
}
export function About({
  isDark = false
}: AboutProps) {
  return <section id="about" className={`py-20 md:py-32 transition-colors duration-500 ${isDark ? 'bg-black' : 'bg-[#FAF8F3]'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image Side */}
          <motion.div initial={{
          opacity: 0,
          x: -50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8
        }} className="relative">
            <div className="aspect-[3/4] overflow-hidden rounded-sm shadow-xl">
              <img src="/Photos/Ring2.jpg" alt="Our Team" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            {/* Decorative Element */}
            <div className={`absolute -bottom-6 -right-6 w-48 h-48 -z-10 rounded-sm ${isDark ? 'bg-[#D4AF37]/10' : 'bg-[#E8E4D9]'}`} />
          </motion.div>

          {/* Text Side */}
          <motion.div initial={{
          opacity: 0,
          x: 50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8
        }}>
            <span className={`font-sans text-sm tracking-[0.2em] uppercase block mb-4 ${isDark ? 'text-[#D4AF37]' : 'text-[#8B6F47]'}`}>
              Our Story
            </span>
            <h2 className={`font-serif text-4xl md:text-5xl mb-6 leading-tight ${isDark ? 'text-[#D4AF37]' : 'text-[#2C2C2C]'}`}>
              Capturing Love in its <br />
              <span className={`italic ${isDark ? 'text-[#E5C158]' : 'text-[#8B6F47]'}`}>
                Purest Form
              </span>
            </h2>
            <div className={`space-y-6 font-light leading-relaxed ${isDark ? 'text-[#D4AF37]/70' : 'text-gray-600'}`}>
              <p>
                At The Maple Leaf Ivory Wedding Films, we believe that every
                love story deserves to be told with cinematic elegance and
                genuine emotion. Based in the heart of Sri Lanka, we specialize
                in crafting timeless wedding films that you'll cherish for
                generations.
              </p>
              <p>
                Our approach is unobtrusive yet intimate. We focus on the
                fleeting glances, the tearful smiles, and the joyous
                celebrations that make your day unique. With a blend of
                documentary storytelling and artistic cinematography, we
                transform your wedding day into a masterpiece.
              </p>
              <p>
                "We the team Maple Leaf will capture the best moments of the
                biggest day in your life." This isn't just our tagline; it's our
                promise to you.
              </p>
            </div>

            <div className={`mt-10 pt-8 flex items-center gap-8 ${isDark ? 'border-t border-[#D4AF37]/20' : 'border-t border-[#8B6F47]/20'}`}>
              <div>
                <span className={`block text-3xl font-serif ${isDark ? 'text-[#D4AF37]' : 'text-[#8B6F47]'}`}>
                  100+
                </span>
                <span className={`text-xs uppercase tracking-wider ${isDark ? 'text-[#D4AF37]/60' : 'text-gray-500'}`}>
                  Weddings Captured
                </span>
              </div>
              <div>
                <span className={`block text-3xl font-serif ${isDark ? 'text-[#D4AF37]' : 'text-[#8B6F47]'}`}>
                  100%
                </span>
                <span className={`text-xs uppercase tracking-wider ${isDark ? 'text-[#D4AF37]/60' : 'text-gray-500'}`}>
                  Happy Couples
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
}