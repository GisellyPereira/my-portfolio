import { motion } from 'framer-motion';

interface FloatingImageProps {
  src: string;
  alt: string;
  className?: string;
}

export const FloatingImage = ({ src, alt, className = '' }: FloatingImageProps) => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, delay: 0.2 }}
    className={`relative hidden lg:block ${className}`}
  >
    <motion.div
      className="relative"
      animate={{ y: [0, -12, 0] }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <motion.img 
        src={src} 
        alt={alt}
        className="w-full h-auto max-w-[600px] mx-auto select-none relative z-10"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.1}
        style={{ filter: 'drop-shadow(0 8px 24px rgb(249,100,128,0.1))' }}
      />
    </motion.div>
  </motion.div>
); 