import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

interface Review {
  name: string;
  date: string;
  rating: number;
  text: string;
  image: string;
}

const reviews: Review[] = [
  {
    name: 'Hasitha Wellappili',
    date: '9 October',
    rating: 5,
    text: 'Highly recommend Maple Leaf Ivory Wedding Films to anyone looking for a team to capture their big day. They are incredibly friendly, professional, and always willing to help. Thank you so much, guys, for making everything so smooth and memorable!',
    image: '/Photos/hasitha.jpg'
  },
  {
    name: 'Maheema S Dahanayaka',
    date: '7 October',
    rating: 5,
    text: "A huge thank you to the amazing crew who created our wedding video so beautifully!! Every moment was captured with such love and detail. You truly turned our memories into magic. We're so grateful for your incredible talent and friendly service ❤️",
    image: '/Photos/maheema.jpg'
  },
  {
    name: 'Manoj Himalka',
    date: '14 September',
    rating: 5,
    text: 'Friendly service.. highly recommended ❤️',
    image: '/Photos/Manoj.jpg'
  },
  {
    name: 'Chathura Udayanga',
    date: '6 July',
    rating: 5,
    text: 'Amazing work!! 🔥 Ravindu & Wageesha captured every special moment of our wedding beautifully. Storytelling is truly professional. Highly recommended for anyone wanting top-quality wedding films. 🫶',
    image: '/Photos/chathura.jpg'
  },
  {
    name: 'Sanduni Amarasinghe',
    date: '5 July',
    rating: 5,
    text: "Thanks to your incredible videography skills 🙌. Your professionalism and friendly approach made working with you an absolute delight 😍. Thank you for capturing our wedding day so perfectly. We're so grateful for the beautiful memories you've helped us create. Thank you Ravindu Malli & Wageesha Malli ❤️",
    image: '/Photos/sanduni.jpg'
  },
  {
    name: 'Dasun Liyanaarachchi',
    date: '16 January',
    rating: 5,
    text: 'Highly recommended. Had a chance to work with the team on our wedding day and truly professional team with amazing talent. Our video is really beautiful and amazing. Thank you very much for making our wedding day special.',
    image: '/Photos/dasun.jpg'
  },
  {
    name: 'Thilina Jayasinghe',
    date: '15 September 2024',
    rating: 5,
    text: "Thank you so much Wageesha for the amazing clicks of our wedding. You did a fantastic job capturing all the special moments and details that we'll cherish forever. Your professionalism and creativity truly made a difference. We couldn't be happier with the result ❤️",
    image: '/Photos/Thilina.jpg'
  },
  {
    name: 'Pubudu Chamikara',
    date: '8 August 2024',
    rating: 5,
    text: 'I wanted to extend my heartfelt thanks for the incredible work you did in capturing our engagement event. The video exceeded our expectations, and your attention to detail and creative vision really brought our memories to life. Thank you for your professionalism and for going above and beyond.',
    image: '/Photos/pubudu.jpg'
  },
  {
    name: 'Neyomi Senavirathna',
    date: '21 May 2024',
    rating: 5,
    text: 'Big thanks to our talented The Maple Leaf Ivory Wedding Films for weaving the magic of our love story into a timeless masterpiece. Your artistry truly made our day unforgettable. Highly Recommended 😊',
    image: '/Photos/Neyomi.jpg'
  },
  {
    name: 'Dilini Bandara',
    date: '4 March 2024',
    rating: 5,
    text: "To The Maple Leaf Ivory Wedding Films and especially our videographer Wageesha Ekanayake — thank you for the amazing wedding video you created for us 🌸💙 We're so grateful you said yes on such short notice after our last-minute decision. Your work left us emotional and captured our hearts. You truly have a gift! 🥰",
    image: '/Photos/Dilni.jpg'
  },
  {
    name: 'Udani Tharuka',
    date: '3 March 2024',
    rating: 5,
    text: "Thank you so much for making our special days into beautiful memories 😍 Highly recommended for best customer service, supportiveness and friendliness. I've no words to say how thankful I am. Great job and professional customized service 😊",
    image: '/Photos/Udani.jpg'
  },
  {
    name: 'Pasindu Anuranga',
    date: '12 January',
    rating: 5,
    text: "Highly Recommended! The Maple Leaf Ivory Wedding Films did an amazing job capturing every special moment of our wedding without causing any stress. The video quality, editing, and attention to detail were outstanding. Special thanks to Ravindu Gimal for his dedication and professionalism. Thank you for giving us memories we'll cherish forever! 🥰❤️",
    image: '/Photos/Pasindu.jpg'
  },
  {
    name: 'Dinushi Tharuka',
    date: '20 September 2023',
    rating: 5,
    text: 'We will be forever grateful for the amazing videography. You have captured the most special moments of our wedding that we can cherish for the rest of our lives. We would never hesitate to recommend Maple Leaf Ivory Wedding Films to anyone who wants a true professional to create a customized videography experience 😊',
    image: '/Photos/Dinushi.jpg'
  },
  {
    name: 'Kolitha Madushan',
    date: '25 June 2023',
    rating: 5,
    text: "Hey bro, I would just like to say a thank you for the job you did on our wedding video. It was absolutely amazing, we couldn't believe what a great job you did and we will look back on it in many years and no doubt still cry. Thank you ❤️",
    image: '/Photos/Kolitha.jpg'
  },
  {
    name: 'Uthpala Indeewari',
    date: '12 March 2023',
    rating: 5,
    text: 'Highly recommended. Please send your inquiries for The Maple Leaf Ivory Wedding Films ❤️',
    image: '/Photos/Uthpala.jpg'
  },
  {
    name: 'Nadun Kaluarachchi',
    date: '14 September 2022',
    rating: 5,
    text: "Absolutely amazing! I reached out to several companies but Ravindu was more than responsive and flexible and made me feel really good about working with him and his team. I HIGHLY recommend them. Stop looking for a videographer and just call/message Ravindu. You won't be disappointed! ❤️",
    image: '/Photos/Nadun.jpg'
  },
  {
    name: 'Manisha Henadeerage',
    date: '25 August 2022',
    rating: 5,
    text: 'We highly recommend…! THE MAPLE LEAF are professional videographers in their field 🔥 Thank you for creating an amazing video of my wedding ❤️ again and again Thank you…',
    image: '/Photos/Manisha.jpg'
  },
  {
    name: 'Upuli Silva',
    date: '23 May',
    rating: 5,
    text: 'Thank you so much for saving our beautiful moments so live, magical & natural. It was fun working with you. Keep up the good work & may you be blessed with more & more success 🙏 Best in town. ❤️',
    image: '/Photos/Upali.jpg'
  },
  {
    name: 'Samitha Sulochana Jayalath',
    date: '8 May 2022',
    rating: 5,
    text: 'Thanks a lot for the wonderful video. We had a lot of fun working with you all. Professionally edited the videos. Highly recommend everyone. Keep up the good work guys 😊🥰',
    image: '/Photos/Samitha.jpg'
  },
  {
    name: 'Sasanka Rukshitha Jayasinghe',
    date: '30 January 2022',
    rating: 5,
    text: 'We were very lucky to have The Maple Leaf Ivory Wedding Films with us during one of the most beautiful days of our lives. The Maple Leaf team captured the best moments…',
    image: '/Photos/Sasanka.jpg'
  }
];

interface ReviewsProps {
  isDark: boolean;
}

export function Reviews({ isDark }: ReviewsProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const reviewsPerPage = 6;
  const totalPages = Math.ceil(reviews.length / reviewsPerPage);
  const currentReviews = reviews.slice(currentPage * reviewsPerPage, (currentPage + 1) * reviewsPerPage);

  const nextPage = () => {
    setCurrentPage(prev => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage(prev => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <section
      id="reviews"
      className={`py-20 md:py-32 relative overflow-hidden transition-colors duration-500 ${
        isDark ? 'bg-black' : 'bg-white'
      }`}
    >
      {/* Background decoration */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 0.3 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className={`absolute top-0 right-0 w-96 h-96 rounded-full translate-x-1/2 -translate-y-1/2 ${
          isDark ? 'bg-gray-900' : 'bg-[#FAF8F3]'
        }`}
      />
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 0.3 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className={`absolute bottom-0 left-0 w-64 h-64 rounded-full -translate-x-1/2 translate-y-1/2 ${
          isDark ? 'bg-gray-900' : 'bg-[#FAF8F3]'
        }`}
      />

      {/* Floating sparkles */}
      <motion.div
        animate={{ y: [0, -30, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity }}
        className={`absolute top-40 left-20 text-4xl ${isDark ? 'text-yellow-300' : 'text-gray-400'}`}
      >
        ✨
      </motion.div>
      <motion.div
        animate={{ y: [0, 30, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        className={`absolute bottom-40 right-20 text-4xl ${isDark ? 'text-yellow-300' : 'text-gray-400'}`}
      >
        💫
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span
            className={`font-sans text-sm tracking-[0.2em] uppercase block mb-4 ${
              isDark ? 'text-[#D4AF37]' : 'text-[#8B6F47]'
            }`}
          >
            Client Testimonials
          </span>
          <h2 className={`font-serif text-4xl md:text-5xl mb-4 ${isDark ? 'text-white' : 'text-[#2C2C2C]'}`}>
            What Our Couples Say
          </h2>
          <div className="flex items-center justify-center gap-2">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Star size={20} className={`fill-current ${isDark ? 'text-[#D4AF37]' : 'text-[#D4AF37]'}`} />
              </motion.div>
            ))}
            <span className={`ml-2 font-light ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              5.0 from {reviews.length} reviews
            </span>
          </div>
        </motion.div>

        {/* Reviews Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12" // increased gap for better spacing
          >
            {currentReviews.map((review, index) => (
              <motion.div
                key={`${currentPage}-${index}`}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{
                  y: -12,
                  boxShadow: isDark
                    ? '0 25px 50px rgba(0, 0, 0, 0.5)'
                    : '0 25px 50px rgba(139, 111, 71, 0.2)',
                  transition: { duration: 0.3 }
                }}
                className={`relative p-8 overflow-hidden transition-all duration-500 ${
                  isDark
                    ? 'bg-gray-900/80 backdrop-blur-md border border-[#D4AF37]/30'
                    : 'bg-[#FAF8F3]/90 backdrop-blur-md border border-[#D4AF37]/20'
                }`}
                style={{
                  borderRadius: '28px', // Soft, elegant curved corners
                }}
              >
                {/* Elegant curved decorative overlay */}
                <div
                  className={`absolute inset-0 opacity-10 ${
                    isDark ? 'bg-gradient-to-br from-[#D4AF37] to-transparent' : 'bg-gradient-to-br from-[#8B6F47] to-transparent'
                  }`}
                  style={{
                    borderRadius: '28px',
                  }}
                />

                <Quote
                  className={`absolute top-6 right-6 w-12 h-12 ${
                    isDark ? 'text-[#D4AF37]/25' : 'text-[#D4AF37]/20'
                  }`}
                />

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <motion.div
                      className="relative"
                      whileHover={{ scale: 1.1, rotate: 8 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img
                        src={review.image}
                        alt={review.name}
                        className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
                      />
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-[#8B6F47] rounded-full flex items-center justify-center shadow-md">
                        <span className="text-white text-sm font-bold">✓</span>
                      </div>
                    </motion.div>
                    <div>
                      <h4 className={`font-serif text-lg font-semibold ${isDark ? 'text-white' : 'text-[#2C2C2C]'}`}>
                        {review.name}
                      </h4>
                      <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                        {review.date}
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-1 mb-5">
                    {[...Array(review.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0, rotate: -180 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ delay: index * 0.1 + i * 0.05 }}
                      >
                        <Star size={16} className="fill-[#D4AF37] text-[#D4AF37]" />
                      </motion.div>
                    ))}
                  </div>

                  <p className={`text-base leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    {review.text}
                  </p>
                </div>

                {/* Curved bottom accent */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-2"
                  style={{
                    background: `linear-gradient(to top, ${isDark ? '#D4AF37' : '#8B6F47'}20, transparent)`,
                    borderRadius: '0 0 28px 28px',
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Pagination Controls */}
        <div className="flex items-center justify-center gap-4">
          <motion.button
            onClick={prevPage}
            whileHover={{ scale: 1.1, x: -4 }}
            whileTap={{ scale: 0.95 }}
            className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
              isDark
                ? 'border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black'
                : 'border-[#8B6F47] text-[#8B6F47] hover:bg-[#8B6F47] hover:text-white'
            }`}
            aria-label="Previous reviews"
          >
            <ChevronLeft size={24} />
          </motion.button>

          <div className="flex gap-3">
            {[...Array(totalPages)].map((_, i) => (
              <motion.button
                key={i}
                onClick={() => setCurrentPage(i)}
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}
                className={`transition-all duration-300 rounded-full ${
                  i === currentPage
                    ? isDark
                      ? 'bg-[#D4AF37] w-10 h-3'
                      : 'bg-[#8B6F47] w-10 h-3'
                    : isDark
                    ? 'bg-gray-700 w-3 h-3 hover:bg-gray-500'
                    : 'bg-[#8B6F47]/30 w-3 h-3 hover:bg-[#8B6F47]/60'
                }`}
                aria-label={`Go to page ${i + 1}`}
              />
            ))}
          </div>

          <motion.button
            onClick={nextPage}
            whileHover={{ scale: 1.1, x: 4 }}
            whileTap={{ scale: 0.95 }}
            className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
              isDark
                ? 'border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black'
                : 'border-[#8B6F47] text-[#8B6F47] hover:bg-[#8B6F47] hover:text-white'
            }`}
            aria-label="Next reviews"
          >
            <ChevronRight size={24} />
          </motion.button>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {[
            { number: '100+', label: 'Happy Couples' },
            { number: '20+', label: 'Client Reviews' },
            { number: '5.0', label: 'Average Rating' },
            { number: '100%', label: 'Satisfaction' }
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className={`font-serif text-4xl mb-2 ${isDark ? 'text-[#D4AF37]' : 'text-[#8B6F47]'}`}>
                {stat.number}
              </div>
              <div className={`text-sm uppercase tracking-wider ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}