import type { Metadata } from "next";
import { Inter, Nunito } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
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
      className={`${inter.variable} ${nunito.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans text-slate-900">{children}</body>
    </html>
  );
}
