// seo/EmergencyElectricalSeo.js
import Script from "next/script";

export const AwarieElektryczneSeo = () => (
  <Script
    id="schema-service-elektryczne"
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Awarie Elektryczne Opole - pomoc 24/7",
        description:
          "Pilna naprawa awarii elektrycznych w Opole i okolicach. Interwencja 24/7, weekendy i święta. Szybki dojazd, fachowa pomoc.",
        provider: {
          "@type": "LocalBusiness",
          name: "Speed Light Energy",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Opole",
            addressRegion: "Opolskie",
            addressCountry: "PL",
          },
          areaServed: ["Opole", "Wrocław", "Kędzierzyn-Koźle", "Nysa", "Brzeg"],
          url: "https://www.slenergy.pl",
          telephone: "+48606337100",
          openingHours: "Mo-Su 00:00-24:00",
          availableService: "Emergency electrical services",
        },
        serviceType: "Usługi elektryczne awaryjne",
        category: "HomeRepair",
        offers: {
          "@type": "Offer",
          priceCurrency: "PLN",
          priceSpecification: {
            "@type": "PriceSpecification",
            minPrice: "200",
            maxPrice: "5000",
            priceCurrency: "PLN",
          },
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Usługi elektryczne awaryjne",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Awaria prądu w domu",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Naprawa instalacji elektrycznej",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Wymiana bezpieczników",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Naprawa gniazdek i wyłączników",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Interwencja 24/7",
              },
            },
          ],
        },
      }),
    }}
  />
);

export default AwarieElektryczneSeo;
