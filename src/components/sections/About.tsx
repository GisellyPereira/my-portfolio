import { motion } from "framer-motion";
import { FaLaptopCode, FaMobileAlt, FaPaintBrush } from "react-icons/fa";
import { ServiceCard } from "../ui/ServiceCard";

export default function About() {
  const services = [
    {
      icon: FaLaptopCode,
      title: "Desenvolvimento Web",
      description:
        "Criando sites e aplicações incríveis com React, TypeScript, Vue e outras tecnologias bacanas!",
    },
    {
      icon: FaMobileAlt,
      title: "Apps Mobile",
      description:
        "Desenvolvendo apps super legais com React Native que funcionam lindamente em qualquer dispositivo!",
    },
    {
      icon: FaPaintBrush,
      title: "UI/UX Design",
      description:
        "Criação de interfaces modernas e atraentes no Figma, com foco em usabilidade e experiência do usuário!",
    },
  ];

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-white">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-primary-50/50 to-rose-50/50" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #fed5db 1px, transparent 0)",
            backgroundSize: "40px 40px",
            opacity: "0.3",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-20"
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
              Sobre mim ✨
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-12">
            Hello <span className="text-primary-500">World!</span>
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="grid">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-gray-600 text-lg"
              >
                <p className="text-center leading-relaxed">
                  Oi! Sou uma dev apaixonada por criar experiências digitais.
                  Tenho 4 anos nessa jornada incrível, adoro transformar ideias
                  em realidade através de código!
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-gray-600 text-lg"
              >
                <p className="text-center leading-relaxed">
                  Sabe aquela satisfação de ver tudo funcionando lindamente?
                  Então, sou meio viciada nisso! Acredito que código bom é
                  código organizado (porque a vida já é complicada demais, né?),
                  sempre seguindo boas práticas para garantir que tudo fique
                  funcional e fácil de manter. Adoro desafios, aprender coisas
                  novas e colaborar com quem também ama criar coisas bacanas.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="text-center"
              >
                <p className="text-primary-500 font-semibold mt-4 text-lg">
                  Bora construir algo incrível juntos?
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} {...service} delay={index * 0.2} />
          ))}
        </div>
      </div>
    </section>
  );
}
