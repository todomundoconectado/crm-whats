import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, Check, X } from 'lucide-react';
import LeadModal from './LeadModal';

const faqs = [
  {
    q: "Precisa instalar algum aplicativo separado?",
    a: "Não. O CRM WHATSAPP funciona como extensão do Chrome, direto no WhatsApp Web que você já usa."
  },
  {
    q: "Meu número pode ser banido?",
    a: "SIM! Se você não seguir nossas práticas seguras de disparo em massa você terá o seu número banido. Nós damos toda orientação de como usar o recurso de forma segura."
  },
  {
    q: "Funciona para equipes com vários atendentes?",
    a: "Sim, com ressalvas. Você pode usar até 4 atendentes em um mesmo número, esse é o limite. Para cada atendente é necessária uma licença. Uma licença não serve para 4 atendentes."
  },
  {
    q: "Preciso saber programar para usar as automações?",
    a: "Não. A interface é visual e intuitiva. O chatbot e os scripts são configurados em poucos cliques."
  },
  {
    q: "Tem suporte em português?",
    a: "Sim. Suporte, implantação e tutoriais internos em português."
  }
];

export default function Pricing() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-24 px-6 bg-background-dark relative">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Header Pricing */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center w-full mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black font-heading mb-6">
            Escolha sua <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-hover">solução ideal</span>
          </h2>
          <p className="text-xl text-text-muted max-w-2xl mx-auto">
            Opções flexíveis para você começar agora ou ter nossa equipe especializada cuidando de tudo.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          
          {/* Card 1: EXTENSÃO WHAPRO */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-background-card border border-border hover:border-text-muted/30 transition-all rounded-[2rem] p-8 md:p-10 flex flex-col relative"
          >
            <div className="mb-8">
              <h3 className="text-xl font-bold text-text-main mb-4 uppercase tracking-wide">EXTENSÃO WHAPRO</h3>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-4xl md:text-5xl font-black text-text-main">R$ 347,00</span>
                <span className="text-text-muted font-medium">/anual</span>
              </div>
              <p className="text-sm font-medium text-text-muted mb-6">Licença por atendente</p>
              
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 mb-8 text-center">
                <p className="text-sm text-text-main font-medium mb-3">Você pode baixar uma versão grátis com recursos limitados</p>
                <a 
                  href="https://whapro.com.br/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-block w-full py-3 px-6 rounded-lg font-bold transition-all bg-background-dark border border-border hover:bg-primary hover:border-primary text-text-main hover:text-white"
                >
                  VERSÃO GRÁTIS
                </a>
              </div>
            </div>

            <div className="space-y-8 flex-1 flex flex-col">
              <div className="flex-1">
                <h4 className="text-sm font-bold text-green-400 mb-4 flex items-center gap-2">
                  <span className="bg-green-400/10 p-1 rounded-md"><Check className="w-4 h-4 text-green-400" /></span>
                  VANTAGENS
                </h4>
                <ul className="space-y-3">
                  {["Ótimo preço", "Todos os recursos liberados", "Video Aulas em português", "Aprender sozinho no seu tempo"].map(v => (
                    <li key={v} className="flex items-start gap-3 text-sm text-text-muted">
                      <Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                      <span className="leading-snug">{v}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-auto pt-8 border-t border-border/50">
                <h4 className="text-sm font-bold text-red-400 mb-4 flex items-center gap-2">
                  <span className="bg-red-400/10 p-1 rounded-md"><X className="w-4 h-4 text-red-500" /></span>
                  DESVANTAGENS
                </h4>
                <ul className="space-y-3">
                  {["Curva maior de aprendizado", "Risco de bloqueio de Número Whatsapp", "Responsável pelas atualizações"].map(v => (
                    <li key={v} className="flex items-start gap-3 text-sm text-text-muted">
                      <X className="w-4 h-4 text-red-500/70 shrink-0 mt-0.5" />
                      <span className="leading-snug">{v}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Card 2: MANUTENÇÃO TMC */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-b from-primary/10 to-background-card border border-primary/30 hover:border-primary/60 transition-all rounded-[2rem] p-8 md:p-10 flex flex-col relative overflow-hidden"
          >
            {/* Top highlight bar */}
            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-primary to-primary-hover"></div>
            
            <div className="mb-8">
              <h3 className="text-xl font-bold text-primary mb-4 uppercase tracking-wide">SERVIÇOS ADICIONAIS TMC (opcional)</h3>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-4xl md:text-5xl font-black text-text-main">R$ 297,00</span>
                <span className="text-text-muted font-medium">/mês</span>
              </div>
              <p className="text-sm font-medium text-text-muted mb-8">Valores por atendente</p>
              
              <div className="mb-8 p-5 bg-background-dark/40 border border-white/5 rounded-2xl">
                <p className="text-xs font-bold text-text-main/80 mb-4 uppercase tracking-wider">O que inclui:</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4">
                  {[
                    "Implantação", "Treinamento", "Automação", "Integrações", 
                    "Criação de funis", "Webhooks para sistemas", "Rotina de backups", 
                    "Suporte", "Mapeamento de Funções", "Traqueamento de clientes", 
                    "Personalização de CRM", "Programação de Follow-Ups", "Criação de Scripts"
                  ].map(f => (
                    <li key={f} className="flex items-start gap-2 text-xs text-text-muted font-medium">
                      <Check className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                      <span className="leading-tight">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button 
                onClick={() => setIsModalOpen(true)}
                className="inline-block w-full text-center py-4 px-6 rounded-xl font-bold transition-all bg-gradient-to-r from-primary to-primary-hover text-white shadow-[0_0_20px_rgba(255,0,255,0.2)] hover:shadow-[0_0_30px_rgba(255,0,255,0.4)] hover:-translate-y-0.5"
              >
                QUERO ESSA SOLUÇÃO
              </button>
            </div>

            <div className="space-y-8 flex-1 flex flex-col">
              <div className="flex-1">
                <h4 className="text-sm font-bold text-green-400 mb-4 flex items-center gap-2">
                  <span className="bg-green-400/10 p-1 rounded-md"><Check className="w-4 h-4 text-green-400" /></span>
                  VANTAGENS
                </h4>
                <ul className="space-y-3">
                  {[
                    "Curva de aprendizagem menor", "Acompanhamento e treinamento das equipes", 
                    "Melhora o fluxo de atendimento", "Melhora qualidade de aproveitamento dos leads", 
                    "Aplicação de estratégias de vendas", "Segundo braço para o comercial", 
                    "Construção de funis automáticos"
                  ].map(v => (
                    <li key={v} className="flex items-start gap-3 text-sm text-text-muted">
                      <Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                      <span className="leading-snug">{v}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto pt-8 border-t border-border/50">
                <h4 className="text-sm font-bold text-red-400 mb-4 flex items-center gap-2">
                  <span className="bg-red-400/10 p-1 rounded-md"><X className="w-4 h-4 text-red-500" /></span>
                  DESVANTAGENS
                </h4>
                <ul className="space-y-3">
                  {["Valor mensal"].map(v => (
                    <li key={v} className="flex items-start gap-3 text-sm text-text-muted">
                      <X className="w-4 h-4 text-red-500/70 shrink-0 mt-0.5" />
                      <span className="leading-snug">{v}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

        </div>

        {/* FAQ Section */}
        <div className="w-full max-w-3xl">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black font-heading text-center mb-12"
          >
            Perguntas que todo mundo <br className="hidden md:block"/> faz <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-hover">antes de contratar</span>
          </motion.h2>

          <div className="flex flex-col gap-4">
            {faqs.map((faq, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-background-card border border-border rounded-2xl overflow-hidden transition-colors hover:border-primary/50"
              >
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full text-left px-6 py-5 flex justify-between items-center cursor-pointer"
                >
                  <span className="text-lg font-bold text-text-main/90 pr-8">{faq.q}</span>
                  <div className={`p-2 rounded-full transition-colors ${openFaq === idx ? 'bg-primary/20 text-primary' : 'bg-text-main/5 text-text-main/50'}`}>
                    {openFaq === idx ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </div>
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                     <motion.div
                       initial={{ opacity: 0, height: 0 }}
                       animate={{ opacity: 1, height: "auto" }}
                       exit={{ opacity: 0, height: 0 }}
                       className="px-6 pb-5 text-text-muted leading-relaxed"
                     >
                       {faq.a}
                     </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
      <LeadModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  );
}
