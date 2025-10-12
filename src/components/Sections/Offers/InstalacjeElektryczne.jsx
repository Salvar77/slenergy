import HeroImage from "@/components/HeroImage/HeroImage";
import style from "@/styles/HeroImage.module.scss";
import classes from "./Offers.module.scss";
import Image from "next/image";
import heroimg from "@/assets/images/instalacja-elektryczna.jpg";
import electrical1 from "@/assets/images/instalacja-elektryczna-2.jpg";
import React from "react";
import Link from "next/link";

const InstalacjeElektryczne = () => {
  return (
    <>
      <HeroImage image={heroimg} alt="Instalacje elektryczne Opole">
        <div className={style.heroImageTextBox}>
          <h1 className={style.heroImageTextBox__title}>
            Instalacje elektryczne Opole
          </h1>
          <p className={style.heroImageTextBox__text}>
            Jesteśmy specjalistami w zakresie instalacji elektrycznych i
            oferujemy kompleksowe usługi elektryczne dla domów, firm i
            przemysłu. Nasza firma posiada niezbędne doświadczenie i uprawnienia
            do wykonywania prac elektrycznych najwyższej jakości.
          </p>
          <p className={style.heroImageTextBox__text}>
            Oferujemy pełen zakres usług elektrycznych - od projektowania i
            montażu nowych instalacji, przez modernizację istniejących układów,
            aż po serwis i naprawy awaryjne. Zapewniamy bezpieczeństwo i
            niezawodność każdej wykonanej instalacji.
          </p>
          <p className={style.heroImageTextBox__text}>
            Specjalizujemy się w instalacjach dla systemów OZE - fotowoltaiki,
            pomp ciepła i magazynów energii, zapewniając pełną kompatybilność i
            bezpieczeństwo każdej instalacji.
          </p>
          <p className={style.heroImageTextBox__text}>
            Montujemy instalacje elektryczne na terenie{" "}
            <strong>Opola, Wrocławia, Kędzierzyna-Koźla, Nysy, Brzegu</strong>{" "}
            oraz całego województwa opolskiego i dolnośląskiego.
          </p>
        </div>
      </HeroImage>

      <section className={style.headSection}>
        <div className={style.headSection__textBox}>
          <h2 className={style.headSection__title}>
            Zakres usług elektrycznych
          </h2>
          <p className={style.headSection__text}>
            <b>Instalacje elektryczne w nowych budynkach:</b> Kompleksowy montaż
            instalacji elektrycznych w domach jednorodzinnych, mieszkaniach i
            obiektach komercyjnych zgodnie z najnowszymi normami.
          </p>
          <p className={style.headSection__text}>
            <b>Modernizacja istniejących instalacji:</b> Wymiana przestarzałych
            instalacji, rozdzielni elektrycznych i zabezpieczeń na nowoczesne i
            bezpieczne rozwiązania.
          </p>
          <p className={style.headSection__text}>
            <b>Przyłączenia fotowoltaiki:</b> Profesjonalne podłączenie systemów
            fotowoltaicznych z pełną kompatybilnością i bezpieczeństwem.{" "}
            <Link
              href="/fotowoltaika"
              aria-label="Przejdź do strony fotowoltaika"
              className={style.headSection__textLink}
            >
              Sprawdź ofertę fotowoltaiki →
            </Link>
          </p>
          <p className={style.headSection__text}>
            <b>Instalacje dla pomp ciepła:</b> Specjalistyczne przyłączenia i
            konfiguracja systemów grzewczych opartych na pompach ciepła.{" "}
            <Link
              href="/pompy_ciepla"
              aria-label="Przejdź do strony pompy ciepła"
              className={style.headSection__textLink}
            >
              Poznaj ofertę pomp ciepła →
            </Link>
          </p>
          <p className={style.headSection__text}>
            <b>Systemy dla magazynów energii:</b> Kompleksowe instalacje
            dedykowane dla magazynów energii z zabezpieczeniami i monitoringiem.{" "}
            <Link
              href="/magazyn_energii"
              aria-label="Przejdź do strony magazyny energii"
              className={style.headSection__textLink}
            >
              Dowiedz się o magazynach energii →
            </Link>
          </p>
          <p className={style.headSection__text}>
            <b>Instalacje odgromowe i przepięciowe:</b> Montaż systemów ochrony
            odgromowej oraz zabezpieczeń przeciwprzepięciowych dla pełnego
            bezpieczeństwa Twojej instalacji.
          </p>
          <p className={style.headSection__text}>
            <b>Serwis i naprawy awaryjne:</b> Szybka interwencja w przypadku
            awarii instalacji elektrycznej, diagnoza usterek i profesjonalne
            naprawy.
          </p>
          <p className={style.headSection__text}>
            <b>Pomiary i certyfikaty:</b> Wykonujemy pomiary instalacji
            elektrycznych oraz wystawiamy wymagane prawem certyfikaty i
            protokoły.
          </p>
        </div>
        <div className={style.headSection__imgBox}>
          <Image
            className={style.headSection__img}
            src={electrical1}
            alt="Nowoczesna rozdzielnia elektryczna - Speed Light Energy Opole"
            width={800}
            height={450}
            priority
          />
        </div>
      </section>

      <section
        className={`${style.headSection} ${style.faqCompact}`}
        aria-labelledby="faq-elektryka"
      >
        <div className={style.headSection__textBox}>
          <h2 id="faq-elektryka" className={style.headSection__title}>
            Najczęściej zadawane pytania – instalacje elektryczne
          </h2>

          <div className={style.faq__item}>
            <details className={style.faq__question}>
              <summary>
                Ile kosztuje montaż instalacji elektrycznej w nowym domu?
              </summary>
              <div className={style.faq__answer}>
                Koszt instalacji elektrycznej w domu jednorodzinnym zaczyna się
                od 8 000 zł brutto. Dokładna cena zależy od metrażu, liczby
                punktów świetlnych i gniazd oraz stopnia zaawansowania
                instalacji.
              </div>
            </details>
          </div>

          <div className={style.faq__item}>
            <details className={style.faq__question}>
              <summary>Czy wykonujecie przyłączenia do fotowoltaiki?</summary>
              <div className={style.faq__answer}>
                Tak, specjalizujemy się w przyłączaniu systemów
                fotowoltaicznych. Zapewniamy pełną kompatybilność i
                bezpieczeństwo instalacji.{" "}
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
              <summary>Jakie instalacje są potrzebne dla pompy ciepła?</summary>
              <div className={style.faq__answer}>
                Pompa ciepła wymaga dedykowanego okablowania, zabezpieczeń i
                często modernizacji istniejącej instalacji. Wykonujemy kompletne
                przyłączenia pod pompy ciepła.{" "}
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
        <h3>Potrzebujesz pomocy z instalacją elektryczną?</h3>
        <Link href="/kontakt" className={style.ctaButton}>
          Darmowa wycena w 24h
        </Link>
      </div>
    </>
  );
};

export default InstalacjeElektryczne;
