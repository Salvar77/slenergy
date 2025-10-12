import HeroImage from "@/components/HeroImage/HeroImage";
import style from "@/styles/HeroImage.module.scss";
import Image from "next/image";
import heroimg from "@/assets/images/pompa.jpg";
import pompa2 from "@/assets/images/pompa2.jpg";
import React from "react";
import Link from "next/link";

const Pompyciepla = () => {
  return (
    <>
      <HeroImage image={heroimg} alt="grafika przedstawiająca pompę ciepła">
        <div className={style.heroImageTextBox}>
          <h1 className={style.heroImageTextBox__title}>Pompy ciepła Opole</h1>
          <p className={style.heroImageTextBox__text}>
            Pompy ciepła to urządzenia, które pozwalają na przepompowanie
            energii cieplnej z jednego miejsca do drugiego. Najczęściej stosuje
            się je do ogrzewania pomieszczeń lub wody użytkowej, ale mogą być
            także wykorzystywane do chłodzenia.
          </p>
          <p className={style.heroImageTextBox__text}>
            Pompy ciepła działają na zasadzie odzyskiwania energii z otoczenia,
            co oznacza, że pobierają ciepło z powietrza, wody czy gleby i
            przekazują je do pomieszczenia, w którym jest zainstalowana. Dzięki
            temu są one bardziej ekologiczne i energooszczędne w porównaniu do
            tradycyjnych systemów grzewczych, co przekłada się na niższe
            rachunki za energię.
          </p>
          <p className={style.heroImageTextBox__text}>
            Koszt instalacji pompy ciepła zależy od wielu czynników, takich jak
            powierzchnia pomieszczeń, rodzaj instalacji, rodzaj pompy ciepła,
            odległość od źródła ciepła, czy też rodzaj instalacji. Ceny wraz z
            montażem zaczynają się od 30 000 zł. Dokładna wycena instalacji jest
            możliwa po wykonaniu bezpłatnej wizyty technicznej.
          </p>
          <p className={style.heroImageTextBox__text}>
            Montujemy pompy ciepła na terenie{" "}
            <strong>Opola, Wrocławia, Kędzierzyna-Koźla, Nysy, Brzegu</strong>{" "}
            oraz całego województwa opolskiego i dolnośląskiego.
          </p>
        </div>
      </HeroImage>
      <section className={style.headSection}>
        <div className={style.headSection__textBox}>
          <h2 className={style.headSection__title}>
            Korzyści z pompy ciepła – dlaczego warto?
          </h2>
          <p className={style.headSection__text}>
            <b>Oszczędność na kosztach energii: </b> Pompy ciepła wykorzystują
            energię z otoczenia (powietrza, gleby lub wody) do produkcji ciepła,
            co jest znacznie bardziej ekonomiczne niż tradycyjne ogrzewanie
            gazem lub olejem opałowym. Dzięki temu można oszczędzić na kosztach
            energii i zmniejszyć rachunki za ogrzewanie.
          </p>
          <p className={style.headSection__text}>
            <b>Niskie emisje gazów cieplarnianych: </b> Pompy ciepła nie spalają
            paliwa, a jedynie wykorzystują energię z otoczenia, dlatego są
            bardziej przyjazne dla środowiska i pomagają zmniejszyć emisje gazów
            cieplarnianych.
          </p>
          <p className={style.headSection__text}>
            <b>Wysoka wydajność: </b>Pompy ciepła charakteryzują się wysoką
            wydajnością i efektywnością, ponieważ wykorzystują jedynie niewielką
            ilość energii elektrycznej do przetwarzania energii z otoczenia na
            ciepło.
          </p>
          <p className={style.headSection__text}>
            <b>Komfort użytkowania: </b> Pompy ciepła są bardzo ciche i nie
            emitują żadnych szkodliwych substancji do powietrza, co przyczynia
            się do komfortu użytkowania i korzystnego wpływu na zdrowie
            mieszkańców.
          </p>
          <p className={style.headSection__text}>
            <b>Zasilanie z fotowoltaiki: </b> Pompa ciepła idealnie współpracuje
            z instalacją fotowoltaiczną, co pozwala na darmowe ogrzewanie.{" "}
            <Link
              href="/fotowoltaika"
              aria-label="Przejdź do strony fotowoltaika"
              className={style.headSection__textLink}
            >
              Sprawdź ofertę fotowoltaiki →
            </Link>
          </p>
          <p className={style.headSection__text}>
            <b>Magazynowanie nadwyżek energii: </b> Nadwyżki energii z
            fotowoltaiki możesz magazynować i wykorzystywać do zasilania pompy
            ciepła.{" "}
            <Link
              href="/magazyn_energii"
              aria-label="Przejdź do strony magazyny energii"
              className={style.headSection__textLink}
            >
              Poznaj magazyny energii →
            </Link>
          </p>
          <p className={style.headSection__text}>
            <b>Funkcja chłodzenia jak klimatyzacja: </b> Niektóre modele pomp
            ciepła pozwalają na wykorzystanie w systemie chłodzenia w lecie, co
            dodatkowo zwiększa ich funkcjonalność.{" "}
            <Link
              href="/klimatyzacja"
              aria-label="Przejdź do strony klimatyzacja"
              className={style.headSection__textLink}
            >
              Sprawdź ofertę klimatyzacji →
            </Link>
          </p>
          <p className={style.headSection__text}>
            <b>Profesjonalne przyłączenia elektryczne: </b> Montaż pompy ciepła
            wymaga specjalistycznych instalacji elektrycznych i zabezpieczeń.{" "}
            <Link
              href="/instalacje_elektryczne"
              aria-label="Przejdź do strony instalacje elektryczne"
              className={style.headSection__textLink}
            >
              Dowiedz się o instalacjach elektrycznych →
            </Link>
          </p>
          <p className={style.headSection__text}>
            <b>Długa żywotność: </b>Pompy ciepła są zazwyczaj trwałymi i
            niezawodnymi urządzeniami, co pozwala na wiele lat bezproblemowego
            użytkowania i minimalizuje koszty związane z ich serwisowaniem i
            naprawami.
          </p>
        </div>
        <div className={style.headSection__imgBox}>
          <Image
            className={style.headSection__img}
            src={pompa2}
            alt="Nowoczesna pompa ciepła powietrze-woda - Speed Light Energy Opole"
            width={800}
            height={450}
            priority
          />
        </div>
      </section>
      <section
        className={`${style.headSection} ${style.faqCompact}`}
        aria-labelledby="faq-pompy"
      >
        <div className={style.headSection__textBox}>
          <h2 id="faq-pompy" className={style.headSection__title}>
            Najczęściej zadawane pytania – pompy ciepła
          </h2>

          <div className={style.faq__item}>
            <details className={style.faq__question}>
              <summary>Ile kosztuje pompa ciepła z montażem?</summary>
              <div className={style.faq__answer}>
                Cena kompletnej instalacji powietrze-woda z montażem zaczyna się
                od 30 000 zł brutto.
              </div>
            </details>
          </div>

          <div className={style.faq__item}>
            <details className={style.faq__question}>
              <summary>Czy pompa ciepła działa z fotowoltaiką?</summary>
              <div className={style.faq__answer}>
                Tak, pompa ciepła idealnie współpracuje z instalacją
                fotowoltaiczną – możesz zasilać ją własną energią.{" "}
                <Link
                  href="/fotowoltaika"
                  aria-label="Fotowoltaika do zasilania pompy ciepła"
                >
                  Sprawdź ofertę fotowoltaiki →
                </Link>
              </div>
            </details>
          </div>

          <div className={style.faq__item}>
            <details className={style.faq__question}>
              <summary>Czy pompa ciepła może zastąpić klimatyzację?</summary>
              <div className={style.faq__answer}>
                Tak, wiele nowoczesnych pomp ciepła oferuje funkcję chłodzenia
                aktywnego, mogąc pełnić rolę klimatyzacji latem.{" "}
                <Link
                  href="/klimatyzacja"
                  aria-label="Przejdź do strony klimatyzacja"
                >
                  Poznaj ofertę klimatyzacji →
                </Link>
              </div>
            </details>
          </div>
        </div>
      </section>
      <div className={style.ctaSection}>
        <h3>Zainteresowany pompami ciepła?</h3>
        <Link href="/kontakt" className={style.ctaButton}>
          Darmowa wycena w 24h
        </Link>
      </div>
    </>
  );
};

export default Pompyciepla;
