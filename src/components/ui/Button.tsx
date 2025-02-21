import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { FaArrowRight } from 'react-icons/fa';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'gradient';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  onClick?: () => void;
  fullWidth?: boolean;
  className?: string;
  withArrow?: boolean;
  icon?: ReactNode;
}

export const Button = ({ 
  variant = 'primary', 
  size = 'md',
  children, 
  onClick, 
  fullWidth = false,
  className = '',
  withArrow = false,
  icon
}: ButtonProps) => {
  const baseStyles = "rounded-xl font-medium transition-all duration-300 relative";
  const widthStyles = fullWidth ? 'w-full' : 'w-auto';
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-5 py-2.5 text-base',
    lg: 'px-6 py-3 text-lg'
  };
  
  const variants = {
    primary: `bg-gradient-to-r from-primary-400 to-primary-500
              hover:from-primary-500 hover:to-primary-600
              text-white shadow-lg shadow-primary-200/50
              hover:shadow-xl hover:shadow-primary-300/50
              transform hover:-translate-y-0.5`,
    secondary: `bg-white text-gray-800 
                border border-gray-200
                shadow-lg hover:shadow-xl hover:border-primary-200`,
    gradient: `bg-gradient-to-r from-primary-400 to-primary-500
               hover:from-primary-500 hover:to-primary-600
               text-white shadow-lg shadow-primary-200/50
               hover:shadow-xl hover:shadow-primary-300/50
               transform hover:-translate-y-0.5`
  };

  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`group ${baseStyles} ${sizes[size]} ${variants[variant]} ${widthStyles} ${className}`}
    >
      <div className="relative z-10 flex items-center justify-center gap-2">
        <span>{children}</span>
        {withArrow && (
          <FaArrowRight className="w-4 h-4 transition-transform duration-300 
                                 group-hover:translate-x-1" />
        )}
        {icon && icon}
      </div>
      
      {/* Overlay effect on hover - Reduzindo a opacidade de 0.2 para 0.1 */}
      <div className="absolute inset-0 rounded-xl bg-white/10 
                     opacity-0 group-hover:opacity-100 
                     transition-opacity duration-300" 
      />
    </motion.button>
  );
}; 