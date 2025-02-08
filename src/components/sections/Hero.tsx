import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { IconType } from "react-icons";
import disneyMe from '../../assets/me.png';
import { useState } from 'react';
import { Modal } from '../ui/Modal';
import { AboutModal } from './AboutModal';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="home" className="min-h-screen w-full bg-gradient-to-br from-rose-50 via-primary-50 to-rose-100 relative overflow-hidden">
      {/* Elementos decorativos de background */}
      <div className="absolute inset-0">
        {/* Padrão de pontos */}
        <div className="absolute inset-0" 
             style={{
               backgroundImage: 'radial-gradient(#fed5db 1px, transparent 1px)',
               backgroundSize: '40px 40px',
               opacity: '0.3'
             }} 
        />

        {/* Círculos decorativos animados */}
        <div className="absolute top-20 -left-20 w-[500px] h-[500px]">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute inset-0 bg-gradient-to-br from-primary-200/30 to-rose-100/30 rounded-full blur-3xl"
          />
        </div>

        <div className="absolute bottom-0 -right-20 w-[500px] h-[500px]">
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute inset-0 bg-gradient-to-tr from-rose-100/30 to-primary-200/30 rounded-full blur-3xl"
          />
        </div>
      </div>

      {/* Conteúdo principal */}
      <div className="relative z-10 container mx-auto px-4 h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          {/* Coluna de texto */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-block px-4 sm:px-6 py-2 rounded-full 
                         bg-gradient-to-r from-white/80 to-primary-50/80 backdrop-blur-sm
                         border border-primary-200 
                         shadow-[0_4px_20px_-1px_rgba(254,213,219,0.6)]
                         hover:shadow-[0_4px_25px_-1px_rgba(254,213,219,0.8)]
                         transition-all duration-300"
            >
              <span className="text-sm sm:text-base text-primary-500 font-medium bg-gradient-to-r from-primary-400 to-primary-500 text-transparent bg-clip-text">
                Oi, que bom te ver por aqui! ✨
              </span>
            </motion.div>

            <div className="space-y-4">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-3xl sm:text-5xl lg:text-7xl font-bold leading-tight"
              >
                <span className="inline-block bg-gradient-to-r from-primary-400 via-primary-500 to-rose-400 
                               text-transparent bg-clip-text animate-gradient-x">
                  Dando vida às suas ideias
                </span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="text-base sm:text-xl text-gray-600 max-w-2xl"
              >
                Sou desenvolvedora Front-end apaixonada pelo que faço. Transformo seus sonhos em código! ✨
              </motion.p>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                onClick={() => navigate('/projects')}
                whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(254,213,219,0.5)" }}
                whileTap={{ scale: 0.98 }}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-primary-300 to-primary-400 
                          text-white rounded-xl text-base sm:text-lg font-medium
                          shadow-lg shadow-primary-200/30 hover:shadow-xl
                          transition-all duration-300"
              >
                Ver Projetos
              </motion.button>

              <motion.button
                onClick={() => navigate('/contact')}
                whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.9)" }}
                whileTap={{ scale: 0.98 }}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-white/60 backdrop-blur-sm 
                          text-gray-800 rounded-xl text-base sm:text-lg font-medium
                          border border-primary-200/50 shadow-lg
                          transition-all duration-300"
              >
                Contato
              </motion.button>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
              className="flex gap-6 pt-4"
            >
              <SocialIcon href="#" icon={FaGithub} />
              <SocialIcon href="#" icon={FaLinkedin} />
              <SocialIcon href="#" icon={FaEnvelope} />
            </motion.div>
          </motion.div>

          {/* Coluna da imagem */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative order-first lg:order-last"
          >
            <div className="relative group max-w-[200px] lg:max-w-full mx-auto">
              {/* Círculos giratórios */}
              <div className="absolute -inset-10">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ rotate: [0, 360] }}
                    transition={{
                      duration: 20 + i * 5,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    className={`absolute inset-0 rounded-full
                               ${i === 0 
                                 ? 'border-[1px] border-primary-300/50 scale-95' 
                                 : i === 1 
                                   ? 'border-[2px] border-primary-200/60 scale-100' 
                                   : 'border-[3px] border-dashed border-primary-300/40 scale-105'}`}
                    style={{
                      transform: `scale(${1 + i * 0.1})`,
                    }}
                  />
                ))}

                <div className="absolute inset-0 scale-110 bg-gradient-to-tr from-primary-100/20 via-rose-100/10 to-transparent rounded-full blur-md" />
                <div className="absolute inset-0 scale-95 bg-gradient-to-bl from-primary-200/20 via-rose-200/10 to-transparent rounded-full blur-md" />
              </div>

              <div className="relative">
                {/* Balão de fala */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    scale: [1, 1.05, 1],
                  }}
                  transition={{ 
                    duration: 0.5,
                    delay: 1.5,
                    scale: {
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                  className="absolute top-[-8%] right-[29%] z-20"
                >
                  <div className="relative">
                    <div className="bg-white px-5 py-3 rounded-[20px] shadow-lg
                                  transform rotate-2
                                  before:content-[''] before:absolute before:w-4 before:h-4
                                  before:bg-white before:-bottom-2 before:right-6
                                  before:rotate-45 before:shadow-lg"
                    >
                      <p className="text-gray-800 font-medium text-sm whitespace-nowrap flex items-center gap-2">
                        Click me! ✨
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Imagem clicável */}
                <div 
                  onClick={() => setIsModalOpen(true)}
                  className="cursor-pointer relative"
                >
                  <img 
                    src={disneyMe} 
                    alt="Avatar Disney Style"
                    className="relative z-10 w-full h-[200px] lg:h-[500px] object-contain
                             drop-shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Partículas decorativas */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={`particle-${i}`}
                    animate={{
                      y: [-20, 20],
                      x: [-10, 10],
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.8, 0.3]
                    }}
                    transition={{
                      duration: 3 + i,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className={`absolute w-${i % 2 ? '2' : '3'} h-${i % 2 ? '2' : '3'} 
                               bg-gradient-to-r from-primary-300/60 to-rose-300/60 
                               rounded-full blur-sm`}
                    style={{
                      left: `${15 + i * 12}%`,
                      top: `${25 + (i * 8) % 40}%`
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>


      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Essa sou eu..."
      >
        <AboutModal />
      </Modal>
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
    className="text-2xl text-gray-600 hover:text-primary-500 transition-colors duration-300"
  >
    <Icon />
  </motion.a>
);
