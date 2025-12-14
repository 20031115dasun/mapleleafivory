import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles, MessageCircle } from 'lucide-react';

const packages = [
  { name: 'BLISS', price: '80,000', description: 'Perfect for capturing your wedding essentials', features: ['10 Hours Coverage', '4 Minutes Wedding Trailer', '2 Cinematographers', 'Professional Colour Grading', '1080P Full HD Wedding Video', 'Digital Download'], highlight: false, category: 'Wedding' },
  { name: 'CELESTE', price: '100,000', description: 'Complete wedding day storytelling', features: ['12 Hours Coverage', '4 Minutes Wedding Trailer', '2 Cinematographers', 'Getting Ready Shoot', '1 Cinematic Reel', 'Pro Audio Recording', 'Professional Colour Grading', '45-90 Minutes Full Wedding Video', '1080P Full HD Video', 'Final Video on Flash Drive'], highlight: false, category: 'Wedding' },
  { name: 'IVORY', price: '160,000', description: 'Our signature premium experience', features: ['12 Hours Coverage', '4 Minutes Wedding Trailer', '3 Cinematographers', 'Getting Ready Shoot', '2 Cinematic Reels', 'Same Day Social Media Reel', 'Professional Colour Grading', 'Pro Audio Recording', 'Aerial Cinematography', '45-90 Minutes Full Wedding Video', '1080P Full HD Video', 'Customized Wooden USB Drive'], highlight: true, category: 'Wedding' },
  { name: 'ELYSIAN', price: '60,000', description: 'Cinematic highlight package 01', features: ['6-10 Min Cinematic Highlight HD Video', '2 Cinematographers', '12 Hour Coverage', 'Pro Audio Recording', 'Professional Colour Grading', '30 Second Teaser', '1 Cinematic Reel'], highlight: false, category: 'Highlight' },
  { name: 'AMOUR', price: '80,000', description: 'Enhanced highlight package 02', features: ['6-10 Min Cinematic Highlight HD Video', '2 Cinematographers', '12 Hour Coverage', 'Pro Audio Recording', 'Professional Colour Grading', '30 Second Teaser', '3 Cinematic Reels', 'Final Video on Flash Drive'], highlight: false, category: 'Highlight' },
  { name: 'CHAMPAGNE', price: '60,000', description: 'Beautiful homecoming celebration', features: ['10 Hour Coverage', '4 Min Homecoming Trailer Video', '2 Cinematographers', '30-45 Minutes Full Video', '1080P Full HD Video', 'Professional Colour Grading', '1 Cinematic Reel', 'Final Video on Flash Drive'], highlight: false, category: 'Homecoming' },
  { name: 'VELVET', price: '45,000', description: 'Premium highlight experience', features: ['5-8 Min Cinematic Highlight HD Video', '2 Cinematographers', '10 Hour Coverage', 'Professional Colour Grading', '1 Cinematic Reel', 'Digital Download'], highlight: false, category: 'Highlight' },
  { name: 'VELOUR', price: '45,000', description: 'Elegant highlight package', features: ['6 Hour Coverage', '4-7 Min Cinematic Highlight HD Video', '2 Cinematographers', 'Professional Colour Grading', '1 Cinematic Reel', 'Digital Download'], highlight: false, category: 'Highlight' },
  { name: 'SERENE', price: '60,000', description: 'Capture your engagement story', features: ['6 Hour Coverage', '4 Min Engagement Trailer Video', '2 Cinematographers', '30 Minutes Full Video', '1080P Full HD Video', 'Professional Colour Grading', '1 Cinematic Reel', 'Final Video on Flash Drive'], highlight: false, category: 'Engagement' },
  { name: 'SABLE', price: '50,000', description: 'Intimate pre-shoot moments', features: ['3-6 Hour Coverage', '3-5 Min Pre Shoot Video', '2 Cinematographers', '1080P Full HD Video', 'Professional Colour Grading', '1 Cinematic Reel', 'Digital Download'], highlight: false, category: 'Pre-Shoot' },
  { name: 'OPAL', price: '70,000', description: 'Extended pre-shoot experience', features: ['10 Hour Coverage', '3-5 Min Pre Shoot Video', '2 Cinematographers', '1080P Full HD Video', 'Professional Colour Grading', '2 Cinematic Reels', 'Digital Download'], highlight: false, category: 'Pre-Shoot' },
];

interface PackagesProps {
  isDark?: boolean;
}

export function Packages({ isDark = false }: PackagesProps) {
  // State to track selected contact per package card
  const [selectedContacts, setSelectedContacts] = useState<Record<string, 'wageesha' | 'ravindu'>>({});

  const contacts = {
    wageesha: { name: 'Wageesha Ekanayaka', number: '94772745982' },
    ravindu: { name: 'Ravindu Gimal', number: '94772760510' },
  };

  const getWhatsAppLink = (
    packageName: string,
    price: string,
    features: string[],
    contactKey: 'wageesha' | 'ravindu'
  ) => {
    const featureList = features.map((feature, index) => `${index + 1}. ${feature}`).join('\n');
    const contact = contacts[contactKey];

    const message = `Hello ${contact.name}! 👋

I'm very interested in booking the *${packageName}* package (LKR ${price}).

This package includes:
${featureList}

It looks perfect for my event! Could you please let me know your availability for my preferred dates?

Please let me know if the following dates work for you:
• [Your Event Date Here]
• [Backup Date, if any]

Looking forward to working with you! Thank you ✨`;

    return `https://wa.me/${contact.number}?text=${encodeURIComponent(message)}`;
  };

  const handleContactChange = (packageName: string, value: 'wageesha' | 'ravindu') => {
    setSelectedContacts(prev => ({ ...prev, [packageName]: value }));
  };

  // Default to Wageesha if not selected yet
  const getSelectedContact = (packageName: string): 'wageesha' | 'ravindu' =>
    selectedContacts[packageName] || 'wageesha';

  return (
    <section id="packages" className={`py-20 md:py-32 relative overflow-hidden ${isDark ? 'bg-black' : 'bg-[#FAF8F3]'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className={`font-sans text-sm tracking-[0.3em] uppercase block mb-4 ${isDark ? 'text-[#D4AF37]' : 'text-[#8B6F47]'}`}>
            Investment
          </span>
          <h2 className={`font-serif text-5xl md:text-6xl mb-6 ${isDark ? 'text-[#D4AF37]' : 'text-[#2C2C2C]'}`}>
            Wedding Collections
          </h2>
          <p className={`max-w-4xl mx-auto text-lg font-light leading-relaxed ${isDark ? 'text-[#D4AF37]/70' : 'text-gray-600'}`}>
            Your wedding film is more than just a video; it's a timeless keepsake. The right videographer captures emotions authentically,
            anticipates special moments and ensures you feel comfortable. With the right choice, you can relax and trust that every meaningful
            detail will be beautifully preserved.
          </p>
        </motion.div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => {
            const currentContact = getSelectedContact(pkg.name);

            return (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className="relative group"
              >
                {/* Shining Border Effect on Hover */}
                <div className="absolute -inset-1 opacity-0 group-hover:opacity-100 transition duration-700 pointer-events-none">
                  <div
                    className="absolute inset-0 rounded-[32px] bg-gradient-conic from-[#D4AF37] via-[#FAF8F3] to-[#A0826D] animate-shine"
                    style={{
                      backgroundSize: '200% 200%',
                      filter: 'blur(12px)',
                    }}
                  />
                  <div
                    className="absolute inset-0 rounded-[32px] bg-gradient-conic from-[#D4AF37] via-transparent to-[#A0826D] animate-shine-slow"
                    style={{
                      backgroundSize: '300% 300%',
                    }}
                  />
                </div>

                {/* Main Card */}
                <motion.div
                  whileHover={{ y: -20, scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className={`
                    relative rounded-[32px] overflow-hidden
                    bg-white/90 backdrop-blur-xl
                    border-2 border-white/60 shadow-2xl
                    ${pkg.highlight ? 'ring-4 ring-[#8B6F47]/30' : ''}
                    transition-all duration-700
                    h-full
                  `}
                  style={{
                    boxShadow: '0 20px 40px rgba(0,0,0,0.08), 0 8px 20px rgba(139,111,71,0.1)',
                  }}
                >
                  {/* MOST POPULAR BADGE */}
                  {pkg.highlight && (
                    <motion.div
                      initial={{ y: -20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                      className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20
                        px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest
                        bg-gradient-to-r from-[#8B6F47] to-[#A0826D] text-white
                        shadow-2xl flex items-center gap-1.5"
                      style={{
                        boxShadow: '0 12px 28px rgba(139, 111, 71, 0.35), 0 6px 12px rgba(0,0,0,0.2)',
                      }}
                    >
                      <Sparkles size={14} />
                      Most Popular
                    </motion.div>
                  )}

                  <div className="p-10 pt-20 text-center relative z-10">
                    {/* Category Tab */}
                    <div className="inline-block mb-10">
                      <motion.div
                        whileHover={{ scale: 1.08, y: -4 }}
                        transition={{ type: "spring", stiffness: 400 }}
                        className="px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest
                          bg-white/95 backdrop-blur-2xl border border-white/60
                          text-[#8B6F47] shadow-xl"
                        style={{
                          boxShadow: '0 12px 28px rgba(139, 111, 71, 0.25), inset 0 4px 12px rgba(255,255,255,0.6)',
                        }}
                      >
                        {pkg.category}
                      </motion.div>
                    </div>

                    <h3 className="font-serif text-4xl mb-4 text-[#2C2C2C]">
                      {pkg.name}
                    </h3>

                    <div className="mb-6">
                      <span className="text-5xl font-serif text-[#8B6F47]">
                        LKR {pkg.price}
                      </span>
                      <span className="block text-sm text-gray-500 mt-1">/ package</span>
                    </div>

                    <p className="text-sm text-gray-600 mb-10 font-light leading-relaxed">
                      {pkg.description}
                    </p>

                    <ul className="space-y-4 mb-12 text-left">
                      {pkg.features.map((feature, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.05 }}
                          className="flex items-start gap-4 text-sm text-gray-700"
                        >
                          <Check size={20} className="mt-0.5 shrink-0 text-[#8B6F47]" />
                          <span>{feature}</span>
                        </motion.li>
                      ))}
                    </ul>

                    {/* Contact Person Selector */}
                    <div className="mb-6">
                      <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">
                        Send Inquiry To
                      </label>
                      <select
                        value={currentContact}
                        onChange={(e) => handleContactChange(pkg.name, e.target.value as 'wageesha' | 'ravindu')}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#8B6F47] focus:outline-none text-gray-700 bg-white"
                      >
                        <option value="wageesha">Wageesha Ekanayaka (Primary)</option>
                        <option value="ravindu">Ravindu Gimal (Alternate)</option>
                      </select>
                    </div>

                    {/* CTA Button */}
                    <motion.a
                      href={getWhatsAppLink(pkg.name, pkg.price, pkg.features, currentContact)}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.97 }}
                      className={`w-full py-4 rounded-xl font-semibold tracking-wide flex items-center justify-center gap-3 transition-all duration-300 shadow-lg
                        ${pkg.highlight
                          ? 'bg-gradient-to-r from-[#8B6F47] to-[#A0826D] text-white'
                          : 'bg-white border-2 border-[#8B6F47] text-[#8B6F47] hover:bg-[#8B6F47] hover:text-white'
                        }`}
                    >
                      <MessageCircle size={20} />
                      Inquire with {currentContact === 'wageesha' ? 'Wageesha' : 'Ravindu'}
                    </motion.a>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Keyframes for shine animation */}
      <style>{`
        @keyframes shine {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }

        @keyframes shine-slow {
          0% { background-position: 0% 0%; }
          100% { background-position: 300% 300%; }
        }

        .bg-gradient-conic {
          background: conic-gradient(
            from 0deg,
            #D4AF37 0deg,
            #FAF8F3 60deg,
            transparent 90deg,
            #A0826D 180deg,
            #D4AF37 360deg
          );
        }

        .animate-shine {
          animation: shine 4s linear infinite;
        }

        .animate-shine-slow {
          animation: shine-slow 8s linear infinite;
        }
      `}</style>
    </section>
  );
}