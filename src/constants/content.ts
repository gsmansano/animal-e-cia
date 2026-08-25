import { ContentDictionary } from '@/types';

export const CONTENT: ContentDictionary = {
  header: {
    navLinks: [
      { label: 'Serviços', href: '#servicos' },
      { label: 'Sobre', href: '#sobre' },
      { label: 'Localização', href: '#localizacao' },
      { label: 'Contato', href: '#contato' },
    ],
    cta: "Fale com a gente!",
  },
  hero: {
    title: "O Cuidado que seu Pet Merece, Perto de Você",
    subtitle: "No Centro Veterinário Animal & Cia em Brumado, oferecemos estrutura completa, profissionais qualificados e muito amor para cuidar da saúde do seu melhor amigo.",
    cta: "Como podemos ajudar?",
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
        name: "Dra. Ariadna Mansano (Lila)",
        role: "Médica Veterinária e Fundadora",
        bio: [
          "Mais conhecida por todos carinhosamente como Dra. Lila, Ariadna tem uma história que se entrelaça com a de Brumado. Com mais de 30 anos de carreira, ela foi a grande pioneira da medicina veterinária na região.",
          "Fundadora da Animal & Cia, por muito tempo o único centro de referência da cidade, Dra. Lila possui diversas especializações em cirurgias e exames de diagnóstico, garantindo a excelência técnica que seu pet precisa.",
          "Tendo acompanhado o crescimento de Brumado desde a juventude, ela construiu não apenas uma clínica, mas um legado de confiança. Hoje, ela alia suas três décadas de experiência clínica a um amor incondicional por cada paciente."
        ]
      }
    ]
  },
  location: {
    sectionTitle: "Onde Estamos",
    sectionSubtitle: "Venha nos visitar! Nossa clínica possui fácil acesso e excelente infraestrutura para receber você e seu pet.",
    directions: {
      title: "Como chegar",
      text: [
        "Estamos localizados bem no coração de Brumado, com fácil acesso para você e seu pet.",
        "Para chegar, basta descer a rua aos fundos da Igreja Matriz, seguindo em direção à Praça da Prefeitura e à Praça do Cemitério.",
        "Utilize o botão abaixo para traçar a rota exata no seu GPS!"
      ]
    },
  },
  contact: {
    sectionTitle: "Fale com a gente!",
    sectionSubtitle: "Tem alguma dúvida ou precisa agendar uma consulta? Nossa equipe está pronta para atender você e o seu pet com todo o carinho.",
    buttonText: "Tirar Dúvidas",
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
