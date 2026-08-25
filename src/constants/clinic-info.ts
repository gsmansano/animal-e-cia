import { ClinicInfo } from '@/types';

export const CLINIC_INFO: ClinicInfo = {
  name: "Animal & Cia",
  whatsapp: {
    number: "+5577998680996",
    display: "(77) 9 9868-0996",
    link: "https://wa.me/5577998680996",
  },
  address: {
    street: "R. Euclides da Cunha 92",
    neighborhood: "Centro",
    city: "Brumado",
    state: "Bahia",
    cep: "46100-149",
    full: "R. Euclides da Cunha 92, Centro, Brumado, Bahia. CEP: 46100-149",
    googleMapsRouteLink: "https://maps.google.com/?daddr=R.+Euclides+da+Cunha+92,+Centro,+Brumado,+Bahia",
    coordinates: {
      latitude: -14.203029493955436,
      longitude: -41.6659444110436,
    },
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
  hours: [
    { label: "Seg a Sex", time: "08h às 12h | 14h às 18h" },
    { label: "Sábado", time: "08h às 12h" }
  ],
};
