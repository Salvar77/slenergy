import InstalacjeElektryczne from "@/components/Sections/Offers/InstalacjeElektryczne";
import InstalacjeElektryczneSeo from "@/seo/InstalacjeElektryczneSeo";
import { NextSeo } from "next-seo";

export default function InstalacjeElektrycznePage({ isDesktop }) {
  return (
    <>
      <NextSeo
        title="Instalacje elektryczne Opole – montaż, modernizacja, serwis | Speed Light Energy"
        description="Profesjonalne instalacje elektryczne w Opole. Montaż w nowych budynkach, modernizacje, przyłączenia fotowoltaiki. Darmowa wycena +48 606 337 100."
        canonical="https://www.slenergy.pl/instalacje_elektryczne"
        openGraph={{
          url: "https://www.slenergy.pl/instalacje_elektryczne",
          title: "Instalacje elektryczne Opole – Speed Light Energy",
          description:
            "Kompleksowe usługi elektryczne: montaż, modernizacja, serwis. Przyłączenia fotowoltaiki i pomp ciepła.",
          images: [
            {
              url: "https://www.slenergy.pl/instalacja-elektryczna.jpg",
              width: 1200,
              height: 630,
              alt: "Instalacje elektryczne Opole - Speed Light Energy",
            },
          ],
        }}
      />
      <InstalacjeElektryczneSeo />
      <InstalacjeElektryczne isDesktop={isDesktop} />
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
