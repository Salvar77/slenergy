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
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, blurUp } from "@/utils/motion";

const Fotowoltaika = ({ isDesktop }) => {
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
      alt: "System fotowoltaiczna na dachu skośnym",
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

  const MotionDiv = isDesktop ? motion.div : "div";
  const MotionP = isDesktop ? motion.p : "p";
  const MotionSection = isDesktop ? motion.section : "section";
  const MotionLink = isDesktop ? motion(Link) : Link;

  const heroTextProps = isDesktop
    ? {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 },
      }
    : {};

  const sectionProps = isDesktop
    ? {
        initial: "hidden",
        whileInView: "show",
        viewport: { once: true, amount: 0.2 },
      }
    : {};

  const staggerProps = isDesktop
    ? {
        variants: staggerContainer(0.1, 0.2),
      }
    : {};

  const fadeInRightProps = isDesktop
    ? {
        variants: fadeIn("right", "tween", 0.2, 0.8),
      }
    : {};

  const fadeInLeftProps = isDesktop
    ? {
        variants: fadeIn("left", "tween", 0.3, 0.8),
      }
    : {};

  const blurUpProps = (delay) =>
    isDesktop
      ? {
          variants: blurUp(delay, 0.8),
        }
      : {};

  const carouselProps = isDesktop
    ? {
        initial: { opacity: 0, scale: 0.95 },
        whileInView: {
          opacity: 1,
          scale: 1,
          transition: { duration: 0.8, delay: 0.4 },
        },
        viewport: { once: true },
      }
    : {};

  const linkProps = isDesktop
    ? {
        whileHover: { x: 5, color: "#8bb63a" },
        transition: { type: "spring", stiffness: 400 },
      }
    : {};

  const ctaProps = isDesktop
    ? {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.6, delay: 0.2 },
        viewport: { once: true },
        whileHover: { scale: 1.05 },
        whileTap: { scale: 0.95 },
      }
    : {};

  return (
    <>
      <HeroImage image={heroimg} alt="Montaż paneli fotowoltaicznych Opole">
        <MotionDiv className={style.heroImageTextBox} {...heroTextProps}>
          <h1 className={style.heroImageTextBox__title}>Fotowoltaika Opole</h1>
          <MotionP
            className={style.heroImageTextBox__text}
            {...blurUpProps(0.1)}
          >
            Jesteśmy specjalistami w dziedzinie fotowoltaiki i oferujemy
            kompleksowe usługi, w tym montaż, serwis oraz sprzedaż paneli
            fotowoltaicznych. Nasza firma posiada doświadczenie oraz wiedzę
            niezbędną do zapewnienia Państwu najwyższej jakości usług w zakresie
            fotowoltaiki.
          </MotionP>
          <MotionP
            className={style.heroImageTextBox__text}
            {...blurUpProps(0.2)}
          >
            Jeśli szukają Państwo rozwiązania, które pozwoli na obniżenie
            kosztów energii elektrycznej oraz zwiększenie niezależności
            energetycznej, to zapraszamy do kontaktu z nami. Z chęcią pomożemy w
            doborze odpowiedniego systemu oraz wykonamy dla Państwa darmową
            wycenę.
          </MotionP>
          <MotionP
            className={style.heroImageTextBox__text}
            {...blurUpProps(0.3)}
          >
            Nasza oferta jest skierowana zarówno do klientów indywidualnych, jak
            i biznesowych. Gwarantujemy fachowe doradztwo oraz kompleksowe
            wsparcie na każdym etapie współpracy.
          </MotionP>
          <MotionP
            className={style.heroImageTextBox__text}
            {...blurUpProps(0.4)}
          >
            Zapraszamy do kontaktu z nami i skorzystania z naszych usług.
          </MotionP>
          <MotionP
            className={style.heroImageTextBox__text}
            {...blurUpProps(0.5)}
          >
            Działamy na terenie{" "}
            <strong>Opola, Wrocławia, Kędzierzyna-Koźla, Nysy, Brzegu</strong>{" "}
            oraz całego województwa opolskiego i dolnośląskiego.
          </MotionP>
        </MotionDiv>
      </HeroImage>

      <MotionSection
        className={style.headSection}
        {...sectionProps}
        {...staggerProps}
      >
        <MotionDiv className={style.headSection__textBox} {...fadeInRightProps}>
          <h2 className={style.headSection__title}>Korzyści z fotowoltaiki</h2>
          <MotionP className={style.headSection__text} {...blurUpProps(0.1)}>
            <b>Oszczędności na rachunkach za energię elektryczną:</b>{" "}
            Właściciele domów lub firm, którzy zainstalują panele fotowoltaiczne
            na dachu, mogą produkować własną energię elektryczną i zmniejszyć
            swoje rachunki za energię elektryczną.
          </MotionP>
          <MotionP className={style.headSection__text} {...blurUpProps(0.2)}>
            <b>Ochrona środowiska: </b>
            Wytwarzanie energii ze źródeł odnawialnych, takich jak energia
            słoneczna, pomaga zmniejszyć emisję szkodliwych gazów cieplarnianych
            i innych zanieczyszczeń powietrza, co wpływa pozytywnie na
            środowisko i zdrowie publiczne.
          </MotionP>
          <MotionP className={style.headSection__text} {...blurUpProps(0.3)}>
            <b>Uniezależnienie od dostawców energii: </b>Dzięki zainstalowaniu
            paneli fotowoltaicznych, domy i firmy mogą produkować swoją własną
            energię elektryczną, co pozwala na uniezależnienie od dostawców
            energii i zmniejszenie ryzyka wzrostu cen energii.{" "}
            <MotionLink
              href="/magazyn_energii"
              aria-label="Przejdź do strony magazyny energii"
              className={style.headSection__textLink}
              {...linkProps}
            >
              Dowiedz się, jak magazyn energii wspiera fotowoltaikę →
            </MotionLink>
          </MotionP>
          <MotionP className={style.headSection__text} {...blurUpProps(0.4)}>
            <b>Zasilanie klimatyzacji i urządzeń grzewczych:</b> Fotowoltaika
            może zasilać klimatyzację latem oraz pompy ciepła zimą, zapewniając
            całoroczny komfort termiczny.{" "}
            <MotionLink
              href="/klimatyzacja"
              aria-label="Przejdź do strony klimatyzacja"
              className={style.headSection__textLink}
              {...linkProps}
            >
              Sprawdź ofertę klimatyzacji →
            </MotionLink>
          </MotionP>
          <MotionP className={style.headSection__text} {...blurUpProps(0.5)}>
            <b>Bezpieczne przyłączenia elektryczne:</b> Wszystkie instalacje
            wykonujemy z zachowaniem najwyższych standardów bezpieczeństwa i
            zgodnie z obowiązującymi normami.{" "}
            <MotionLink
              href="/instalacje_elektryczne"
              aria-label="Przejdź do strony instalacje elektryczne"
              className={style.headSection__textLink}
              {...linkProps}
            >
              Poznaj nasze usługi elektryczne →
            </MotionLink>
          </MotionP>
          <MotionP className={style.headSection__text} {...blurUpProps(0.6)}>
            <b>Długoterminowe oszczędności: </b>Inwestycja w panele
            fotowoltaiczne może być początkowo kosztowna, ale w dłuższej
            perspektywie pozwala na znaczne oszczędności na rachunkach za
            energię elektryczną, co przyczynia się do poprawy finansowej
            sytuacji domów i firm.
          </MotionP>
          <MotionP className={style.headSection__text} {...blurUpProps(0.7)}>
            <b>Wartość dodana dla nieruchomości: </b>Zainstalowanie paneli
            fotowoltaicznych może zwiększyć wartość nieruchomości, co jest
            korzystne dla właścicieli nieruchomości i może ułatwić sprzedaż lub
            wynajem nieruchomości w przyszłości.
          </MotionP>
        </MotionDiv>

        <MotionDiv
          className={style.headSection__imgBox}
          {...fadeInLeftProps}
          {...carouselProps}
        >
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
        </MotionDiv>
      </MotionSection>

      <MotionSection
        className={`${style.headSection} ${style.faqCompact}`}
        aria-labelledby="faq-heading"
        {...sectionProps}
      >
        <MotionDiv
          className={style.headSection__textBox}
          variants={isDesktop ? fadeIn("up", "tween", 0.2, 0.8) : {}}
        >
          <h2 id="faq-heading" className={style.headSection__title}>
            Najczęściej zadawane pytania
          </h2>

          <MotionDiv
            className={style.faq__item}
            variants={isDesktop ? blurUp(0.3, 0.8) : {}}
            whileHover={{
              x: 10,
              backgroundColor: "rgba(139, 182, 58, 0.05)",
              transition: { type: "spring", stiffness: 400 },
            }}
          >
            <details className={style.faq__question}>
              <summary>Czy fotowoltaika współpracuje z pompą ciepła?</summary>
              <div className={style.faq__answer}>
                Tak, to idealne połączenie! Fotowoltaika zasila pompę ciepła, co
                daje całkowicie darmowe ogrzewanie.{" "}
              </div>
            </details>
          </MotionDiv>

          <MotionDiv
            className={style.faq__item}
            variants={isDesktop ? blurUp(0.4, 0.8) : {}}
            whileHover={{
              x: 10,
              backgroundColor: "rgba(139, 182, 58, 0.05)",
              transition: { type: "spring", stiffness: 400 },
            }}
          >
            <details className={style.faq__question}>
              <summary>Czy fotowoltaika może zasilać klimatyzację?</summary>
              <div className={style.faq__answer}>
                Tak, fotowoltaika doskonale sprawdza się do zasilania
                klimatyzacji, szczególnie latem gdy produkcja energii jest
                najwyższa.{" "}
                <MotionLink
                  href="/klimatyzacja"
                  aria-label="Przejdź do strony klimatyzacja"
                  {...linkProps}
                >
                  Sprawdź ofertę klimatyzacji →
                </MotionLink>
              </div>
            </details>
          </MotionDiv>

          <MotionDiv
            className={style.faq__item}
            variants={isDesktop ? blurUp(0.5, 0.8) : {}}
            whileHover={{
              x: 10,
              backgroundColor: "rgba(139, 182, 58, 0.05)",
              transition: { type: "spring", stiffness: 400 },
            }}
          >
            <details className={style.faq__question}>
              <summary>
                Czy instalacja fotowoltaiki wymaga modernizacji elektrycznej?
              </summary>
              <div className={style.faq__answer}>
                Często tak - instalacja fotowoltaiczna wymaga odpowiednich
                zabezpieczeń i czasami modernizacji istniejącej instalacji.{" "}
                <MotionLink
                  href="/instalacje_elektryczne"
                  aria-label="Przejdź do strony instalacje elektryczne"
                  {...linkProps}
                >
                  Sprawdź usługi elektryczne →
                </MotionLink>
              </div>
            </details>
          </MotionDiv>
        </MotionDiv>
      </MotionSection>

      <MotionDiv className={style.ctaSection} {...ctaProps}>
        <h3>Zainteresowany fotowoltaiką?</h3>
        <MotionLink
          href="/kontakt"
          className={style.ctaButton}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Darmowa wycena w 24h
        </MotionLink>
      </MotionDiv>
    </>
  );
};

export default Fotowoltaika;
