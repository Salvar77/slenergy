import PompyCiepla from "@/components/Sections/Offers/Pompyciepla";
import { NextSeo } from "next-seo";
import ServiceSeo from "@/seo/ServiceSeo";

export default function PompyCieplaPage({ isDesktop }) {
  return (
    <>
      <NextSeo
        title="Pompy ciepła Opole – montaż od 30 000 zł, dofinansowanie 45 %"
        description="Montaż pomp ciepła Opole – powietrze-woda od 30 000 zł. Dofinansowanie Czyste Powietrze 45 %, wycena w 24 h, montaż w 7 dni. Gwarancja 10 lat."
        canonical="https://www.slenergy.pl/pompy-ciepla"
        openGraph={{
          url: "https://www.slenergy.pl/pompy_ciepla",
          title: "Pompy ciepła Opole – montaż od 30 000 zł",
          description:
            "Montaż pomp ciepła powietrze-woda z dofinansowaniem. Wycena w 24 h, montaż w 7 dni.",
          images: [
            {
              url: "https://www.slenergy.pl/pompa-ciepla.jpg",
              width: 1200,
              height: 630,
              alt: "Montaż pompy ciepła Opole",
              type: "image/jpg",
            },
          ],
        }}
      />
      <ServiceSeo />
      <PompyCiepla isDesktop={isDesktop} />
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
