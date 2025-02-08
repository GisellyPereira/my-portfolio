import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';
import imagemAlemDaMeta from '../../assets/ALEM-DA-META.png';
import batalhaFrontEnd from '../../assets/batalha-frontendd.png';

interface BlogPost {
  title: string;
  description: string;
  date: string;
  imageUrl: string;
  link: string;
}

const blogPosts: BlogPost[] = [
  {
    title: "A Épica Batalha do Desenvolvedor Front-End: Como Sobreviver ao Caos do CSS",
    description: "Quando o CSS entra em cena, você percebe que está em uma verdadeira missão impossível, enfrentando batalhas dignas de heróis com nervos de aço!",
    date: "Out 2024",
    imageUrl: batalhaFrontEnd, 
    link: "https://www.tabnews.com.br/Giselly/a-epica-batalha-do-desenvolvedor-front-end-como-sobreviver-ao-caos-do-css" // Substitua pelo link real do seu artigo
  },
  { 
    title: "Além da meta: Por que ainda sentimos insatisfação após o sucesso?",
    description: "É difícil não questionar por que sempre queremos mais e mais, é uma busca constante por conquistas cada vez maiores. Mas será que essa incessante busca nos traz verdadeira felicidade?",
    date: "Abr 2024",
    imageUrl: imagemAlemDaMeta,
    link: "https://www.tabnews.com.br/Giselly/indo-alem-da-meta" // Substitua pelo link real do seu artigo
  }
];

export default function Blog() {
  return (
    <section id="blog" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-primary-50/30 to-white" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Título */}
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
              Blog ✨
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Artigos <span className="text-primary-500">Publicados</span>
          </h2>
        </motion.div>

        {/* Grid de posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {blogPosts.map((post, index) => (
            <motion.a
              key={post.title}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-2xl overflow-hidden
                       shadow-lg hover:shadow-xl transition-all duration-300
                       transform hover:-translate-y-1"
            >
              {/* Imagem */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300
                           group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              {/* Conteúdo */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-primary-500 font-medium">
                    {post.date}
                  </span>
                  <FaExternalLinkAlt className="text-gray-400 group-hover:text-primary-500 
                                              transition-colors duration-300" />
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-2 
                             group-hover:text-primary-500 transition-colors duration-300">
                  {post.title}
                </h3>

                <p className="text-gray-600">
                  {post.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
} 