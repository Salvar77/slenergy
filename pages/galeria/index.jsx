import Gallery from "@/components/Sections/Gallery/Gallery";
import { NextSeo } from "next-seo";
import GallerySeo from "@/seo/GallerySeo";

export default function GaleriaPage() {
  return (
    <>
      <NextSeo
        title="Galeria – Speed Light Energy | Realizacje Fotowoltaika Opole"
        description="Zobacz nasze realizacje fotowoltaiczne, pompy ciepła, magazyny energii, instalacje elektryczne i klimatyzację w Opolu i okolicach."
        canonical="https://www.slenergy.pl/galeria"
        openGraph={{
          url: "https://www.slenergy.pl/galeria",
          title: "Galeria Realizacji – Speed Light Energy",
          description:
            "Galeria naszych realizacji fotowoltaicznych, pomp ciepła, magazynów energii, instalacji elektrycznych i klimatyzacji - Opole, Kędzierzyn-Koźle, Nysa i okolice. Profesjonalny montaż w 7 dni.",
          images: [
            {
              url: "https://www.slenergy.pl/SpeedLightLogo.png",
              width: 1200,
              height: 630,
              alt: "Speed Light Energy – galeria realizacji",
            },
          ],
          locale: "pl_PL",
          type: "website",
        }}
      />
      <GallerySeo />
      <Gallery />
    </>
  );
}
