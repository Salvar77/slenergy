import HeroImage from "@/components/HeroImage/HeroImage";
import style from "@/styles/HeroImage.module.scss";
import Image from "next/image";
import heroimg from "@/assets/images/pompa.jpg";
import pompa2 from "@/assets/images/pompa2.jpg";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, blurUp } from "@/utils/motion";

const Pompyciepla = ({ isDesktop }) => {
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
        initial: { opacity: 0, scale: 0.95, rotateY: -10 },
        whileInView: {
          opacity: 1,
          scale: 1,
          rotateY: 0,
          transition: { duration: 0.8, delay: 0.4 },
        },
        viewport: { once: true },
        whileHover: {
          scale: 1.03,
          rotateY: 5,
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
      <HeroImage image={heroimg} alt="grafika przedstawiająca pompę ciepła">
        <MotionDiv className={style.heroImageTextBox} {...heroTextProps}>
          <h1 className={style.heroImageTextBox__title}>Pompy ciepła Opole</h1>
          <MotionP
            className={style.heroImageTextBox__text}
            {...blurUpProps(0.1)}
          >
            Pompy ciepła to urządzenia, które pozwalają na przepompowanie
            energii cieplnej z jednego miejsca do drugiego. Najczęściej stosuje
            się je do ogrzewania pomieszczeń lub wody użytkowej, ale mogą być
            także wykorzystywane do chłodzenia.
          </MotionP>
          <MotionP
            className={style.heroImageTextBox__text}
            {...blurUpProps(0.2)}
          >
            Pompy ciepła działają na zasadzie odzyskiwania energii z otoczenia,
            co oznacza, że pobierają ciepło z powietrza, wody czy gleby i
            przekazują je do pomieszczenia, w którym jest zainstalowana. Dzięki
            temu są one bardziej ekologiczne i energooszczędne w porównaniu do
            tradycyjnych systemów grzewczych, co przekłada się na niższe
            rachunki za energię.
          </MotionP>
          <MotionP
            className={style.heroImageTextBox__text}
            {...blurUpProps(0.3)}
          >
            Koszt instalacji pompy ciepła zależy od wielu czynników, takich jak
            powierzchnia pomieszczeń, rodzaj instalacji, rodzaj pompy ciepła,
            odległość od źródła ciepła, czy też rodzaj instalacji. Ceny wraz z
            montażem zaczynają się od 30 000 zł. Dokładna wycena instalacji jest
            możliwa po wykonaniu bezpłatnej wizyty technicznej.
          </MotionP>
          <MotionP
            className={style.heroImageTextBox__text}
            {...blurUpProps(0.4)}
          >
            Montujemy pompy ciepła na terenie{" "}
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
            Korzyści z pompy ciepła – dlaczego warto?
          </h2>
          <MotionP className={style.headSection__text} {...blurUpProps(0.1)}>
            <b>Oszczędność na kosztach energii: </b> Pompy ciepła wykorzystują
            energię z otoczenia (powietrza, gleby lub wody) do produkcji ciepła,
            co jest znacznie bardziej ekonomiczne niż tradycyjne ogrzewanie
            gazem lub olejem opałowym. Dzięki temu można oszczędzić na kosztach
            energii i zmniejszyć rachunki za ogrzewanie.
          </MotionP>
          <MotionP className={style.headSection__text} {...blurUpProps(0.2)}>
            <b>Niskie emisje gazów cieplarnianych: </b> Pompy ciepła nie spalają
            paliwa, a jedynie wykorzystują energię z otoczenia, dlatego są
            bardziej przyjazne dla środowiska i pomagają zmniejszyć emisje gazów
            cieplarnianych.
          </MotionP>
          <MotionP className={style.headSection__text} {...blurUpProps(0.3)}>
            <b>Wysoka wydajność: </b>Pompy ciepła charakteryzują się wysoką
            wydajnością i efektywnością, ponieważ wykorzystują jedynie niewielką
            ilość energii elektrycznej do przetwarzania energii z otoczenia na
            ciepło.
          </MotionP>
          <MotionP className={style.headSection__text} {...blurUpProps(0.4)}>
            <b>Komfort użytkowania: </b> Pompy ciepła są bardzo ciche i nie
            emitują żadnych szkodliwych substancji do powietrza, co przyczynia
            się do komfortu użytkowania i korzystnego wpływu na zdrowie
            mieszkańców.
          </MotionP>
          <MotionP className={style.headSection__text} {...blurUpProps(0.5)}>
            <b>Zasilanie z fotowoltaiki: </b> Pompa ciepła idealnie współpracuje
            z instalacją fotowoltaiczną, co pozwala na darmowe ogrzewanie.{" "}
            <MotionLink
              href="/fotowoltaika"
              aria-label="Przejdź do strony fotowoltaika"
              className={style.headSection__textLink}
              {...linkProps}
            >
              Sprawdź ofertę fotowoltaiki →
            </MotionLink>
          </MotionP>
          <MotionP className={style.headSection__text} {...blurUpProps(0.6)}>
            <b>Magazynowanie nadwyżek energii: </b> Nadwyżki energii z
            fotowoltaiki możesz magazynować i wykorzystywać do zasilania pompy
            ciepła.{" "}
            <MotionLink
              href="/magazyn_energii"
              aria-label="Przejdź do strony magazyny energii"
              className={style.headSection__textLink}
              {...linkProps}
            >
              Poznaj magazyny energii →
            </MotionLink>
          </MotionP>
          <MotionP className={style.headSection__text} {...blurUpProps(0.7)}>
            <b>Funkcja chłodzenia jak klimatyzacja: </b> Niektóre modele pomp
            ciepła pozwalają na wykorzystanie w systemie chłodzenia w lecie, co
            dodatkowo zwiększa ich funkcjonalność.{" "}
            <MotionLink
              href="/klimatyzacja"
              aria-label="Przejdź do strony klimatyzacja"
              className={style.headSection__textLink}
              {...linkProps}
            >
              Sprawdź ofertę klimatyzacji →
            </MotionLink>
          </MotionP>
          <MotionP className={style.headSection__text} {...blurUpProps(0.8)}>
            <b>Profesjonalne przyłączenia elektryczne: </b> Montaż pompy ciepła
            wymaga specjalistycznych instalacji elektrycznych i zabezpieczeń.{" "}
            <MotionLink
              href="/instalacje_elektryczne"
              aria-label="Przejdź do strony instalacje elektryczne"
              className={style.headSection__textLink}
              {...linkProps}
            >
              Dowiedz się o instalacjach elektrycznych →
            </MotionLink>
          </MotionP>
          <MotionP className={style.headSection__text} {...blurUpProps(0.9)}>
            <b>Długa żywotność: </b>Pompy ciepła są zazwyczaj trwałymi i
            niezawodnymi urządzeniami, co pozwala na wiele lat bezproblemowego
            użytkowania i minimalizuje koszty związane z ich serwisowaniem i
            naprawami.
          </MotionP>
        </MotionDiv>

        <MotionDiv className={style.headSection__imgBox} {...fadeInLeftProps}>
          <MotionImage
            className={style.headSection__img}
            src={pompa2}
            alt="Nowoczesna pompa ciepła powietrze-woda - Speed Light Energy Opole"
            width={800}
            height={450}
            priority
            {...imageProps}
          />
        </MotionDiv>
      </MotionSection>

      <MotionSection
        className={`${style.headSection} ${style.faqCompact}`}
        aria-labelledby="faq-pompy"
        {...sectionProps}
      >
        <MotionDiv
          className={style.headSection__textBox}
          variants={isDesktop ? fadeIn("up", "tween", 0.2, 0.8) : {}}
        >
          <h2 id="faq-pompy" className={style.headSection__title}>
            Najczęściej zadawane pytania – pompy ciepła
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
              <summary>Ile kosztuje pompa ciepła z montażem?</summary>
              <div className={style.faq__answer}>
                Cena kompletnej instalacji powietrze-woda z montażem zaczyna się
                od 30 000 zł brutto.
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
              <summary>Czy pompa ciepła działa z fotowoltaiką?</summary>
              <div className={style.faq__answer}>
                Tak, pompa ciepła idealnie współpracuje z instalacją
                fotowoltaiczną – możesz zasilać ją własną energią.{" "}
                <MotionLink
                  href="/fotowoltaika"
                  aria-label="Fotowoltaika do zasilania pompy ciepła"
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
              <summary>Czy pompa ciepła może zastąpić klimatyzację?</summary>
              <div className={style.faq__answer}>
                Tak, wiele nowoczesnych pomp ciepła oferuje funkcję chłodzenia
                aktywnego, mogąc pełnić rolę klimatyzacji latem.{" "}
                <MotionLink
                  href="/klimatyzacja"
                  aria-label="Przejdź do strony klimatyzacja"
                  {...linkProps}
                >
                  Poznaj ofertę klimatyzacji →
                </MotionLink>
              </div>
            </details>
          </MotionDiv>
        </MotionDiv>
      </MotionSection>

      <MotionDiv className={style.ctaSection} {...ctaProps}>
        <h3>Zainteresowany pompami ciepła?</h3>
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

export default Pompyciepla;
