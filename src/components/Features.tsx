import { motion } from 'framer-motion';
import { KanbanSquare, SendHorizontal, Users, BrainCircuit, BellRing, Contact2, Blocks, MessageSquareText } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

const featureList = [
  {
    icon: <KanbanSquare className="w-8 h-8 text-[--color-text-main]" />,
    title: "CRM Kanban integrado",
    desc: "Visualize cada lead em qual etapa do funil ele está. Crie abas, filtros, etiquetas e categorias personalizadas. Registre valor da negociação.",
    colSpan: "col-span-1 md:col-span-8",
    color: "from-primary/20 to-transparent",
    hasMockup: true
  },
  {
    icon: <MessageSquareText className="w-8 h-8 text-[--color-text-main]" />,
    title: "Chatbot & Follow-up",
    desc: "Mensagens automáticas para qualificar leads, dar boas-vindas e follow-up no piloto automático.",
    colSpan: "col-span-1 md:col-span-4",
    color: "from-primary/20 to-transparent"
  },
  {
    icon: <SendHorizontal className="w-8 h-8 text-[--color-text-main]" />,
    title: "Envio em Massa",
    desc: "Crie campanhas e dispare para centenas de contatos com personalização de forma ilimitada.",
    colSpan: "col-span-1 md:col-span-4",
    color: "from-primary/20 to-transparent"
  },
  {
    icon: <Users className="w-8 h-8 text-[--color-text-main]" />,
    title: "Vários Atendentes",
    desc: "Distribua conversas entre sua equipe, veja quem está atendendo quem em tempo real.",
    colSpan: "col-span-1 md:col-span-4",
    color: "from-primary/20 to-transparent"
  },
  {
    icon: <BrainCircuit className="w-8 h-8 text-[--color-text-main]" />,
    title: "Integração IA",
    desc: "Respostas sugeridas e tradução ou transcrição de áudio em tempo real.",
    colSpan: "col-span-1 md:col-span-4",
    color: "from-primary/20 to-transparent"
  },
  {
    icon: <BellRing className="w-8 h-8 text-[--color-text-main]" />,
    title: "Lembretes & Agendamentos",
    desc: "Crie lembretes de retorno, com integração direta ao Google Calendar e alertas automáticos.",
    colSpan: "col-span-1 md:col-span-6",
    color: "from-primary/20 to-transparent"
  },
  {
    icon: <Contact2 className="w-8 h-8 text-[--color-text-main]" />,
    title: "Gestão de Contatos Automática",
    desc: "Importe, exporte e salve automaticamente quem te manda mensagem.",
    colSpan: "col-span-1 md:col-span-3",
    color: "from-primary/20 to-transparent"
  },
  {
    icon: <Blocks className="w-8 h-8 text-text-main" />,
    title: "Webhooks e API",
    desc: "Conecte o CRM WHATSAPP ao seu CRM externo, ERP ou Make/Zapier.",
    colSpan: "col-span-1 md:col-span-3",
    color: "from-primary/20 to-transparent"
  }
];

export default function Features() {
  return (
    <section className="py-24 px-6 bg-background-dark relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-5xl md:text-7xl font-black font-heading leading-none"
          >
            Tudo que você precisa para <br className="hidden md:block"/> vender mais em <span className="text-primary">um só lugar</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-auto">
          {featureList.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.8, ease: "easeOut" }}
              className={twMerge(
                "group relative overflow-hidden rounded-[2rem] bg-background-card border border-border p-8 flex flex-col justify-between cursor-pointer",
                feature.colSpan
              )}
            >
              {/* Card Gradient Background Hover */}
              <div 
                className={twMerge(
                  "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-700",
                  feature.color
                )} 
              />
              
              <div className="relative z-10 flex flex-col gap-6 h-full">
                <div className="flex items-center justify-between">
                  {/* Icon Wrapper */}
                  <div className="p-4 bg-text-main/5 border border-border rounded-2xl backdrop-blur-md">
                    {feature.icon}
                  </div>
                </div>

                <div className="mt-auto">
                  <h3 className="text-2xl md:text-3xl font-bold font-heading mb-4 leading-tight text-text-main group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-text-main group-hover:to-text-main/70 transition-all duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-lg text-text-muted leading-relaxed">
                    {feature.desc}
                  </p>
                </div>

                {/* Optional Mockup Area for large cards */}
                {feature.hasMockup && (
                  <div className="absolute right-0 bottom-0 w-1/2 h-full hidden md:block opacity-30 group-hover:opacity-70 group-hover:translate-x-2 transition-all duration-700 pointer-events-none">
                    <div className="absolute top-1/2 right-10 translate-y-[-50%] w-64 h-48 bg-text-main/5 border border-border rounded-xl backdrop-blur-lg flex gap-2 p-4 shadow-2xl">
                       <div className="w-1/3 bg-text-main/10 rounded-md h-full rounded-tl-xl rounded-bl-xl" />
                       <div className="w-1/3 bg-text-main/10 rounded-md h-3/4" />
                       <div className="w-1/3 bg-text-main/10 rounded-md h-1/2" />
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
