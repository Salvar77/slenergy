import MainPage from "@/components/Sections/MainPage/MainPage";
import { NextSeo } from "next-seo";
import LocalBusinessSeo from "@/seo/LocalBusinessSeo";
import FaqSeo from "@/seo/FaqSeo";

export default function Home({ isDesktop }) {
  return (
    <>
      <NextSeo
        title="Fotowoltaika Opole 2025 - Panele, Pompy Ciepła, Magazyny Energii"
        description="Speed Light Energy – lider w instalacjach OZE: fotowoltaika, pompy ciepła, magazyny energii. Oferujemy również usługi elektryczne i dekarskie."
        canonical="https://www.slenergy.pl/"
        openGraph={{
          url: "https://www.slenergy.pl/",
          title:
            "Fotowoltaika Opole 2025 - Kompleksowe Instalacje Energetyczne",
          description:
            "Kompleksowe instalacje OZE w Opole: fotowoltaika, pompy ciepła, magazyny energii. Profesjonalny montaż klimatyzacji, instalacji elektrycznych i usług dekarskich.",
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
      <MainPage isDesktop={isDesktop} />
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
