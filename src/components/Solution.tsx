
import { motion } from 'framer-motion';
import { Bot, BarChart3, Rocket } from 'lucide-react';

const pillars = [
  {
    icon: <Bot className="w-8 h-8" />,
    title: "Automatize",
    desc: "Chatbot, follow-up e respostas automáticas com IA"
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: "Organize",
    desc: "CRM Kanban visual dentro do próprio WhatsApp"
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: "Escale",
    desc: "Disparo em massa, múltiplos atendentes, webhooks e API"
  }
];

export default function Solution() {
  return (
    <section className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-4xl mb-24"
        >
          <h2 className="text-4xl md:text-6xl font-black font-heading mb-8 leading-tight">
            Adicione um CRM dentro do seu <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-hover font-black">WHATSAPP</span>
          </h2>
          <p className="text-xl md:text-2xl text-text-muted leading-relaxed">
            O CRM WHATSAPP é uma extensão que transforma o WhatsApp Web em uma plataforma profissional de vendas e atendimento. Sem migrar para outro app. Sem treinamento complicado. Nós instalamos para você, configuramos e ajudamos nas configurações que você precisa para começar a vender com mais velocidade.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.2, duration: 0.8, ease: "easeOut" }}
              className="relative p-10 rounded-[2rem] bg-gradient-to-b from-background-card to-transparent border border-border group hover:border-primary/50 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-[50px] group-hover:bg-primary/20 transition-colors duration-500" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-16 h-16 rounded-2xl bg-text-main/5 border border-border flex items-center justify-center text-primary mb-8 group-hover:scale-110 group-hover:bg-primary group-hover:text-[#F2F0EF] transition-all duration-500">
                  {pillar.icon}
                </div>
                
                <h3 className="text-3xl font-bold font-heading mb-4 text-text-main">
                  {pillar.title}
                </h3>
                
                <p className="text-lg text-text-muted leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
