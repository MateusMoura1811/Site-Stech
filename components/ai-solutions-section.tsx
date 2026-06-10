"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const aiSolutions = [
  {
    id: "nlp",
    title: "Processamento de Linguagem Natural",
    shortTitle: "NLP",
    description: "Chatbots inteligentes, análise de sentimento e processamento de texto avançado para automatizar interações.",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    capabilities: ["Chatbots IA", "Análise de Sentimento", "Tradução Automática", "Resumo de Textos"],
    gradient: "from-stech-cyan to-stech-medium-blue",
  },
  {
    id: "cv",
    title: "Visão Computacional",
    shortTitle: "Computer Vision",
    description: "Reconhecimento de imagens, detecção de objetos e análise visual para automatizar processos visuais.",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
    capabilities: ["OCR Inteligente",
    "Reconhecimento de Imagens",
    "Leitura de Documentos",
    "Automação Visual"],
    gradient: "from-stech-medium-blue to-stech-deep-blue",
  },
  {
    id: "ml",
    title: "Machine Learning",
    shortTitle: "ML",
    description: "Modelos preditivos personalizados para análise de dados e tomada de decisões baseada em IA.",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    capabilities: ["Previsão de Demanda", "Detecção de Fraudes", "Recomendações", "Clustering"],
    gradient: "from-stech-teal to-stech-cyan",
  },
  {
    id: "genai",
    title: "IA Generativa",
    shortTitle: "Gen AI",
    description: "Criação de conteúdo automatizado com modelos de linguagem avançados como GPT e Claude.",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
      </svg>
    ),
    capabilities: ["Geração de Texto", "Criação de Imagens", "Assistentes IA", "Code Generation"],
    gradient: "from-stech-deep-blue to-stech-teal",
  },
];

export function AISolutionsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="ai-solutions" className="relative py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            opacity: [0.2, 0.4, 0.2],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-stech-cyan/10 rounded-full blur-[150px]"
        />
        <motion.div
          animate={{
            opacity: [0.2, 0.3, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/4 -left-32 w-[500px] h-[500px] bg-stech-medium-blue/20 rounded-full blur-[120px]"
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
            Inteligência Artificial
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-stech-white mb-6">
            <span className="text-balance">Soluções Avançadas em</span>
            <br />
            <span className="gradient-text">IA & Machine Learning</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-stech-white/60 leading-relaxed">
            Implementamos soluções de Inteligência Artificial de ponta para
            automatizar processos e criar experiências inteligentes.
          </p>
        </motion.div>

        {/* Interactive Cards */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left - Navigation Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            {aiSolutions.map((solution, index) => (
              <motion.div
                key={solution.id}
                onClick={() => setActiveIndex(index)}
                whileHover={{ x: 10 }}
                className={`relative p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                  activeIndex === index
                    ? "glass-strong border-stech-cyan/30"
                    : "glass border-transparent hover:border-stech-cyan/10"
                }`}
              >
                {/* Active Indicator */}
                {activeIndex === index && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-12 bg-gradient-to-b from-stech-cyan to-stech-medium-blue rounded-full"
                  />
                )}

                <div className="flex items-center gap-4">
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${solution.gradient} bg-opacity-20 flex items-center justify-center text-stech-white transition-all duration-300 ${
                      activeIndex === index ? "opacity-100 scale-110" : "opacity-60"
                    }`}
                  >
                    {solution.icon}
                  </div>
                  <div>
                    <h3
                      className={`text-lg font-semibold transition-colors duration-300 ${
                        activeIndex === index ? "text-stech-cyan" : "text-stech-white"
                      }`}
                    >
                      {solution.title}
                    </h3>
                    <p className="text-sm text-stech-white/50">{solution.shortTitle}</p>
                  </div>
                  <svg
                    className={`w-5 h-5 ml-auto transition-all duration-300 ${
                      activeIndex === index
                        ? "text-stech-cyan translate-x-0 opacity-100"
                        : "text-stech-white/30 -translate-x-2 opacity-0"
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right - Detail Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="relative p-8 lg:p-10 rounded-3xl glass-strong border border-stech-cyan/20 overflow-hidden">
              {/* Background Glow */}
              <div
                className={`absolute -top-32 -right-32 w-64 h-64 rounded-full bg-gradient-to-br ${aiSolutions[activeIndex].gradient} opacity-20 blur-[100px] transition-all duration-500`}
              />

              {/* Content */}
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="relative"
              >
                {/* Icon */}
                <div
                  className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${aiSolutions[activeIndex].gradient} flex items-center justify-center text-stech-white mb-8`}
                >
                  {aiSolutions[activeIndex].icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl lg:text-3xl font-bold text-stech-white mb-4">
                  {aiSolutions[activeIndex].title}
                </h3>

                {/* Description */}
                <p className="text-stech-white/70 leading-relaxed mb-8">
                  {aiSolutions[activeIndex].description}
                </p>

                {/* Capabilities */}
                <div className="space-y-3">
                  <span className="text-sm text-stech-cyan font-medium">Capacidades:</span>
                  <div className="flex flex-wrap gap-2">
                    {aiSolutions[activeIndex].capabilities.map((capability, idx) => (
                      <motion.span
                        key={capability}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: idx * 0.1 }}
                        className="px-4 py-2 text-sm font-medium text-stech-white bg-stech-cyan/10 border border-stech-cyan/20 rounded-full"
                      >
                        {capability}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-8 inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-stech-navy bg-gradient-to-r from-stech-cyan to-stech-medium-blue rounded-full hover:shadow-lg hover:shadow-stech-cyan/30 transition-all duration-300"
                >
                  <span>Saiba Mais</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.button>
              </motion.div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 w-12 h-12 rounded-xl glass border border-stech-cyan/20 flex items-center justify-center text-stech-cyan"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </motion.div>

            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-4 -left-4 w-10 h-10 rounded-lg glass border border-stech-medium-blue/20 flex items-center justify-center text-stech-medium-blue"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
