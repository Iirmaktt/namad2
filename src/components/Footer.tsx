import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Slogan */}
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent mb-4">
              NamadNanoTech
            </div>
            <p className="text-gray-300 mb-6 text-lg">
              Nano-Hassasiyetle Geleceği Şekillendiriyoruz
            </p>
            <p className="text-gray-400 leading-relaxed">
              NamadNanoTech, nanoteknoloji alanında yüksek katma değerli çözümler sunan 
              öncü bir teknoloji firmasıdır. İnovatif yaklaşımımızla geleceğin teknolojilerini bugüne taşıyoruz.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Hızlı Erişim</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/products" 
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                >
                  Ürünler
                </Link>
              </li>
              <li>
                <Link 
                  to="/services" 
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                >
                  Hizmetler
                </Link>
              </li>
              <li>
                <Link 
                  to="/news" 
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                >
                  Haberler
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                >
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">İletişim</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center">
                <MapPin size={16} className="mr-2 text-blue-400" />
                <span className="text-sm">NanoPark Sanayi Bölgesi, Tahran, İran</span>
              </div>
              <div className="flex items-center">
                <Phone size={16} className="mr-2 text-blue-400" />
                <span className="text-sm">+98 21 1234 5678</span>
              </div>
              <div className="flex items-center">
                <Mail size={16} className="mr-2 text-blue-400" />
                <span className="text-sm">contact@namadnanotech.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 NamadNanoTech. Tüm hakları saklıdır.
          </div>
          <div className="flex space-x-4">
            <a 
              href="#" 
              className="text-gray-400 hover:text-blue-400 transition-colors duration-200 transform hover:scale-110"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="#" 
              className="text-gray-400 hover:text-blue-400 transition-colors duration-200 transform hover:scale-110"
            >
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;