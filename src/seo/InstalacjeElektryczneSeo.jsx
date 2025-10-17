// seo/ElectricalInstallationsSeo.js
import Script from "next/script";

export const InstalacjeElektryczneSeo = () => (
  <Script
    id="schema-service-instalacje-elektryczne"
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Instalacje elektryczne Opole - montaż i modernizacja",
        description:
          "Profesjonalne instalacje elektryczne w Opole. Montaż w nowych budynkach, modernizacje, przyłączenia fotowoltaiki i pomp ciepła.",
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
          openingHours: "Mo-Fr 08:00-18:00, Sa 08:00-14:00",
        },
        serviceType: "Usługi elektryczne",
        category: "ElectricalService",
        offers: {
          "@type": "Offer",
          priceCurrency: "PLN",
          priceSpecification: {
            "@type": "PriceSpecification",
            minPrice: "800",
            maxPrice: "15000",
            priceCurrency: "PLN",
          },
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Instalacje elektryczne",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Montaż instalacji elektrycznej w nowym budynku",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Modernizacja istniejącej instalacji",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Przyłączenie fotowoltaiki do instalacji",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Instalacja zabezpieczeń elektrycznych",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Montaż rozdzielni elektrycznych",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Przyłączenie pomp ciepła",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Instalacja gniazd i oświetlenia",
              },
            },
          ],
        },
      }),
    }}
  />
);

export default InstalacjeElektryczneSeo;
