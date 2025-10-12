import Script from "next/script";

const OrganizationSeo = () => (
  <Script
    id="schema-organization"
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Speed Light Energy",
        description:
          "Profesjonalny montaż fotowoltaiki w Opolu i okolicach. Montaż w 7 dni, darmowa wycena.",
        url: "https://www.slenergy.pl/",
        logo: "https://www.slenergy.pl/SpeedLightLogo.png",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Opole",
          addressCountry: "PL",
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+48 606 337 100",
          contactType: "customer service",
          areaServed: "PL",
          availableLanguage: "Polish",
        },
        sameAs: [
          "https://www.gowork.pl/opinie_czytaj,24502724",
          "https://monitorfirm.pb.pl/firma/speed-light-energy-rafal-malecki/",
          "https://fixly.pl/profil/605wz36t",
        ],
      }),
    }}
  />
);

export default OrganizationSeo;
