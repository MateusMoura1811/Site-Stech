"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

export function ContactSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    service: "",
    number: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      if (!response.ok) {
        throw new Error("Erro ao enviar");
      }

      setIsSubmitted(true);

      setFormState({
        name: "",
        email: "",
        company: "",
        message: "",
        service: "",
        number: "",
      });

      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    } catch (error) {
      console.error(error);
      alert("Erro ao enviar a mensagem. Por favor, tente novamente mais tarde.");
    } finally {
      // 👈 O 'finally' garante que o estado mude independente de dar erro ou sucesso
      setIsSubmitting(false);
    }
  };

  const services = [
    "Consultoria",
    "Desenvolvimento Web",
    "Apps Mobile",
    "Inteligência Artificial",
    "Automação",
    "Outro",
  ];

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <motion.div
          animate={{ opacity: [0.2, 0.35, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-t from-stech-cyan/20 to-transparent blur-[100px]"
        />
      </div>

      <div ref={containerRef} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-stech-cyan text-sm font-medium tracking-widest uppercase mb-4">
            Contato
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-stech-white mb-6">
            <span className="text-balance">Vamos Construir</span>
            <br />
            <span className="gradient-text">Algo Incrível</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-stech-white/60 leading-relaxed">
            Vamos descobrir, entender sua necessidade e criar a solução ideal para o seu negócio.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Info Cards */}
            <div className="space-y-4">
              {[
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  ),
                  label: "Email",
                  value: "moura.stechcompany@gmail.com",
                  href: "mailto:moura.stechcompany@gmail.com",
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  ),
                  label: "Telefone",
                  value: "+55 (31) 999567-1856",
                  href: "tel:+5531995671856",
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ),
                  label: "Localização",
                  value: "Minas Gerais, Brasil",
                },
              ].map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="group flex items-center gap-4 p-4 rounded-2xl glass border border-stech-cyan/10 hover:border-stech-cyan/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-stech-cyan/20 to-stech-medium-blue/20 flex items-center justify-center text-stech-cyan group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-sm text-stech-white/50">{item.label}</div>
                    <div className="text-stech-white group-hover:text-stech-cyan transition-colors duration-300">
                      {item.value}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.6 }}
            >
              <div className="text-sm text-stech-white/50 mb-4">Siga-nos</div>
              <div className="flex gap-3">
                {["LinkedIn", "Instagram"].map((social) => (
                  <a
                    key={social}
                    href="https://www.linkedin.com/company/stech-company/?viewAsMember=true"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl glass border border-stech-cyan/10 flex items-center justify-center text-stech-white/70 hover:text-stech-cyan hover:border-stech-cyan/30 transition-all duration-300"
                  >
                    <span className="sr-only">{social}</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      {social === "LinkedIn" && (
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      )}
                      {social === "Instagram" && (
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      )}
                    </svg>
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="relative p-8 rounded-3xl glass-strong border border-stech-cyan/20">
              {/* Success Message */}
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute inset-0 flex items-center justify-center bg-stech-navy/95 rounded-3xl z-10"
                >
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-stech-cyan to-stech-medium-blue flex items-center justify-center">
                      <svg className="w-8 h-8 text-stech-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-stech-white mb-2">Mensagem Enviada!</h3>
                    <p className="text-stech-white/60">Entraremos em contato em breve.</p>
                  </div>
                </motion.div>
              )}

              <div className="space-y-6">
                {/* Name & Email */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-stech-white/70 mb-2">
                      Nome *
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-stech-navy/50 border border-stech-cyan/20 text-stech-white placeholder-stech-white/30 focus:outline-none focus:border-stech-cyan/50 focus:ring-1 focus:ring-stech-cyan/30 transition-all duration-300"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-stech-white/70 mb-2">
                      Email *
                    </label>
                    <input
                      type="email" // 👈 Corrigido de "type" para "email"
                      id="email"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-stech-navy/50 border border-stech-cyan/20 text-stech-white placeholder-stech-white/30 focus:outline-none focus:border-stech-cyan/50 focus:ring-1 focus:ring-stech-cyan/30 transition-all duration-300"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                {/* Company */}
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-stech-white/70 mb-2">
                    Empresa
                  </label>
                  <input
                    type="text"
                    id="company"
                    value={formState.company}
                    onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-stech-navy/50 border border-stech-cyan/20 text-stech-white placeholder-stech-white/30 focus:outline-none focus:border-stech-cyan/50 focus:ring-1 focus:ring-stech-cyan/30 transition-all duration-300"
                    placeholder="Sua empresa"
                  />
                </div>

                {/* number */}
                <div>
                  <label htmlFor="number" className="block text-sm font-medium text-stech-white/70 mb-2">
                    Contato:
                  </label>
                  <input
                    type="text"
                    id="number"
                    value={formState.number}
                    onChange={(e) => setFormState({ ...formState, number: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-stech-navy/50 border border-stech-cyan/20 text-stech-white placeholder-stech-white/30 focus:outline-none focus:border-stech-cyan/50 focus:ring-1 focus:ring-stech-cyan/30 transition-all duration-300"
                    placeholder="Número para contato"
                  />
                </div>

                {/* Service */}
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-stech-white/70 mb-2">
                    Serviço de Interesse
                  </label>
                  <select
                    id="service"
                    value={formState.service}
                    onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-stech-cyan/20 text-stech-white focus:outline-none focus:border-stech-cyan/50 focus:ring-1 focus:ring-stech-cyan/30 transition-all duration-300"
                  >
                    <option value="" className="bg-stech-navy">Selecione um serviço</option>
                    {services.map((service) => (
                      <option key={service} value={service} className="bg-stech-navy">
                        {service}
                      </option>
                    ))} 
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-stech-white/70 mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    id="message"
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-stech-navy/50 border border-stech-cyan/20 text-stech-white placeholder-stech-white/30 focus:outline-none focus:border-stech-cyan/50 focus:ring-1 focus:ring-stech-cyan/30 transition-all duration-300 resize-none"
                    placeholder="Conte-nos sobre seu projeto..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 text-base font-semibold text-stech-navy bg-gradient-to-r from-stech-cyan to-stech-medium-blue rounded-xl hover:shadow-lg hover:shadow-stech-cyan/30 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      <span>Enviando...</span>
                    </>
                  ) : (
                    <>
                      <span>Enviar Mensagem</span>
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}