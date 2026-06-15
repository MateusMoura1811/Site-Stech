"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const processSteps = [
  {
    number: "01",
    title: "Descoberta",
    description: "Entendemos suas necessidades, desafios e objetivos de negócio através de consultorias e análises profundas.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    details: ["Análise de Requisitos", "Pesquisa de Mercado", "Definição de Escopo"],
  },
  {
    number: "02",
    title: "Estratégia",
    description: "Planejamos o desenvolvimento do projeto de forma clara e simples",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
    details: ["Arquitetura de Solução", "Roadmap Detalhado", "Tech Stack"],
  },
  {
    number: "03",
    title: "Design",
    description: "Criamos protótipos e interfaces focadas em experiência do usuário e conversão.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
    details: ["Wireframes", "UI/UX Design", "Prototipagem"],
  },
  {
    number: "04",
    title: "Desenvolvimento",
    description: "Construímos sua solução com as melhores práticas e tecnologias modernas em sprints ágeis.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    details: ["Dev", "Code Reviews", "CI/CD"],
  },
  {
    number: "05",
    title: "Testes",
    description: "Validamos qualidade com testes automatizados, de performance, segurança e usabilidade.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    details: ["QA", "Performance", "Experiência do Usuário"],
  },
  {
    number: "06",
    title: "Lançamento",
    description: "Entregamos a solução, acompanhamos os primeiros resultados e oferecemos suporte para evolução contínua do projeto.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    ),
    details: ["Deploy", "Acompanhamento", "Suporte Evolutivo"],
  },
];

export function ProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="process" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <motion.div
          animate={{ opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-stech-medium-blue/20 rounded-full blur-[150px]"
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
            Nossa Metodologia
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-stech-white mb-6">
            <span className="text-balance">Do Conceito à</span>
            <br />
            <span className="gradient-text">Entrega Final</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-stech-white/60 leading-relaxed">
            Um processo estruturado e transparente que garante entregas de
            qualidade dentro do prazo e orçamento.
          </p>
        </motion.div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Connection Line */}
        <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 -translate-x-1/2 hidden md:block z-0"/>

        {/* Glow */}
        <div className="absolute inset-0 w-[6px] bg-stech-cyan/20 blur-xl rounded-full" />

        {/* Main Line */}
        <div className="relative w-[2px] h-full bg-gradient-to-b from-stech-cyan via-stech-medium-blue to-stech-deep-blue rounded-full" />


          {/* Steps */}
          <div className="space-y-12 lg:space-y-0">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative lg:grid lg:grid-cols-2 lg:gap-12 ${
                  index % 2 === 0 ? "" : "lg:direction-rtl"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 lg:left-1/2 top-8 lg:top-1/2 -translate-x-1/2 lg:-translate-y-1/2 z-10 hidden md:block">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
                    className="w-4 h-4 rounded-full bg-gradient-to-br from-stech-cyan to-stech-medium-blue ring-4 ring-[#0a0f18]"
                  />
                </div>

                {/* Content Card */}
                <div
                  className={`relative ${
                    index % 2 === 0
                      ? "lg:pr-12 lg:text-right"
                      : "lg:col-start-2 lg:pl-12 lg:text-left"
                  }`}
                >
                  <div
                    className={`group relative z-10 p-8 rounded-2xl glass border border-stech-cyan/10 hover:border-stech-cyan/30 transition-all duration-500 ${
                      index % 2 === 1 ? "lg:direction-ltr" : ""
                    }`}
                  >
                    {/* Background Glow */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-stech-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className={`relative flex flex-col ${index % 2 === 0 ? "lg:items-end" : "lg:items-start"}`}>
                      {/* Step Number & Icon */}
                      <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? "lg:flex-row-reverse" : ""}`}>
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-stech-cyan/20 to-stech-medium-blue/20 flex items-center justify-center text-stech-cyan group-hover:scale-110 transition-transform duration-300">
                          {step.icon}
                        </div>
                        <span className="text-4xl font-bold text-stech-cyan/20 group-hover:text-stech-cyan/40 transition-colors duration-300">
                          {step.number}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl font-bold text-stech-white mb-3 group-hover:text-stech-cyan transition-colors duration-300">
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p className="text-stech-white/60 leading-relaxed mb-6">
                        {step.description}
                      </p>

                      {/* Details */}
                      <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? "lg:justify-end" : "lg:justify-start"}`}>
                        {step.details.map((detail) => (
                          <span
                            key={detail}
                            className="px-3 py-1 text-xs font-medium text-stech-cyan/80 bg-stech-cyan/10 rounded-full"
                          >
                            {detail}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-stech-navy bg-gradient-to-r from-stech-cyan to-stech-medium-blue rounded-full hover:shadow-2xl hover:shadow-stech-cyan/30 hover:scale-105 transition-all duration-300 group"
          >
            <span>Iniciar seu Projeto</span>
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
