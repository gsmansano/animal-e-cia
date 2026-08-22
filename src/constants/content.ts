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
        description: "Avaliação clínica completa para garantir a saúde preventiva e o bem-estar do seu pet em todas as fases da vida.",
      },
      {
        title: "Vacinas",
        description: "Imunização segura e atualizada para proteger contra as principais doenças virais e bacterianas.",
      },
      {
        title: "Exames e Imagem",
        description: "Diagnósticos rápidos e precisos com exames de sangue, raio-x e ultrassom de alta qualidade.",
      },
      {
        title: "Cirurgias e Internação",
        description: "Centro cirúrgico equipado e UTI moderna com monitoramento contínuo para a recuperação do seu animal.",
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
