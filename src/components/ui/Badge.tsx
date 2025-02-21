import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export const Badge = ({ 
  children, 
  className = '',
  delay = 0.2 
}: BadgeProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className={`
      inline-block px-6 py-2 rounded-full 
      bg-gradient-to-r from-white/80 to-primary-50/80
      border border-primary-200
      shadow-[0_4px_20px_-1px_rgba(254,213,219,0.6)]
      ${className}
    `}
  >
    <span className="text-primary-500 font-medium bg-gradient-to-r from-primary-400 to-primary-500 text-transparent bg-clip-text">
      {children}
    </span>
  </motion.div>
); 