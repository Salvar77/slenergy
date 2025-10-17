import AwarieDekarskie from "@/components/Sections/Offers/AwarieDekarskie";
import AwarieDekarskieSeo from "@/seo/AwarieDekarskieSeo";
import { NextSeo } from "next-seo";

export default function AwarieDekarskiePage({ isDesktop }) {
  return (
    <>
      <NextSeo
        title="Awarie Dekarskie Opole – usługi dekarskie | Speed Light Energy"
        description="Profesjonalne usługi dekarskie - usuwanie awarii dachów w Opole. Likwidacja przecieków, naprawy po wichurach, wymiana pokryć."
        canonical="https://www.slenergy.pl/awarie_dekarskie"
        openGraph={{
          url: "https://www.slenergy.pl/awarie_dekarskie",
          title:
            "Awarie Dekarskie Opole – usługi dekarskie | Speed Light Energy",
          description:
            "Profesjonalne usuwanie awarii dekarskich - likwidacja przecieków, naprawy po wichurach, wymiana pokryć w Opole i regionie.",
          images: [
            {
              url: "https://www.slenergy.pl/awaria-dekarska-small.jpg",
              width: 1200,
              height: 630,
              alt: "Awarie dekarskie Opole - Speed Light Energy",
            },
          ],
        }}
      />
      <AwarieDekarskieSeo />
      <AwarieDekarskie isDesktop={isDesktop} />
    </>
  );
}

export async function getServerSideProps(context) {
  const isMobile = context.req.headers["user-agent"]
    ?.toLowerCase()
    .includes("mobi");

  return {
    props: {
      isDesktop: !isMobile,
    },
  };
}
