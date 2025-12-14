import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
interface ThemeToggleProps {
  isDark: boolean;
  onToggle: () => void;
}
export function ThemeToggle({
  isDark,
  onToggle
}: ThemeToggleProps) {
  return <motion.button onClick={onToggle} whileHover={{
    scale: 1.1
  }} whileTap={{
    scale: 0.95
  }} className={`relative w-14 h-7 rounded-full transition-colors duration-300 ${isDark ? 'bg-[#2C2C2C]' : 'bg-[#8B6F47]'}`} aria-label="Toggle theme">
      <motion.div className="absolute top-1 left-1 w-5 h-5 bg-white rounded-full flex items-center justify-center shadow-md" animate={{
      x: isDark ? 24 : 0
    }} transition={{
      type: 'spring',
      stiffness: 500,
      damping: 30
    }}>
        {isDark ? <Moon size={12} className="text-[#2C2C2C]" /> : <Sun size={12} className="text-[#8B6F47]" />}
      </motion.div>
    </motion.button>;
}