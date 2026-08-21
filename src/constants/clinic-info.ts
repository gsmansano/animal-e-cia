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

export const CLINIC_INFO: ClinicInfo = {
  name: "Animal & Cia",
  whatsapp: {
    number: "5577998680996",
    display: "77 9 9868-0996",
    link: "https://wa.me/5577998680996",
  },
  address: {
    street: "R. Euclides da Cunha 92",
    neighborhood: "Centro",
    city: "Brumado",
    state: "Bahia",
    cep: "46100-149",
    full: "R. Euclides da Cunha 92, Centro, Brumado, Bahia. CEP: 46100-149",
  },
  social: {
    instagram: {
      handle: "@animalecia.vet",
      link: "https://instagram.com/animalecia.vet",
    },
    tiktok: {
      handle: "@animal.cia",
      link: "https://www.tiktok.com/@animal.cia",
    },
  },
  hours: {
    weekdays: "08:00 às 12:00 e 14:00 às 18:00 Seg-Sex",
    saturday: "08:00 às 12:00 Sáb",
  },
};
