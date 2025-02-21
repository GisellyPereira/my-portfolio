import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ButtonGroupProps {
  children: ReactNode;
  className?: string;
  vertical?: boolean;
}

export const ButtonGroup = ({ 
  children, 
  className = '',
  vertical = false 
}: ButtonGroupProps) => {
  const direction = vertical ? 'flex-col' : 'flex-col sm:flex-row';

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className={`flex ${direction} w-full sm:w-auto gap-4 justify-center lg:justify-start ${className}`}
    >
      {children}
    </motion.div>
  );
}; 