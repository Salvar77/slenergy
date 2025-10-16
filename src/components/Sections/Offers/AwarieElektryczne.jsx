import HeroImage from "@/components/HeroImage/HeroImage";
import style from "@/styles/HeroImage.module.scss";
import Image from "next/image";
import Link from "next/link";
import heroimg from "@/assets/images/awaria-elektryczna-big.jpg";
import awaria1 from "@/assets/images/awaria-elektryczna-small-2.jpg";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, blurUp } from "@/utils/motion";

const AwarieElektryczne = ({ isDesktop }) => {
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
        alt="Awarie elektryczne Opole - szybka pomoc 24/7"
      >
        <MotionDiv className={style.heroImageTextBox} {...heroTextProps}>
          <h1 className={style.heroImageTextBox__title}>
            Awarie Elektryczne Opole
          </h1>
          <MotionP
            className={style.heroImageTextBox__text}
            {...blurUpProps(0.1)}
          >
            Jesteśmy specjalistami w zakresie napraw awarii elektrycznych.
            Oferujemy szybką i skuteczną pomoc w sytuacjach awaryjnych, 24
            godziny na dobę, 7 dni w tygodniu.
          </MotionP>
          <MotionP
            className={style.heroImageTextBox__text}
            {...blurUpProps(0.2)}
          >
            Nasz zespół doświadczonych elektryków jest gotowy do interwencji w
            każdej sytuacji - od prostych usterek po poważne awarie instalacji
            elektrycznej. Działamy szybko i profesjonalnie, minimalizując czas
            przerw w dostawie prądu.
          </MotionP>
          <MotionP
            className={style.heroImageTextBox__text}
            {...blurUpProps(0.3)}
          >
            Gwarantujemy bezpieczne i trwałe naprawy, korzystając z
            najnowocześniejszych narzędzi diagnostycznych i wysokiej jakości
            materiałów.
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
          <h2 className={style.headSection__title}>Zakres usług awaryjnych</h2>
          <MotionP className={style.headSection__text} {...blurUpProps(0.1)}>
            <b>Interwencje awaryjne 24/7:</b> Szybki dojazd i naprawa awarii
            elektrycznych o każdej porze dnia i nocy. Działamy w weekendy i
            święta.
          </MotionP>
          <MotionP className={style.headSection__text} {...blurUpProps(0.2)}>
            <b>Naprawa zwarć i przerwa w zasilaniu:</b> Diagnostyka i usuwanie
            przyczyn zwarć w instalacjach elektrycznych, przywracanie zasilania.
          </MotionP>
          <MotionP className={style.headSection__text} {...blurUpProps(0.3)}>
            <b>Wymiana uszkodzonych elementów:</b> Rozdzielni, bezpieczników,
            gniazd, wyłączników, opraw oświetleniowych i innych komponentów.
          </MotionP>
          <MotionP className={style.headSection__text} {...blurUpProps(0.4)}>
            <b>Awaria instalacji fotowoltaicznej:</b> Szybka naprawa systemów
            PV, falowników i zabezpieczeń.{" "}
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
            <b>Problemy z pompą ciepła:</b> Diagnostyka i naprawa instalacji
            elektrycznych pomp ciepła.{" "}
            <MotionLink
              href="/pompy_ciepla"
              aria-label="Przejdź do strony pompy ciepła"
              className={style.headSection__textLink}
              {...linkProps}
            >
              Poznaj ofertę pomp ciepła →
            </MotionLink>
          </MotionP>
          <MotionP className={style.headSection__text} {...blurUpProps(0.6)}>
            <b>Awaria magazynu energii:</b> Serwis i naprawa systemów
            magazynowania energii.{" "}
            <MotionLink
              href="/magazyn_energii"
              aria-label="Przejdź do strony magazyny energii"
              className={style.headSection__textLink}
              {...linkProps}
            >
              Dowiedz się o magazynach energii →
            </MotionLink>
          </MotionP>
        </MotionDiv>

        <MotionDiv className={style.headSection__imgBox} {...fadeInLeftProps}>
          <MotionImage
            className={style.headSection__img}
            src={awaria1}
            alt="Naprawa awarii elektrycznej - Speed Light Energy Opole"
            width={800}
            height={450}
            priority
            {...imageProps}
          />
        </MotionDiv>
      </MotionSection>

      <MotionSection
        className={`${style.headSection} ${style.faqCompact}`}
        aria-labelledby="faq-awarie"
        {...sectionProps}
      >
        <MotionDiv
          className={style.headSection__textBox}
          variants={isDesktop ? fadeIn("up", "tween", 0.2, 0.8) : {}}
        >
          <h2 id="faq-awarie" className={style.headSection__title}>
            Najczęściej zadawane pytania – awarie elektryczne
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
              <summary>Ile czeka się na interwencję awaryjną?</summary>
              <div className={style.faq__answer}>
                Standardowo dojeżdżamy w ciągu 60-90 minut. W pilnych
                przypadkach możliwy szybszy dojazd - prosimy o informację
                podczas zgłoszenia.
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
              <summary>Czy działacie w weekendy i święta?</summary>
              <div className={style.faq__answer}>
                Tak, świadczymy usługi awaryjne 24/7, w tym w weekendy, święta i
                nocą. Awaria prądu nie wybiera terminu!{" "}
                <MotionLink
                  href="/kontakt"
                  aria-label="Skontaktuj się z nami"
                  {...linkProps}
                >
                  Skontaktuj się z nami →
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
              <summary>Jakie awarie najczęściej naprawiacie?</summary>
              <div className={style.faq__answer}>
                Wykrywanie i naprawa zwarć, wymiana bezpieczników, naprawa
                rozdzielni, problemy z gniazdami i oświetleniem, awarie
                instalacji OZE oraz odzyskiwanie zasilania.
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
              <summary>
                Czy naprawiacie instalacje w starszych budynkach?
              </summary>
              <div className={style.faq__answer}>
                Tak, specjalizujemy się w naprawach instalacji elektrycznych we
                wszystkich typach budynków, zarówno w nowych konstrukcjach jak i
                starszych kamienicach. Posiadamy doświadczenie w pracy z różnymi
                typami instalacji, w tym tymi z okresu przedwojennego.
              </div>
            </details>
          </MotionDiv>
        </MotionDiv>
      </MotionSection>

      <MotionDiv className={style.ctaSection} {...ctaProps}>
        <h3>Potrzebujesz pomocy z awarią elektryczną?</h3>
        <MotionLink
          href="/kontakt"
          className={style.ctaButton}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Pilna interwencja 24/7
        </MotionLink>
      </MotionDiv>
    </>
  );
};

export default AwarieElektryczne;
