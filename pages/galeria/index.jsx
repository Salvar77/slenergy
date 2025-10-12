const { default: Gallery } = require("@/components/Sections/Gallery/Gallery");
import { NextSeo } from "next-seo";

export default function GaleriaPage() {
  return (
    <>
      <NextSeo
        title="Galeria – Speed Light Energy | Realizacje Fotowoltaika Opole"
        description="Zobacz nasze realizacje fotowoltaiczne w Opolu i okolicach. Montaż w 7 dni, najwyższa jakość komponentów. Darmowa wycena +48 606 337 100."
        canonical="https://www.slenergy.pl/galeria"
        openGraph={{
          url: "https://www.slenergy.pl/galeria",
          title: "Galeria Realizacji – Speed Light Energy",
          description:
            "Galeria naszych realizacji fotowoltaicznych - Opole, Kędzierzyn-Koźle, Nysa i okolice. Profesjonalny montaż w 7 dni.",
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
      <Gallery />
    </>
  );
}
