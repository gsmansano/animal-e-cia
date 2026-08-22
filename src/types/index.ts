export interface ClinicInfo {
  name: string;
  whatsapp: {
    number: string;
    display: string;
    link: string;
  };
  address: {
    street: string;
    neighborhood: string;
    city: string;
    state: string;
    cep: string;
    full: string;
    googleMapsRouteLink: string;
  };
  social: {
    instagram: {
      handle: string;
      link: string;
    };
    tiktok: {
      handle: string;
      link: string;
    };
  };
  hours: {
    weekdays: string;
    saturday: string;
  };
}

export interface NavLink {
  label: string;
  href: string;
}

export interface ServiceItem {
  title: string;
  description: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string[];
}

export interface ContentDictionary {
  header: {
    navLinks: NavLink[];
    cta: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
    imagePlaceholder: string;
  };
  services: {
    sectionTitle: string;
    sectionSubtitle: string;
    items: ServiceItem[];
  };
  about: {
    sectionTitle: string;
    team: TeamMember[];
  };
  location: {
    sectionTitle: string;
    sectionSubtitle: string;
  };
  footer: {
    sections: {
      social: string;
      contact: string;
    };
    subtext: string;
    qrCode: {
      label: string;
      helper: string;
    };
    copyright: string;
  };
}
