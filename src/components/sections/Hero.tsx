import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { IconType } from "react-icons";
import disneyMe from '../../assets/disney-me.png';

export default function Hero() {
  return (
    <section className="min-h-screen w-full bg-gradient-to-b from-rose-50 to-primary-50 relative overflow-hidden">
      {/* Background com efeito de grid */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#fed5db20_1px,transparent_1px),linear-gradient(to_bottom,#fed5db20_1px,transparent_1px)] bg-[size:14px_14px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-rose-50 via-transparent to-transparent" />
      </div>

      {/* Círculos de gradiente */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary-200/30 rounded-full filter blur-[100px] opacity-50" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-rose-100/30 rounded-full filter blur-[100px] opacity-50" />

      {/* Conteúdo principal */}
      <div className="relative z-10 container mx-auto px-4 h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          {/* Coluna de texto */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-primary-400 font-medium text-xl">
              Bem-vindo(a) ao meu portfólio
            </h2>

            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              <span className="inline-block bg-gradient-to-r from-primary-400 via-pink-400 to-purple-400 text-transparent bg-clip-text">
                Transformando ideias em experiências digitais
              </span>
            </h1>

            <p className="text-xl text-gray-400 max-w-2xl">
              Desenvolvedora Full Stack especializada em criar soluções web
              inovadoras e interfaces intuitivas
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-gradient-to-r from-primary-200 to-primary-300 
                          text-gray-800 rounded-lg text-lg font-medium
                          hover:shadow-[0_0_30px_rgba(254,213,219,0.5)] transition-all duration-300"
              >
                Ver Projetos
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-white/50 backdrop-blur-sm 
                          text-gray-800 rounded-lg text-lg font-medium
                          hover:bg-white/70 transition-all duration-300"
              >
                Contato
              </motion.button>
            </div>

            <div className="flex gap-6 pt-4">
              <SocialIcon href="#" icon={FaGithub} />
              <SocialIcon href="#" icon={FaLinkedin} />
              <SocialIcon href="#" icon={FaEnvelope} />
            </div>
          </motion.div>

          {/* Coluna de ilustração */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div
                className="w-full h-[600px] flex items-center justify-center"
              >
                <img 
                  src={disneyMe} 
                  alt="Avatar Disney Style"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll alreta */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
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
    </section>
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
