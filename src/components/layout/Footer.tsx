import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  const socialLinks = [
    { icon: FaGithub, href: '#', label: 'GitHub' },
    { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
    { icon: FaInstagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-400 to-primary-500">
        {/* Padrão de bolinhas */}
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `radial-gradient(circle at center, rgba(255,255,255,0.35) 2.5px, transparent 2.5px)`,
            backgroundSize: '30px 30px',
            opacity: '0.5',
            mask: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)'
          }}
        />

        {/* Círculos decorativos com blur */}
        <div className="absolute -top-1/2 -left-1/4 w-[800px] h-[800px] 
                       bg-primary-300/30 rounded-full blur-[100px]" />
        <div className="absolute -bottom-1/2 -right-1/4 w-[800px] h-[800px] 
                       bg-rose-300/30 rounded-full blur-[100px]" />
      </div>

      {/* Conteúdo do Footer */}
      <div className="relative container mx-auto px-4 py-16">
        <div className="flex flex-col items-center space-y-12">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <span className="text-3xl font-bold bg-gradient-to-r from-white to-rose-100 
                           text-transparent bg-clip-text">
              Giselly
            </span>
          </motion.div>

          {/* Links de navegação */}
          <div className="flex flex-wrap justify-center gap-8">
            {['Home', 'Sobre', 'Skills', 'Projetos', 'Contato'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                whileHover={{ y: -3 }}
                className="text-white/90 hover:text-white transition-colors"
              >
                {item}
              </motion.a>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex space-x-8">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                aria-label={label}
                className="text-white/90 hover:text-white text-2xl transition-all"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon />
              </motion.a>
            ))}
          </div>

          {/* Linha divisória */}
          <div className="w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          {/* Copyright */}
          <div className="text-white/80 text-sm text-center space-y-2">
            <p>© {new Date().getFullYear()} Giselly. Todos os direitos reservados.</p>
            <p className="flex items-center justify-center gap-2">
              Desenvolvido com 
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="text-rose-200"
              >
                ❤️
              </motion.span>
              usando React e Tailwind
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
} 