import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navigation } from '../components/Navigation';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { FilmsGrid } from '../components/FilmsGrid';
import { Gallery } from '../components/Gallery';
import { Testimonials } from '../components/Testimonials';
import { Reviews } from '../components/Reviews';
import { Packages } from '../components/Packages';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

// Updated Canvas Fireworks: Now with transparent fade (no black overlay)
const CanvasFireworks: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Helper functions
    const PI2 = Math.PI * 2;
    const random = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
    const timestamp = () => new Date().getTime();

    // Classes
    class Birthday {
      fireworks: Firework[] = [];
      counter: number = 0;
      width: number = 0;
      height: number = 0;
      spawnA: number = 0;
      spawnB: number = 0;
      spawnC: number = 0;
      spawnD: number = 0;

      resize() {
        this.width = canvas.width = window.innerWidth;
        const center = this.width / 2 | 0;
        this.spawnA = center - center / 4 | 0;
        this.spawnB = center + center / 4 | 0;

        this.height = canvas.height = window.innerHeight;
        this.spawnC = this.height * 0.1;
        this.spawnD = this.height * 0.5;
      }

      update(delta: number) {
        ctx.globalCompositeOperation = 'destination-out';
        ctx.fillStyle = `rgba(0, 0, 0, ${0.08})`; 
        ctx.fillRect(0, 0, this.width, this.height);

        ctx.globalCompositeOperation = 'lighter';
        this.fireworks.forEach(firework => firework.update(delta));

        this.counter += delta * 3; 
        if (this.counter >= 1) {
          this.fireworks.push(
            new Firework(
              random(this.spawnA, this.spawnB),
              this.height,
              random(0, this.width),
              random(this.spawnC, this.spawnD),
              random(0, 360),
              random(30, 110)
            )
          );
          this.counter = 0;
        }

        if (this.fireworks.length > 1000) {
          this.fireworks = this.fireworks.filter(f => !f.dead);
        }
      }
    }

    class Firework {
      dead = false;
      madeChilds = false;
      history: { x: number; y: number }[] = [];

      constructor(
        public x: number,
        public y: number,
        public targetX: number,
        public targetY: number,
        public shade: number,
        public offsprings: number
      ) {}

      update(delta: number) {
        if (this.dead) return;

        const xDiff = this.targetX - this.x;
        const yDiff = this.targetY - this.y;

        if (Math.abs(xDiff) > 3 || Math.abs(yDiff) > 3) {
          this.x += xDiff * 2 * delta;
          this.y += yDiff * 2 * delta;

          this.history.push({ x: this.x, y: this.y });
          if (this.history.length > 20) this.history.shift();
        } else {
          if (this.offsprings && !this.madeChilds) {
            const babies = this.offsprings / 2;
            for (let i = 0; i < babies; i++) {
              const targetX = this.x + this.offsprings * Math.cos(PI2 * i / babies) | 0;
              const targetY = this.y + this.offsprings * Math.sin(PI2 * i / babies) | 0;
              birthday.fireworks.push(new Firework(this.x, this.y, targetX, targetY, this.shade, 0));
            }
          }
          this.madeChilds = true;
          this.history.shift();
        }

        if (this.history.length === 0) {
          this.dead = true;
        } else if (this.offsprings) {
          for (let i = 0; i < this.history.length; i++) {
            const point = this.history[i];
            ctx.beginPath();
            ctx.fillStyle = `hsl(${this.shade}, 100%, ${i * 3}%)`; 
            ctx.arc(point.x, point.y, 1.5, 0, PI2, false); 
            ctx.fill();
          }
        } else {
          ctx.beginPath();
          ctx.fillStyle = `hsl(${this.shade}, 100%, 50%)`;
          ctx.arc(this.x, this.y, 1.5, 0, PI2, false);
          ctx.fill();
        }
      }
    }

    const birthday = new Birthday();
    birthday.resize();

    let then = timestamp();

    const loop = () => {
      requestAnimationFrame(loop);
      const now = timestamp();
      const delta = (now - then) / 1000;
      then = now;
      birthday.update(delta);
    };
    loop();

    const handleResize = () => birthday.resize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 w-full h-full pointer-events-none" />;
};

// Manually Enabled Avurudu Greeting
const AvuruduGreeting: React.FC = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="fixed inset-0 z-50 pointer-events-none flex items-center justify-center bg-black/30"
        >
          <motion.img
            src="/Photos/Awrudu.jpg"
            alt="සුබ අලුත් අවුරුද්දක් වේවා! | புத்தாண்டு வாழ்த்துக்கள் | Happy Sinhala & Tamil New Year"
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.95 }}
            exit={{ scale: 0.85, opacity: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export function LandingPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    setIsDark(prev => {
      const newVal = !prev;
      if (newVal) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
      return newVal;
    });
  };

  return (
    <>
      {/* Loading Screen */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className={`fixed inset-0 z-[100] flex items-center justify-center ${isDark ? 'bg-black' : 'bg-[#FAF8F3]'}`}
          >
            <motion.div className="text-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                className={`w-16 h-16 border-4 border-t-transparent rounded-full mx-auto mb-6 ${isDark ? 'border-[#D4AF37]' : 'border-[#8B6F47]'}`}
              />
              <h2 className={`font-serif text-2xl ${isDark ? 'text-[#D4AF37]' : 'text-[#8B6F47]'}`}>
                The Maple Leaf
              </h2>
              <p className={`text-sm mt-2 tracking-widest ${isDark ? 'text-[#D4AF37]/60' : 'text-gray-500'}`}>
                Loading your story...
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Seasonal Effects Layer */}
      <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">

        {/* Christmas Snowfall Effect (Active) */}
        <>
          <div className="snowflake">❄</div>
          <div className="snowflake">❅</div>
          <div className="snowflake">❆</div>
          <div className="snowflake">❄</div>
          <div className="snowflake">❅</div>
          <div className="snowflake">❆</div>
          <div className="snowflake">❄</div>
          <div className="snowflake">❅</div>
          <div className="snowflake">❆</div>
          <div className="snowflake">❄</div>
          <div className="snowflake">❅</div>
          <div className="snowflake">❆</div>
          <div className="snowflake">❄</div>
          <div className="snowflake">❅</div>
          <div className="snowflake">❆</div>
        </>

        {/* Transparent Fireworks (No black background) */}
        {/* <CanvasFireworks /> */}

      </div>

      {/* Avurudu Greeting (Enabled) */}
      {/* <AvuruduGreeting /> */}

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className={`min-h-screen transition-colors duration-500 ${isDark ? 'bg-black' : 'bg-[#FAF8F3]'}`}
      >
        <Navigation isDark={isDark} onThemeToggle={toggleTheme} />
        <main>
          <Hero isDark={isDark} />
          <About isDark={isDark} />
          <FilmsGrid isDark={isDark} />
          <Gallery isDark={isDark} />
          <Testimonials isDark={isDark} />
          <Reviews isDark={isDark} />
          <Packages isDark={isDark} />
          <Contact isDark={isDark} />
        </main>
        <Footer isDark={isDark} />

        {/* Floating WhatsApp Button */}
        <motion.a
          href="https://wa.me/94772745982"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 2, type: 'spring', stiffness: 260, damping: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg animate-pulse-glow"
          aria-label="Chat on WhatsApp"
        >
          <svg viewBox="0 0 24 24" width="28" height="28" className="text-white">
            <path fill="currentColor" d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          </svg>
        </motion.a>
      </motion.div>

      {/* Global Styles: Snowflakes + Hidden Scrollbar */}
      <style jsx global>{`
        .snowflake {
          color: #fff;
          font-size: 1.6em;
          position: absolute;
          top: -15%;
          animation: snowfall linear infinite;
          user-select: none;
          opacity: 0.9;
          text-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
        }

        @keyframes snowfall {
          0% { transform: translateY(0) translateX(0) rotate(0deg); }
          100% { transform: translateY(110vh) translateX(100px) rotate(360deg); }
        }

        .snowflake:nth-child(1) { left: 10%; animation-duration: 15s; animation-delay: 0s; }
        .snowflake:nth-child(2) { left: 20%; animation-duration: 18s; animation-delay: 2s; font-size: 2.4em !important; }
        .snowflake:nth-child(3) { left: 30%; animation-duration: 12s; animation-delay: 4s; }
        .snowflake:nth-child(4) { left: 40%; animation-duration: 20s; animation-delay: 1s; font-size: 2em !important; }
        .snowflake:nth-child(5) { left: 50%; animation-duration: 16s; animation-delay: 6s; }
        .snowflake:nth-child(6) { left: 60%; animation-duration: 14s; animation-delay: 3s; font-size: 2.6em !important; }
        .snowflake:nth-child(7) { left: 70%; animation-duration: 17s; animation-delay: 5s; }
        .snowflake:nth-child(8) { left: 80%; animation-duration: 13s; animation-delay: 0s; font-size: 1.9em !important; }
        .snowflake:nth-child(9) { left: 90%; animation-duration: 19s; animation-delay: 8s; }
        .snowflake:nth-child(10) { left: 15%; animation-duration: 14s; animation-delay: 7s; font-size: 2.2em !important; }
        .snowflake:nth-child(11) { left: 45%; animation-duration: 16s; animation-delay: 2s; }
        .snowflake:nth-child(12) { left: 65%; animation-duration: 15s; animation-delay: 4s; font-size: 2.3em !important; }
        .snowflake:nth-child(13) { left: 25%; animation-duration: 20s; animation-delay: 9s; }
        .snowflake:nth-child(14) { left: 55%; animation-duration: 13s; animation-delay: 1s; }
        .snowflake:nth-child(15) { left: 85%; animation-duration: 18s; animation-delay: 5s; }

        /* Hide Scrollbar but Keep Scrolling Functionality */
        ::-webkit-scrollbar {
          display: none; /* Chrome, Safari, Edge */
        }

        html, body {
          scrollbar-width: none; /* Firefox */
          -ms-overflow-style: none; /* IE/Edge */
          overflow-y: scroll; /* Force scrollable */
          overflow-x: hidden;
        }

        html {
          scroll-behavior: smooth; /* Keep smooth scrolling */
        }
      `}</style>
    </>
  );
}