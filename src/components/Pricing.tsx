import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

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
    a: "Sim. Um número, vários atendentes, com visualização e transferência de atendimento em tempo real."
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

  return (
    <section className="py-24 px-6 bg-background-dark relative">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        


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
    </section>
  );
}
