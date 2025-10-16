import NaprawaDachow from "@/components/Sections/Offers/NaprawaDachow";
import { NextSeo } from "next-seo";

export default function NaprawaDachowPage({ isDesktop }) {
  return (
    <>
      <NextSeo
        title="Naprawa Dachów Opole – usługi dekarskie | Speed Light Energy"
        description="Profesjonalna naprawa i renowacja dachów w Opole. Likwidacja przecieków, wymiana pokryć, montaż rynien. Bezpłatna wycena +48 606 337 100."
        canonical="https://www.slenergy.pl/naprawa_dachow"
        openGraph={{
          url: "https://www.slenergy.pl/naprawa_dachow",
          title: "Naprawa Dachów Opole – usługi dekarskie | Speed Light Energy",
          description:
            "Profesjonalna naprawa dachów - likwidacja przecieków, wymiana pokryć, montaż rynien w Opole i regionie.",
          images: [
            {
              url: "https://www.slenergy.pl/naprawa-dachu-small.jpg",
              width: 1200,
              height: 630,
              alt: "Naprawa dachów Opole - Speed Light Energy",
            },
          ],
        }}
      />
      <NaprawaDachow isDesktop={isDesktop} />
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
