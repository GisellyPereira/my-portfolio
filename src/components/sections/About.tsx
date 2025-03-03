import { motion } from "framer-motion";
import { FaLaptopCode, FaMobileAlt, FaPaintBrush } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ServiceCard } from "../ui/ServiceCard";
import { Badge } from "../ui/Badge";

export default function About() {
  const navigate = useNavigate();

  const services = [
    {
      icon: FaLaptopCode,
      title: "Desenvolvimento Web",
      description:
        "Criando sites e aplicações incríveis com React, TypeScript, Vue e outras tecnologias bacanas!",
      onClick: () => navigate('/projects', { state: { activeTab: 'web' } })
    },
    {
      icon: FaMobileAlt,
      title: "Apps Mobile",
      description:
        "Desenvolvendo apps super legais com React Native que funcionam lindamente em qualquer dispositivo!",
      onClick: () => navigate('/projects', { state: { activeTab: 'mobile' } })
    },
    {
      icon: FaPaintBrush,
      title: "UI/UX Design",
      description:
        "Criação de interfaces modernas e atraentes no Figma, com foco em usabilidade e experiência do usuário!",
      onClick: () => navigate('/projects', { state: { activeTab: 'design' } })
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-white">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-primary-50/50 to-rose-50/50" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, #fed5db 1px, transparent 0)",
            backgroundSize: "40px 40px",
            opacity: "0.3",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20"
        >
          <Badge className="mb-6">
            Sobre mim ✨
          </Badge>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-8 sm:mb-12">
            Hello <span className="text-primary-500">World!</span>
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="grid gap-6 sm:gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-base sm:text-lg text-gray-600"
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
                className="text-base sm:text-lg text-gray-600"
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              onClick={service.onClick}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
