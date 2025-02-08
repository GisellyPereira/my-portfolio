import { FaLaptopCode, FaMobileAlt, FaPaintBrush } from "react-icons/fa";
import { Service } from '../types';

export const createServices = (navigate: Function): Service[] => [
  {
    icon: FaLaptopCode,
    title: "Desenvolvimento Web",
    description: "Criando sites e aplicações incríveis com React, TypeScript, Vue e outras tecnologias bacanas!",
    onClick: () => navigate('/projects', { state: { activeTab: 'web' } })
  },
  // ... outros serviços
]; 