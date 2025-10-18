import Script from "next/script";

const ServiceSeo = () => (
  <Script
    id="schema-service-heatpump"
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Montaż pompy ciepła powietrze-woda",
        description:
          "Profesjonalny montaż pomp ciepła z dofinansowaniem do 45 % kosztów. Obsługujemy Opole i region.",
        url: "https://www.slenergy.pl/pompy_ciepla",
        serviceType: "Heat Pump Installation",
        provider: {
          "@type": "LocalBusiness",
          name: "Speed Light Energy",
          telephone: "+48 606 337 100",
          address: {
            "@type": "PostalAddress",
            streetAddress: "ul. Józefa Walecki 2/12",
            addressLocality: "Opole",
            postalCode: "45-586",
            addressCountry: "PL",
          },

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: 4.9,
            reviewCount: 67,
            bestRating: 5,
            worstRating: 1,
          },
        },
        areaServed: {
          "@type": "AdministrativeArea",
          name: "Opole, Polska",
        },
        offers: {
          "@type": "Offer",
          url: "https://www.slenergy.pl/pompy_ciepla",
          priceCurrency: "PLN",
          price: "30000",
          priceValidUntil: "2026-12-31",
          availability: "https://schema.org/InStock",
          seller: { "@type": "Organization", name: "Speed Light Energy" },
        },
        serviceOutput: {
          "@type": "Thing",
          name: "Instalacja pompy ciepła powietrze-woda",
        },
        providerMobility: "mobile",
        additionalProperty: [
          {
            "@type": "PropertyValue",
            name: "Czas montażu",
            value: "3 dni",
          },
          {
            "@type": "PropertyValue",
            name: "Gwarancja na montaż",
            value: "5 lat",
          },
          {
            "@type": "PropertyValue",
            name: "Dofinansowanie",
            value: "do 45%",
          },
          {
            "@type": "PropertyValue",
            name: "Typ pompy",
            value: "powietrze-woda",
          },
          {
            "@type": "PropertyValue",
            name: "Moc typowej instalacji",
            value: "8-12 kW",
          },
        ],
      }),
    }}
  />
);

export default ServiceSeo;
