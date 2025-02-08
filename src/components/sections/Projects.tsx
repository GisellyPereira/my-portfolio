import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaFigma } from 'react-icons/fa';
import { TbWorld, TbDeviceMobile, TbPalette } from 'react-icons/tb';
import { useLocation } from 'react-router-dom';

type ProjectType = 'web' | 'mobile' | 'design';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  figmaUrl?: string;
  type: ProjectType;
}

const projects: Project[] = [
  // Projetos Web
  {
    title: "Selezione",
    description: "Plataforma de gestão de processos seletivos desenvolvida com React, TypeScript e Tailwind. Sistema completo com dashboard, formulários dinâmicos e relatórios.",
    image: "/projects/selezione.png",
    technologies: ["React", "TypeScript", "TailwindCSS", "Context API", "React Hook Form"],
    githubUrl: "https://github.com/seu-usuario/selezione",
    liveUrl: "https://selezione.vercel.app",
    type: "web"
  },
  {
    title: "Animais Fantásticos",
    description: "Site interativo sobre animais desenvolvido com JavaScript puro, utilizando conceitos avançados como modules, classes e animações.",
    image: "/projects/animais-fantasticos.png",
    technologies: ["JavaScript", "HTML", "CSS", "Webpack", "ESLint"],
    githubUrl: "https://github.com/seu-usuario/animais-fantasticos",
    liveUrl: "https://animais-fantasticos.vercel.app",
    type: "web"
  },
  {
    title: "Dashboard Finance",
    description: "Dashboard financeiro com gráficos interativos, controle de despesas e receitas, desenvolvido com React e ChartJS.",
    image: "/projects/dashboard-finance.png",
    technologies: ["React", "ChartJS", "Styled Components", "Context API"],
    githubUrl: "https://github.com/seu-usuario/dashboard-finance",
    liveUrl: "https://dashboard-finance.vercel.app",
    type: "web"
  },
  {
    title: "Landing Page Vue",
    description: "Landing page moderna desenvolvida com Vue.js e TailwindCSS, com animações suaves e design responsivo.",
    image: "/projects/landing-vue.png",
    technologies: ["Vue.js", "TailwindCSS", "Vite", "GSAP"],
    githubUrl: "https://github.com/seu-usuario/landing-vue",
    liveUrl: "https://landing-vue.vercel.app",
    type: "web"
  },
  {
    title: "Teste Pandanjo",
    description: "Aplicação desenvolvida como teste técnico, demonstrando habilidades em React e integração com APIs.",
    image: "/projects/teste-pandanjo.png",
    technologies: ["React", "TypeScript", "Styled Components", "Axios"],
    githubUrl: "https://github.com/seu-usuario/teste-pandanjo",
    liveUrl: "https://teste-pandanjo.vercel.app",
    type: "web"
  },
  {
    title: "E-commerce",
    description: "Plataforma de e-commerce completa com carrinho de compras, filtros, autenticação e integração com API de pagamentos.",
    image: "/projects/ecommerce.png",
    technologies: ["React", "Redux", "Node.js", "MongoDB", "Stripe"],
    githubUrl: "https://github.com/seu-usuario/ecommerce",
    liveUrl: "https://ecommerce-project.vercel.app",
    type: "web"
  },

  // Projetos Mobile
  {
    title: "Rocket Help",
    description: "Aplicativo de gestão de chamados de suporte técnico desenvolvido com React Native e Firebase.",
    image: "/projects/rocket-help.png",
    technologies: ["React Native", "TypeScript", "Firebase", "Native Base"],
    githubUrl: "https://github.com/seu-usuario/rocket-help",
    type: "mobile"
  },
  {
    title: "Marvel App",
    description: "Aplicativo que consome a API da Marvel, exibindo personagens, quadrinhos e eventos do universo Marvel.",
    image: "/projects/marvel-app.png",
    technologies: ["React Native", "Redux", "Marvel API", "Styled Components"],
    githubUrl: "https://github.com/seu-usuario/marvel-app",
    type: "mobile"
  },
  {
    title: "iWeather",
    description: "Aplicativo de previsão do tempo com geolocalização e informações detalhadas sobre o clima.",
    image: "/projects/iweather.png",
    technologies: ["React Native", "TypeScript", "Weather API", "Expo"],
    githubUrl: "https://github.com/seu-usuario/iweather",
    type: "mobile"
  },
  {
    title: "Procon MA",
    description: "Aplicativo oficial do Procon-MA para registro de reclamações e consulta de direitos do consumidor.",
    image: "/projects/procon-ma.png",
    technologies: ["React Native", "Redux", "Node.js", "PostgreSQL"],
    githubUrl: "https://github.com/seu-usuario/procon-ma",
    liveUrl: "https://play.google.com/store/apps/details?id=com.proconma",
    type: "mobile"
  },

  // Projetos Design
  {
    title: "App Procon - UI/UX",
    description: "Design completo do aplicativo Procon-MA, incluindo fluxos de usuário, wireframes e protótipo interativo.",
    image: "/projects/figma-procon.png",
    technologies: ["Figma", "UI Design", "UX Research", "Prototyping"],
    figmaUrl: "https://www.figma.com/file/...",
    type: "design"
  },
  {
    title: "Dashboard Finance - UI",
    description: "Interface do usuário para sistema de dashboard financeiro, com foco em visualização de dados e usabilidade.",
    image: "/projects/figma-dashboard.png",
    technologies: ["Figma", "UI Design", "Design System", "Data Visualization"],
    figmaUrl: "https://www.figma.com/file/...",
    type: "design"
  }
];

const tabs = [
  { id: 'web', label: 'Web', icon: TbWorld },
  { id: 'mobile', label: 'Mobile', icon: TbDeviceMobile },
  { id: 'design', label: 'Design', icon: TbPalette },
] as const;

export default function Projects() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<ProjectType>('web');

  // Atualiza a tab ativa baseado na navegação
  useEffect(() => {
    if (location.state?.activeTab) {
      setActiveTab(location.state.activeTab as ProjectType);
    }
  }, [location]);

  const filteredProjects = projects.filter(project => project.type === activeTab);

  return (
    <div className="min-h-screen pt-20">
      <section className="py-16 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-primary-50/30 to-white" />

        <div className="relative container mx-auto px-4">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >

            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Meus <span className="text-primary-500">Trabalhos</span>
            </h2>
          </motion.div>

          {/* Tabs */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-white/80 backdrop-blur-sm rounded-xl p-1.5 shadow-lg">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-medium
                           transition-all duration-300 ${
                             activeTab === tab.id
                               ? 'bg-primary-500 text-white shadow-md'
                               : 'text-gray-600 hover:text-primary-500'
                           }`}
                >
                  <tab.icon className="w-5 h-5" />
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg 
                           hover:shadow-xl transition-all duration-300
                           transform hover:-translate-y-1"
                >
                  {/* Project Image */}
                  <div className="relative h-48 sm:h-56 overflow-hidden">
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300
                               group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2 
                                group-hover:text-primary-500 transition-colors duration-300">
                      {project.title}
                    </h3>

                    <p className="text-gray-600 mb-4">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-medium text-primary-500 
                                   bg-primary-50 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-4">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm font-medium text-gray-600
                                   hover:text-primary-500 transition-colors"
                        >
                          <FaGithub className="w-4 h-4" />
                          GitHub
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm font-medium text-gray-600
                                   hover:text-primary-500 transition-colors"
                        >
                          <FaExternalLinkAlt className="w-4 h-4" />
                          Ver projeto
                        </a>
                      )}
                      {project.figmaUrl && (
                        <a
                          href={project.figmaUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm font-medium text-gray-600
                                   hover:text-primary-500 transition-colors"
                        >
                          <FaFigma className="w-4 h-4" />
                          Figma
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
} 