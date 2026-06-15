import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { FloatingSquares } from "@/components/floating-squares";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "STECH | Simple Tech",
  description:
    "Transformamos negócios através de soluções avançadas em Inteligência Artificial, Automação e Desenvolvimento de Software. Construímos o futuro da tecnologia.",

  keywords: ["STECH", "STECH Company", "Tecnologia", "Soluções Digitais", "Software", "Desenvolvimento Web", "Desenvolvimento de Software", "Automação", "Automação de Processos", "Inteligência Artificial", "IA", "Websites", "Landing Pages", "Sistemas Web", "Aplicações Web", "Software Personalizado", "Criação de Sites", "Website Profissional", "Transformação Digital", "Integrações", "APIs", "Cloud", "Consultoria Tech", "Consultoria em Tecnologia", "Empresa de Tecnologia", "Tech House", "Startup Tech", "Betim", "Minas Gerais", "Brasil", "UI UX", "Dashboards", "Power BI", "Desenvolvimento Frontend", "Next.js", "React", "Soluções Tecnológicas", "Digitalização", "Otimização de Processos", "Produtividade", "Inovação", "SaaS", "Sistemas Empresariais", "Automação Inteligente", "Apps", "Aplicativos", "Tecnologia Empresarial", "Infraestrutura Digital"],
  authors: [{ name: "STECH Company" }],
  openGraph: {
    title: "STECH Company | Simple Tech",
    description: "Transformamos negócios através de soluções avançadas em Inteligência Artificial, Automação e Desenvolvimento de Software.",
    type: "website",
  },
  icons: {
    icon: [
      {
        url: "/stechlogosemtexto.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/stechlogosemtexto.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/stechlogosemtexto.png",
        type: "image/png",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="bg-[#0a0f18]">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
         <FloatingSquares />
      </body>
    </html>
  );
}
