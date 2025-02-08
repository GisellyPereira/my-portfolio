import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false); // Fecha o menu mobile se estiver aberto
  };

  const menuItems = [
    { title: 'Home', href: '#home' },
    { title: 'Sobre', href: '#about' },
    { title: 'Skills', href: '#skills' },
    { title: 'Blog', href: '#blog' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-lg shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="#home" 
             onClick={(e) => handleClick(e, '#home')}
             className={`text-2xl font-bold ${
               scrolled ? 'text-gray-800' : 'text-gray-800'
             }`}>
            Giselly
          </a>
          
          {/* Links de navegação */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className={`${
                  scrolled 
                    ? 'text-gray-600 hover:text-primary-500' 
                    : 'text-gray-800 hover:text-primary-500'
                } transition-colors duration-300`}
              >
                {item.title}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
          >
            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden py-4 bg-gray-900/95 backdrop-blur-md"
          >
            {menuItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="block py-2 px-4 text-gray-300 hover:text-primary-400"
                onClick={(e) => handleClick(e, item.href)}
              >
                {item.title}
              </a>
            ))}
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
} 