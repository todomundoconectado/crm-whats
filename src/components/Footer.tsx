
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-background-card pt-32 pb-10 px-6 overflow-hidden border-t border-border">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary opacity-10 blur-[150px] pointer-events-none rounded-full" />
      
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center relative z-10">
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-black font-heading mb-8"
        >
          Seu concorrente já está automatizando. <span className="text-primary">E você?</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xl text-text-muted max-w-2xl mb-12"
        >
          Cada dia sem o CRM WHATSAPP é um dia com follow-up esquecido, lead perdido e atendimento lento. A ferramenta está pronta. A implantação é rápida. O resultado começa na primeira semana.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center gap-6 mb-32 w-full sm:w-auto"
        >
          <a href="https://wa.me/551931670209?text=Quero%20implantar%20o%20CRM%20no%20meu%20Whatsapp.%20Como%20podemos%20seguir%3F" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary hover:bg-primary-hover text-white rounded-full text-lg font-black transition-all hover:scale-105 active:scale-95 glow-primary overflow-hidden">
            <span className="relative z-10 flex items-center gap-2">
              Quero o CRM WHATSAPP agora
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
          </a>
          
          <a href="https://wa.me/551931670209?text=Quero%20implantar%20o%20CRM%20no%20meu%20Whatsapp.%20Como%20podemos%20seguir%3F" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-4 rounded-full text-lg font-bold text-text-main bg-text-main/5 hover:bg-text-main/10 border border-border flex items-center justify-center transition-colors">
            Ver demonstração
          </a>
        </motion.div>

        {/* Footer Bottom */}
        <div className="w-full pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-text-muted">
          <div className="font-heading font-bold text-text-main text-xl tracking-widest uppercase">
            CRM <span className="text-primary">WHATSAPP</span>
          </div>
          <div>© 2026 Todo Mundo Conectado. Todos os direitos reservados.</div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-text-main transition-colors">Termos</a>
            <a href="#" className="hover:text-text-main transition-colors">Privacidade</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
