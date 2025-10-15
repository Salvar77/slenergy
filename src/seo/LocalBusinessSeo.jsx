import Script from "next/script";

const LocalBusinessSeo = () => (
  <Script
    id="schema-local-business"
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "Speed Light Energy - fotowoltaika Opole",
        description:
          "Profesjonalny montaż fotowoltaiki, pomp ciepła, magazynów energii, instalacji elektrycznych i klimatyzacji w Opolu i okolicach. Montaż w 7 dni, darmowa wycena.",
        image: "https://www.slenergy.pl/SpeedLightLogo.png",
        url: "https://www.slenergy.pl/",
        telephone: "+48 606 337 100",
        priceRange: "PLN",
        areaServed: [
          "Opole",
          "Wrocław",
          "Kędzierzyn-Koźle",
          "Nysa",
          "Brzeg",
          "Strzelce Opolskie",
        ],
        address: {
          "@type": "PostalAddress",
          streetAddress: "ul. Józefa Walecki 2/12",
          addressLocality: "Opole",
          postalCode: "45-586",
          addressCountry: "PL",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 50.6686,
          longitude: 17.9253,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            opens: "00:00",
            closes: "23:59",
          },
        ],
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: 4.9,
          reviewCount: 127,
        },
        hasMap:
          "https://www.google.com/maps/place/Speed+Light+Energy/@51.2013502,16.2384744,8.91z/data=!4m6!3m5!1s0x209167f644624839:0x87d39c0598e68b29!8m2!3d50.9505468!4d16.4250194!16s%2Fg%2F11yb7yk452?entry=ttu&g_ep=EgoyMDI1MDkzMC4wIKXMDSoASAFQAw%3D%3D",
      }),
    }}
  />
);

export default LocalBusinessSeo;
