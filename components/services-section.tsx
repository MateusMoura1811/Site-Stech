"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: "Desenvolvimento Web",
    description: "Aplicações web e websites modernos e escaláveis com as melhores tecnologias do mercado.",
    features: ["React & Next.js", "APIs", "Cloud"],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: "Apps Mobile",
    description: "Aplicativos nativos e híbridos para iOS e Android com experiência premium.",
    features: ["React", "Flutter", "iOS/Android"],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Software Personalizado",
    description: "Soluções sob medida para automatizar e otimizar processos empresariais.",
    features: ["ERPs", "CRMs", "Integrações"],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    title: "Cloud & DevOps",
    description: "Soluções modernas para hospedar, integrar e automatizar sistemas com segurança, performance e escalabilidade.",
    features: ["AWS & Azure", "Integrações", "Automação"],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Cibersegurança",
    description: "Proteção avançada de dados e sistemas contra ameaças digitais.",
    features: ["Pentesting", "Auditorias", "Compliance", "Governança"],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Consultoria e soluções",
    description: "Analisamos as necessidades do seu negócio para identificar oportunidades, otimizar processos e desenvolver soluções tecnológicas eficientes.",
    features: ["Diagnóstico", "Estratégia", "Treinamento", "Otimização"],
  },
];

export function ServicesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="services" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#0a0f18] to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0a0f18] to-transparent" />
      </div>

      <div ref={containerRef} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-stech-cyan text-sm font-medium tracking-widest uppercase mb-4"
          >
            Nossos Serviços
          </motion.span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-stech-white mb-6">
            <span className="text-balance">Soluções Completas em</span>
            <br />
            <span className="gradient-text">Tecnologia</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-stech-white/60 leading-relaxed">
            Oferecemos um portfólio completo de serviços tecnológicos para
            impulsionar a transformação digital do seu negócio.
          </p>
        </motion.div>

        {/* Tech Carousel */}
        <div className="relative flex overflow-hidden py-6 mb-16 group border-y border-stech-cyan/10">
          <div className="flex animate-scroll group-hover:[animation-play-state:paused] shrink-0 min-w-max">
            {[
              "Aplicações Web",
              "Automação e IA",
              "React & Next.js",
              "APIs & Integrações",
              "Power BI",
              "Rust",
              "SQL",
              "Cloud",
              "Python",
              "Cybersecurity",
              "AWS",
              "DevOps",
              "Testes e QA",
              "UX/UI",
              "APIs",
              "E mais!",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 px-10 text-stech-white/60 hover:text-stech-cyan transition-colors duration-300 cursor-pointer shrink-0"
              >
                <div className="w-2 h-2 rounded-full bg-stech-cyan" />
                <span className="text-lg font-medium whitespace-nowrap">
                  {item}
                </span>
              </div>
            ))}
          </div>

          <div
            aria-hidden="true"
            className="flex animate-scroll group-hover:[animation-play-state:paused] shrink-0 min-w-max"
          >
            {[
              "Aplicações Web",
              "Automação e IA",
              "React & Next.js",
              "APIs & Integrações",
              "Power BI",
              "Rust",
              "SQL",
              "Cloud",
              "Python",
              "Cybersecurity",
              "AWS",
              "DevOps",
              "Testes e QA",
              "UX/UI",
              "APIs",
              "E mais!",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 px-10 text-stech-white/60 hover:text-stech-cyan transition-colors duration-300 cursor-pointer shrink-0"
              >
                <div className="w-2 h-2 rounded-full bg-stech-cyan" />
                <span className="text-lg font-medium whitespace-nowrap">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative h-full p-8 rounded-2xl glass border border-stech-cyan/10 hover:border-stech-cyan/30 transition-all duration-500 hover:-translate-y-2">
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-stech-cyan/5 to-stech-medium-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Icon */}
                <div className="relative mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-stech-cyan/20 to-stech-medium-blue/20 flex items-center justify-center text-stech-cyan group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <div className="absolute -inset-2 rounded-xl bg-stech-cyan/20 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
                </div>

                {/* Content */}
                <h3 className="relative text-xl font-semibold text-stech-white mb-3 group-hover:text-stech-cyan transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="relative text-stech-white/60 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="relative flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 text-xs font-medium text-stech-cyan/80 bg-stech-cyan/10 rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Arrow */}
                <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-6 h-6 text-stech-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
