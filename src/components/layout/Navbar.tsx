import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";
import { useScrollPosition } from "../../hooks/useScrollPosition";
import disneyMe from "../../assets/me.png";
import { Modal } from "../ui/Modal";
import mePhoto from "../../assets/me-photoo.jpeg";
import { Z_INDEX } from '../../constants/zIndex';

const menuItems = [
  { title: "Home", to: "/" },
  { title: "Projetos", to: "/projects" },
  { title: "Contato", to: "/contact" },
] as const;

export default function Navbar() {
  const location = useLocation();
  const scrolled = useScrollPosition();
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full transition-all duration-300"
      style={{ 
        zIndex: Z_INDEX.navbar,
        backgroundColor: scrolled ? 'rgba(255,255,255,0.8)' : 'transparent',
        backdropFilter: scrolled ? 'blur(8px)' : 'none',
        boxShadow: scrolled ? '0 4px 6px -1px rgb(0 0 0 / 0.1)' : 'none'
      }}
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
                            location.pathname === item.to
                              ? "text-primary-500"
                              : ""
                          }`}
              >
                {item.title}
              </Link>
            ))}

            {/* Avatar */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer relative w-10 h-10 rounded-full overflow-hidden
                        border-2 border-primary-200 shadow-lg hover:shadow-xl
                        transition-all duration-300"
              onClick={() => setIsModalOpen(true)}
            >
              <img
                src={disneyMe}
                alt="Avatar"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* Menu Mobile */}
          <div className="md:hidden flex items-center gap-4">
            {/* Avatar Mobile */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer relative w-8 h-8 rounded-full overflow-hidden
                        border-2 border-primary-200 shadow-lg
                        transition-all duration-300"
              onClick={() => setIsModalOpen(true)}
            >
              <img
                src={disneyMe}
                alt="Avatar"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-600 hover:bg-primary-50
                       transition-colors duration-300 focus:outline-none"
            >
              {isOpen ? (
                <HiX className="w-6 h-6 text-primary-500" />
              ) : (
                <HiMenu className="w-6 h-6 text-primary-500" />
              )}
            </button>
          </div>
        </div>

        {/* Menu Mobile Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4"
            >
              <div
                className="bg-white rounded-2xl shadow-lg border border-primary-100/50 
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

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Essa sou eu..."
      >
        <div className="flex flex-col md:flex-row gap-10 items-start max-w-4xl mx-auto">
          {/* Coluna da foto */}
          <div className="w-full md:w-2/5">
            <div className="relative w-full md:max-w-[320px] mx-auto">
              <img
                src={mePhoto}
                alt="Giselly"
                className="relative w-full rounded-2xl object-cover
                     shadow-[rgba(17,_17,_26,_0.1)_0px_8px_24px,_rgba(17,_17,_26,_0.1)_0px_16px_56px,_rgba(17,_17,_26,_0.1)_0px_24px_80px]
                     border border-gray-100
                     aspect-[3/4]"
              />
            </div>
          </div>

          {/* Coluna do texto */}
          <div className="w-full md:w-3/5 space-y-6">
            <div className="inline-block px-4 py-2 rounded-full bg-primary-50/50 border border-primary-100">
              <p className="text-primary-600 text-sm font-medium">
                Um pouco sobre mim ✨
              </p>
            </div>

            <div className="space-y-4 text-gray-700 text-[15px]">
              <p className="leading-relaxed">
                Tenho 23 anos, moro em São Luís do Maranhão, mais conhecida como
                'Ilha do Amor' (terra de praias lindas) e, bem... minha
                trajetória até aqui foi um pouquinho inusitada. Comecei cursando
                Enfermagem — sim, totalmente aleatório, né? Mas tudo mudou
                quando meu irmão, que já estava na área de tecnologia, me
                mostrou esse universo incrível do desenvolvimento. Desde então,
                mergulhei de cabeça nesse mundo e tenho curtido muito cada passo
                dessa jornada.
              </p>

              <p className="leading-relaxed">
                Sou cristã, adoro assistir filmes, gosto do universo dos
                super-heróis (Marvel ou DC? Difícil escolher só um lado!) e,
                claro, não posso deixar de mencionar meu amor por uma boa
                coquinha gelada — afinal, ninguém é de ferro, né? 😂
              </p>

              <p className="leading-relaxed">
                Fora isso, gosto de levar a vida com leveza, aprendendo sempre
                algo novo e tentando transformar desafios em oportunidades.
              </p>
            </div>

            <div className="pt-2">
              <div className="h-px w-full bg-gradient-to-r from-transparent via-primary-200/50 to-transparent" />
              <p className="text-center text-primary-500 font-medium mt-3 text-sm">
                Enfim, essa sou eu!
              </p>
            </div>
          </div>
        </div>
      </Modal>
    </motion.header>
  );
}
