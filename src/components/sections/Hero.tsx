import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Button } from '../ui/Button';
import { ButtonGroup } from '../ui/ButtonGroup';
import { Stats, StatItem } from '../ui/Stats';
import { FloatingImage } from '../ui/FloatingImage';
import { SocialIcon } from '../ui/SocialIcon';
import { SocialIconGroup } from '../ui/SocialIconGroup';
import newImg from '../../assets/new-img3.png';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen w-full relative overflow-hidden bg-gradient-to-br from-white via-primary-50/90 to-rose-100/80">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0" 
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #fb8fa0 1px, transparent 1px)`,
            backgroundSize: '35px 35px',
            opacity: '0.15'
          }}
        />
        
        <div className="absolute top-0 right-0 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] 
                     bg-primary-300/20 rounded-full blur-[60px] sm:blur-[80px]
                     animate-blob" />
      </div>

      <div className="relative container mx-auto px-6 sm:px-4">
        <div className="min-h-screen flex flex-col justify-center lg:grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 py-16 sm:py-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-center lg:text-left">
                <span className="bg-gradient-to-r from-gray-900 to-gray-800 bg-clip-text text-transparent">
                  Frontend Developer
                </span>
                <br />
                <span className="bg-gradient-to-r from-primary-500 to-primary-400 bg-clip-text text-transparent">
                  & UI Designer
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-600 max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
                Transformando ideias em experiências digitais memoráveis através de código limpo e design intuitivo.
              </p>
            </motion.div>

            <Stats>
              <StatItem number="4+" text="Anos de Experiência" />
              <StatItem number="30+" text="Projetos Completados" />
            </Stats>

            <ButtonGroup>
              <Button 
                variant="primary"
                size="md"
                onClick={() => navigate('/projects')}
                fullWidth={window.innerWidth < 1024}
                className="sm:min-w-[140px]"
              >
                Ver Projetos
              </Button>

              <Button 
                variant="secondary"
                size="md"
                onClick={() => navigate('/contact')}
                fullWidth={window.innerWidth < 1024}
                className="sm:min-w-[140px]"
              >
                Contato
              </Button>
            </ButtonGroup>

            <SocialIconGroup>
              <SocialIcon href="https://github.com" icon={FaGithub} />
              <SocialIcon href="https://linkedin.com" icon={FaLinkedin} />
              <SocialIcon href="mailto:email@example.com" icon={FaEnvelope} />
            </SocialIconGroup>
          </div>

          <FloatingImage src={newImg} alt="Frontend Illustration" />
        </div>
      </div>
    </section>
  );
}
