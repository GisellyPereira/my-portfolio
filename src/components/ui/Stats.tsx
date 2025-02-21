import { motion } from 'framer-motion';

interface StatItemProps {
  number: string;
  text: string;
}

export const StatItem = ({ number, text }: StatItemProps) => (
  <div className="text-center lg:text-left">
    <p className="text-2xl sm:text-3xl font-bold text-primary-500">{number}</p>
    <p className="text-gray-600">{text}</p>
  </div>
);

export const Stats = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2 }}
    className="flex flex-row justify-center lg:justify-start gap-12"
  >
    {children}
  </motion.div>
); 