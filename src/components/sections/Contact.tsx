import { motion } from 'framer-motion';
import { 
  FaGithub, 
  FaLinkedin, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaWhatsapp, 
  FaInstagram, 
  FaTelegram 
} from 'react-icons/fa';
import { PiThreadsLogoFill } from 'react-icons/pi';

export default function Contact() {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-16 sm:py-32 relative overflow-hidden">
        {/* Background decorativo */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-white via-primary-50/30 to-white" />
          <div className="absolute inset-0" 
               style={{
                 backgroundImage: 'radial-gradient(#fed5db 1px, transparent 1px)',
                 backgroundSize: '40px 40px',
                 opacity: '0.3'
               }} 
          />
        </div>

        <div className="relative container mx-auto px-4">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Vamos <span className="text-primary-500">Conversar?</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-600 text-lg"
            >
              Estou sempre aberta a novas oportunidades e parcerias            </motion.p>
          </div>

          {/* Grid de contato */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
            {/* Coluna da esquerda - Informações */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 bg-white rounded-2xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-8">
                Informações de Contato
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary-50 rounded-lg">
                    <FaMapMarkerAlt className="w-6 h-6 text-primary-500" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Localização</h4>
                    <p className="text-gray-600">São Luís, Maranhão - Brasil</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary-50 rounded-lg">
                    <FaEnvelope className="w-6 h-6 text-primary-500" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Email</h4>
                    <a href="mailto:seu-email@exemplo.com" 
                       className="text-gray-600 hover:text-primary-500 transition-colors">
                      giselly.avpereira@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary-50 rounded-lg">
                    <FaWhatsapp className="w-6 h-6 text-primary-500" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">WhatsApp</h4>
                    <a href="https://wa.me/5598999999999" 
                       className="text-gray-600 hover:text-primary-500 transition-colors">
                      +55 (98) 9 9144-9679
                    </a>
                  </div>
                </div>
              </div>

              {/* Redes sociais */}
              <div className="mt-12">
                <h4 className="font-medium text-gray-800 mb-4">Me encontre nas redes</h4>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://github.com/seu-usuario"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-primary-50 rounded-lg hover:bg-primary-100 
                             transition-all duration-300 hover:-translate-y-1"
                  >
                    <FaGithub className="w-6 h-6 text-primary-500" />
                  </a>
                  <a
                    href="https://linkedin.com/in/seu-perfil"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-primary-50 rounded-lg hover:bg-primary-100 
                             transition-all duration-300 hover:-translate-y-1"
                  >
                    <FaLinkedin className="w-6 h-6 text-primary-500" />
                  </a>
                  <a
                    href="https://instagram.com/seu-perfil"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-primary-50 rounded-lg hover:bg-primary-100 
                             transition-all duration-300 hover:-translate-y-1"
                  >
                    <FaInstagram className="w-6 h-6 text-primary-500" />
                  </a>
                  <a
                    href="https://threads.net/seu-perfil"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-primary-50 rounded-lg hover:bg-primary-100 
                             transition-all duration-300 hover:-translate-y-1"
                  >
                    <PiThreadsLogoFill className="w-6 h-6 text-primary-500" />
                  </a>
                  <a
                    href="https://t.me/seu-usuario"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-primary-50 rounded-lg hover:bg-primary-100 
                             transition-all duration-300 hover:-translate-y-1"
                  >
                    <FaTelegram className="w-6 h-6 text-primary-500" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Coluna da direita - Formulário */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3 bg-white rounded-2xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-8">
                Envie uma mensagem
              </h3>

              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nome
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary-300 
                               focus:ring focus:ring-primary-200 focus:ring-opacity-50 transition-colors
                               bg-gray-50"
                      placeholder="Seu nome"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary-300 
                               focus:ring focus:ring-primary-200 focus:ring-opacity-50 transition-colors
                               bg-gray-50"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Assunto
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary-300 
                             focus:ring focus:ring-primary-200 focus:ring-opacity-50 transition-colors
                             bg-gray-50"
                    placeholder="Qual o assunto?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary-300 
                             focus:ring focus:ring-primary-200 focus:ring-opacity-50 transition-colors
                             bg-gray-50 resize-none"
                    placeholder="Sua mensagem..."
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-primary-400 to-primary-500
                           hover:from-primary-500 hover:to-primary-600
                           text-white font-medium rounded-xl
                           transform transition-all duration-300
                           shadow-lg shadow-primary-500/30"
                >
                  Enviar mensagem
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
} 