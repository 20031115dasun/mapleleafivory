import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
const testimonials = [{
  id: 1,
  names: 'Udani & Gihan',
  date: 'March 2024',
  quote: "The team at Maple Leaf was absolutely incredible. They captured emotions we didn't even realize were happening. Watching our film brings tears to our eyes every single time.",
  image: '/Photos/Udani.jpg',
  rating: 5
}, {
  id: 2,
  names: 'Uthpala & Naveen',
  date: 'March 2023',
  quote: 'Professional, artistic, and so kind. They made us feel completely at ease. The final video is a masterpiece that looks like a high-end movie. Highly recommended!',
  image: '/Photos/Uthpala.jpg',
  rating: 5
}, {
  id: 3,
  names: 'Shavi & Nadun',
  date: 'September 2022',
  quote: "We are blown away by the quality and storytelling. They didn't just record our wedding; they told our story perfectly. The drone shots of Galle were breathtaking.",
  image: '/Photos/Nadun.jpg',
  rating: 5
}];
interface TestimonialsProps {
  isDark?: boolean;
}
export function Testimonials({
  isDark = false
}: TestimonialsProps) {
  return <section className={`py-20 md:py-32 relative overflow-hidden transition-colors duration-500 ${isDark ? 'bg-black' : 'bg-white'}`}>
      {/* Background decoration */}
      <motion.div initial={{
      scale: 0,
      opacity: 0
    }} whileInView={{
      scale: 1,
      opacity: isDark ? 0.1 : 0.5
    }} viewport={{
      once: true
    }} transition={{
      duration: 1
    }} className={`absolute top-0 left-0 w-64 h-64 rounded-full -translate-x-1/2 -translate-y-1/2 ${isDark ? 'bg-[#D4AF37]' : 'bg-[#FAF8F3]'}`} />
      <motion.div initial={{
      scale: 0,
      opacity: 0
    }} whileInView={{
      scale: 1,
      opacity: isDark ? 0.1 : 0.5
    }} viewport={{
      once: true
    }} transition={{
      duration: 1,
      delay: 0.2
    }} className={`absolute bottom-0 right-0 w-96 h-96 rounded-full translate-x-1/3 translate-y-1/3 ${isDark ? 'bg-[#D4AF37]' : 'bg-[#FAF8F3]'}`} />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }} className="text-center mb-16">
          <span className={`font-sans text-sm tracking-[0.2em] uppercase block mb-4 ${isDark ? 'text-[#D4AF37]' : 'text-[#8B6F47]'}`}>
            Kind Words
          </span>
          <h2 className={`font-serif text-4xl md:text-5xl ${isDark ? 'text-[#D4AF37]' : 'text-[#2C2C2C]'}`}>
            Love Letters
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => <motion.div key={item.id} initial={{
          opacity: 0,
          y: 50,
          rotateX: -15
        }} whileInView={{
          opacity: 1,
          y: 0,
          rotateX: 0
        }} viewport={{
          once: true,
          margin: '-50px'
        }} transition={{
          duration: 0.6,
          delay: index * 0.2,
          type: 'spring',
          stiffness: 100
        }} whileHover={{
          y: -12,
          boxShadow: isDark ? '0 20px 40px rgba(212, 175, 55, 0.15)' : '0 20px 40px rgba(139, 111, 71, 0.15)',
          transition: {
            duration: 0.3
          }
        }} className={`p-8 md:p-10 rounded-sm border relative group ${isDark ? 'bg-[#1a1a1a] border-[#D4AF37]/20' : 'bg-[#FAF8F3] border-[#D4AF37]/20'}`}>
              <motion.div initial={{
            scale: 0,
            rotate: -180
          }} whileInView={{
            scale: 1,
            rotate: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6,
            delay: index * 0.2 + 0.3
          }}>
                <Quote className={`absolute top-8 left-8 w-12 h-12 ${isDark ? 'text-[#D4AF37]/20' : 'text-[#D4AF37]/20'}`} />
              </motion.div>

              <div className="flex flex-col items-center text-center relative z-10">
                <motion.div className="w-20 h-20 rounded-full overflow-hidden mb-6 border-2 border-white shadow-sm" whileHover={{
              scale: 1.1,
              rotate: 5
            }} transition={{
              duration: 0.3
            }}>
                  <img src={item.image} alt={item.names} className="w-full h-full object-cover" />
                </motion.div>

                {/* Star Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(item.rating)].map((_, i) => <motion.div key={i} initial={{
                opacity: 0,
                scale: 0
              }} whileInView={{
                opacity: 1,
                scale: 1
              }} viewport={{
                once: true
              }} transition={{
                delay: index * 0.2 + 0.5 + i * 0.1
              }}>
                      <Star size={16} className="fill-[#D4AF37] text-[#D4AF37]" />
                    </motion.div>)}
                </div>

                <p className={`font-serif italic mb-6 text-lg leading-relaxed ${isDark ? 'text-[#D4AF37]/70' : 'text-gray-600'}`}>
                  "{item.quote}"
                </p>

                <div>
                  <h4 className={`font-serif text-xl ${isDark ? 'text-[#D4AF37]' : 'text-[#2C2C2C]'}`}>
                    {item.names}
                  </h4>
                  <span className={`text-xs uppercase tracking-widest mt-1 block ${isDark ? 'text-[#D4AF37]/60' : 'text-[#8B6F47]'}`}>
                    {item.date}
                  </span>
                </div>
              </div>

              {/* Decorative corner */}
              <motion.div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br rounded-bl-full ${isDark ? 'from-[#D4AF37]/10 to-transparent' : 'from-[#D4AF37]/10 to-transparent'}`} initial={{
            scale: 0
          }} whileInView={{
            scale: 1
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.2 + 0.4
          }} />
            </motion.div>)}
        </div>
      </div>
    </section>;
}