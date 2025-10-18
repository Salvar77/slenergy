import MainPage from "@/components/Sections/MainPage/MainPage";
import { NextSeo } from "next-seo";
import LocalBusinessSeo from "@/seo/LocalBusinessSeo";
import FaqSeo from "@/seo/FaqSeo";

export default function Home({ isDesktop }) {
  return (
    <>
      <NextSeo
        title="Fotowoltaika Opole 2025 - Panele, Pompy Ciepła, Magazyny Energii"
        description="Speed Light Energy – instalacje i awarie 24/7. Fotowoltaika, magazyny energii, elektryka i dekarstwo."
        canonical="https://www.slenergy.pl/"
        openGraph={{
          url: "https://www.slenergy.pl/",
          title:
            "Fotowoltaika Opole 2025 - Kompleksowe Instalacje Energetyczne",
          description:
            "Speed Light Energy – kompleksowe usługi energetyczne 24/7. Fotowoltaika, pompy ciepła, magazyny energii, elektryka i dekarstwo.",
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
