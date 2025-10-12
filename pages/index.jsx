import MainPage from "@/components/Sections/MainPage/MainPage";
import { NextSeo } from "next-seo";
import LocalBusinessSeo from "@/seo/LocalBusinessSeo";
import FaqSeo from "@/seo/FaqSeo";

export default function Home() {
  return (
    <>
      <NextSeo
        title="Fotowoltaika Opole 2025 - Panele, Pompy Ciepła, Magazyny Energii"
        description="Speed Light Energy – montaż paneli fotowoltaicznych i pomp ciepła z dofinansowaniem. Obsługujemy Opole i cały region."
        canonical="https://www.slenergy.pl/"
        openGraph={{
          url: "https://www.slenergy.pl/",
          title:
            "Fotowoltaika Opole 2025 - Kompleksowe Instalacje Energetyczne",
          description:
            "Profesjonalny montaż paneli fotowoltaicznych, pomp ciepła, magazynów energii i instalacji elektrycznych. Korzystaj z dofinansowania do 30 000 zł.",
          images: [
            {
              url: "https://www.slenergy.pl/SpeedLightLogo.png",
              width: 1200,
              height: 630,
              alt: "Fotowoltaika Opole – Speed Light Energy",
              type: "image/png",
            },
          ],
          site_name: "Speed Light Energy",
          locale: "pl_PL",
          type: "website",
        }}
        twitter={{
          cardType: "summary_large_image",
          site: "@slenergypl",
        }}
      />

      <LocalBusinessSeo />
      <FaqSeo />
      <MainPage />
    </>
  );
}
