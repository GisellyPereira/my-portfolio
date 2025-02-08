import { motion } from 'framer-motion';
import { FaCode, FaLaptopCode, FaMobileAlt } from 'react-icons/fa';

export default function About() {
  const cards = [
    {
      icon: FaCode,
      title: "Desenvolvimento Web",
      description: "Criação de interfaces modernas e responsivas com React, TypeScript e Tailwind."
    },
    {
      icon: FaMobileAlt,
      title: "Desenvolvimento Mobile",
      description: "Aplicações que funcionam perfeitamente em qualquer dispositivo."
    },
    {
      icon: FaLaptopCode,
      title: "Projetos de Design",
      description: "Construção de APIs robustas e escaláveis com Node.js e bancos de dados."
    },
    
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-rose-100 to-primary-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Sobre <span className="text-primary-500">Mim</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Desenvolvedora apaixonada por criar soluções inovadoras e experiências digitais únicas.
            Com experiência em desenvolvimento web full stack e design de interfaces.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/70 backdrop-blur-xl rounded-xl p-8 border border-primary-200/50
                        hover:border-primary-400/50 transition-all duration-300
                        group hover:shadow-[0_0_30px_rgba(254,213,219,0.3)]"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 bg-primary-100 rounded-lg group-hover:bg-primary-200 transition-all duration-300">
                  <card.icon className="w-8 h-8 text-primary-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">{card.title}</h3>
                <p className="text-gray-600">{card.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Timeline ou informação adicional */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-gray-600 max-w-3xl mx-auto">
            Com mais de X anos de experiência no desenvolvimento web, 
            tenho trabalhado com diversas tecnologias e frameworks modernos, 
            sempre buscando as melhores práticas e soluções inovadoras para cada projeto.
          </p>
        </motion.div>
      </div>
    </section>
  );
} 