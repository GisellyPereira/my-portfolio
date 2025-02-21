import { motion } from 'framer-motion';
import { IconType } from 'react-icons';

interface ServiceCardProps {
  icon: IconType;
  title: string;
  description: string;
  onClick: () => void;
  delay: number;
}

export const ServiceCard = ({ icon: Icon, title, description, onClick, delay }: ServiceCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    onClick={onClick}
    className="group bg-white rounded-2xl p-8 shadow-lg
              hover:shadow-xl hover:scale-[1.02]
              transition-all duration-500 cursor-pointer"
  >
    <div className="w-14 h-14 bg-primary-50 rounded-2xl
                  flex items-center justify-center
                  group-hover:bg-primary-100 transition-colors duration-500"
    >
      <Icon className="w-7 h-7 text-primary-500" />
    </div>

    <h3 className="text-xl font-bold text-gray-800 mt-6 mb-4
                  group-hover:text-primary-500 transition-colors duration-500"
    >
      {title}
    </h3>

    <p className="text-gray-600 leading-relaxed">
      {description}
    </p>
  </motion.div>
); 