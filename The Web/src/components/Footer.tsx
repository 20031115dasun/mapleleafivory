import { Instagram, Facebook, Heart } from 'lucide-react';

interface FooterProps {
  isDark: boolean;
}

export function Footer({ isDark }: FooterProps) {
  return (
    <footer
      className={`py-16 transition-all duration-700 ${
        isDark ? 'bg-black text-white' : 'bg-[#1a1a1a] text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <h2 className="font-serif text-3xl mb-6">
              The Maple Leaf <br />
              <span className={`italic ${isDark ? 'text-[#D4AF37]' : 'text-[#8B6F47]'}`}>
                Ivory Wedding Films
              </span>
            </h2>
            <p className="text-gray-400 font-light max-w-sm mb-8">
              Capturing the best moments of the biggest day in your life with
              cinematic elegance and genuine emotion.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/mapleleafivory"
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-colors ${isDark ? 'text-gray-400 hover:text-[#D4AF37]' : 'text-gray-400 hover:text-[#8B6F47]'}`}
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.facebook.com/mapleleafivoryweddings"
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-colors ${isDark ? 'text-gray-400 hover:text-[#D4AF37]' : 'text-gray-400 hover:text-[#8B6F47]'}`}
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className={`text-sm uppercase tracking-widest mb-6 ${isDark ? 'text-[#D4AF37]' : 'text-[#8B6F47]'}`}>
              Quick Links
            </h3>
            <ul className="space-y-4 text-gray-400 font-light">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#films" className="hover:text-white transition-colors">
                  Our Films
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">
                  Photo Gallery
                </a>
              </li>
              <li>
                <a href="#packages" className="hover:text-white transition-colors">
                  Packages
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className={`text-sm uppercase tracking-widest mb-6 ${isDark ? 'text-[#D4AF37]' : 'text-[#8B6F47]'}`}>
              Contact
            </h3>
            <ul className="space-y-4 text-gray-400 font-light">
              <li>
                <a
                  href="https://wa.me/94772745982"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`transition-colors ${isDark ? 'hover:text-[#D4AF37]' : 'hover:text-[#8B6F47]'}`}
                >
                  +94 772 745 982 (Wageesha Ekanayaka)
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/94772760510"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`transition-colors ${isDark ? 'hover:text-[#D4AF37]' : 'hover:text-[#8B6F47]'}`}
                >
                  +94 77 276 0510 (Ravindu Gimal)
                </a>
              </li>
              <li>
                <a
                  href="mailto:mapleleafcaptures@gmail.com"
                  className={`transition-colors ${isDark ? 'hover:text-[#D4AF37]' : 'hover:text-[#8B6F47]'}`}
                >
                  mapleleafcaptures@gmail.com
                </a>
              </li>
              <li>Colombo, Sri Lanka</li>
            </ul>
          </div>
        </div>

        <div className={`border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-light transition-colors duration-700 ${
          isDark ? 'border-gray-800 text-gray-500' : 'border-gray-800 text-gray-500'
        }`}>
          <p>
            © 2025 The Maple Leaf Ivory Wedding Films. All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            Made with{' '}
            <Heart size={12} className={`${isDark ? 'text-[#D4AF37]' : 'text-[#8B6F47]'} fill-current`} />{' '}
            in Sri Lanka
          </p>
        </div>
      </div>
    </footer>
  );
}