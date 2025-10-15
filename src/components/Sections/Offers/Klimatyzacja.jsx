import HeroImage from "@/components/HeroImage/HeroImage";
import style from "@/styles/HeroImage.module.scss";
import classes from "./Offers.module.scss";
import Image from "next/image";
import heroimgMobile from "@/assets/images/klimatyzacja-na-scianie.jpg";
import heroimgDesktop from "@/assets/images/klimatyzacja-na-scianie-2.jpg";
import klima1 from "@/assets/images/klimatyzator-montowany-na-bialej-scianie.jpg";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, blurUp } from "@/utils/motion";

const Klimatyzacja = ({ isDesktop }) => {
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
      <HeroImage
        mobileImage={heroimgMobile}
        desktopImage={heroimgDesktop}
        alt="Klimatyzacja Opole - montaż i serwis systemów split i multi-split"
      >
        <MotionDiv className={style.heroImageTextBox} {...heroTextProps}>
          <h1 className={style.heroImageTextBox__title}>Klimatyzacja Opole</h1>
          <MotionP
            className={style.heroImageTextBox__text}
            {...blurUpProps(0.1)}
          >
            Jesteśmy specjalistami w zakresie klimatyzacji i oferujemy
            kompleksowe usługi montażu, serwisu oraz doradztwa w doborze
            systemów klimatyzacyjnych. Nasza firma posiada niezbędne
            doświadczenie i kwalifikacje do wykonywania prac na najwyższym
            poziomie.
          </MotionP>
          <MotionP
            className={style.heroImageTextBox__text}
            {...blurUpProps(0.2)}
          >
            Oferujemy pełen zakres usług związanych z klimatyzacją - od
            doradztwa i projektowania, przez profesjonalny montaż, aż po
            regularny serwis i naprawy gwarancyjne. Zapewniamy komfort termiczny
            przez cały rok.
          </MotionP>
          <MotionP
            className={style.heroImageTextBox__text}
            {...blurUpProps(0.3)}
          >
            Specjalizujemy się w systemach klimatyzacji dla domów, biur, sklepów
            oraz obiektów przemysłowych. Dobieramy rozwiązania optymalne pod
            względem efektywności i kosztów eksploatacji.
          </MotionP>
          <MotionP
            className={style.heroImageTextBox__text}
            {...blurUpProps(0.4)}
          >
            Montujemy klimatyzację na terenie{" "}
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
            Zakres usług klimatyzacyjnych
          </h2>
          <MotionP className={style.headSection__text} {...blurUpProps(0.1)}>
            <b>Klimatyzacja domowa:</b> Montaż systemów split i multi-split do
            domów jednorodzinnych i mieszkań. Ciche i energooszczędne
            rozwiązania zapewniające komfort przez cały rok.
          </MotionP>
          <MotionP className={style.headSection__text} {...blurUpProps(0.2)}>
            <b>Klimatyzacja biurowa i komercyjna:</b> Kompleksowe systemy dla
            biur, sklepów, restauracji i obiektów usługowych. Projektowanie i
            montaż instalacji dostosowanych do specyficznych potrzeb.
          </MotionP>
          <MotionP className={style.headSection__text} {...blurUpProps(0.3)}>
            <b>Serwis i konserwacja:</b> Regularne przeglądy, czyszczenie,
            doładowanie czynnika chłodniczego oraz naprawy gwarancyjne i
            pogwarancyjne wszystkich marek klimatyzatorów.
          </MotionP>
          <MotionP className={style.headSection__text} {...blurUpProps(0.4)}>
            <b>Systemy współpracujące z fotowoltaiką:</b> Klimatyzatory zasilane
            energią słoneczną dla maksymalnych oszczędności.{" "}
            <MotionLink
              href="/fotowoltaika"
              aria-label="Przejdź do strony fotowoltaika"
              className={style.headSection__textLink}
              {...linkProps}
            >
              Sprawdź ofertę fotowoltaiki →
            </MotionLink>
          </MotionP>
          <MotionP className={style.headSection__text} {...blurUpProps(0.5)}>
            <b>Pompy ciepła z funkcją chłodzenia:</b> Nowoczesne pompy ciepła
            oferujące zarówno ogrzewanie zimą, jak i chłodzenie latem.{" "}
            <MotionLink
              href="/pompy_ciepla"
              aria-label="Przejdź do strony pompy ciepła"
              className={style.headSection__textLink}
              {...linkProps}
            >
              Poznaj pompy ciepła →
            </MotionLink>
          </MotionP>
          <MotionP className={style.headSection__text} {...blurUpProps(0.6)}>
            <b>Instalacje elektryczne pod klimatyzację:</b> Profesjonalne
            przyłączenia elektryczne i zabezpieczenia dla systemów klimatyzacji.{" "}
            <MotionLink
              href="/instalacje_elektryczne"
              aria-label="Przejdź do strony instalacje elektryczne"
              className={style.headSection__textLink}
              {...linkProps}
            >
              Sprawdź usługi elektryczne →
            </MotionLink>
          </MotionP>
        </MotionDiv>

        <MotionDiv className={style.headSection__imgBox} {...fadeInLeftProps}>
          <MotionImage
            className={style.headSection__img}
            src={klima1}
            alt="Nowoczesna klimatyzacja split - Speed Light Energy Opole"
            width={800}
            height={450}
            priority
            {...imageProps}
          />
        </MotionDiv>
      </MotionSection>

      <MotionSection
        className={`${style.headSection} ${style.faqCompact}`}
        aria-labelledby="faq-klima"
        {...sectionProps}
      >
        <MotionDiv
          className={style.headSection__textBox}
          variants={isDesktop ? fadeIn("up", "tween", 0.2, 0.8) : {}}
        >
          <h2 id="faq-klima" className={style.headSection__title}>
            Najczęściej zadawane pytania – klimatyzacja
          </h2>

          <MotionDiv className={style.faq__item} {...faqItemProps(0.3)}>
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
          </MotionDiv>

          <MotionDiv className={style.faq__item} {...faqItemProps(0.4)}>
            <details className={style.faq__question}>
              <summary>
                Czy klimatyzacja może współpracować z fotowoltaiką?
              </summary>
              <div className={style.faq__answer}>
                Tak, to idealne połączenie! Klimatyzacja zasilana energią z
                fotowoltaiki pozwala na darmowe chłodzenie latem.{" "}
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
              <summary>
                Czy pompa ciepła może chłodzić jak klimatyzacja?
              </summary>
              <div className={style.faq__answer}>
                Tak, nowoczesne pompy ciepła oferują funkcję chłodzenia
                aktywnego lub pasywnego, mogąc zastąpić tradycyjną klimatyzację.{" "}
                <MotionLink
                  href="/pompy_ciepla"
                  aria-label="Przejdź do strony pompy ciepła"
                  {...linkProps}
                >
                  Dowiedz się więcej o pompach ciepła →
                </MotionLink>
              </div>
            </details>
          </MotionDiv>
        </MotionDiv>
      </MotionSection>

      <MotionDiv className={style.ctaSection} {...ctaProps}>
        <h3>Zainteresowany klimatyzacją?</h3>
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

export default Klimatyzacja;
