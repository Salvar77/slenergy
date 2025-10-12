import Script from "next/script";

const ProductSeo = () => (
  <Script
    id="schema-product-pv"
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Product",
        name: "Panele fotowoltaiczne z montażem Opole",
        image: "https://www.slenergy.pl/panel-fotowoltaika.jpg",
        description:
          "Kompletna instalacja fotowoltaiczna 3-10 kW z montażem, dokumentacją i dofinansowaniem.",
        sku: "PV-6K-OPOLE",
        mpn: "PV-INSTALLATION-OPOLE",
        brand: { "@type": "Brand", name: "Speed Light Energy" },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: 4.9,
          reviewCount: 89,
          bestRating: 5,
          worstRating: 1,
        },
        offers: {
          "@type": "Offer",
          url: "https://www.slenergy.pl/fotowoltaika",
          priceCurrency: "PLN",
          price: "9300",
          priceValidUntil: "2026-12-31",
          availability: "https://schema.org/InStock",
          seller: { "@type": "Organization", name: "Speed Light Energy" },
          areaServed: ["Opole", "Wrocław", "Kędzierzyn-Koźle", "Nysa", "Brzeg"],
        },
        category: "Home Improvement > Solar Panels",
        additionalProperty: [
          {
            "@type": "PropertyValue",
            name: "Moc instalacji",
            value: "3-10 kW",
          },
          {
            "@type": "PropertyValue",
            name: "Gwarancja",
            value: "25 lat",
          },
          {
            "@type": "PropertyValue",
            name: "Czas montażu",
            value: "7 dni",
          },
        ],
      }),
    }}
  />
);

export default ProductSeo;
