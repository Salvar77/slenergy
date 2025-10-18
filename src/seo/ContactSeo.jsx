import Script from "next/script";

const ContactSeo = () => (
  <Script
    id="schema-contact"
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ContactPage",
        name: "Kontakt - Speed Light Energy",
        description:
          "Skontaktuj się w sprawie fotowoltaiki, pomp ciepła, magazynów energii, instalacji elektrycznych, klimatyzacji, czy usług dekarskich",
        url: "https://www.slenergy.pl/kontakt",
        mainEntity: {
          "@type": "Organization",
          name: "Speed Light Energy",
          telephone: "+48-606-337-100",
          email: "kontakt@slenergy.pl",
          address: {
            "@type": "PostalAddress",
            streetAddress: "ul. Józefa Walecki 2/12",
            addressLocality: "Opole",
            postalCode: "45-586",
            addressCountry: "PL",
          },
          areaServed: ["Opole", "Wrocław", "Kędzierzyn-Koźle", "Nysa", "Brzeg"],
        },
      }),
    }}
  />
);

export default ContactSeo;
