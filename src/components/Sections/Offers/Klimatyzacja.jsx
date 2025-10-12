import HeroImage from "@/components/HeroImage/HeroImage";
import style from "@/styles/HeroImage.module.scss";
import classes from "./Offers.module.scss";
import Image from "next/image";
import heroimgMobile from "@/assets/images/klimatyzacja-na-scianie.jpg";
import heroimgDesktop from "@/assets/images/klimatyzacja-na-scianie-2.jpg";
import klima1 from "@/assets/images/klimatyzator-montowany-na-bialej-scianie.jpg";
import React from "react";
import Link from "next/link";

const Klimatyzacja = () => {
  return (
    <>
      <HeroImage
        mobileImage={heroimgMobile}
        desktopImage={heroimgDesktop}
        alt="Klimatyzacja Opole - montaż i serwis systemów split i multi-split"
      >
        <div className={style.heroImageTextBox}>
          <h1 className={style.heroImageTextBox__title}>Klimatyzacja Opole</h1>
          <p className={style.heroImageTextBox__text}>
            Jesteśmy specjalistami w zakresie klimatyzacji i oferujemy
            kompleksowe usługi montażu, serwisu oraz doradztwa w doborze
            systemów klimatyzacyjnych. Nasza firma posiada niezbędne
            doświadczenie i kwalifikacje do wykonywania prac na najwyższym
            poziomie.
          </p>
          <p className={style.heroImageTextBox__text}>
            Oferujemy pełen zakres usług związanych z klimatyzacją - od
            doradztwa i projektowania, przez profesjonalny montaż, aż po
            regularny serwis i naprawy gwarancyjne. Zapewniamy komfort termiczny
            przez cały rok.
          </p>
          <p className={style.heroImageTextBox__text}>
            Specjalizujemy się w systemach klimatyzacji dla domów, biur, sklepów
            oraz obiektów przemysłowych. Dobieramy rozwiązania optymalne pod
            względem efektywności i kosztów eksploatacji.
          </p>
          <p className={style.heroImageTextBox__text}>
            Montujemy klimatyzację na terenie{" "}
            <strong>Opola, Wrocławia, Kędzierzyna-Koźla, Nysy, Brzegu</strong>{" "}
            oraz całego województwa opolskiego i dolnośląskiego.
          </p>
        </div>
      </HeroImage>

      <section className={style.headSection}>
        <div className={style.headSection__textBox}>
          <h2 className={style.headSection__title}>
            Zakres usług klimatyzacyjnych
          </h2>
          <p className={style.headSection__text}>
            <b>Klimatyzacja domowa:</b> Montaż systemów split i multi-split do
            domów jednorodzinnych i mieszkań. Ciche i energooszczędne
            rozwiązania zapewniające komfort przez cały rok.
          </p>
          <p className={style.headSection__text}>
            <b>Klimatyzacja biurowa i komercyjna:</b> Kompleksowe systemy dla
            biur, sklepów, restauracji i obiektów usługowych. Projektowanie i
            montaż instalacji dostosowanych do specyficznych potrzeb.
          </p>
          <p className={style.headSection__text}>
            <b>Serwis i konserwacja:</b> Regularne przeglądy, czyszczenie,
            doładowanie czynnika chłodniczego oraz naprawy gwarancyjne i
            pogwarancyjne wszystkich marek klimatyzatorów.
          </p>
          <p className={style.headSection__text}>
            <b>Systemy współpracujące z fotowoltaiką:</b> Klimatyzatory zasilane
            energią słoneczną dla maksymalnych oszczędności.{" "}
            <Link
              href="/fotowoltaika"
              aria-label="Przejdź do strony fotowoltaika"
              className={style.headSection__textLink}
            >
              Sprawdź ofertę fotowoltaiki →
            </Link>
          </p>
          <p className={style.headSection__text}>
            <b>Pompy ciepła z funkcją chłodzenia:</b> Nowoczesne pompy ciepła
            oferujące zarówno ogrzewanie zimą, jak i chłodzenie latem.{" "}
            <Link
              href="/pompy_ciepla"
              aria-label="Przejdź do strony pompy ciepła"
              className={style.headSection__textLink}
            >
              Poznaj pompy ciepła →
            </Link>
          </p>
          <p className={style.headSection__text}>
            <b>Instalacje elektryczne pod klimatyzację:</b> Profesjonalne
            przyłączenia elektryczne i zabezpieczenia dla systemów klimatyzacji.{" "}
            <Link
              href="/instalacje_elektryczne"
              aria-label="Przejdź do strony instalacje elektryczne"
              className={style.headSection__textLink}
            >
              Sprawdź usługi elektryczne →
            </Link>
          </p>
        </div>
        <div className={style.headSection__imgBox}>
          <Image
            className={style.headSection__img}
            src={klima1}
            alt="Nowoczesna klimatyzacja split - Speed Light Energy Opole"
            width={800}
            height={450}
            priority
          />
        </div>
      </section>

      <section
        className={`${style.headSection} ${style.faqCompact}`}
        aria-labelledby="faq-klima"
      >
        <div className={style.headSection__textBox}>
          <h2 id="faq-klima" className={style.headSection__title}>
            Najczęściej zadawane pytania – klimatyzacja
          </h2>

          <div className={style.faq__item}>
            <details className={style.faq__question}>
              <summary>
                Ile kosztuje montaż klimatyzacji w mieszkaniu 60m²?
              </summary>
              <div className={style.faq__answer}>
                Koszt kompletnego systemu klimatyzacji dla mieszkania 60m²
                zaczyna się od 6 000 zł brutto. Cena zależy od wybranej mocy
                urządzenia, liczby jednostek wewnętrznych oraz stopnia
                skomplikowania instalacji.
              </div>
            </details>
          </div>

          <div className={style.faq__item}>
            <details className={style.faq__question}>
              <summary>
                Czy klimatyzacja może współpracować z fotowoltaiką?
              </summary>
              <div className={style.faq__answer}>
                Tak, to idealne połączenie! Klimatyzacja zasilana energią z
                fotowoltaiki pozwala na darmowe chłodzenie latem.{" "}
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
              <summary>
                Czy pompa ciepła może chłodzić jak klimatyzacja?
              </summary>
              <div className={style.faq__answer}>
                Tak, nowoczesne pompy ciepła oferują funkcję chłodzenia
                aktywnego lub pasywnego, mogąc zastąpić tradycyjną klimatyzację.{" "}
                <Link
                  href="/pompy_ciepla"
                  aria-label="Przejdź do strony pompy ciepła"
                >
                  Dowiedz się więcej o pompach ciepła →
                </Link>
              </div>
            </details>
          </div>
        </div>
      </section>

      <div className={style.ctaSection}>
        <h3>Zainteresowany klimatyzacją?</h3>
        <Link href="/kontakt" className={style.ctaButton}>
          Darmowa wycena w 24h
        </Link>
      </div>
    </>
  );
};

export default Klimatyzacja;
