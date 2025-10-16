import HeroImage from "@/components/HeroImage/HeroImage";
import style from "@/styles/HeroImage.module.scss";
import Image from "next/image";
import Link from "next/link";
import heroimg from "@/assets/images/naprawa-dachu-big.jpg";
import dach1 from "@/assets/images/naprawa-dachu-small-2.jpg";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, blurUp } from "@/utils/motion";

const NaprawaDachow = ({ isDesktop }) => {
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
        initial: { opacity: 0, scale: 0.95 },
        whileInView: {
          opacity: 1,
          scale: 1,
          transition: { duration: 0.8, delay: 0.4 },
        },
        viewport: { once: true },
        whileHover: {
          scale: 1.03,
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

  return (
    <>
      <HeroImage
        image={heroimg}
        alt="Naprawa dachów Opole - profesjonalne usługi dekarskie"
      >
        <MotionDiv className={style.heroImageTextBox} {...heroTextProps}>
          <h1 className={style.heroImageTextBox__title}>
            Naprawa Dachów Opole
          </h1>
          <MotionP
            className={style.heroImageTextBox__text}
            {...blurUpProps(0.1)}
          >
            Specjalizujemy się w profesjonalnych naprawach i renowacjach dachów
            wszystkich typów. Nasze usługi dekarskie obejmują zarówno drobne
            naprawy, jak i kompleksowe remonty pokryć dachowych.
          </MotionP>
          <MotionP
            className={style.heroImageTextBox__text}
            {...blurUpProps(0.2)}
          >
            Doświadczony zespół dekarski gwarantuje najwyższą jakość wykonania
            oraz trwałość napraw. Korzystamy wyłącznie z materiałów od
            renomowanych producentów, zapewniając długoletnią ochronę Twojego
            domu.
          </MotionP>
          <MotionP
            className={style.heroImageTextBox__text}
            {...blurUpProps(0.3)}
          >
            Oferujemy bezpłatne doradztwo i wycenę, a także gwarancję na
            wszystkie wykonane przez nas prace dekarskie.
          </MotionP>
          <MotionP
            className={style.heroImageTextBox__text}
            {...blurUpProps(0.4)}
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
          <h2 className={style.headSection__title}>Zakres usług dekarskich</h2>
          <MotionP className={style.headSection__text} {...blurUpProps(0.1)}>
            <b>Naprawa uszkodzeń dachów:</b> Likwidacja przecieków, wymiana
            uszkodzonych elementów pokrycia, naprawa konstrukcji dachowych po
            wichurach i opadach atmosferycznych.
          </MotionP>
          <MotionP className={style.headSection__text} {...blurUpProps(0.2)}>
            <b>Wymiana pokryć dachowych:</b> Kompleksowa wymiana dachówek,
            blachodachówki, papy oraz innych materiałów pokryciowych z
            zachowaniem najwyższych standardów wykonawczych.
          </MotionP>
          <MotionP className={style.headSection__text} {...blurUpProps(0.3)}>
            <b>Montaż i naprawa systemów rynnowych:</b> Instalacja nowych rynien
            i rur spustowych, udrażnianie istniejących systemów, naprawa
            uszkodzeń.
          </MotionP>
          <MotionP className={style.headSection__text} {...blurUpProps(0.4)}>
            <b>Przygotowanie dachów pod fotowoltaikę:</b> Wzmocnienie
            konstrukcji, naprawa pokrycia przed montażem paneli
            fotowoltaicznych.{" "}
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
            <b>Izolacje i ocieplenia dachów:</b> Montaż wełny mineralnej, folii
            paroizolacyjnych, poprawa szczelności i termoizolacji poddaszy.{" "}
            <MotionLink
              href="/docieplenia"
              aria-label="Przejdź do strony docieplenia"
              className={style.headSection__textLink}
              {...linkProps}
            >
              Dowiedz się o dociepleniach →
            </MotionLink>
          </MotionP>
          <MotionP className={style.headSection__text} {...blurUpProps(0.6)}>
            <b>Konserwacja i impregnacja:</b> Zabezpieczanie drewnianych
            elementów konstrukcyjnych, impregnowanie dachówek ceramicznych i
            cementowych.
          </MotionP>
          <MotionP className={style.headSection__text} {...blurUpProps(0.7)}>
            <b>Montaż systemów przeciwoblodzeniowych:</b> Instalacja kabli
            grzejnych na dachach i w rynnach zapobiegająca tworzeniu się sopli i
            zalodzeniu.{" "}
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
            src={dach1}
            alt="Profesjonalna naprawa dachu - Speed Light Energy Opole"
            width={800}
            height={450}
            priority
            {...imageProps}
          />
        </MotionDiv>
      </MotionSection>

      <MotionSection
        className={`${style.headSection} ${style.faqCompact}`}
        aria-labelledby="faq-dachy"
        {...sectionProps}
      >
        <MotionDiv
          className={style.headSection__textBox}
          variants={isDesktop ? fadeIn("up", "tween", 0.2, 0.8) : {}}
        >
          <h2 id="faq-dachy" className={style.headSection__title}>
            Najczęściej zadawane pytania – naprawa dachów
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
              <summary>Ile kosztuje naprawa przeciekającego dachu?</summary>
              <div className={style.faq__answer}>
                Koszt naprawy zależy od zakresu uszkodzeń i rodzaju pokrycia.
                Drobne naprawy zaczynają się od 500 zł, natomiast większe
                remonty od 2000 zł. Oferujemy bezpłatną wycenę.{" "}
                <MotionLink
                  href="/kontakt"
                  aria-label="Skontaktuj się z nami"
                  {...linkProps}
                >
                  Zamów bezpłatną wycenę →
                </MotionLink>
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
              <summary>Czy naprawiacie dachy po wichurach?</summary>
              <div className={style.faq__answer}>
                Tak, specjalizujemy się w naprawach dachów uszkodzonych przez
                wichury, gradobicia i inne zjawiska atmosferyczne. Działamy
                szybko, zabezpieczając dach przed dalszymi zniszczeniami.{" "}
                <MotionLink
                  href="/awarie_elektryczne"
                  aria-label="Przejdź do strony awarie elektryczne"
                  {...linkProps}
                >
                  Sprawdź też nasze usługi awaryjne →
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
              <summary>Jak długo trwa typowa naprawa dachu?</summary>
              <div className={style.faq__answer}>
                Drobne naprawy wykonujemy w 1 dzień. Większe remonty trwają od 2
                do 5 dni w zależności od skali prac i warunków atmosferycznych.
                Dążymy do minimalizacji czasu trwania prac.
              </div>
            </details>
          </MotionDiv>

          <MotionDiv
            className={style.faq__item}
            variants={isDesktop ? blurUp(0.6, 0.8) : {}}
            whileHover={{
              x: 10,
              backgroundColor: "rgba(139, 182, 58, 0.05)",
              transition: { type: "spring", stiffness: 400 },
            }}
          >
            <details className={style.faq__question}>
              <summary>Czy przygotowujecie dachy pod fotowoltaikę?</summary>
              <div className={style.faq__answer}>
                Tak, wykonujemy profesjonalne przygotowanie dachów pod montaż
                paneli fotowoltaicznych, w tym wzmocnienie konstrukcji i naprawę
                pokrycia.{" "}
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

          <MotionDiv
            className={style.faq__item}
            variants={isDesktop ? blurUp(0.8, 0.8) : {}}
            whileHover={{
              x: 10,
              backgroundColor: "rgba(139, 182, 58, 0.05)",
              transition: { type: "spring", stiffness: 400 },
            }}
          >
            <details className={style.faq__question}>
              <summary>Czy oferujecie docieplenia poddaszy?</summary>
              <div className={style.faq__answer}>
                Tak, wykonujemy kompleksowe ocieplenia poddaszy użytkowych,
                montujemy wełnę mineralną i folie paroizolacyjne.{" "}
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
        </MotionDiv>
      </MotionSection>

      <MotionDiv className={style.ctaSection} {...ctaProps}>
        <h3>Potrzebujesz pomocy z dachem?</h3>
        <MotionLink
          href="/kontakt"
          className={style.ctaButton}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Darmowa wycena naprawy
        </MotionLink>
      </MotionDiv>
    </>
  );
};

export default NaprawaDachow;
