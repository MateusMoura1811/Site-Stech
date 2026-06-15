"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const automations = [
  {
    icon: "🔄",
    title: "Workflows Inteligentes",
    description: "Automatização de fluxos de trabalho complexos com integração entre sistemas e tomada de decisão automatizada.",
    stats: { value: "até 85%", label: "Redução de tarefas manuais" },
  },
  {
    icon: "📊",
    title: "Relatórios Automáticos",
    description: "Geração automática de relatórios e dashboards em tempo real com dados atualizados continuamente.",
    stats: { value: "10x", label: "Mais rápido que manual" },
  },
  {
    icon: "🤖",
    title: "RPA & Bots",
    description: "Robôs de software para automatizar tarefas repetitivas em sistemas legados e aplicações web.",
    stats: { value: "24/7", label: "Operação contínua" },
  },
  {
    icon: "🔗",
    title: "Integrações API",
    description: "Conexão automatizada entre plataformas, sincronização de dados e orquestração de serviços.",
    stats: { value: "Diversas", label: "Integrações disponíveis" },
  },
];

const integrations = [
  { name: "Salesforce", icon: "☁️" },
  { name: "SAP", icon: "📦" },
  { name: "HubSpot", icon: "🎯" },
  { name: "Slack", icon: "💬" },
  { name: "Google", icon: "🔍" },
  { name: "AWS", icon: "⚡" },
  { name: "Zapier", icon: "⚙️" },
  { name: "Microsoft", icon: "📊" },
];

export function AutomationsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="automations" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <motion.div
          animate={{
            rotate: [0, 360],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-stech-cyan/5 rounded-full"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-stech-medium-blue/5 rounded-full"
        />
      </div>

      <div ref={containerRef} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block text-stech-cyan text-sm font-medium tracking-widest uppercase mb-4">
            Automação Inteligente
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-stech-white mb-6">
            <span className="text-balance">Automatize Processos</span>
            <br />
            <span className="gradient-text">Escale Resultados</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-stech-white/60 leading-relaxed">
            Eliminamos tarefas repetitivas e conectamos seus sistemas para criar
            operações mais eficientes e escaláveis.
          </p>
        </motion.div>

        {/* Automation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {automations.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative h-full p-8 rounded-2xl glass border border-stech-cyan/10 hover:border-stech-cyan/30 transition-all duration-500">
                {/* Background Glow on Hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-stech-cyan/5 to-stech-medium-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative flex flex-col lg:flex-row lg:items-center gap-6">
                  {/* Icon */}
                  <div className="text-4xl">{item.icon}</div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-stech-white mb-2 group-hover:text-stech-cyan transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-stech-white/60 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Stats */}
                  <div className="text-center lg:text-right">
                    <div className="text-3xl font-bold gradient-text">
                      {item.stats.value}
                    </div>
                    <div className="text-xs text-stech-white/50">
                      {item.stats.label}
                    </div>
                  </div>
                </div>

                {/* Connection Lines Animation */}
                <motion.div
                  className="absolute top-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                >
                  <svg viewBox="0 0 64 64" className="w-full h-full text-stech-cyan/20">
                    <motion.path
                      d="M 32 0 L 32 32 L 64 32"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeDasharray="0 1"
                      animate={{ strokeDasharray: ["0 100", "100 0"] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    />
                  </svg>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Integrations Marquee */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative overflow-hidden"
        >
          <div className="text-center mb-8">
            <span className="text-sm text-stech-white/50">
              Integração com mais de 500+ plataformas
            </span>
          </div>

          {/* Gradient Edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0a0f18] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0a0f18] to-transparent z-10" />

          {/* Scrolling Integrations */}
          <motion.div
            animate={{ x: [0, -400] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
            className="flex gap-6 py-4"
          >
            {[...integrations, ...integrations, ...integrations].map((integration, index) => (
              <div
                key={`${integration.name}-${index}`}
                className="flex items-center gap-3 px-6 py-3 rounded-xl glass border border-stech-cyan/10 whitespace-nowrap"
              >
                <span className="text-xl">{integration.icon}</span>
                <span className="text-stech-white/70 font-medium">
                  {integration.name}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 text-base font-medium text-stech-white border border-stech-cyan/30 rounded-full hover:bg-stech-cyan/10 hover:border-stech-cyan/50 transition-all duration-300 group"
          >
            <span>Automatize seu negócio</span>
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
