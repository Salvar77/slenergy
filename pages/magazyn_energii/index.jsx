import Magazyn from "@/components/Sections/Offers/Magazyn";
import { NextSeo } from "next-seo";
import ProductSeoMagazyn from "@/seo/ProductSeoMagazyn";

export default function MagazynyEnergiiPage() {
  return (
    <>
      <NextSeo
        title="Magazyn energii 10 kWh Opole – cena od 19 900 zł, montaż w 1 dzień"
        description="Magazyn energii do fotowoltaiki Opole – 10 kWh od 19 900 zł. Gwarancja 10 lat, montaż w 1 dzień, dofinansowanie Mój Prąd. Wycena w 24 h."
        canonical="https://www.slenergy.pl/magazyn_energii"
        openGraph={{
          url: "https://www.slenergy.pl/magazyn_energii",
          title: "Magazyn energii 10 kWh Opole – cena od 19 900 zł",
          description:
            "Magazyn energii do fotowoltaiki z montażem w 1 dzień. Gwarancja 10 lat, dofinansowanie.",
          images: [
            {
              url: "https://www.slenergy.pl/magazyn-energii.jpg",
              width: 1200,
              height: 630,
              alt: "Magazyn energii do fotowoltaiki Opole",
              type: "image/jpg",
            },
          ],
        }}
      />
      <ProductSeoMagazyn />
      <Magazyn />
    </>
  );
}
