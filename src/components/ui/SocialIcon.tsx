import { motion } from 'framer-motion';
import { IconType } from 'react-icons';

interface SocialIconProps {
  href: string;
  icon: IconType;
  color?: string;
  hoverColor?: string;
  size?: string;
  className?: string;
}

export const SocialIcon = ({ 
  href, 
  icon: Icon,
  color = 'text-gray-600',
  hoverColor = 'text-primary-500',
  size = 'text-2xl',
  className = ''
}: SocialIconProps) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.1, y: -3 }}
    whileTap={{ scale: 0.95 }}
    className={`${size} ${color} hover:${hoverColor} transition-colors duration-300 ${className}`}
  >
    <Icon />
  </motion.a>
); 