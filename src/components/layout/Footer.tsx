import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  const socialLinks = [
    { icon: FaGithub, href: '#', label: 'GitHub' },
    { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
    { icon: FaInstagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="bg-gradient-to-b from-primary-50 to-rose-100 border-t border-primary-200/50">
      <div className="container mx-auto py-12">
        <div className="flex flex-col items-center space-y-8">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-gray-800"
          >
            Giselly
          </motion.div>

          {/* Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                aria-label={label}
                className="text-gray-600 hover:text-primary-500 text-2xl transition-colors"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-gray-600 text-sm text-center">
            <p>© {new Date().getFullYear()} Giselly. Todos os direitos reservados.</p>
            <p className="mt-1">Desenvolvido com ❤️ usando React e Tailwind</p>
          </div>
        </div>
      </div>
    </footer>
  );
} 