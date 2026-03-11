
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary opacity-20 blur-[150px] pointer-events-none rounded-full" />
      
      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-text-main/5 backdrop-blur-md"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-sm font-medium tracking-wide text-text-muted">O CRM DENTRO DO SEU WHATSAPP</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl lg:text-8xl font-black font-heading leading-[1.1] tracking-tight mb-8"
        >
          Você ainda <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-hover">perde vendas</span> <br className="hidden md:block" />
          respondendo cliente na mão?
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-text-muted font-medium max-w-3xl mb-8 leading-relaxed"
        >
          Enquanto você responde um por um, seu concorrente já fechou 10 negócios por usar as ferramentas certas.
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-xl text-text-muted max-w-2xl mb-12"
        >
          O CRM WHATSAPP é uma extensão que transforma o WhatsApp Web em uma plataforma profissional de vendas e atendimento. Sem migrar para outro app. Sem treinamento complicado. Nós instalamos para você, configuramos e ajudamos nas configurações que você precisa para começar a vender com mais velocidade.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a href="https://wa.me/551931670209?text=Quero%20implantar%20o%20CRM%20no%20meu%20Whatsapp.%20Como%20podemos%20seguir%3F" target="_blank" rel="noopener noreferrer" className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary hover:bg-primary-hover text-white rounded-full text-lg font-black transition-all hover:scale-105 active:scale-95 glow-primary overflow-hidden">
            <span className="relative z-10 flex items-center gap-2">
              Quero automatizar meu atendimento agora
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
          </a>
        </motion.div>
      </div>

      {/* Decorative Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background-dark to-transparent pointer-events-none" />
    </section>
  );
}
