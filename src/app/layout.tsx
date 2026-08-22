import type { Metadata } from "next";
import { Barlow, Montserrat } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Animal & Cia | Centro Veterinário em Brumado",
    template: "%s | Animal & Cia",
  },
  description: "Centro Veterinário referência em Brumado, Bahia. Oferecemos consultas, exames de sangue, raio-x, ultrassom, cirurgias e internação para o seu pet.",
  keywords: ["centro veterinário", "clínica veterinária", "Brumado", "Bahia", "veterinário", "exames veterinários", "raio-x animal", "ultrassom veterinário", "cirurgia veterinária", "internação pet", "farmácia veterinária"],
  openGraph: {
    title: "Animal & Cia | Centro Veterinário em Brumado",
    description: "Centro Veterinário referência em Brumado, Bahia. Oferecemos consultas, exames laboratoriais, imagem, cirurgias e internação.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${barlow.variable} ${montserrat.variable} h-full antialiased scroll-smooth`}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-full flex flex-col font-sans text-slate-900">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
