import HeroImage from "@/components/HeroImage/HeroImage";
import style from "@/styles/HeroImage.module.scss";
import classes from "./Offers.module.scss";
import Image from "next/image";
import heroimg from "@/assets/images/magazyn.jpg";
import magazyn2 from "@/assets/images/magazyn2.jpg";
import React from "react";
import Link from "next/link";

const Magazyn = () => {
  return (
    <>
      <HeroImage image={heroimg} alt="grafika przedstawiająca magazyn energii">
        <div className={style.heroImageTextBox}>
          <h1 className={style.heroImageTextBox__title}>
            Magazyny energii Opole
          </h1>
          <p className={style.heroImageTextBox__text}>
            Magazyny energii to systemy, które pozwalają na gromadzenie i
            przechowywanie energii w celu wykorzystania jej w przyszłości. Mogą
            być stosowane w różnych celach, takich jak zwiększenie niezawodności
            dostaw energii, poprawa jakości energii lub jako źródło awaryjne w
            przypadku awarii sieci energetycznej.
          </p>
          <p className={style.heroImageTextBox__text}>
            Istnieje wiele rodzajów magazynów energii, takich jak baterie
            litowo-jonowe, magazyny wodne, magazyny powietrzne czy magazyny
            ciepła. Magazyny energii mają coraz większe znaczenie wraz z
            rozwojem odnawialnych źródeł energii, takich jak panele
            fotowoltaiczne i elektrownie wiatrowe, które generują energię w
            sposób niestabilny i zmienny w czasie.
          </p>
          <p className={style.heroImageTextBox__text}>
            Dlatego magazyny energii są ważnym elementem przyszłych systemów
            energetycznych, pozwalając na składowanie energii wtedy, gdy jest
            jej nadmiar, aby móc ją wykorzystać w chwilach, gdy brakuje.
          </p>
          <p className={style.heroImageTextBox__text}>
            Montujemy magazyny energii na terenie{" "}
            <strong>Opola, Wrocławia, Kędzierzyna-Koźla, Nysy, Brzegu</strong>{" "}
            oraz całego województwa opolskiego i dolnośląskiego.
          </p>
        </div>
      </HeroImage>
      <section className={style.headSection}>
        <div className={style.headSection__textBox}>
          <h2 className={style.headSection__title}>
            Korzyści z magazynu energii
          </h2>
          <p className={style.headSection__text}>
            <b>Oszczędność na kosztach energii: </b> Magazynowanie energii
            pozwala na wykorzystanie jej wtedy, gdy jest najbardziej potrzebna,
            co zmniejsza koszty energii elektrycznej i umożliwia uniezależnienie
            się od tradycyjnych źródeł energii.
          </p>
          <p className={style.headSection__text}>
            <b>Zwiększenie wykorzystania energii z fotowoltaiki: </b>
            Magazynowanie nadwyżek energii z instalacji fotowoltaicznej pozwala
            na wykorzystanie jej w nocy i podczas pochmurnych dni.{" "}
            <Link
              href="/fotowoltaika"
              aria-label="Przejdź do strony fotowoltaika"
              className={style.headSection__textLink}
            >
              Sprawdź ofertę fotowoltaiki →
            </Link>
          </p>
          <p className={style.headSection__text}>
            <b>Zasilanie pomp ciepła: </b> Magazyn energii może zasilać pompę
            ciepła w nocy, zapewniając darmowe ogrzewanie z własnej energii.{" "}
            <Link
              href="/pompy_ciepla"
              aria-label="Przejdź do strony pompy ciepła"
              className={style.headSection__textLink}
            >
              Poznaj ofertę pomp ciepła →
            </Link>
          </p>
          <p className={style.headSection__text}>
            <b>Zasilanie klimatyzacji: </b> W lecie magazyn energii może zasilać
            klimatyzację, zapewniając darmowe chłodzenie z energii słonecznej.{" "}
            <Link
              href="/klimatyzacja"
              aria-label="Przejdź do strony klimatyzacja"
              className={style.headSection__textLink}
            >
              Sprawdź ofertę klimatyzacji →
            </Link>
          </p>
          <p className={style.headSection__text}>
            <b>Profesjonalne przyłączenia elektryczne: </b> Montaż magazynu
            energii wymaga specjalistycznych instalacji elektrycznych i
            zabezpieczeń.{" "}
            <Link
              href="/instalacje_elektryczne"
              aria-label="Przejdź do strony instalacje elektryczne"
              className={style.headSection__textLink}
            >
              Dowiedz się o instalacjach elektrycznych →
            </Link>
          </p>
          <p className={style.headSection__text}>
            <b>Wsparcie sieci energetycznej: </b> Magazyny energii mogą pomóc w
            równoważeniu produkcji i poboru energii w sieci energetycznej, co
            zmniejsza potrzebę budowy nowych elektrowni i infrastruktury
            sieciowej.
          </p>
          <p className={style.headSection__text}>
            <b>Zwiększenie niezawodności systemu energetycznego: </b> Magazyny
            energii pozwalają na przechowywanie energii w przypadku awarii
            systemu, co przyczynia się do zwiększenia niezawodności systemu
            energetycznego.
          </p>
          <p className={style.headSection__text}>
            <b>Zmniejszenie emisji gazów cieplarnianych: </b> Magazynowanie
            energii z odnawialnych źródeł pozwala na zmniejszenie emisji gazów
            cieplarnianych i innych zanieczyszczeń powietrza, co przyczynia się
            do ochrony środowiska i zdrowia publicznego.
          </p>
          <p className={style.headSection__text}>
            <b>Bezpieczeństwo energetyczne: </b> Magazyny energii pozwalają na
            zabezpieczenie dostaw energii w przypadku kryzysów energetycznych
            lub innych sytuacji awaryjnych.
          </p>
        </div>
        <div className={style.headSection__imgBox}>
          <Image
            className={style.headSection__img}
            src={magazyn2}
            alt="Nowoczesny magazyn energii litowo-jonowy - Speed Light Energy Opole"
            width={800}
            height={450}
            priority
          />
        </div>
      </section>
      <section
        className={`${style.headSection} ${style.faqCompact}`}
        aria-labelledby="faq-magazyn"
      >
        <div className={style.headSection__textBox}>
          <h2 id="faq-magazyn" className={style.headSection__title}>
            Najczęściej zadawane pytania – magazyny energii
          </h2>

          <div className={style.faq__item}>
            <details className={style.faq__question}>
              <summary>Ile kosztuje magazyn energii 10 kWh?</summary>
              <div className={style.faq__answer}>
                Cena instalacji 10 kWh magazynu energii z montażem zaczyna się
                od 19 900 zł brutto.
              </div>
            </details>
          </div>

          <div className={style.faq__item}>
            <details className={style.faq__question}>
              <summary>Czy magazyn działa z instalacją fotowoltaiczną?</summary>
              <div className={style.faq__answer}>
                Tak, magazyn energii idealnie współpracuje z fotowoltaiką,
                pozwalając magazynować nadwyżki energii.{" "}
                <Link
                  href="/fotowoltaika"
                  aria-label="Przejdź do strony fotowoltaika"
                >
                  Sprawdź ofertę fotowoltaiki →
                </Link>
              </div>
            </details>
          </div>

          <div className={style.faq__item}>
            <details className={style.faq__question}>
              <summary>Czy magazyn może zasilać pompę ciepła?</summary>
              <div className={style.faq__answer}>
                Tak, magazyn energii doskonale sprawdza się do zasilania pomp
                ciepła w nocy, zapewniając darmowe ogrzewanie.{" "}
                <Link
                  href="/pompy_ciepla"
                  aria-label="Przejdź do strony pompy ciepła"
                >
                  Poznaj ofertę pomp ciepła →
                </Link>
              </div>
            </details>
          </div>
        </div>
      </section>
      <div className={style.ctaSection}>
        <h3>Zainteresowany magazynami energii?</h3>
        <Link href="/kontakt" className={style.ctaButton}>
          Darmowa wycena w 24h
        </Link>
      </div>
    </>
  );
};

export default Magazyn;
