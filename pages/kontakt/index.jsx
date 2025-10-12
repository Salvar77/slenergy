import Contact from "@/components/Sections/Contact/ContactPage";
import { NextSeo } from "next-seo";
import ContactSeo from "@/seo/ContactSeo";

export default function KontaktPage() {
  return (
    <>
      <NextSeo
        title="Kontakt – Speed Light Energy | Fotowoltaika Opole"
        description="Skontaktuj się z nami! Biuro w Opolu, tel. +48 606 337 100. Darmowa wycena, montaż w 7 dni. Obsługujemy Opole, Wrocław, Kędzierzyn, Nysę i okolice."
        canonical="https://www.slenergy.pl/kontakt"
        openGraph={{
          url: "https://www.slenergy.pl/kontakt",
          title: "Kontakt – Speed Light Energy",
          description:
            "Biuro w Opolu. Zadzwoń lub napisz – pomożemy z fotowoltaiką, pompą ciepła i magazynem energii.",
          images: [
            {
              url: "https://www.slenergy.pl/SpeedLightLogo.png",
              width: 1200,
              height: 630,
              alt: "Speed Light Energy – kontakt",
            },
          ],
          locale: "pl_PL",
          type: "website",
        }}
      />
      <ContactSeo />
      <Contact />
    </>
  );
}
