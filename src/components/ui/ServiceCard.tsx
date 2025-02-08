import { motion } from 'framer-motion';
import { IconType } from 'react-icons';

interface ServiceCardProps {
  icon: IconType;
  title: string;
  description: string;
  delay?: number;
}

export const ServiceCard = ({ icon: Icon, title, description, delay = 0 }: ServiceCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className="relative group"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-primary-50/60 
                  rounded-2xl transition-all duration-300 group-hover:scale-[1.02]
                  border border-primary-100 backdrop-blur-sm
                  shadow-[0_8px_30px_rgb(254,213,219,0.2)]
                  group-hover:shadow-[0_20px_40px_rgb(254,213,219,0.3)]" />
    
    <div className="relative p-8 flex flex-col items-center text-center space-y-4">
      <div className="p-4 bg-gradient-to-br from-primary-100 to-rose-100 rounded-xl
                    group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-8 h-8 text-primary-500" />
      </div>
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </motion.div>
); 