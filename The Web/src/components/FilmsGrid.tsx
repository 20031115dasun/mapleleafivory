import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X } from 'lucide-react';

interface Film {
  id: number;
  couple: string;
  image: string;
  videoId?: string; 
}

const films: Film[] = [
  { id: 1, couple: 'Chloe & Rashan', image: '/Photos/20.png', videoId: '0PfGHc3zqxw' },
  { id: 2, couple: 'Kalana & Pavani',   image: '/Photos/27.png', videoId: '6jFVRIRH7RQ' },
  { id: 3, couple: 'Dilini & Ravindu',  image: '/Photos/22.png', videoId: 'WUrcld339XU' },
  { id: 4, couple: 'Udani & Gihan',  image: '/Photos/32.png', videoId: 'aXzXaaHGKos' },
  { id: 5, couple: 'Jithendri & Dilan',  image: '/Photos/23.png', videoId: 'zPx26bPJhck' },
  { id: 6, couple: 'Neyomi & Kalpa', image: '/Photos/29.png', videoId: 'PA_YQqodQ90' },
  { id: 7, couple: 'Hiruni & Navindu', image: '/Photos/25.png' , videoId: ''},
  { id: 8, couple: 'Hiruni & Navindu Teaser',  image: '/Photos/30.png', videoId: 'ZkDeFZQEG9I' },
  { id: 9, couple: 'Sonaya & Sanjeeve', image: '/Photos/26.png' ,videoId: 'otpS7jiNhxs'},
  { id: 10, couple: 'Sonaya & Sanjeeve Teaser',  image: '/Photos/29.png' ,videoId: 'iT9z7X68jiU'},
  { id: 11, couple: 'Akshara & Heyshan',  image: '/Photos/21.png', videoId: 'M7tFC-Q67HI' },
  { id: 12, couple: 'Stephnie & Jayendra',  image: '/Photos/31.png', videoId: 'oxQD-iBylzU' },
];

interface FilmsGridProps {
  isDark?: boolean;
}

export function FilmsGrid({ isDark = false }: FilmsGridProps) {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [selectedVideoId, setSelectedVideoId] = useState<string | null>(null);

  return (
    <>
      <section
        id="films"
        className={`py-20 md:py-32 transition-colors duration-500 ${isDark ? 'bg-black' : 'bg-white'}`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className={`font-sans text-sm tracking-[0.2em] uppercase block mb-4 ${isDark ? 'text-[#D4AF37]' : 'text-[#8B6F47]'}`}>
              Our Portfolio
            </span>
            <h2 className={`font-serif text-4xl md:text-5xl mb-6 ${isDark ? 'text-[#D4AF37]' : 'text-[#2C2C2C]'}`}>
              Featured Wedding Films
            </h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className={`h-1 mx-auto rounded-full opacity-30 ${isDark ? 'bg-[#D4AF37]' : 'bg-[#8B6F47]'}`}
            />
          </motion.div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {films.map((film, index) => (
              <motion.div
                key={film.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
                onHoverStart={() => setHoveredId(film.id)}
                onHoverEnd={() => setHoveredId(null)}
                className="group cursor-pointer"
              >
                <motion.div
                  className={`relative aspect-video overflow-hidden rounded-2xl mb-4 ${isDark ? 'bg-[#1a1a1a]' : 'bg-gray-100'}`}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => film.videoId && setSelectedVideoId(film.videoId)}
                >
                  <motion.img
                    src={film.image}
                    alt={film.couple}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.6 }}
                  />

                  <motion.div
                    className="absolute inset-0 bg-black/20"
                    animate={{
                      backgroundColor: hoveredId === film.id ? 'rgba(0,0,0,0.55)' : 'rgba(0,0,0,0.2)',
                    }}
                  />

                  {/* Play Button – only if video exists */}
                  {film.videoId && (
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <motion.div
                        className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/40 shadow-2xl"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        animate={{
                          scale: hoveredId === film.id ? [1, 1.25, 1] : 1,
                        }}
                        transition={{ duration: 0.6, repeat: hoveredId === film.id ? Infinity : 0 }}
                      >
                        <Play size={36} className="fill-white text-white ml-2" />
                      </motion.div>
                    </div>
                  )}

                  {/* Shimmer effect */}
                  <AnimatePresence>
                    {hoveredId === film.id && (
                      <motion.div
                        initial={{ x: '-100%' }}
                        animate={{ x: '100%' }}
                        exit={{ x: '100%' }}
                        transition={{ duration: 0.9, ease: 'easeInOut' }}
                        className={`absolute inset-0 bg-gradient-to-r from-transparent ${isDark ? 'via-[#D4AF37]/30' : 'via-white/30'} to-transparent`}
                      />
                    )}
                  </AnimatePresence>
                </motion.div>

                <motion.div
                  className="text-center"
                  animate={{ y: hoveredId === film.id ? -6 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className={`font-serif text-xl md:text-2xl transition-colors duration-300 ${isDark ? 'text-[#D4AF37] group-hover:text-[#E5C158]' : 'text-[#2C2C2C] group-hover:text-[#8B6F47]'}`}>
                    {film.couple}
                  </h3>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Optional CTA space */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-20 text-center"
          >
            {/* You can add a button or text here if needed */}
          </motion.div>
        </div>
      </section>

      {/* === VIDEO MODAL === */}
      <AnimatePresence>
        {selectedVideoId && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedVideoId(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl"
            >
              <button
                onClick={() => setSelectedVideoId(null)}
                className="absolute top-4 right-4 z-10 w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center hover:bg-black/70 transition"
              >
                <X size={28} className="text-white" />
              </button>

              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${selectedVideoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
                title="Wedding Film"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}