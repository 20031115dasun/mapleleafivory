import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, X } from 'lucide-react';

const photos = [
  { id: 1, src: '/Photos/1.jpg' },
  { id: 2, src: '/Photos/10.jpg' },
  { id: 3, src: '/Photos/4.jpg' },
  { id: 4, src: '/Photos/3.jpg' },
  { id: 5, src: '/Photos/5.jpg' },
  { id: 6, src: '/Photos/2.jpg' },
  { id: 7, src: '/Photos/7.jpg' },
  { id: 8, src: '/Photos/8.jpg' },
  { id: 9, src: '/Photos/6.jpg' },
  { id: 10, src: '/Photos/9.jpg' },
  // Add more photos as needed
];

export function Gallery({ isDark = false }: { isDark?: boolean }) {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  const getHeightClass = (index: number) => {
    const pattern = [1, 2, 3, 2, 1];
    const pos = pattern[index % 5];

    if (pos === 3) return 'h-72 md:h-96 lg:h-[520px] xl:h-[560px]';
    if (pos === 2) return 'h-64 md:h-80 lg:h-96 xl:h-[440px]';
    return 'h-56 md:h-72 lg:h-80 xl:h-96';
  };

  return (
    <>
      {/* Added id="gallery" here for navigation linking + optional top offset for fixed nav */}
      <section 
        id="gallery" 
        className={`py-20 md:py-32 ${isDark ? 'bg-black' : 'bg-[#FAF8F3]'} pt-32 md:pt-40`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`font-bold text-6xl md:text-8xl lg:text-9xl tracking-tighter text-center mb-20 ${
              isDark ? 'text-white' : 'text-[#2C2C2C]'
            }`}
          >
            GALLERY
          </motion.h2>

          <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 gap-4 md:gap-6 xl:gap-8">
            {photos.map((photo, index) => (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.08 }}
                className={`relative group overflow-hidden rounded-2xl shadow-2xl cursor-pointer break-inside-avoid mb-4 md:mb-6 ${getHeightClass(index)}`}
                onClick={() => setSelectedPhoto(photo.src)}
              >
                <img
                  src={photo.src}
                  alt={`Gallery photo ${photo.id}`}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-700 flex items-center justify-center">
                  <Eye
                    className="opacity-0 group-hover:opacity-100 text-white scale-50 group-hover:scale-100 transition-all duration-700"
                    size={48}
                    strokeWidth={2}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox remains unchanged */}
      {selectedPhoto && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedPhoto(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4"
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedPhoto(null);
            }}
            className="absolute top-6 right-6 md:top-10 md:right-10 text-white hover:text-[#D4AF37] transition z-10"
          >
            <X size={56} strokeWidth={2} />
          </button>

          <motion.img
            src={selectedPhoto}
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.7, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 120, damping: 20 }}
            className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl"
          />
        </motion.div>
      )}
    </>
  );
}