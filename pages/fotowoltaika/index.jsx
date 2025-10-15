import Fotowoltaika from "@/components/Sections/Offers/Fotowoltaika";
import { NextSeo } from "next-seo";
import ProductSeo from "@/seo/ProductSeo";

export default function FotowoltaikaPage({ isDesktop }) {
  return (
    <>
      <NextSeo
        title="Fotowoltaika Opole – montaż paneli od 9 300 zł, dofinansowanie 30 000 zł"
        description="Fotowoltaika Opole - montaż w 7 dni, oszczędność do 90% na rachunkach. Darmowa wycena w 24h, gwarancja 25 lat na panele."
        canonical="https://www.slenergy.pl/fotowoltaika"
        openGraph={{
          url: "https://www.slenergy.pl/fotowoltaika",
          title: "Fotowoltaika Opole – montaż paneli od 9 300 zł",
          description:
            "Kompletna instalacja fotowoltaiczna z dofinansowaniem. Wycena w 24 h, montaż w 7 dni.",
          images: [
            {
              url: "https://www.slenergy.pl/panel-fotowoltaika.jpg",
              width: 1200,
              height: 630,
              alt: "Montaż paneli fotowoltaicznych Opole",
              type: "image/jpg",
            },
          ],
        }}
      />
      <ProductSeo />
      <Fotowoltaika isDesktop={isDesktop} />
    </>
  );
}

export async function getServerSideProps(context) {
  const isMobile = context.req.headers["user-agent"]
    .toLowerCase()
    .includes("mobi");

  return {
    props: {
      isDesktop: !isMobile,
    },
  };
}
