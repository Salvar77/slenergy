import Script from "next/script";

const ProductSeoMagazyn = () => (
  <Script
    id="schema-product-magazyn"
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Product",
        name: "Magazyn energii 10 kWh do fotowoltaiki",
        image: "https://www.slenergy.pl/magazyn-energii.jpg",
        description:
          "Magazynuj nadwyżki energii z paneli i korzystaj w nocy. Gwarancja 10 lat, montaż w 1 dzień.",
        sku: "BAT-10KWH-001",
        mpn: "BAT-10KWH-SPEEDLIGHT",
        brand: { "@type": "Brand", name: "Speed Light Energy" },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: 4.8,
          reviewCount: 34,
          bestRating: 5,
          worstRating: 1,
        },
        offers: {
          "@type": "Offer",
          url: "https://www.slenergy.pl/magazyn_energii",
          priceCurrency: "PLN",
          price: "19900",
          priceValidUntil: "2026-12-31",
          availability: "https://schema.org/InStock",
          itemCondition: "https://schema.org/NewCondition",
          seller: { "@type": "Organization", name: "Speed Light Energy" },
          areaServed: ["Opole", "Wrocław", "Kędzierzyn-Koźle", "Nysa", "Brzeg"],
        },
        category: "Home Improvement > Energy Storage",
        additionalProperty: [
          {
            "@type": "PropertyValue",
            name: "Pojemność",
            value: "10 kWh",
          },
          {
            "@type": "PropertyValue",
            name: "Gwarancja",
            value: "10 lat",
          },
          {
            "@type": "PropertyValue",
            name: "Czas montażu",
            value: "1 dzień",
          },
          {
            "@type": "PropertyValue",
            name: "Żywotność",
            value: "6000 cykli",
          },
          {
            "@type": "PropertyValue",
            name: "Sprawność",
            value: "98%",
          },
        ],
      }),
    }}
  />
);

export default ProductSeoMagazyn;
