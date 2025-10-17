// seo/AirConditioningSeo.js
import Script from "next/script";

export const KlimatyzacjaSeo = () => (
  <Script
    id="schema-service-klimatyzacja"
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Klimatyzacja Opole - montaż i serwis",
        description:
          "Profesjonalny montaż klimatyzacji w Opole. Serwis, przeglądy, czyszczenie. Systemy współpracujące z fotowoltaiką.",
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
        serviceType: "Usługi klimatyzacyjne",
        category: "HVAC",
        offers: {
          "@type": "Offer",
          priceCurrency: "PLN",
          priceSpecification: {
            "@type": "PriceSpecification",
            minPrice: "2500",
            maxPrice: "20000",
            priceCurrency: "PLN",
          },
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Usługi klimatyzacyjne",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Montaż klimatyzacji split",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Montaż klimatyzacji multi-split",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Serwis i przeglądy klimatyzacji",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Czyszczenie i dezynfekcja klimatyzatorów",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Klimatyzacja współpracująca z fotowoltaiką",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Dobór i konsultacja systemów klimatyzacji",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Naprawa i regeneracja klimatyzatorów",
              },
            },
          ],
        },
      }),
    }}
  />
);

export default KlimatyzacjaSeo;
