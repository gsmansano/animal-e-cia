import { CLINIC_INFO } from '@/constants/clinic-info';

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "VeterinaryCare",
    "name": CLINIC_INFO.name,
    "image": "https://www.animalecia.com.br/images/hero.webp",
    "telephone": CLINIC_INFO.whatsapp.number,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": CLINIC_INFO.address.street,
      "addressLocality": CLINIC_INFO.address.city,
      "addressRegion": CLINIC_INFO.address.state,
      "postalCode": CLINIC_INFO.address.cep,
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": CLINIC_INFO.address.coordinates.latitude,
      "longitude": CLINIC_INFO.address.coordinates.longitude
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "12:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "14:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "08:00",
        "closes": "12:00"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
