import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import HeroImage from "@/components/HeroImage/HeroImage";
import style from "@/styles/HeroImage.module.scss";
import Image from "next/image";
import Link from "next/link";
import heroimg from "@/assets/images/woltaika.jpg";
import foto from "@/assets/images/gallery/foto.jpg";
import foto1 from "@/assets/images/gallery/foto-1.jpg";
import foto2 from "@/assets/images/gallery/foto-2.jpg";
import foto4 from "@/assets/images/gallery/foto-4.jpg";
import foto5 from "@/assets/images/gallery/foto-5.jpg";
import foto6 from "@/assets/images/gallery/foto-6.jpg";
import foto8 from "@/assets/images/gallery/foto-8.jpg";
import foto9 from "@/assets/images/gallery/foto-9.jpg";
import foto10 from "@/assets/images/gallery/foto-10.jpg";
import foto11 from "@/assets/images/gallery/foto-11.jpg";
import foto12 from "@/assets/images/gallery/foto-12.jpg";
import foto13 from "@/assets/images/gallery/foto-13.jpg";

const Fotowoltaika = () => {
  const images = [
    {
      src: foto,
      alt: "Montaż paneli fotowoltaicznych na dachu skośnym domu jednorodzinnego w Opolu",
    },
    {
      src: foto1,
      alt: "Instalacja fotowoltaiczna na dachu skośnym - profesjonalny montaż Speed Light Energy",
    },
    {
      src: foto2,
      alt: "Panele fotowoltaiczne zamontowane na dachu budynku mieszkalnego",
    },
    {
      src: foto4,
      alt: "System fotowoltaiczny na dachu skośnym",
    },
    {
      src: foto5,
      alt: "Instalacja PV na dachu domu jednorodzinnego",
    },
    {
      src: foto6,
      alt: "Panele słoneczne zamontowane na dachu",
    },
    {
      src: foto8,
      alt: "Kompleksowy montaż fotowoltaiki",
    },
    {
      src: foto9,
      alt: "Gruntowy montaż paneli fotowoltaicznych na konstrukcji naziemnej",
    },
    {
      src: foto10,
      alt: "Profesjonalny montaż falownika w pomieszczeniu technicznym",
    },
    {
      src: foto11,
      alt: "Instalacja pompy ciepła w domu jednorodzinnym - realizacja Opole",
    },
    {
      src: foto12,
      alt: "Profesjonalny montaż falownika w pomieszczeniu technicznym",
    },
    {
      src: foto13,
      alt: "Montaż pompy ciepła powietrze-woda w Opolu - Speed Light Energy",
    },
  ];
  return (
    <>
      <HeroImage image={heroimg} alt="Montaż paneli fotowoltaicznych Opole">
        <div className={style.heroImageTextBox}>
          <h1 className={style.heroImageTextBox__title}>Fotowoltaika Opole</h1>
          <p className={style.heroImageTextBox__text}>
            Jesteśmy specjalistami w dziedzinie fotowoltaiki i oferujemy
            kompleksowe usługi, w tym montaż, serwis oraz sprzedaż paneli
            fotowoltaicznych. Nasza firma posiada doświadczenie oraz wiedzę
            niezbędną do zapewnienia Państwu najwyższej jakości usług w zakresie
            fotowoltaiki.
          </p>
          <p className={style.heroImageTextBox__text}>
            Jeśli szukają Państwo rozwiązania, które pozwoli na obniżenie
            kosztów energii elektrycznej oraz zwiększenie niezależności
            energetycznej, to zapraszamy do kontaktu z nami. Z chęcią pomożemy w
            doborze odpowiedniego systemu oraz wykonamy dla Państwa darmową
            wycenę.
          </p>
          <p className={style.heroImageTextBox__text}>
            Nasza oferta jest skierowana zarówno do klientów indywidualnych, jak
            i biznesowych. Gwarantujemy fachowe doradztwo oraz kompleksowe
            wsparcie na każdym etapie współpracy.
          </p>
          <p className={style.heroImageTextBox__text}>
            Zapraszamy do kontaktu z nami i skorzystania z naszych usług.
          </p>
          <p className={style.heroImageTextBox__text}>
            Działamy na terenie{" "}
            <strong>Opola, Wrocławia, Kędzierzyna-Koźla, Nysy, Brzegu</strong>{" "}
            oraz całego województwa opolskiego i dolnośląskiego.
          </p>
        </div>
      </HeroImage>
      <section className={style.headSection}>
        <div className={style.headSection__textBox}>
          <h2 className={style.headSection__title}>Korzyści z fotowoltaiki</h2>
          <p className={style.headSection__text}>
            <b>Oszczędności na rachunkach za energię elektryczną:</b>{" "}
            Właściciele domów lub firm, którzy zainstalują panele fotowoltaiczne
            na dachu, mogą produkować własną energię elektryczną i zmniejszyć
            swoje rachunki za energię elektryczną.
          </p>
          <p className={style.headSection__text}>
            <b>Ochrona środowiska: </b>
            Wytwarzanie energii ze źródeł odnawialnych, takich jak energia
            słoneczna, pomaga zmniejszyć emisję szkodliwych gazów cieplarnianych
            i innych zanieczyszczeń powietrza, co wpływa pozytywnie na
            środowisko i zdrowie publiczne.
          </p>
          <p className={style.headSection__text}>
            <b>Uniezależnienie od dostawców energii: </b>Dzięki zainstalowaniu
            paneli fotowoltaicznych, domy i firmy mogą produkować swoją własną
            energię elektryczną, co pozwala na uniezależnienie od dostawców
            energii i zmniejszenie ryzyka wzrostu cen energii.{" "}
            <Link
              href="/magazyn_energii"
              aria-label="Przejdź do strony magazyny energii"
              className={style.headSection__textLink}
            >
              Dowiedz się, jak magazyn energii wspiera fotowoltaikę →
            </Link>
          </p>
          <p className={style.headSection__text}>
            <b>Zasilanie klimatyzacji i urządzeń grzewczych:</b> Fotowoltaika
            może zasilać klimatyzację latem oraz pompy ciepła zimą, zapewniając
            całoroczny komfort termiczny.{" "}
            <Link
              href="/klimatyzacja"
              aria-label="Przejdź do strony klimatyzacja"
              className={style.headSection__textLink}
            >
              Sprawdź ofertę klimatyzacji →
            </Link>
          </p>
          <p className={style.headSection__text}>
            <b>Bezpieczne przyłączenia elektryczne:</b> Wszystkie instalacje
            wykonujemy z zachowaniem najwyższych standardów bezpieczeństwa i
            zgodnie z obowiązującymi normami.{" "}
            <Link
              href="/instalacje_elektryczne"
              aria-label="Przejdź do strony instalacje elektryczne"
              className={style.headSection__textLink}
            >
              Poznaj nasze usługi elektryczne →
            </Link>
          </p>
          <p className={style.headSection__text}>
            <b>Długoterminowe oszczędności: </b>Inwestycja w panele
            fotowoltaiczne może być początkowo kosztowna, ale w dłuższej
            perspektywie pozwala na znaczne oszczędności na rachunkach za
            energię elektryczną, co przyczynia się do poprawy finansowej
            sytuacji domów i firm.
          </p>
          <p className={style.headSection__text}>
            <b>Wartość dodana dla nieruchomości: </b>Zainstalowanie paneli
            fotowoltaicznych może zwiększyć wartość nieruchomości, co jest
            korzystne dla właścicieli nieruchomości i może ułatwić sprzedaż lub
            wynajem nieruchomości w przyszłości.
          </p>
        </div>
        <div className={style.headSection__imgBox}>
          <Carousel
            autoPlay
            dynamicHeight
            interval={3500}
            emulateTouch
            infiniteLoop
            stopOnHover
            showStatus={false}
            showThumbs={false}
            showIndicators={false}
          >
            {images.map((image) => (
              <div key={image.src}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  className={style.image}
                  width={800}
                  height={450}
                  priority
                />
              </div>
            ))}
          </Carousel>
        </div>
      </section>
      <section
        className={`${style.headSection} ${style.faqCompact}`}
        aria-labelledby="faq-heading"
      >
        <div className={style.headSection__textBox}>
          <h2 id="faq-heading" className={style.headSection__title}>
            Najczęściej zadawane pytania
          </h2>

          <div className={style.faq__item}>
            <details className={style.faq__question}>
              <summary>Czy fotowoltaika współpracuje z pompą ciepła?</summary>
              <div className={style.faq__answer}>
                Tak, to idealne połączenie! Fotowoltaika zasila pompę ciepła, co
                daje całkowicie darmowe ogrzewanie.{" "}
              </div>
            </details>
          </div>

          <div className={style.faq__item}>
            <details className={style.faq__question}>
              <summary>Czy fotowoltaika może zasilać klimatyzację?</summary>
              <div className={style.faq__answer}>
                Tak, fotowoltaika doskonale sprawdza się do zasilania
                klimatyzacji, szczególnie latem gdy produkcja energii jest
                najwyższa.{" "}
                <Link
                  href="/klimatyzacja"
                  aria-label="Przejdź do strony klimatyzacja"
                >
                  Sprawdź ofertę klimatyzacji →
                </Link>
              </div>
            </details>
          </div>

          <div className={style.faq__item}>
            <details className={style.faq__question}>
              <summary>
                Czy instalacja fotowoltaiki wymaga modernizacji elektrycznej?
              </summary>
              <div className={style.faq__answer}>
                Często tak - instalacja fotowoltaiczna wymaga odpowiednich
                zabezpieczeń i czasami modernizacji istniejącej instalacji.{" "}
                <Link
                  href="/instalacje_elektryczne"
                  aria-label="Przejdź do strony instalacje elektryczne"
                >
                  Sprawdź usługi elektryczne →
                </Link>
              </div>
            </details>
          </div>
        </div>
      </section>

      <div className={style.ctaSection}>
        <h3>Zainteresowany fotowoltaiką?</h3>
        <Link href="/kontakt" className={style.ctaButton}>
          Darmowa wycena w 24h
        </Link>
      </div>
    </>
  );
};

export default Fotowoltaika;
