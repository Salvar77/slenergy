import Contact from "@/components/Sections/Contact/ContactPage";
import { NextSeo } from "next-seo";
import ContactSeo from "@/seo/ContactSeo";

export default function KontaktPage({ isDesktop }) {
  return (
    <>
      <NextSeo
        title="Kontakt – Speed Light Energy | Fotowoltaika, Pompy Ciepła, Elektryka Opole"
        description="Skontaktuj się z nami! Biuro w Opolu, tel. +48 606 337 100. Darmowa wycena fotowoltaiki, klimatyzacji, instalacji elektrycznych i awarii dekarskich."
        canonical="https://www.slenergy.pl/kontakt"
        openGraph={{
          url: "https://www.slenergy.pl/kontakt",
          title:
            "Kontakt – Speed Light Energy | Kompleksowe Usługi Energetyczne",
          description:
            "Biuro w Opolu. Zadzwoń lub napisz – pomożemy z fotowoltaiką, pompami ciepła, magazynami energii, klimatyzacją, instalacjami elektrycznymi i awariami dekarskimi.",
          images: [
            {
              url: "https://www.slenergy.pl/SpeedLightLogo.png",
              width: 1200,
              height: 630,
              alt: "Speed Light Energy – kontakt fotowoltaika, pompy ciepła, instalacje elektryczne Opole",
            },
          ],
          locale: "pl_PL",
          type: "website",
        }}
        additionalMetaTags={[
          {
            name: "keywords",
            content:
              "kontakt fotowoltaika Opole, telefon Speed Light Energy, wycena pomp ciepła, awarie elektryczne, naprawy dachów, klimatyzacja Opole",
          },
        ]}
      />
      <ContactSeo />
      <Contact isDesktop={isDesktop} />
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
