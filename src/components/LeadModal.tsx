import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LeadModal({ isOpen, onClose }: LeadModalProps) {
  const [formData, setFormData] = useState({
    empresa: '',
    responsavel: '',
    adicionarServico: 'sim'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Formatação da mensagem em negrito (*texto*) para WhatsApp
    const mensagemFormata = `*Nome da Empresa:* ${formData.empresa}
*Pessoa Responsável:* ${formData.responsavel}
*Deseja adicionar o serviço de CRM da TMC?* ${formData.adicionarServico.toUpperCase()}

Quero implantar o CRM no meu Whatsapp. Como podemos seguir?`;

    // Encode URL
    const encodedMessage = encodeURIComponent(mensagemFormata);
    const whatsappUrl = `https://wa.me/551931670209?text=${encodedMessage}`;
    
    // Redirecionamento
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg z-50 p-6"
          >
            <div className="bg-background-card border border-border rounded-2xl p-8 relative overflow-hidden">
              <button 
                onClick={onClose}
                className="absolute top-4 right-4 p-2 text-text-muted hover:text-text-main rounded-full hover:bg-white/5 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-text-main mb-2">QUERO ESSA SOLUÇÃO</h3>
                <p className="text-text-muted text-sm">Preencha os dados abaixo rapidamente para prosseguirmos com seu atendimento pelo WhatsApp.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-text-main mb-1">Nome da Empresa</label>
                  <input 
                    required
                    type="text" 
                    value={formData.empresa}
                    onChange={(e) => setFormData({...formData, empresa: e.target.value})}
                    placeholder="Sua empresa"
                    className="w-full bg-background-dark border border-white/10 rounded-lg px-4 py-3 text-text-main focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-text-main mb-1">Pessoa Responsável</label>
                  <input 
                    required
                    type="text" 
                    value={formData.responsavel}
                    onChange={(e) => setFormData({...formData, responsavel: e.target.value})}
                    placeholder="Seu nome"
                    className="w-full bg-background-dark border border-white/10 rounded-lg px-4 py-3 text-text-main focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-main mb-2">Quero adicionar o serviço de CRM da TMC?</label>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input 
                        type="radio" 
                        name="adicionarServico" 
                        value="sim" 
                        checked={formData.adicionarServico === 'sim'}
                        onChange={(e) => setFormData({...formData, adicionarServico: e.target.value})}
                        className="accent-primary"
                      />
                      <span className="text-text-main">Sim</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input 
                        type="radio" 
                        name="adicionarServico" 
                        value="nao"
                        checked={formData.adicionarServico === 'nao'}
                        onChange={(e) => setFormData({...formData, adicionarServico: e.target.value})}
                        className="accent-primary"
                      />
                      <span className="text-text-main">Não</span>
                    </label>
                  </div>
                </div>

                <button 
                  type="submit"
                  className="w-full mt-6 py-4 px-6 rounded-xl font-bold transition-all bg-gradient-to-r from-primary to-primary-hover text-white shadow-[0_0_20px_rgba(255,0,255,0.2)] hover:shadow-[0_0_30px_rgba(255,0,255,0.4)]"
                >
                  IR PARA O WHATSAPP
                </button>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
