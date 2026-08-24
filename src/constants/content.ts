import { ContentDictionary } from '@/types';

export const CONTENT: ContentDictionary = {
  header: {
    navLinks: [
      { label: 'Serviços', href: '#servicos' },
      { label: 'Sobre', href: '#sobre' },
      { label: 'Localização', href: '#localizacao' },
      { label: 'Contato', href: '#contato' },
    ],
    cta: "Fale no WhatsApp",
  },
  hero: {
    title: "O Cuidado que seu Pet Merece, Perto de Você",
    subtitle: "No Centro Veterinário Animal & Cia em Brumado, oferecemos estrutura completa, profissionais qualificados e muito amor para cuidar da saúde do seu melhor amigo.",
    cta: "Agendar Consulta",
    imagePlaceholder: "Imagem Placeholder",
  },
  services: {
    sectionTitle: "Nossos Serviços",
    sectionSubtitle: "Cuidado completo para a saúde e bem-estar do seu melhor amigo.",
    items: [
      {
        title: "Consultas",
        description: "Atendimento clínico geral com foco no carinho, prevenção e diagnóstico preciso para todas as fases da vida do seu pet."
      },
      {
        title: "Vacinas",
        description: "Imunização completa e segura com vacinas importadas de alta qualidade para proteger contra as principais doenças."
      },
      {
        title: "Cirurgias",
        description: "Centro cirúrgico totalmente equipado para procedimentos gerais e de alta complexidade com total segurança."
      },
      {
        title: "Raio-X",
        description: "Diagnóstico por imagem digital rápido e de alta precisão realizado diretamente na estrutura da clínica."
      },
      {
        title: "Ultrassonografia",
        description: "Exames de imagem avançados para avaliações detalhadas de órgãos e tecidos internos."
      },
      {
        title: "ECG",
        description: "Avaliação cardiológica completa e segura, essencial para check-ups e liberação cirúrgica."
      },
      {
        title: "Exames de Sangue",
        description: "Laboratório próprio para resultados rápidos de hemogramas e análises bioquímicas."
      },
      {
        title: "Internamento",
        description: "Estrutura monitorada e confortável para a recuperação do seu animal sob cuidados veterinários contínuos."
      }
    ]
  },
  about: {
    sectionTitle: "Quem Cuida do Seu Pet",
    team: [
      {
        name: "Dra. Nome da Médica",
        role: "Médica Veterinária e Fundadora",
        bio: [
          "Com anos de dedicação à medicina veterinária, a fundadora da Animal & Cia construiu sua carreira com base no amor e respeito aos animais.",
          "Especializada em clínica médica e cirúrgica de pequenos animais, ela lidera uma equipe apaixonada por oferecer o melhor cuidado possível para o seu pet.",
          "Acreditamos que cada animal é único e merece um atendimento humanizado, com infraestrutura de ponta e muito carinho."
        ]
      }
    ]
  },
  location: {
    sectionTitle: "Onde Estamos",
    sectionSubtitle: "Venha nos visitar! Nossa clínica possui fácil acesso e excelente infraestrutura para receber você e seu pet.",
  },
  contact: {
    sectionTitle: "Fale com a gente!",
    sectionSubtitle: "Tem alguma dúvida ou precisa agendar uma consulta? Nossa equipe está pronta para atender você e o seu pet com todo o carinho.",
    buttonText: "Chame no WhatsApp",
    qrHelper: "Escaneie para falar conosco",
  },
  footer: {
    sections: {
      social: "Redes Sociais",
      contact: "Fale Conosco",
    },
    subtext: "Centro Veterinário",
    qrCode: {
      label: "QR Code",
      helper: "Escaneie para WhatsApp",
    },
    copyright: "Todos os direitos reservados.",
  }
};
