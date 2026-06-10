"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const projects = [
  {
    id: 1,
    title: "Portal de Atendimento IA",
    category: "Inteligência Artificial",
    description: "Sistema de atendimento ao cliente com chatbot inteligente e análise de sentimento em tempo real.",
    technologies: ["React", "Node.js", "OpenAI", "MongoDB"],
    metrics: { users: "50k+", satisfaction: "96%", response: "< 2s" },
    color: "from-stech-cyan to-stech-medium-blue",
  },
  {
    id: 2,
    title: "Dashboard Analytics",
    category: "Data & Analytics",
    description: "Plataforma de business intelligence com visualização de dados em tempo real e relatórios automatizados.",
    technologies: ["Next.js", "Python", "PostgreSQL", "D3.js"],
    metrics: { insights: "10M+", performance: "99.9%", reports: "500+" },
    color: "from-stech-medium-blue to-stech-deep-blue",
  },
  {
    id: 3,
    title: "App Fintech Mobile",
    category: "Mobile Development",
    description: "Aplicativo de gestão financeira com IA para análise de gastos e recomendações personalizadas.",
    technologies: ["React Native", "Firebase", "ML Kit", "Stripe"],
    metrics: { downloads: "100k+", rating: "4.9", transactions: "1M+" },
    color: "from-stech-teal to-stech-cyan",
  },
  {
    id: 4,
    title: "Sistema ERP Industrial",
    category: "Software Enterprise",
    description: "ERP customizado para indústria com módulos de produção, estoque, vendas e relatórios avançados.",
    technologies: ["Vue.js", ".NET", "SQL Server", "Azure"],
    metrics: { efficiency: "+40%", uptime: "99.99%", modules: "15+" },
    color: "from-stech-deep-blue to-stech-teal",
  },
];

const categories = ["Todos", "Inteligência Artificial", "Data & Analytics", "Mobile Development", "Software Enterprise"];

export function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects = activeCategory === "Todos"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <motion.div
          animate={{ opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-stech-deep-blue/20 rounded-full blur-[150px]"
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
            Portfólio
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-stech-white mb-6">
            <span className="text-balance">Projetos que</span>
            <br />
            <span className="gradient-text">Transformam Negócios</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-stech-white/60 leading-relaxed">
            Conheça alguns dos projetos que desenvolvemos para empresas líderes
            em diversos setores.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 text-sm font-medium rounded-full transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-stech-cyan to-stech-medium-blue text-stech-navy"
                  : "glass border border-stech-cyan/10 text-stech-white/70 hover:text-stech-cyan hover:border-stech-cyan/30"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group relative"
            >
              <div className="relative h-full rounded-3xl overflow-hidden glass-strong border border-stech-cyan/10 hover:border-stech-cyan/30 transition-all duration-500">
                {/* Gradient Header */}
                <div
                  className={`relative h-48 bg-gradient-to-br ${project.color} p-8`}
                >
                  {/* Pattern Overlay */}
                  <div className="absolute inset-0 grid-pattern opacity-20" />
                  
                  {/* Category Badge */}
                  <div className="relative">
                    <span className="px-3 py-1 text-xs font-medium text-stech-white bg-stech-white/20 rounded-full backdrop-blur-sm">
                      {project.category}
                    </span>
                  </div>

                  {/* Floating Elements */}
                  <motion.div
                    animate={hoveredProject === project.id ? { scale: 1.2, rotate: 10 } : { scale: 1, rotate: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-8 right-8 w-16 h-16 rounded-2xl bg-stech-white/10 backdrop-blur-sm flex items-center justify-center"
                  >
                    <span className="text-2xl font-bold text-stech-white">
                      0{project.id}
                    </span>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="relative p-8">
                  <h3 className="text-2xl font-bold text-stech-white mb-3 group-hover:text-stech-cyan transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-stech-white/60 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium text-stech-cyan bg-stech-cyan/10 border border-stech-cyan/20 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4 pt-6 border-t border-stech-cyan/10">
                    {Object.entries(project.metrics).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-lg font-bold gradient-text">
                          {value}
                        </div>
                        <div className="text-xs text-stech-white/40 capitalize">
                          {key}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hover Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                  className="absolute inset-0 flex items-center justify-center bg-stech-navy/80 backdrop-blur-sm"
                >
                  <button className="px-6 py-3 text-sm font-medium text-stech-navy bg-gradient-to-r from-stech-cyan to-stech-medium-blue rounded-full hover:shadow-lg hover:shadow-stech-cyan/30 transition-all duration-300">
                    Ver Detalhes
                  </button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-stech-cyan hover:text-stech-white transition-colors duration-300 group"
          >
            <span className="text-lg font-medium">Ver todos os projetos</span>
            <svg
              className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300"
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
