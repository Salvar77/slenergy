import Klimatyzacja from "@/components/Sections/Offers/Klimatyzacja";
import { NextSeo } from "next-seo";
import ServiceSeo from "@/seo/ServiceSeo";

export default function KlimatyzacjaPage({ isDesktop }) {
  return (
    <>
      <NextSeo
        title="Klimatyzacja Opole – montaż, serwis, przeglądy | Speed Light Energy"
        description="Profesjonalny montaż klimatyzacji w Opole. Serwis, przeglądy, czyszczenie. Darmowa wycena +48 606 337 100."
        canonical="https://www.slenergy.pl/klimatyzacja"
        openGraph={{
          url: "https://www.slenergy.pl/klimatyzacja",
          title: "Klimatyzacja Opole – Speed Light Energy",
          description:
            "Montaż i serwis klimatyzacji domowej i komercyjnej. Systemy współpracujące z fotowoltaiką.",
          images: [
            {
              url: "https://www.slenergy.pl/klimatyzator-montowany-na-bialej-scianie.jpg",
              width: 1200,
              height: 630,
              alt: "Klimatyzacja Opole - Speed Light Energy",
            },
          ],
        }}
      />
      <ServiceSeo />
      <Klimatyzacja isDesktop={isDesktop} />
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
