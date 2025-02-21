import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SocialIconGroupProps {
  children: ReactNode;
  className?: string;
}

export const SocialIconGroup = ({ children, className = '' }: SocialIconGroupProps) => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.6 }}
    className={`flex gap-8 justify-center lg:justify-start pt-4 ${className}`}
  >
    {children}
  </motion.div>
); 