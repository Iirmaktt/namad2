import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, X, ChevronDown } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (dropdown: string) => {
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const navItems = [
    { name: 'Anasayfa', path: '/', hasDropdown: false },
    { 
      name: 'Ürünler', 
      path: '/products', 
      hasDropdown: true,
      dropdownItems: [
        { name: 'Toz Kaynak Teli', path: '/products#toz-kaynak-teli' },
        { name: 'Aşınmaya Dayanıklı Plaka', path: '/products#asinmaya-dayanikli-plaka' },
        { name: 'Toz Kaplamalı El Elektrodu', path: '/products#toz-kaplamali-el-elektrodu' }
      ]
    },
    { 
      name: 'Hizmetler', 
      path: '/services', 
      hasDropdown: true,
      dropdownItems: [
        { name: 'Danışmanlık Hizmetleri', path: '/services#danismanlik-hizmetleri' },
        { name: 'Kaynak Hizmetleri', path: '/services#kaynak-hizmetleri' },
        { name: 'Symbol Akademi', path: '/services#symbol-akademi' }
      ]
    },
    { name: 'Haberler', path: '/news' },
    { name: 'İletişim', path: '/contact' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent">
              NamadNanoTech
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.hasDropdown && handleMouseEnter(item.name)}
                onMouseLeave={() => item.hasDropdown && handleMouseLeave()}
              >
                <Link
                  to={item.path}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 flex items-center ${
                    location.pathname === item.path
                      ? 'text-blue-800'
                      : isScrolled
                      ? 'text-gray-700 hover:text-blue-800'
                      : 'text-white hover:text-blue-200'
                  } hover:scale-105 transform`}
                >
                  {item.name}
                  {item.hasDropdown && (
                    <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-200 ${
                      activeDropdown === item.name ? 'rotate-180' : ''
                    }`} />
                  )}
                  {location.pathname === item.path && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-800 rounded-full" />
                  )}
                </Link>
                
                {/* Dropdown Menu */}
                {item.hasDropdown && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                    {item.dropdownItems?.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.name}
                        to={dropdownItem.path}
                        className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-800 transition-colors duration-200"
                        onClick={() => setActiveDropdown(null)}
                      >
                        {dropdownItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            {/* Search Button */}
            <button className={`p-2 rounded-full transition-all duration-200 ${
              isScrolled 
                ? 'bg-blue-50 text-blue-800 hover:bg-blue-100' 
                : 'bg-white/20 text-white hover:bg-white/30'
            } hover:scale-110 transform`}>
              <Search size={18} />
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.path}
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-800 hover:bg-blue-50 rounded-md"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.hasDropdown && item.dropdownItems && (
                    <div className="ml-4 space-y-1">
                      {item.dropdownItems.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          to={dropdownItem.path}
                          className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-800 hover:bg-blue-50 rounded-md"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="px-3 py-2">
                <button className="w-full flex items-center justify-center px-4 py-2 bg-blue-50 text-blue-800 rounded-md hover:bg-blue-100">
                  <Search size={18} className="mr-2" />
                  Arama
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;