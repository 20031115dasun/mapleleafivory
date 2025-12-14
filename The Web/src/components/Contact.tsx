import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Instagram, Facebook, Send } from 'lucide-react';

// Packages data
const packages = [
  { name: 'BLISS', price: '80,000', features: ['10 Hours Coverage', '4 Minutes Wedding Trailer', '2 Cinematographers', 'Professional Colour Grading', '1080P Full HD Wedding Video', 'Digital Download'] },
  { name: 'CELESTE', price: '100,000', features: ['12 Hours Coverage', '4 Minutes Wedding Trailer', '2 Cinematographers', 'Getting Ready Shoot', '1 Cinematic Reel', 'Pro Audio Recording', 'Professional Colour Grading', '45-90 Minutes Full Wedding Video', '1080P Full HD Video', 'Final Video on Flash Drive'] },
  { name: 'IVORY', price: '160,000', features: ['12 Hours Coverage', '4 Minutes Wedding Trailer', '3 Cinematographers', 'Getting Ready Shoot', '2 Cinematic Reels', 'Same Day Social Media Reel', 'Professional Colour Grading', 'Pro Audio Recording', 'Aerial Cinematography', '45-90 Minutes Full Wedding Video', '1080P Full HD Video', 'Customized Wooden USB Drive'], highlight: true },
  { name: 'ELYSIAN', price: '60,000', features: ['6-10 Min Cinematic Highlight HD Video', '2 Cinematographers', '12 Hour Coverage', 'Pro Audio Recording', 'Professional Colour Grading', '30 Second Teaser', '1 Cinematic Reel'] },
  { name: 'AMOUR', price: '80,000', features: ['6-10 Min Cinematic Highlight HD Video', '2 Cinematographers', '12 Hour Coverage', 'Pro Audio Recording', 'Professional Colour Grading', '30 Second Teaser', '3 Cinematic Reels', 'Final Video on Flash Drive'] },
  { name: 'CHAMPAGNE', price: '60,000', features: ['10 Hour Coverage', '4 Min Homecoming Trailer Video', '2 Cinematographers', '30-45 Minutes Full Video', '1080P Full HD Video', 'Professional Colour Grading', '1 Cinematic Reel', 'Final Video on Flash Drive'] },
  { name: 'VELVET', price: '45,000', features: ['5-8 Min Cinematic Highlight HD Video', '2 Cinematographers', '10 Hour Coverage', 'Professional Colour Grading', '1 Cinematic Reel', 'Digital Download'] },
  { name: 'VELOUR', price: '45,000', features: ['6 Hour Coverage', '4-7 Min Cinematic Highlight HD Video', '2 Cinematographers', 'Professional Colour Grading', '1 Cinematic Reel', 'Digital Download'] },
  { name: 'SERENE', price: '60,000', features: ['6 Hour Coverage', '4 Min Engagement Trailer Video', '2 Cinematographers', '30 Minutes Full Video', '1080P Full HD Video', 'Professional Colour Grading', '1 Cinematic Reel', 'Final Video on Flash Drive'] },
  { name: 'SABLE', price: '50,000', features: ['3-6 Hour Coverage', '3-5 Min Pre Shoot Video', '2 Cinematographers', '1080P Full HD Video', 'Professional Colour Grading', '1 Cinematic Reel', 'Digital Download'] },
  { name: 'OPAL', price: '70,000', features: ['10 Hour Coverage', '3-5 Min Pre Shoot Video', '2 Cinematographers', '1080P Full HD Video', 'Professional Colour Grading', '2 Cinematic Reels', 'Digital Download'] },
];

interface ContactProps {
  isDark: boolean;
}

export function Contact({ isDark }: ContactProps) {
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [location, setLocation] = useState('');
  const [message, setMessage] = useState('');
  const [selectedPackage, setSelectedPackage] = useState('');
  const [selectedContact, setSelectedContact] = useState<'wageesha' | 'ravindu'>('wageesha');

  const contacts = {
    wageesha: { name: 'Wageesha Ekanayaka', number: '94772745982' },
    ravindu: { name: 'Ravindu Gimal', number: '94772760510' },
  };

  const handleSendInquiry = () => {
    if (!name || !phone || !eventDate) {
      alert('Please fill in your Name, Phone, and Event Date at minimum.');
      return;
    }

    const selectedPkg = packages.find(pkg => pkg.name === selectedPackage);

    let packageSection = '';
    if (selectedPkg) {
      const featureList = selectedPkg.features.map((f, i) => `${i + 1}. ${f}`).join('\n');
      packageSection = `\nI'm interested in the *${selectedPkg.name}* package (LKR ${selectedPkg.price}).

Package includes:
${featureList}\n`;
    }

    const contactPerson = contacts[selectedContact];

    const whatsappMessage = `Hello ${contactPerson.name}! 👋

My name is *${name}*.
Contact: ${phone}${email ? ` | ${email}` : ''}
Event Date: ${eventDate}
Event Location: ${location || 'To be confirmed'}

${packageSection}Message:
${message || 'Looking forward to discussing my wedding videography needs!'}

Thank you! Excited to hear from you ✨`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/${contactPerson.number}?text=${encodedMessage}`, '_blank');
  };

  return (
    <section
      id="contact"
      className={`py-20 md:py-32 transition-colors duration-700 ${
        isDark ? 'bg-black' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span
              className={`font-sans text-sm tracking-[0.2em] uppercase block mb-4 ${
                isDark ? 'text-[#D4AF37]' : 'text-[#8B6F47]'
              }`}
            >
              Get in Touch
            </span>
            <h2 className={`font-serif text-4xl md:text-5xl mb-8 ${isDark ? 'text-white' : 'text-[#2C2C2C]'}`}>
              Let's Create Magic <br /> Together
            </h2>
            <p className={`font-light mb-10 leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              We take on a limited number of weddings each year to ensure we can
              give every couple our full creative attention. Please fill out the
              form or contact us directly to check availability for your date.
            </p>

            <div className="space-y-6 mb-12">
              {[
                { icon: Phone, label: 'Primary Contact', value: 'Wageesha Ekanayaka (+94 772 745 982)', href: 'https://wa.me/94772745982' },
                { icon: Phone, label: 'Alternate Contact', value: 'Ravindu Gimal (+94 77 276 0510)', href: 'https://wa.me/94772760510' },
                { icon: Mail, label: 'Email', value: 'mapleleafcaptures@gmail.com', href: 'mailto:mapleleafcaptures@gmail.com' },
                { icon: MapPin, label: 'Location', value: 'Colombo, Sri Lanka (Available Islandwide)', href: null },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ x: 8 }}
                  className="flex items-center gap-4"
                >
                  <motion.div
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                      isDark ? 'bg-gray-900 text-[#D4AF37]' : 'bg-[#FAF8F3] text-[#8B6F47]'
                    }`}
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.4 }}
                  >
                    <item.icon size={20} />
                  </motion.div>
                  <div>
                    <p className={`text-xs uppercase tracking-wider ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className={`text-lg font-serif transition-colors ${
                          isDark ? 'text-white hover:text-[#D4AF37]' : 'text-[#2C2C2C] hover:text-[#8B6F47]'
                        }`}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className={`text-lg font-serif ${isDark ? 'text-white' : 'text-[#2C2C2C]'}`}>
                        {item.value}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Media Links - Instagram & Facebook only */}
            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <motion.a
                href="https://www.instagram.com/mapleleafivory"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 ${
                  isDark
                    ? 'border-gray-700 text-gray-400 hover:bg-[#D4AF37] hover:text-black hover:border-[#D4AF37]'
                    : 'border-gray-200 text-gray-600 hover:bg-[#8B6F47] hover:text-white hover:border-[#8B6F47]'
                }`}
              >
                <Instagram size={18} />
              </motion.a>

              <motion.a
                href="https://www.facebook.com/mapleleafivoryweddings"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 ${
                  isDark
                    ? 'border-gray-700 text-gray-400 hover:bg-[#D4AF37] hover:text-black hover:border-[#D4AF37]'
                    : 'border-gray-200 text-gray-600 hover:bg-[#8B6F47] hover:text-white hover:border-[#8B6F47]'
                }`}
              >
                <Facebook size={18} />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`p-8 md:p-12 rounded-3xl shadow-lg transition-all duration-700 ${
              isDark
                ? 'bg-gray-900/80 backdrop-blur-md border border-[#D4AF37]/20'
                : 'bg-[#FAF8F3]/90 backdrop-blur-md'
            }`}
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              {/* Name & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div whileHover={{ y: -2 }}>
                  <label htmlFor="name" className={`block text-xs uppercase tracking-wider mb-2 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                    Your Name
                  </label>
                  <motion.input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    animate={{
                      borderColor: focusedField === 'name' ? (isDark ? '#D4AF37' : '#8B6F47') : (isDark ? '#374151' : '#e5e7eb'),
                      boxShadow: focusedField === 'name' ? `0 0 0 3px ${isDark ? 'rgba(212, 175, 55, 0.2)' : 'rgba(139, 111, 71, 0.1)'}` : 'none',
                    }}
                    className={`w-full border p-3 focus:outline-none transition-all duration-300 rounded-lg ${
                      isDark ? 'bg-gray-800/50 text-white placeholder-gray-500 border-gray-700' : 'bg-white text-gray-900 placeholder-gray-400 border-gray-300'
                    }`}
                    placeholder="John & Jane"
                  />
                </motion.div>

                <motion.div whileHover={{ y: -2 }}>
                  <label htmlFor="email" className={`block text-xs uppercase tracking-wider mb-2 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                    Email Address
                  </label>
                  <motion.input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    animate={{
                      borderColor: focusedField === 'email' ? (isDark ? '#D4AF37' : '#8B6F47') : (isDark ? '#374151' : '#e5e7eb'),
                      boxShadow: focusedField === 'email' ? `0 0 0 3px ${isDark ? 'rgba(212, 175, 55, 0.2)' : 'rgba(139, 111, 71, 0.1)'}` : 'none',
                    }}
                    className={`w-full border p-3 focus:outline-none transition-all duration-300 rounded-lg ${
                      isDark ? 'bg-gray-800/50 text-white placeholder-gray-500 border-gray-700' : 'bg-white text-gray-900 placeholder-gray-400 border-gray-300'
                    }`}
                    placeholder="hello@example.com"
                  />
                </motion.div>
              </div>

              {/* Phone & Date */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div whileHover={{ y: -2 }}>
                  <label htmlFor="phone" className={`block text-xs uppercase tracking-wider mb-2 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                    Phone Number
                  </label>
                  <motion.input
                    type="tel"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    onFocus={() => setFocusedField('phone')}
                    onBlur={() => setFocusedField(null)}
                    animate={{
                      borderColor: focusedField === 'phone' ? (isDark ? '#D4AF37' : '#8B6F47') : (isDark ? '#374151' : '#e5e7eb'),
                      boxShadow: focusedField === 'phone' ? `0 0 0 3px ${isDark ? 'rgba(212, 175, 55, 0.2)' : 'rgba(139, 111, 71, 0.1)'}` : 'none',
                    }}
                    className={`w-full border p-3 focus:outline-none transition-all duration-300 rounded-lg ${
                      isDark ? 'bg-gray-800/50 text-white placeholder-gray-500 border-gray-700' : 'bg-white text-gray-900 placeholder-gray-400 border-gray-300'
                    }`}
                    placeholder="+94 77 123 4567"
                  />
                </motion.div>

                <motion.div whileHover={{ y: -2 }}>
                  <label htmlFor="date" className={`block text-xs uppercase tracking-wider mb-2 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                    Event Date
                  </label>
                  <motion.input
                    type="date"
                    id="date"
                    value={eventDate}
                    onChange={(e) => setEventDate(e.target.value)}
                    onFocus={() => setFocusedField('date')}
                    onBlur={() => setFocusedField(null)}
                    animate={{
                      borderColor: focusedField === 'date' ? (isDark ? '#D4AF37' : '#8B6F47') : (isDark ? '#374151' : '#e5e7eb'),
                      boxShadow: focusedField === 'date' ? `0 0 0 3px ${isDark ? 'rgba(212, 175, 55, 0.2)' : 'rgba(139, 111, 71, 0.1)'}` : 'none',
                    }}
                    className={`w-full border p-3 focus:outline-none transition-all duration-300 rounded-lg ${
                      isDark ? 'bg-gray-800/50 text-white border-gray-700' : 'bg-white text-gray-900 border-gray-300'
                    }`}
                  />
                </motion.div>
              </div>

              {/* Location */}
              <motion.div whileHover={{ y: -2 }}>
                <label htmlFor="location" className={`block text-xs uppercase tracking-wider mb-2 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                  Event Location
                </label>
                <motion.input
                  type="text"
                  id="location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  onFocus={() => setFocusedField('location')}
                  onBlur={() => setFocusedField(null)}
                  animate={{
                    borderColor: focusedField === 'location' ? (isDark ? '#D4AF37' : '#8B6F47') : (isDark ? '#374151' : '#e5e7eb'),
                    boxShadow: focusedField === 'location' ? `0 0 0 3px ${isDark ? 'rgba(212, 175, 55, 0.2)' : 'rgba(139, 111, 71, 0.1)'}` : 'none',
                  }}
                  className={`w-full border p-3 focus:outline-none transition-all duration-300 rounded-lg ${
                    isDark ? 'bg-gray-800/50 text-white placeholder-gray-500 border-gray-700' : 'bg-white text-gray-900 placeholder-gray-400 border-gray-300'
                  }`}
                  placeholder="Venue, City"
                />
              </motion.div>

              {/* Send Inquiry To */}
              <motion.div whileHover={{ y: -2 }}>
                <label htmlFor="contact-person" className={`block text-xs uppercase tracking-wider mb-2 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                  Send Inquiry To
                </label>
                <select
                  id="contact-person"
                  value={selectedContact}
                  onChange={(e) => setSelectedContact(e.target.value as 'wageesha' | 'ravindu')}
                  className={`w-full border p-3 focus:outline-none transition-all duration-300 rounded-lg ${
                    isDark ? 'bg-gray-800/50 text-white border-gray-700' : 'bg-white text-gray-900 border-gray-300'
                  }`}
                >
                  <option value="wageesha">Wageesha Ekanayaka (Primary)</option>
                  <option value="ravindu">Ravindu Gimal (Alternate)</option>
                </select>
              </motion.div>

              {/* Package */}
              <motion.div whileHover={{ y: -2 }}>
                <label htmlFor="package" className={`block text-xs uppercase tracking-wider mb-2 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                  Interested Package (Optional)
                </label>
                <select
                  id="package"
                  value={selectedPackage}
                  onChange={(e) => setSelectedPackage(e.target.value)}
                  className={`w-full border p-3 focus:outline-none transition-all duration-300 rounded-lg ${
                    isDark ? 'bg-gray-800/50 text-white border-gray-700' : 'bg-white text-gray-900 border-gray-300'
                  }`}
                >
                  <option value="">Select a package (optional)</option>
                  {packages.map((pkg) => (
                    <option key={pkg.name} value={pkg.name}>
                      {pkg.name} - LKR {pkg.price}
                    </option>
                  ))}
                </select>
              </motion.div>

              {/* Message */}
              <motion.div whileHover={{ y: -2 }}>
                <label htmlFor="message" className={`block text-xs uppercase tracking-wider mb-2 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                  Your Message
                </label>
                <motion.textarea
                  id="message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  animate={{
                    borderColor: focusedField === 'message' ? (isDark ? '#D4AF37' : '#8B6F47') : (isDark ? '#374151' : '#e5e7eb'),
                    boxShadow: focusedField === 'message' ? `0 0 0 3px ${isDark ? 'rgba(212, 175, 55, 0.2)' : 'rgba(139, 111, 71, 0.1)'}` : 'none',
                  }}
                  className={`w-full border p-3 focus:outline-none transition-all duration-300 rounded-lg resize-none ${
                    isDark ? 'bg-gray-800/50 text-white placeholder-gray-500 border-gray-700' : 'bg-white text-gray-900 placeholder-gray-400 border-gray-300'
                  }`}
                  placeholder="Tell us about your dream wedding..."
                />
              </motion.div>

              {/* Submit Button */}
              <motion.button
                type="button"
                onClick={handleSendInquiry}
                whileHover={{ scale: 1.02, boxShadow: isDark ? '0 10px 25px rgba(212, 175, 55, 0.3)' : '0 10px 25px rgba(139, 111, 71, 0.3)' }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-4 font-medium tracking-wide flex items-center justify-center gap-2 transition-all duration-300 rounded-xl ${
                  isDark
                    ? 'bg-[#D4AF37] text-black hover:bg-[#c19a2e]'
                    : 'bg-[#8B6F47] text-white hover:bg-[#6d5636]'
                }`}
              >
                <span>Send Inquiry to {selectedContact === 'wageesha' ? 'Wageesha' : 'Ravindu'}</span>
                <Send size={18} />
              </motion.button>

              {/* Direct WhatsApp Links */}
              <div className="text-center pt-4 space-y-2">
                <motion.a
                  href="https://wa.me/94772745982"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="block text-[#25D366] font-medium hover:underline"
                >
                  Chat directly with Wageesha Ekanayaka
                </motion.a>
                <motion.a
                  href="https://wa.me/94772760510"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="block text-[#25D366] font-medium hover:underline"
                >
                  Chat directly with Ravindu Gimal
                </motion.a>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}