import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  SiJavascript, SiTypescript, SiReact, SiVuedotjs,
  SiTailwindcss, SiStyledcomponents, SiGithub
} from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';
import { Modal } from '../ui/Modal';
import { skillCategories } from '../../data/skillsData';

export default function Skills() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Skills principais para mostrar na página
  const mainSkills = [
    { name: "JavaScript", icon: SiJavascript },
    { name: "React", icon: SiReact },
    { name: "React Native", icon: TbBrandReactNative },
    { name: "TypeScript", icon: SiTypescript },
    { name: "Vue", icon: SiVuedotjs },
    { name: "Tailwind", icon: SiTailwindcss },
    { name: "Styled Components", icon: SiStyledcomponents },
    { name: "GitHub", icon: SiGithub },
  ];

  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-primary-50 via-rose-50/50 to-white">
        <div className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `linear-gradient(30deg, #fed5db 12%, transparent 12.5%, transparent 87%, #fed5db 87.5%, #fed5db),
                             linear-gradient(150deg, #fed5db 12%, transparent 12.5%, transparent 87%, #fed5db 87.5%, #fed5db),
                             linear-gradient(30deg, #fed5db 12%, transparent 12.5%, transparent 87%, #fed5db 87.5%, #fed5db),
                             linear-gradient(150deg, #fed5db 12%, transparent 12.5%, transparent 87%, #fed5db 87.5%, #fed5db),
                             linear-gradient(60deg, #fed5db77 25%, transparent 25.5%, transparent 75%, #fed5db77 75%, #fed5db77),
                             linear-gradient(60deg, #fed5db77 25%, transparent 25.5%, transparent 75%, #fed5db77 75%, #fed5db77)`,
            backgroundSize: '80px 140px',
            backgroundPosition: '0 0, 0 0, 40px 70px, 40px 70px, 0 0, 40px 70px'
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-block px-6 py-2 rounded-full 
                     bg-gradient-to-r from-white/80 to-primary-50/80
                     border border-primary-200 mb-6
                     shadow-[0_4px_20px_-1px_rgba(254,213,219,0.6)]"
          >
             <span className="text-primary-500 font-medium bg-gradient-to-r from-primary-400 to-primary-500 text-transparent bg-clip-text">
              Minhas Skills ✨
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Tecnologias que <span className="text-primary-500">domino</span>
          </h2>
        </motion.div>

        {/* Grid de skills principais */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
          {mainSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center gap-3 p-4
                       bg-white rounded-xl shadow-lg shadow-primary-100/20"
            >
              <skill.icon 
                className="w-8 h-8 sm:w-12 sm:h-12 text-primary-500" 
              />
              <span className="text-xs sm:text-sm font-medium text-gray-700">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Botão Ver Todas */}
        <div className="text-center">
          <button
            onClick={() => setIsModalOpen(true)}
            className="group relative px-6 sm:px-8 py-3 sm:py-4 
                     bg-gradient-to-r from-primary-400 to-primary-500
                     hover:from-primary-500 hover:to-primary-600
                     text-white font-medium rounded-xl text-sm sm:text-base
                     shadow-lg shadow-primary-200/50
                     hover:shadow-xl hover:shadow-primary-300/50
                     transform hover:-translate-y-0.5
                     transition-all duration-300"
          >
            <div className="flex items-center gap-2">
              <span className="relative z-10">Ver todas as tecnologias</span>
              <svg 
                className="w-5 h-5 transition-transform duration-300 
                         group-hover:translate-x-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M13 7l5 5m0 0l-5 5m5-5H6" 
                />
              </svg>
            </div>
            <div className="absolute inset-0 rounded-xl bg-white/20 
                          opacity-0 group-hover:opacity-100 
                          transition-opacity duration-300" 
            />
          </button>
        </div>

        {/* Modal com todas as skills */}
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Tecnologias & Ferramentas"
        >
          <div className="space-y-12">
            {skillCategories.map((category) => (
              <div key={category.title}>
                <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-4">
                  {category.title}
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex flex-col items-center gap-2 p-3
                               bg-white rounded-xl shadow-sm"
                    >
                      <skill.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary-500" />
                      <span className="text-xs sm:text-sm text-gray-600 text-center">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Modal>
      </div>
    </section>
  );
} 