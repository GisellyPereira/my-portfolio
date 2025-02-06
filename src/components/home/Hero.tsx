import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { IconType } from 'react-icons';

export default function Hero() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
      {/* Efeito de partículas/grid */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:14px_14px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      </div>

      {/* Círculos de gradiente */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary-500/30 rounded-full filter blur-[100px] opacity-50" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/30 rounded-full filter blur-[100px] opacity-50" />
      
      {/* Conteúdo principal */}
      <div className="relative z-10 container mx-auto px-4 h-screen flex items-center justify-center">
        <div className="max-w-4xl mx-auto text-center">
          {/* Nome e título */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-primary-400 font-medium text-xl mb-2">
              Bem-vindo(a) ao meu portfólio
            </h2>
            
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="inline-block">
                <span className="inline-block bg-gradient-to-r from-primary-400 via-pink-400 to-purple-400 text-transparent bg-clip-text">
                  Olá, eu sou a Giselly
                </span>
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto">
              Desenvolvedora Web Full Stack apaixonada por criar experiências digitais únicas e inovadoras
            </p>
          </motion.div>

          {/* Botões de ação */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-gradient-to-r from-primary-500 to-purple-500 rounded-lg text-lg font-medium
                         transform transition-all duration-300 hover:shadow-[0_0_30px_rgba(236,72,153,0.3)]
                         w-full sm:w-auto min-w-[200px]"
            >
              Ver Projetos
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-white/10 backdrop-blur-sm rounded-lg text-lg font-medium
                         hover:bg-white/20 transform transition-all duration-300
                         w-full sm:w-auto min-w-[200px]"
            >
              Contato
            </motion.button>
          </motion.div>

          {/* Ícones sociais */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-12 flex justify-center items-center gap-8"
          >
            <SocialIcon href="#" icon={FaGithub} />
            <SocialIcon href="#" icon={FaLinkedin} />
            <SocialIcon href="#" icon={FaEnvelope} />
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <div className="flex flex-col items-center gap-2">
              <span className="text-sm text-gray-400">Scroll para descobrir</span>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-5 h-5 border-b-2 border-r-2 border-primary-400 transform rotate-45"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

interface SocialIconProps {
  href: string;
  icon: IconType;
}

const SocialIcon = ({ href, icon: Icon }: SocialIconProps) => (
  <motion.a
    href={href}
    whileHover={{ scale: 1.1, y: -3 }}
    whileTap={{ scale: 0.95 }}
    className="text-2xl text-gray-400 hover:text-primary-400 transition-colors duration-300"
  >
    <Icon />
  </motion.a>
); 