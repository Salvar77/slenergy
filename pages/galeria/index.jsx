import Gallery from "@/components/Sections/Gallery/Gallery";
import { NextSeo } from "next-seo";
import GallerySeo from "@/seo/GallerySeo";

export default function GaleriaPage() {
  return (
    <>
      <NextSeo
        title="Galeria – Speed Light Energy | Realizacje Fotowoltaika Opole"
        description="Zobacz nasze realizacje: fotowoltaika, pompy ciepła, magazyny energii, klimatyzacja, instalacje elektryczne, awarie dekarskie w Opolu i okolicach."
        canonical="https://www.slenergy.pl/galeria"
        openGraph={{
          url: "https://www.slenergy.pl/galeria",
          title: "Galeria Realizacji – Speed Light Energy",
          description:
            "Galeria naszych realizacji: fotowoltaika, pompy ciepła, magazyny energii, klimatyzacja, instalacje elektryczne, awarie dekarskie - Opole, Wrocław, Kędzierzyn-Koźle, Nysa, Brzeg.",
          images: [
            {
              url: "https://www.slenergy.pl/SpeedLightLogo.png",
              width: 1200,
              height: 630,
              alt: "Speed Light Energy – galeria realizacji fotowoltaiki, pomp ciepła i instalacji elektrycznych",
            },
          ],
          locale: "pl_PL",
          type: "website",
        }}
        additionalMetaTags={[
          {
            name: "keywords",
            content:
              "galeria fotowoltaika Opole, realizacje pompy ciepła, instalacje elektryczne, awarie dekarskie, klimatyzacja, magazyny energii, Speed Light Energy",
          },
        ]}
      />
      <GallerySeo />
      <Gallery />
    </>
  );
}
