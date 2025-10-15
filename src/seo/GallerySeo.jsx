import Script from "next/script";

const GallerySeo = () => (
  <Script
    id="schema-gallery"
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "Galeria Realizacji - Speed Light Energy",
        description:
          "Galeria zdjęć z realizacji montażu paneli fotowoltaicznych, pomp ciepła, magazynów energii, instalacji elektrycznych i klimatyzacji w Opolu i okolicach",
        url: "https://www.slenergy.pl/galeria",
        mainEntity: {
          "@type": "ImageGallery",
          name: "Realizacje fotowoltaiki Speed Light Energy",
          description:
            "Zdjęcia z montażu instalacji fotowoltaicznych, pomp ciepła i magazynów energii wykonanych przez Speed Light Energy",
          about: {
            "@type": "Service",
            name: "Montaż fotowoltaiki Opole",
            description:
              "Profesjonalny montaż paneli fotowoltaicznych w Opolu i województwie opolskim",
          },
        },
        publisher: {
          "@type": "Organization",
          name: "Speed Light Energy",
          url: "https://www.slenergy.pl",
          logo: "https://www.slenergy.pl/SpeedLightLogo.png",
        },
      }),
    }}
  />
);

export default GallerySeo;
