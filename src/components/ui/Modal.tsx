import { motion, AnimatePresence } from 'framer-motion';
import { ReactNode, useEffect } from 'react';
import { IoClose } from 'react-icons/io5';
import { Z_INDEX } from '../../constants/zIndex';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
}

export function Modal({ isOpen, onClose, children, title }: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      // Salva a posição atual do scroll
      const scrollY = window.scrollY;
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.top = `-${scrollY}px`;

      return () => {
        // Restaura o scroll quando o modal fecha
        document.body.style.overflow = '';
        document.body.style.position = '';
        document.body.style.width = '';
        document.body.style.top = '';
        window.scrollTo(0, scrollY);
      };
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div 
          className="fixed inset-0 flex items-center justify-center"
          style={{ 
            zIndex: Z_INDEX.modal,
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            position: 'fixed'
          }}
        >
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm"
            style={{ zIndex: Z_INDEX.modalOverlay }}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="relative w-[90%] max-w-4xl max-h-[85vh] bg-white rounded-2xl shadow-xl
                     flex flex-col overflow-hidden"
            style={{ zIndex: Z_INDEX.modal }}
          >
            {/* Header - Fixo */}
            <div className="sticky top-0 flex items-center justify-between p-6 
                          border-b border-gray-100 bg-white/80 backdrop-blur-sm z-10">
              {title && (
                <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
              )}
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <IoClose className="w-6 h-6 text-gray-500" />
              </button>
            </div>

            {/* Content - Scrollável */}
            <div className="p-6 overflow-y-auto">
              {children}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
} 