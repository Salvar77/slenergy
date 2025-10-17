import Script from "next/script";

export const AwarieDekarskieSeo = () => (
  <Script
    id="schema-service-dekarskie"
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Usuwanie awarii dekarskich Opole",
        description:
          "Profesjonalne usługi dekarskie - likwidacja przecieków, naprawy dachów po wichurach, wymiana pokryć dachowych.",
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
        },
        serviceType: "Usługi dekarskie",
        category: "HomeRepair",
        offers: {
          "@type": "Offer",
          priceCurrency: "PLN",
          priceSpecification: {
            "@type": "PriceSpecification",
            minPrice: "500",
            maxPrice: "15000",
            priceCurrency: "PLN",
          },
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Usługi dekarskie",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Likwidacja przecieków dachowych",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Naprawy dachów po wichurach",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Wymiana pokryć dachowych",
              },
            },
          ],
        },
      }),
    }}
  />
);

export default AwarieDekarskieSeo;
