import HeroImage from "@/components/HeroImage/HeroImage";
import style from "@/styles/HeroImage.module.scss";
import classes from "./Offers.module.scss";
import Image from "next/image";
import heroimg from "@/assets/images/instalacja-elektryczna.jpg";
import electrical1 from "@/assets/images/instalacja-elektryczna-2.jpg";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, blurUp } from "@/utils/motion";

const InstalacjeElektryczne = ({ isDesktop }) => {
  // Motion components conditionally
  const MotionDiv = isDesktop ? motion.div : "div";
  const MotionP = isDesktop ? motion.p : "p";
  const MotionSection = isDesktop ? motion.section : "section";
  const MotionLink = isDesktop ? motion(Link) : Link;
  const MotionImage = isDesktop ? motion(Image) : Image;

  // Motion props
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
            transition: { type: "spring", stiffness: 400 },
          },
        }
      : {};

  return (
    <>
      <HeroImage image={heroimg} alt="Instalacje elektryczne Opole">
        <MotionDiv className={style.heroImageTextBox} {...heroTextProps}>
          <h1 className={style.heroImageTextBox__title}>
            Instalacje elektryczne Opole
          </h1>
          <MotionP
            className={style.heroImageTextBox__text}
            {...blurUpProps(0.1)}
          >
            Jesteśmy specjalistami w zakresie instalacji elektrycznych i
            oferujemy kompleksowe usługi elektryczne dla domów, firm i
            przemysłu. Nasza firma posiada niezbędne doświadczenie i uprawnienia
            do wykonywania prac elektrycznych najwyższej jakości.
          </MotionP>
          <MotionP
            className={style.heroImageTextBox__text}
            {...blurUpProps(0.2)}
          >
            Oferujemy pełen zakres usług elektrycznych - od projektowania i
            montażu nowych instalacji, przez modernizację istniejących układów,
            aż po serwis i naprawy awaryjne. Zapewniamy bezpieczeństwo i
            niezawodność każdej wykonanej instalacji.
          </MotionP>
          <MotionP
            className={style.heroImageTextBox__text}
            {...blurUpProps(0.3)}
          >
            Specjalizujemy się w instalacjach dla systemów OZE - fotowoltaiki,
            pomp ciepła i magazynów energii, zapewniając pełną kompatybilność i
            bezpieczeństwo każdej instalacji.
          </MotionP>
          <MotionP
            className={style.heroImageTextBox__text}
            {...blurUpProps(0.4)}
          >
            Montujemy instalacje elektryczne na terenie{" "}
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
            Zakres usług elektrycznych
          </h2>
          <MotionP className={style.headSection__text} {...blurUpProps(0.1)}>
            <b>Instalacje elektryczne w nowych budynkach:</b> Kompleksowy montaż
            instalacji elektrycznych w domach jednorodzinnych, mieszkaniach i
            obiektach komercyjnych zgodnie z najnowszymi normami.
          </MotionP>
          <MotionP className={style.headSection__text} {...blurUpProps(0.2)}>
            <b>Modernizacja istniejących instalacji:</b> Wymiana przestarzałych
            instalacji, rozdzielni elektrycznych i zabezpieczeń na nowoczesne i
            bezpieczne rozwiązania.
          </MotionP>
          <MotionP className={style.headSection__text} {...blurUpProps(0.3)}>
            <b>Przyłączenia fotowoltaiki:</b> Profesjonalne podłączenie systemów
            fotowoltaicznych z pełną kompatybilnością i bezpieczeństwem.{" "}
            <MotionLink
              href="/fotowoltaika"
              aria-label="Przejdź do strony fotowoltaika"
              className={style.headSection__textLink}
              {...linkProps}
            >
              Sprawdź ofertę fotowoltaiki →
            </MotionLink>
          </MotionP>
          <MotionP className={style.headSection__text} {...blurUpProps(0.4)}>
            <b>Instalacje dla pomp ciepła:</b> Specjalistyczne przyłączenia i
            konfiguracja systemów grzewczych opartych na pompach ciepła.{" "}
            <MotionLink
              href="/pompy_ciepla"
              aria-label="Przejdź do strony pompy ciepła"
              className={style.headSection__textLink}
              {...linkProps}
            >
              Poznaj ofertę pomp ciepła →
            </MotionLink>
          </MotionP>
          <MotionP className={style.headSection__text} {...blurUpProps(0.5)}>
            <b>Systemy dla magazynów energii:</b> Kompleksowe instalacje
            dedykowane dla magazynów energii z zabezpieczeniami i monitoringiem.{" "}
            <MotionLink
              href="/magazyn_energii"
              aria-label="Przejdź do strony magazyny energii"
              className={style.headSection__textLink}
              {...linkProps}
            >
              Dowiedz się o magazynach energii →
            </MotionLink>
          </MotionP>
          <MotionP className={style.headSection__text} {...blurUpProps(0.6)}>
            <b>Instalacje odgromowe i przepięciowe:</b> Montaż systemów ochrony
            odgromowej oraz zabezpieczeń przeciwprzepięciowych dla pełnego
            bezpieczeństwa Twojej instalacji.
          </MotionP>
          <MotionP className={style.headSection__text} {...blurUpProps(0.7)}>
            <b>Serwis i naprawy awaryjne:</b> Szybka interwencja w przypadku
            awarii instalacji elektrycznej, diagnoza usterek i profesjonalne
            naprawy.
          </MotionP>
          <MotionP className={style.headSection__text} {...blurUpProps(0.8)}>
            <b>Pomiary i certyfikaty:</b> Wykonujemy pomiary instalacji
            elektrycznych oraz wystawiamy wymagane prawem certyfikaty i
            protokoły.
          </MotionP>
        </MotionDiv>

        <MotionDiv className={style.headSection__imgBox} {...fadeInLeftProps}>
          <MotionImage
            className={style.headSection__img}
            src={electrical1}
            alt="Nowoczesna rozdzielnia elektryczna - Speed Light Energy Opole"
            width={800}
            height={450}
            priority
            {...imageProps}
          />
        </MotionDiv>
      </MotionSection>

      <MotionSection
        className={`${style.headSection} ${style.faqCompact}`}
        aria-labelledby="faq-elektryka"
        {...sectionProps}
      >
        <MotionDiv
          className={style.headSection__textBox}
          variants={isDesktop ? fadeIn("up", "tween", 0.2, 0.8) : {}}
        >
          <h2 id="faq-elektryka" className={style.headSection__title}>
            Najczęściej zadawane pytania – instalacje elektryczne
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
              <summary>Czy wykonujecie przyłączenia do fotowoltaiki?</summary>
              <div className={style.faq__answer}>
                Tak, specjalizujemy się w przyłączaniu systemów
                fotowoltaicznych. Zapewniamy pełną kompatybilność i
                bezpieczeństwo instalacji.{" "}
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
            variants={isDesktop ? blurUp(0.5, 0.8) : {}}
            whileHover={{
              x: 10,
              backgroundColor: "rgba(139, 182, 58, 0.05)",
              transition: { type: "spring", stiffness: 400 },
            }}
          >
            <details className={style.faq__question}>
              <summary>Jakie instalacje są potrzebne dla pompy ciepła?</summary>
              <div className={style.faq__answer}>
                Pompa ciepła wymaga dedykowanego okablowania, zabezpieczeń i
                często modernizacji istniejącej instalacji. Wykonujemy kompletne
                przyłączenia pod pompy ciepła.{" "}
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
        <h3>Potrzebujesz pomocy z instalacją elektryczną?</h3>
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

export default InstalacjeElektryczne;
