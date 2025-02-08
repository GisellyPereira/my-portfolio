import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import { Link, useLocation } from 'react-router-dom';
import { useScrollPosition } from '../../hooks/useScrollPosition';

const menuItems = [
  { title: 'Home', to: '/' },
  { title: 'Projetos', to: '/projects' },
  { title: 'Contato', to: '/contact' },
] as const;

export default function Navbar() {
  const location = useLocation();
  const scrolled = useScrollPosition();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-lg shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Nome */}
          <Link
            to="/"
            className="text-xl font-bold bg-gradient-to-r from-primary-500 to-primary-600 
                     text-transparent bg-clip-text"
          >
            Giselly
          </Link>

          {/* Links de navegação - Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <Link
                key={item.title}
                to={item.to}
                className={`text-gray-600 hover:text-primary-500 font-medium
                          transition-colors duration-300 ${
                            location.pathname === item.to ? 'text-primary-500' : ''
                          }`}
              >
                {item.title}
              </Link>
            ))}
          </div>

          {/* Botão do menu - Mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-primary-50
                     transition-colors duration-300 focus:outline-none"
          >
            {isOpen ? (
              <HiX className="w-6 h-6 text-primary-500" />
            ) : (
              <HiMenu className="w-6 h-6 text-primary-500" />
            )}
          </button>
        </div>

        {/* Menu Mobile */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4"
            >
              <div className="bg-white rounded-2xl shadow-lg border border-primary-100/50 
                           overflow-hidden backdrop-blur-lg"
              >
                {menuItems.map((item) => (
                  <Link
                    key={item.title}
                    to={item.to}
                    className="block px-6 py-3 text-gray-600 hover:text-primary-500
                           hover:bg-primary-50/50 font-medium transition-all duration-300
                           first:pt-4 last:pb-4"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
} 