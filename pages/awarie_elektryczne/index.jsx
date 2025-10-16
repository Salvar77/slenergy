import AwarieElektryczne from "@/components/Sections/Offers/AwarieElektryczne";
import { NextSeo } from "next-seo";

export default function AwarieElektrycznePage({ isDesktop }) {
  return (
    <>
      <NextSeo
        title="Awarie Elektryczne Opole – pomoc 24/7 | Speed Light Energy"
        description="Pilna naprawa awarii elektrycznych w Opole i okolicach. Interwencja 24/7, weekendy i święta. Szybki dojazd, fachowa pomoc +48 606 337 100."
        canonical="https://www.slenergy.pl/awarie_elektryczne"
        openGraph={{
          url: "https://www.slenergy.pl/awarie_elektryczne",
          title: "Awarie Elektryczne Opole – pomoc 24/7 | Speed Light Energy",
          description:
            "Pilna naprawa awarii elektrycznych - interwencja 24/7 w Opole i regionie. Szybki dojazd, fachowa pomoc.",
          images: [
            {
              url: "https://www.slenergy.pl/awaria-elektryczna-small.jpg",
              width: 1200,
              height: 630,
              alt: "Awarie elektryczne Opole - Speed Light Energy",
            },
          ],
        }}
      />
      <AwarieElektryczne isDesktop={isDesktop} />
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
