import { motion } from 'framer-motion';
import { TrendingUp, Clock, Users, ArrowRight, DollarSign } from 'lucide-react';


export default function RoiSection() {
  return (
    <section className="py-32 px-6 relative overflow-hidden bg-background-dark">
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary-hover/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm mb-6 border border-primary/20"
          >
            <TrendingUp className="w-4 h-4" />
            <span>PESQUISA DE MERCADO 2026</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black font-heading leading-tight mb-6"
          >
            O Custo Oculto que está <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-hover">drenando seu lucro</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-text-muted/90"
          >
            Enquanto sua equipe gasta horas em tarefas manuais no WhatsApp, você perde vendas, produtividade e motivação do seu time.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Lado Esquerdo - O Problema Visualizado */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-background-card/80 backdrop-blur-sm border border-border/50 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            <h3 className="text-2xl font-bold mb-8 text-text-main">Como seu dinheiro evapora hoje:</h3>
            
            <div className="space-y-6">
              {/* Salário vs Custo Efetivo */}
              <div className="p-6 rounded-2xl bg-background-dark/50 border border-white/5 relative overflow-hidden">
                <div className="flex justify-between items-end mb-4 relative z-10">
                  <div>
                    <p className="text-sm text-text-muted mb-1 font-medium">Salário CLT</p>
                    <p className="text-2xl font-bold text-text-main">R$ 2.000</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-text-muted/50 mb-2 mx-4" />
                  <div className="text-right">
                    <p className="text-sm text-text-muted mb-1 font-medium">Custo Real da Empresa</p>
                    <p className="text-2xl font-black text-red-400">R$ 3.360</p>
                  </div>
                </div>
                
                {/* Barra de Progresso Animada */}
                <div className="h-4 w-full bg-white/5 rounded-full overflow-hidden relative z-10 hidden md:block">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "60%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                    className="h-full bg-white/20 float-left"
                  />
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "40%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                    className="h-full bg-red-400/80 float-left"
                  />
                </div>
              </div>

              {/* O Desperdício */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="p-8 rounded-2xl bg-gradient-to-r from-red-500/10 to-transparent border border-red-500/20"
              >
                <div className="flex items-start gap-5">
                  <div className="bg-red-500/20 p-4 rounded-xl shrink-0">
                    <Clock className="w-8 h-8 text-red-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-red-500 mb-2">Desperdício Diário</h4>
                    <p className="text-text-main/90 mb-4 leading-relaxed">
                      Passar 2 horas por dia qualificando leads e fazendo follow-up manual custa a você <strong className="text-red-500 dark:text-red-400 font-extrabold">R$ 680,00 mensais</strong> apenas em tarefas repetitivas.
                    </p>
                    <div className="flex items-center gap-2 text-sm text-red-500/80 dark:text-red-400/80 font-medium">
                      <span>1 Atendente</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500/50"></span>
                      <span>2h/dia</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500/50"></span>
                      <span>Tarefas Manuais</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Lado Direito - A Solução (Resultados) */}
          <div className="space-y-6">
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-primary/20 to-primary-hover/5 border border-primary/30 rounded-3xl p-8 hover:border-primary/60 transition-colors"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-primary/20 p-3 rounded-lg">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-text-main">O Efeito Automação</h3>
              </div>
              <p className="text-lg text-text-main/90 leading-relaxed">
                Empresas que automatizam parte dos atendimentos relatam <strong className="text-primary font-bold">alta imediata em vendas e produtividade</strong>. O tempo antes gasto digitando a mesma coisa agora é focado em fechar negócios.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-background-card border border-border rounded-3xl p-8 hover:border-text-muted/30 transition-colors"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-primary/5 dark:bg-white/5 p-3 rounded-lg border border-primary/20 dark:border-white/10">
                  <Users className="w-6 h-6 text-text-main" />
                </div>
                <h3 className="text-xl font-bold text-text-main">Equipe mais feliz e motivada</h3>
              </div>
              <p className="text-text-muted leading-relaxed">
                Ninguém gosta de trabalho robótico. Tirando a sobrecarga de tarefas chatas e repetitivas, atendentes se sentem mais valorizados e apresentam níveis muito maiores de satisfação profissional.
              </p>
            </motion.div>

            {/* Destaque Final */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="pt-6"
            >
              <div className="bg-background-dark/50 border border-primary/20 rounded-2xl p-6 flex items-center justify-between gap-6 group hover:bg-primary/5 transition-colors cursor-pointer relative overflow-hidden">
                {/* Linha de luz animada */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]"></div>

                <div>
                  <h4 className="text-xl font-bold text-text-main mb-1">A mágica da automação:</h4>
                  <p className="text-sm font-medium text-primary">Tempo + Produtividade + Capacidade de Vendas</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-primary transition-all">
                  <DollarSign className="w-6 h-6 text-primary group-hover:text-white" />
                </div>
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}
