
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const benefits = [
  "Seu tempo de resposta cai de horas para segundos",
  "Nenhum lead some sem follow-up novamente",
  "Sua equipe trabalha em sincronia sem precisar de reunião",
  "Você sabe exatamente quantas negociações estão abertas e em qual etapa",
  "Campanhas de disparo saem em minutos, não em horas",
  "Você atende mais clientes sem contratar mais gente",
  "Seu WhatsApp vira um CRM profissional - sem trocar de plataforma"
];

export default function Benefits() {
  return (
    <section className="py-24 px-6 bg-background-card relative border-t border-b border-border">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-heading leading-tight mb-8">
            O que muda na prática quando você usa o <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-hover">CRM WHATSAPP</span>
          </h2>
          <p className="text-xl text-text-muted leading-relaxed mb-12">
            A ferramenta trabalha para você, não o contrário. Pare de microgerenciar o atendimento e veja os resultados reais da automação inteligente.
          </p>

          <div className="space-y-6">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="flex items-start gap-4 group"
              >
                <div className="mt-1 p-1 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-[#F2F0EF] transition-colors duration-300">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                </div>
                <p className="text-lg text-text-main/90 group-hover:text-text-main transition-colors duration-300">
                  {benefit}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Authority / Social Proof side block */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="bg-background-dark/40 border border-border rounded-3xl p-10 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[80px] rounded-full pointer-events-none" />
          
          <h3 className="text-3xl font-heading font-bold mb-6">
            Quem usa o CRM WHATSAPP não volta para o WhatsApp comum
          </h3>
          <p className="text-text-muted mb-10 text-lg">
            Empresas já automatizaram seu atendimento com o CRM WHATSAPP. Comércios, prestadores de serviço, clínicas, imobiliárias, infoprodutores - qualquer negócio que vende pelo WhatsApp.
          </p>

          <div className="grid grid-cols-2 gap-4">
             <div className="bg-text-main/5 p-6 rounded-2xl border border-border">
                <div className="text-4xl font-black text-text-main mb-2">+5k</div>
                <div className="text-sm text-text-muted uppercase tracking-wider font-semibold">Usuários Ativos</div>
             </div>
             <div className="bg-text-main/5 p-6 rounded-2xl border border-border">
                <div className="text-4xl font-black text-text-main mb-2">3x</div>
                <div className="text-sm text-text-muted uppercase tracking-wider font-semibold">Mais Conversões</div>
             </div>
             <div className="col-span-2 bg-gradient-to-r from-primary/20 to-primary-hover/20 p-6 rounded-2xl border border-primary/20">
                <div className="text-4xl font-black text-primary mb-2">98%</div>
                <div className="text-sm text-text-muted uppercase tracking-wider font-semibold">Satisfação e Retenção</div>
             </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
