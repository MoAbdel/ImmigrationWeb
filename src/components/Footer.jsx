import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, Music } from 'lucide-react';

const Footer = ({ language, content }) => {
  const t = content[language];

  return (
    <footer id="contact" className="bg-slate-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-amber-400 mb-4">
              {t.logo}
            </h3>
            <p className="text-gray-400">
              {t.footer.tagline}
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-bold mb-4">{t.footer.contact}</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin size={20} className="text-amber-400" />
                <span className="text-gray-400">{t.footer.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={20} className="text-amber-400" />
                <span className="text-gray-400">{t.footer.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={20} className="text-amber-400" />
                <span className="text-gray-400">{t.footer.email}</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-xl font-bold mb-4">{t.footer.social}</h4>
            <div className="flex gap-4">
              <a href="#" className="bg-slate-800 p-3 rounded-full hover:bg-amber-600 transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="bg-slate-800 p-3 rounded-full hover:bg-amber-600 transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="bg-slate-800 p-3 rounded-full hover:bg-amber-600 transition-colors">
                <Youtube size={24} />
              </a>
              <a href="#" className="bg-slate-800 p-3 rounded-full hover:bg-amber-600 transition-colors">
                <Music size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            {t.footer.disclaimer}
          </p>
          <p className="text-gray-500 text-sm mt-2">
            © {new Date().getFullYear()} Immigration Solution & Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
