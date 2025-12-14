import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Play, ChevronDown, Heart } from 'lucide-react';
interface HeroProps {
  isDark: boolean;
}
export function Hero({
  isDark
}: HeroProps) {
  const {
    scrollY
  } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scrollToFilms = () => {
    document.getElementById('films')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Video Background with Parallax */}
      <motion.div style={{
      y
    }} className="absolute inset-0 z-0">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src="/Videos/Bg.mp4" type="video/mp4" />
          {/* Fallback image if video doesn't load */}
          <img src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop" alt="Wedding Background" className="w-full h-full object-cover" />
        </video>

        {/* Gradient overlays */}
        <div className={`absolute inset-0 transition-colors duration-500 ${isDark ? 'bg-gradient-to-b from-black/70 via-black/50 to-black/70' : 'bg-gradient-to-b from-black/50 via-black/30 to-black/60'}`} />
        <div className="absolute inset-0 bg-gradient-to-r from-[#8B6F47]/20 to-transparent mix-blend-overlay" />
      </motion.div>

      {/* Content */}
      <motion.div style={{
      opacity
    }} className="relative z-10 max-w-5xl mx-auto px-4 text-center text-white">
        {/* Heart icon animation */}
        <motion.div initial={{
        scale: 0,
        rotate: -180
      }} animate={{
        scale: 1,
        rotate: 0
      }} transition={{
        duration: 1,
        delay: 0.2,
        type: 'spring'
      }} className="flex justify-center mb-6">
          <motion.div animate={{
          scale: [1, 1.2, 1]
        }} transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut'
        }}>
            <Heart size={48} className="text-[#D4AF37] fill-current" />
          </motion.div>
        </motion.div>

        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 1,
        delay: 0.4
      }}>
          <h2 className="text-sm md:text-base font-sans tracking-[0.3em] uppercase mb-6 text-white/90">
            Cinematic Wedding Videography & Photography
          </h2>
        </motion.div>

        <motion.h1 initial={{
        opacity: 0,
        y: 40
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 1.2,
        delay: 0.6
      }} className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium mb-6 leading-tight">
          <motion.span initial={{
          opacity: 0,
          x: -50
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8,
          delay: 0.8
        }} className="inline-block">
            The Maple Leaf
          </motion.span>
          <br />
          <motion.span initial={{
          opacity: 0,
          x: 50
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8,
          delay: 1
        }} className="italic text-[#FAF8F3] inline-block">
            Ivory Wedding Films
          </motion.span>
        </motion.h1>

        <motion.p initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 1,
        delay: 1.2
      }} className="text-lg md:text-xl font-light max-w-2xl mx-auto mb-10 text-white/90 leading-relaxed">
          "We the team Maple Leaf will capture the best moments of the biggest
          day in your life."
        </motion.p>

        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 1,
        delay: 1.4
      }} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.a href="#films" whileHover={{
          scale: 1.05,
          boxShadow: '0 15px 35px rgba(139, 111, 71, 0.4)',
          backgroundColor: '#7a613d'
        }} whileTap={{
          scale: 0.98
        }} className="group flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#8B6F47] to-[#A0826D] text-white rounded-full shadow-lg transition-all duration-300 min-w-[200px] justify-center">
            <motion.div animate={{
            scale: [1, 1.2, 1]
          }} transition={{
            duration: 1.5,
            repeat: Infinity
          }}>
              <Play size={18} className="fill-current" />
            </motion.div>
            <span>Watch Our Films</span>
          </motion.a>
          <motion.a href="#contact" whileHover={{
          scale: 1.05,
          backgroundColor: 'rgba(255, 255, 255, 1)',
          color: '#8B6F47',
          boxShadow: '0 10px 25px rgba(255, 255, 255, 0.3)'
        }} whileTap={{
          scale: 0.98
        }} className="px-8 py-4 bg-white/10 backdrop-blur-md border-2 border-white text-white rounded-full transition-all duration-300 min-w-[200px] justify-center">
            Book Your Date
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.button onClick={scrollToFilms} initial={{
      opacity: 0
    }} animate={{
      opacity: 1,
      y: [0, 10, 0]
    }} transition={{
      opacity: {
        delay: 2,
        duration: 1
      },
      y: {
        repeat: Infinity,
        duration: 2,
        ease: 'easeInOut'
      }
    }} className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white/80 cursor-pointer hover:text-white transition-colors group">
        <span className="text-xs uppercase tracking-widest mb-2">Discover</span>
        <motion.div animate={{
        y: [0, 5, 0]
      }} transition={{
        duration: 1.5,
        repeat: Infinity
      }}>
          <ChevronDown size={24} className="group-hover:text-[#D4AF37] transition-colors" />
        </motion.div>
      </motion.button>

      {/* Decorative bottom fade */}
      <div className={`absolute bottom-0 left-0 right-0 h-32 z-10 transition-colors duration-500 ${isDark ? 'bg-gradient-to-t from-[#1a1a1a] to-transparent' : 'bg-gradient-to-t from-[#FAF8F3] to-transparent'}`} />
    </section>;
}