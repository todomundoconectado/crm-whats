
import { motion } from 'framer-motion';
import { XCircle, AlertTriangle } from 'lucide-react';

const painPoints = [
  "Cliente mandou mensagem e você esqueceu de responder - e perdeu a venda",
  "Você não sabe em que etapa da negociação cada lead está",
  "Sua equipe usa o mesmo número mas ninguém sabe quem está atendendo quem",
  "Follow-up? Só quando você lembra. E quase nunca lembra.",
  "Você dispara mensagem para 300 contatos um por um - como em 2015",
  "Seu atendimento para quando você para"
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

export default function PainPoints() {
  return (
    <section className="py-24 px-6 bg-background-dark relative overflow-hidden">
      {/* Decorative Grid Background */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZD0iTTAgMGg0MHY0MEgwem0yMCAyMGMwIDExLjA0Ni04Ljk1NCAyMC0yMCAyMFYyMGMxMS4wNDYgMCAyMC04Ljk1NCAyMC0yMHoiIGZpbGw9IiMzMzMiIGZpbGwtb3BhY2l0eT0iMC4wNSIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+')] opacity-20" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-semibold tracking-wide mb-6"
          >
            <AlertTriangle className="w-4 h-4" />
            ISSO É MUITO EU
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-4xl md:text-6xl font-black font-heading tracking-tight mb-6"
          >
            Reconhece alguma <br className="hidden md:block" /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-hover">dessas situações?</span>
          </motion.h2>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {painPoints.map((point, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              className="group relative p-8 rounded-3xl bg-background-card border border-border hover:border-primary/30 transition-colors duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl" />
              <div className="relative z-10 flex flex-col items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <XCircle className="w-6 h-6" />
                </div>
                <p className="text-lg text-text-muted font-medium leading-relaxed group-hover:text-text-main transition-colors duration-300">
                  {point}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="mt-20 text-center"
        >
          <p className="text-2xl md:text-3xl font-heading font-medium text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-hover">
            Se você marcou 2 ou mais, você está deixando <br className="hidden md:block"/> dinheiro na mesa todo dia.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
