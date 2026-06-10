"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  { name: "Início", href: "#hero" },
  { name: "Serviços", href: "#services" },
  { name: "IAs", href: "#ai-solutions" },
  { name: "Automação", href: "#automations" },
  { name: "Processo", href: "#process" },
  { name: "Contato", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  
  const navBackground = useTransform(
    scrollY,
    [0, 100],
    ["rgba(10, 15, 24, 0)", "rgba(10, 15, 24, 0.9)"]
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      style={{ backgroundColor: navBackground }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "backdrop-blur-xl border-b border-stech-cyan/10" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="#hero" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-stech-cyan to-stech-medium-blue flex items-center justify-center group-hover:shadow-lg group-hover:shadow-stech-cyan/30 transition-all duration-300">
                  <span className="text-xl font-bold text-stech-navy">
                    <Image
                      src="/stechlogosemtexto.png"
                      alt="STECH Logo"
                      width={56}
                      height={56}
                    />
                  </span>
                </div>
                <div className="absolute -inset-1 rounded-lg bg-gradient-to-br from-stech-cyan to-stech-medium-blue opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-300" />
              </div>
              <span className="text-xl font-bold text-stech-white tracking-tight">
                STECH
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden lg:flex items-center gap-1"
          >
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative px-4 py-2 text-sm text-stech-white/70 hover:text-stech-cyan transition-colors duration-300 group"
              >
                <span className="relative z-10">{item.name}</span>
                <motion.div
                  className="absolute inset-0 rounded-lg bg-stech-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
                <motion.div
                  className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-stech-cyan to-stech-medium-blue group-hover:w-6 transition-all duration-300"
                />
              </Link>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden lg:block"
          >
            <Link
              href="#contact"
              className="relative inline-flex items-center gap-2 px-6 py-2.5 text-sm font-medium text-stech-navy bg-gradient-to-r from-stech-cyan to-stech-medium-blue rounded-full overflow-hidden group transition-all duration-300 hover:shadow-lg hover:shadow-stech-cyan/30"
            >
              <span className="relative z-10">Iniciar Projeto</span>
              <svg
                className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              <div className="absolute inset-0 bg-gradient-to-r from-stech-medium-blue to-stech-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-stech-white/70 hover:text-stech-cyan transition-colors"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{
            height: isMobileMenuOpen ? "auto" : 0,
            opacity: isMobileMenuOpen ? 1 : 0,
          }}
          className="lg:hidden overflow-hidden"
        >
          <div className="py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 text-stech-white/70 hover:text-stech-cyan hover:bg-stech-cyan/10 rounded-lg transition-all duration-300"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block mx-4 mt-4 px-6 py-3 text-center text-sm font-medium text-stech-navy bg-gradient-to-r from-stech-cyan to-stech-medium-blue rounded-full"
            >
              Iniciar Projeto
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}
