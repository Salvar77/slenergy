import HeroImage from "@/components/HeroImage/HeroImage";
import style from "@/styles/HeroImage.module.scss";
import classes from "./Offers.module.scss";
import Image from "next/image";
import heroimg from "@/assets/images/magazyn.jpg";
import magazyn2 from "@/assets/images/magazyn2.jpg";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, blurUp, scaleIn } from "@/utils/motion";

const Magazyn = ({ isDesktop }) => {
  const MotionDiv = isDesktop ? motion.div : "div";
  const MotionP = isDesktop ? motion.p : "p";
  const MotionSection = isDesktop ? motion.section : "section";
  const MotionLink = isDesktop ? motion(Link) : Link;
  const MotionImage = isDesktop ? motion(Image) : Image;

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

  const imageProps = isDesktop
    ? {
        initial: { opacity: 0, scale: 0.95, x: 20 },
        whileInView: {
          opacity: 1,
          scale: 1,
          x: 0,
          transition: { duration: 0.8, delay: 0.4 },
        },
        viewport: { once: true },
        whileHover: {
          scale: 1.03,
          y: -5,
          transition: { type: "spring", stiffness: 300, damping: 20 },
        },
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

  const faqItemProps = (delay) =>
    isDesktop
      ? {
          variants: blurUp(delay, 0.8),
          whileHover: {
            x: 10,
            backgroundColor: "rgba(139, 182, 58, 0.05)",
            transition: { type: "spring", stiffness: 400 },
          },
        }
      : {};

  return (
    <>
      <HeroImage image={heroimg} alt="grafika przedstawiająca magazyn energii">
        <MotionDiv className={style.heroImageTextBox} {...heroTextProps}>
          <h1 className={style.heroImageTextBox__title}>
            Magazyny energii Opole
          </h1>
          <MotionP
            className={style.heroImageTextBox__text}
            {...blurUpProps(0.1)}
          >
            Magazyny energii to systemy, które pozwalają na gromadzenie i
            przechowywanie energii w celu wykorzystania jej w przyszłości. Mogą
            być stosowane w różnych celach, takich jak zwiększenie niezawodności
            dostaw energii, poprawa jakości energii lub jako źródło awaryjne w
            przypadku awarii sieci energetycznej.
          </MotionP>
          <MotionP
            className={style.heroImageTextBox__text}
            {...blurUpProps(0.2)}
          >
            Istnieje wiele rodzajów magazynów energii, takich jak baterie
            litowo-jonowe, magazyny wodne, magazyny powietrzne czy magazyny
            ciepła. Magazyny energii mają coraz większe znaczenie wraz z
            rozwojem odnawialnych źródeł energii, takich jak panele
            fotowoltaiczne i elektrownie wiatrowe, które generują energię w
            sposób niestabilny i zmienny w czasie.
          </MotionP>
          <MotionP
            className={style.heroImageTextBox__text}
            {...blurUpProps(0.3)}
          >
            Dlatego magazyny energii są ważnym elementem przyszłych systemów
            energetycznych, pozwalając na składowanie energii wtedy, gdy jest
            jej nadmiar, aby móc ją wykorzystać w chwilach, gdy brakuje.
          </MotionP>
          <MotionP
            className={style.heroImageTextBox__text}
            {...blurUpProps(0.4)}
          >
            Montujemy magazyny energii na terenie{" "}
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
          <h2 className={style.headSection__title}>
            Korzyści z magazynu energii
          </h2>
          <MotionP className={style.headSection__text} {...blurUpProps(0.1)}>
            <b>Oszczędność na kosztach energii: </b> Magazynowanie energii
            pozwala na wykorzystanie jej wtedy, gdy jest najbardziej potrzebna,
            co zmniejsza koszty energii elektrycznej i umożliwia uniezależnienie
            się od tradycyjnych źródeł energii.
          </MotionP>
          <MotionP className={style.headSection__text} {...blurUpProps(0.2)}>
            <b>Zwiększenie wykorzystania energii z fotowoltaiki: </b>
            Magazynowanie nadwyżek energii z instalacji fotowoltaicznej pozwala
            na wykorzystanie jej w nocy i podczas pochmurnych dni.{" "}
            <MotionLink
              href="/fotowoltaika"
              aria-label="Przejdź do strony fotowoltaika"
              className={style.headSection__textLink}
              {...linkProps}
            >
              Sprawdź ofertę fotowoltaiki →
            </MotionLink>
          </MotionP>
          <MotionP className={style.headSection__text} {...blurUpProps(0.3)}>
            <b>Zasilanie pomp ciepła: </b> Magazyn energii może zasilać pompę
            ciepła w nocy, zapewniając darmowe ogrzewanie z własnej energii.{" "}
            <MotionLink
              href="/pompy_ciepla"
              aria-label="Przejdź do strony pompy ciepła"
              className={style.headSection__textLink}
              {...linkProps}
            >
              Poznaj ofertę pomp ciepła →
            </MotionLink>
          </MotionP>
          <MotionP className={style.headSection__text} {...blurUpProps(0.4)}>
            <b>Zasilanie klimatyzacji: </b> W lecie magazyn energii może zasilać
            klimatyzację, zapewniając darmowe chłodzenie z energii słonecznej.{" "}
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
            <b>Profesjonalne przyłączenia elektryczne: </b> Montaż magazynu
            energii wymaga specjalistycznych instalacji elektrycznych i
            zabezpieczeń.{" "}
            <MotionLink
              href="/instalacje_elektryczne"
              aria-label="Przejdź do strony instalacje elektryczne"
              className={style.headSection__textLink}
              {...linkProps}
            >
              Dowiedz się o instalacjach elektrycznych →
            </MotionLink>
          </MotionP>
          <MotionP className={style.headSection__text} {...blurUpProps(0.6)}>
            <b>Wsparcie sieci energetycznej: </b> Magazyny energii mogą pomóc w
            równoważeniu produkcji i poboru energii w sieci energetycznej, co
            zmniejsza potrzebę budowy nowych elektrowni i infrastruktury
            sieciowej.
          </MotionP>
          <MotionP className={style.headSection__text} {...blurUpProps(0.7)}>
            <b>Zwiększenie niezawodności systemu energetycznego: </b> Magazyny
            energii pozwalają na przechowywanie energii w przypadku awarii
            systemu, co przyczynia się do zwiększenia niezawodności systemu
            energetycznego.
          </MotionP>
          <MotionP className={style.headSection__text} {...blurUpProps(0.8)}>
            <b>Zmniejszenie emisji gazów cieplarnianych: </b> Magazynowanie
            energii z odnawialnych źródeł pozwala na zmniejszenie emisji gazów
            cieplarnianych i innych zanieczyszczeń powietrza, co przyczynia się
            do ochrony środowiska i zdrowia publicznego.
          </MotionP>
          <MotionP className={style.headSection__text} {...blurUpProps(0.9)}>
            <b>Bezpieczeństwo energetyczne: </b> Magazyny energii pozwalają na
            zabezpieczenie dostaw energii w przypadku kryzysów energetycznych
            lub innych sytuacji awaryjnych.
          </MotionP>
        </MotionDiv>

        <MotionDiv className={style.headSection__imgBox} {...fadeInLeftProps}>
          <MotionImage
            className={style.headSection__img}
            src={magazyn2}
            alt="Nowoczesny magazyn energii litowo-jonowy - Speed Light Energy Opole"
            width={800}
            height={450}
            priority
            {...imageProps}
          />
        </MotionDiv>
      </MotionSection>

      <MotionSection
        className={`${style.headSection} ${style.faqCompact}`}
        aria-labelledby="faq-magazyn"
        {...sectionProps}
      >
        <MotionDiv
          className={style.headSection__textBox}
          variants={isDesktop ? fadeIn("up", "tween", 0.2, 0.8) : {}}
        >
          <h2 id="faq-magazyn" className={style.headSection__title}>
            Najczęściej zadawane pytania – magazyny energii
          </h2>

          <MotionDiv className={style.faq__item} {...faqItemProps(0.3)}>
            <details className={style.faq__question}>
              <summary>Ile kosztuje magazyn energii 10 kWh?</summary>
              <div className={style.faq__answer}>
                Cena instalacji 10 kWh magazynu energii z montażem zaczyna się
                od 19 900 zł brutto.
              </div>
            </details>
          </MotionDiv>

          <MotionDiv className={style.faq__item} {...faqItemProps(0.4)}>
            <details className={style.faq__question}>
              <summary>Czy magazyn działa z instalacją fotowoltaiczną?</summary>
              <div className={style.faq__answer}>
                Tak, magazyn energii idealnie współpracuje z fotowoltaiką,
                pozwalając magazynować nadwyżki energii.{" "}
                <MotionLink
                  href="/fotowoltaika"
                  aria-label="Przejdź do strony fotowoltaika"
                  {...linkProps}
                >
                  Sprawdź ofertę fotowoltaiki →
                </MotionLink>
              </div>
            </details>
          </MotionDiv>

          <MotionDiv className={style.faq__item} {...faqItemProps(0.5)}>
            <details className={style.faq__question}>
              <summary>Czy magazyn może zasilać pompę ciepła?</summary>
              <div className={style.faq__answer}>
                Tak, magazyn energii doskonale sprawdza się do zasilania pomp
                ciepła w nocy, zapewniając darmowe ogrzewanie.{" "}
                <MotionLink
                  href="/pompy_ciepla"
                  aria-label="Przejdź do strony pompy ciepła"
                  {...linkProps}
                >
                  Poznaj ofertę pomp ciepła →
                </MotionLink>
              </div>
            </details>
          </MotionDiv>
        </MotionDiv>
      </MotionSection>

      <MotionDiv className={style.ctaSection} {...ctaProps}>
        <h3>Zainteresowany magazynami energii?</h3>
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

export default Magazyn;
