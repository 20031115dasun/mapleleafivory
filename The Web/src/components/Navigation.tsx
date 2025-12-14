import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeToggle } from './ThemeToggle';

interface NavigationProps {
  isDark: boolean;
  onThemeToggle: () => void;
}

export function Navigation({ isDark, onThemeToggle }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Films', href: '#films' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Packages', href: '#packages' },
    { name: 'Contact', href: '#contact' },
  ];


  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'py-3' : 'py-6'
      }`}
    >
      {/* Blurred Glass Background — appears only when scrolled */}
      {isScrolled && (
        <div
          className="absolute inset-0 -z-10 bg-white/10 backdrop-blur-xl border-b border-white/20"
          style={{
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
          }}
        />
      )}

      <div className="w-full px-4 md:px-8 flex justify-between items-center">

        {/* Logo */}
        <motion.a
          href="#"
          className="relative z-50 flex-shrink-0 
                    pl-4 md:pl-8 lg:pl-12 xl:pl-16    
                    cursor-pointer"
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          <img
            src="/Photos/croppedLogo.png"
            alt="The Maple Leaf Ivory Logo"
            className="h-20 w-auto md:h-20 lg:h-22 xl:h-30 object-contain drop-shadow-2xl transition-all duration-500"
            style={{
              filter: isScrolled
                ? 'brightness(0) saturate(100%) invert(81%) sepia(42%) saturate(900%) hue-rotate(360deg) brightness(105%) contrast(108%)'
                : 'none',
            }}
          />
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center 
                space-x-6 md:space-x-7 lg:space-x-9 xl:space-x-11 
                pr-4 md:pr-8 lg:pr-12 xl:pr-16">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.08 }}
              className={`relative text-sm font-medium tracking-wide pb-2 cursor-pointer transition-colors duration-300 ${
                isScrolled ? 'text-[#D4AF37]' : 'text-white'
              }`}
            >
              {link.name}

              {/* Gold Underline on Hover */}
              <motion.div
                className="absolute bottom-0 left-0 w-full h-0.5 bg-[#D4AF37] origin-left"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                exit={{ scaleX: 0 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
              />
            </motion.a>
          ))}

          <ThemeToggle isDark={isDark} onToggle={onThemeToggle} />

        </div>

        {/* Mobile Menu Button */}
        <motion.button
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          whileTap={{ scale: 0.9 }}
          className={`md:hidden z-50 p-2 cursor-pointer transition-colors ${
            isScrolled ? 'text-[#D4AF37]' : 'text-white drop-shadow-lg'
          }`}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </motion.button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-0 z-40 flex flex-col justify-center items-center bg-black/95 backdrop-blur-2xl"
            >
              <div className="flex flex-col space-y-10 text-center">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    className="font-serif text-4xl text-[#D4AF37] hover:text-[#E5C158] cursor-pointer"
                  >
                    {link.name}
                  </motion.a>
                ))}

                <div className="mt-8">
                  <ThemeToggle isDark={isDark} onToggle={onThemeToggle} />
                </div>

                <motion.a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-12 px-14 py-5 rounded-full bg-[#D4AF37] text-black font-semibold text-lg shadow-2xl cursor-pointer"
                >
                  Book Your Date
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}