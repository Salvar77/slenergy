import HeroImage from "@/components/HeroImage/HeroImage";
import Image from "next/image";
import heroimg from "@/assets/images/mainpagehero.jpg";
import classes from "./MainPage.module.scss";
import Calculator from "@/components/Calc/Calc";
import logo from "@/assets/images/SpeedLightLogoHero.svg";
import img2 from "@/assets/images/second_main.jpeg";
import Link from "next/link";
import heatpump from "@/assets/images/heat-pump.png";
import battery from "@/assets/images/battery.png";
import solar from "@/assets/images/solar-panel.png";
import phone from "@/assets/images/phone-call-B.svg";
import { motion } from "framer-motion";
import {
  fadeIn,
  staggerContainer,
  blurUp,
  revealSlide,
  cardReveal,
} from "@/utils/motion";

const MotionLink = motion(Link);

const MainPage = ({ isDesktop }) => {
  const motionProps = {
    initial: "hidden",
    animate: "show",
    viewport: { once: true },
  };

  return (
    <>
      <HeroImage image={heroimg} alt="Panele fotowoltaiczne Opole">
        {isDesktop ? (
          <motion.div
            className={classes.heroImageBoxx}
            {...motionProps}
            variants={staggerContainer(0.1, 0.3)}
          >
            <motion.div variants={fadeIn("down", "tween", 0.2, 1)}>
              <Image
                src={logo}
                className={classes.heroImageBoxx__logo}
                alt="Speed Light Energy logo"
                width={112}
                height={60}
                priority
              />
            </motion.div>

            <div
              className={classes.heroImageBoxx__textbox}
              aria-label="Skróty do usług"
            >
              <MotionLink
                href="/fotowoltaika"
                className={classes.heroImageBoxx__text}
                aria-label="Przejdź do strony fotowoltaika"
                variants={fadeIn("up", "tween", 0.5, 0.8)}
                initial="hidden"
                animate="show"
              >
                Fotowoltaika
              </MotionLink>
              <MotionLink
                href="/pompy_ciepla"
                className={classes.heroImageBoxx__text}
                aria-label="Przejdź do strony pompy ciepła"
                variants={fadeIn("up", "tween", 0.6, 0.8)}
                initial="hidden"
                animate="show"
              >
                Pompy ciepła
              </MotionLink>
              <MotionLink
                href="/magazyn_energii"
                className={classes.heroImageBoxx__text}
                aria-label="Przejdź do strony magazyny energii"
                variants={fadeIn("up", "tween", 0.7, 0.8)}
                initial="hidden"
                animate="show"
              >
                Magazyny energii
              </MotionLink>
              <MotionLink
                href="/klimatyzacja"
                className={classes.heroImageBoxx__text}
                aria-label="Przejdź do strony klimatyzacja"
                variants={fadeIn("up", "tween", 0.8, 0.8)}
                initial="hidden"
                animate="show"
              >
                Klimatyzacja
              </MotionLink>
              <MotionLink
                href="/instalacje_elektryczne"
                className={classes.heroImageBoxx__text}
                aria-label="Przejdź do strony instalacje elektryczne"
                variants={fadeIn("up", "tween", 0.9, 0.8)}
                initial="hidden"
                animate="show"
              >
                Instalacje elektryczne
              </MotionLink>
              <MotionLink
                href="/awarie_elektryczne"
                className={classes.heroImageBoxx__text}
                aria-label="Przejdź do strony awarie elektryczne"
                variants={fadeIn("up", "tween", 1.0, 0.8)}
                initial="hidden"
                animate="show"
              >
                Awarie elektryczne
              </MotionLink>
              <MotionLink
                href="/awarie_dekarskie"
                className={classes.heroImageBoxx__text}
                aria-label="Przejdź do strony naprawa dachów"
                variants={fadeIn("up", "tween", 1.1, 0.8)}
                initial="hidden"
                animate="show"
              >
                Awarie dekarskie
              </MotionLink>
            </div>
          </motion.div>
        ) : (
          <div className={classes.heroImageBoxx}>
            <Image
              src={logo}
              className={classes.heroImageBoxx__logo}
              alt="Speed Light Energy logo"
              width={112}
              height={60}
              priority
            />
            <div
              className={classes.heroImageBoxx__textbox}
              aria-label="Skróty do usług"
            >
              <Link
                href="/fotowoltaika"
                className={classes.heroImageBoxx__text}
                aria-label="Przejdź do strony fotowoltaika"
              >
                Fotowoltaika
              </Link>
              <Link
                href="/pompy_ciepla"
                className={classes.heroImageBoxx__text}
                aria-label="Przejdź do strony pompy ciepła"
              >
                Pompy ciepła
              </Link>
              <Link
                href="/magazyn_energii"
                className={classes.heroImageBoxx__text}
                aria-label="Przejdź do strony magazyny energii"
              >
                Magazyny energii
              </Link>

              <Link
                href="/instalacje_elektryczne"
                className={classes.heroImageBoxx__text}
                aria-label="Przejdź do strony instalacje elektryczne"
              >
                Instalacje elektryczne
              </Link>
              <MotionLink
                href="/awarie_elektryczne"
                className={classes.heroImageBoxx__text}
                aria-label="Przejdź do strony awarie elektryczne"
              >
                Awarie elektryczne
              </MotionLink>
              <MotionLink
                href="/awarie_dekarskie"
                className={classes.heroImageBoxx__text}
                aria-label="Przejdź do strony naprawa dachów"
              >
                Awarie dekarskie
              </MotionLink>
            </div>
          </div>
        )}
      </HeroImage>
      <motion.section
        className={classes.headSection}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer(0.15, 0.1)}
      >
        <motion.div
          className={classes.headSection__textBox}
          variants={staggerContainer(0.1, 0.2)}
        >
          <motion.h1
            className={classes.headSection__title}
            variants={revealSlide(0.1, 0.8)}
          >
            Fotowoltaika Opole
          </motion.h1>

          <motion.p
            className={classes.headSection__text}
            variants={blurUp(0.2, 0.9)}
          >
            Firma Speed Light Energy specjalizuje się w kompleksowej instalacji
            systemów fotowoltaicznych, które pozwalają na pozyskiwanie energii
            elektrycznej ze słońca. Oferujemy pełen zakres usług: projekt,
            dostawę materiałów i profesjonalny montaż.
          </motion.p>

          <motion.p
            className={classes.headSection__text}
            variants={blurUp(0.3, 0.9)}
          >
            Montujemy zarówno systemy dla klientów indywidualnych, jak i
            przedsiębiorstw, na terenie województw: opolskiego, śląskiego,
            dolnośląskiego.
          </motion.p>
        </motion.div>

        <motion.div
          className={classes.headSection__imgBox}
          variants={cardReveal(0.4, 1)}
          whileHover={{
            scale: 1.03,
            y: -8,
            rotateZ: 1,
            transition: {
              type: "spring",
              stiffness: 400,
              damping: 25,
            },
          }}
          whileTap={{ scale: 0.98 }}
        >
          <motion.div
            whileHover={{
              boxShadow: "0 20px 40px rgba(139, 182, 58, 0.3)",
              transition: { duration: 0.3 },
            }}
            style={{
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Image
              className={classes.headSection__img}
              src={img2}
              alt="fotowoltaika, panele słoneczne, opole"
              title="fotowoltaika, panele słoneczne, opole"
              width={640}
              height={360}
            />
          </motion.div>

          {/* Subtelny efekt świetlny */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{
              opacity: 0.1,
              scale: 1,
              transition: { delay: 0.6, duration: 1 },
            }}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: "200%",
              height: "200%",
              background:
                "radial-gradient(circle, rgba(139, 182, 58, 0.3) 0%, transparent 70%)",
              transform: "translate(-50%, -50%)",
              pointerEvents: "none",
            }}
          />
        </motion.div>
      </motion.section>
      <section className={classes.calc} aria-labelledby="calc-heading">
        <h2 id="calc-heading" className={classes.calc__title}>
          Sprawdź potencjalne oszczędności
        </h2>
        <p className={classes.calc__text}>
          Oblicz ile możesz oszczędzić dzięki instalacji systemu
          fotowoltaicznego
        </p>
        <Calculator />
        <p className={classes.calc__footer}>
          *Kalkulator jest jedynie przybliżeniem kosztów i oszczędności.
          Wszystkie dane są podawane na podstawie danych statystycznych.
        </p>
      </section>
      <section className={classes.services} aria-labelledby="services-heading">
        <h2 id="services-heading" className={classes.services__title}>
          Nasze usługi
        </h2>
        <div className={classes.services__box}>
          <div className={classes.services__item}>
            <Image
              src={solar}
              alt="ikona paneli solarnych"
              className={classes.services__img}
              width={80}
              height={80}
            />
            <h3 className={classes.services__itemTitle}>
              Panele fotowoltaiczne
            </h3>
            <p className={classes.services__itemText}>
              Zainstaluj panele fotowoltaiczne i ciesz się czystą energią
              słoneczną!
            </p>
            <Link
              href="/fotowoltaika"
              className={classes.services__item_button}
              aria-label="Więcej o panelach fotowoltaicznych"
            >
              Więcej informacji
            </Link>
          </div>
          <div className={classes.services__item}>
            <Image
              src={battery}
              alt="ikona baterii"
              className={classes.services__img}
              width={80}
              height={80}
            />
            <h3 className={classes.services__itemTitle}>Magazyny energii</h3>
            <p className={classes.services__itemText}>
              Magazynuj energię i ciesz się jej niezależnym wykorzystaniem!
            </p>
            <Link
              href="/magazyn_energii"
              className={classes.services__item_button}
              aria-label="Więcej o magazynach energii"
            >
              Więcej informacji
            </Link>
          </div>
          <div className={classes.services__item}>
            <Image
              src={heatpump}
              alt="ikona pompy ciepła"
              className={classes.services__img}
              width={80}
              height={80}
            />
            <h3 className={classes.services__itemTitle}>Pompy ciepła</h3>
            <p className={classes.services__itemText}>
              Wybierz pompę ciepła i ogrzewaj swój dom w sposób ekologiczny i
              oszczędny!
            </p>
            <Link
              href="/pompy_ciepla"
              className={classes.services__item_button}
              aria-label="Więcej o pompach ciepła"
            >
              Więcej informacji
            </Link>
          </div>
        </div>
      </section>

      <section className={classes.about}>
        <h2 className={classes.services__title}>O firmie Speed Light Energy</h2>
        <p>
          Oferujemy Państwu profesjonalny montaż systemów fotowoltaicznych.
          Jeśli już posiadają Państwo system fotowoltaiczny, ale potrzebują
          pomocy w jego montażu, nasi specjaliści chętnie pomogą. Nasze usługi
          obejmują profesjonalny montaż, demontaż, przenoszenie i naprawę
          systemów fotowoltaicznych.
        </p>
        <br />
        <p>
          <strong>
            Specjalizujemy się również w kompleksowym i profesjonalnym
            diagnozowaniu oraz naprawianiu wszelkich usterek elektrycznych i
            dekarskich, oferując usługi najwyższej jakości.
          </strong>
        </p>

        <div className={classes.contactCta}>
          <Link
            href="tel:+48606337100"
            className={classes.phoneLink}
            aria-label="Zadzwoń do nas: 606 337 100"
          >
            <Image
              src={phone}
              alt=""
              width={24}
              height={24}
              className={classes.phoneIcon}
              aria-hidden="true"
            />
            +48 606 337 100
          </Link>

          <Link
            href="/kontakt"
            className={classes.about__link}
            aria-label="Przejdź do strony kontakt"
          >
            Napisz do nas{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={classes.about__linkIcon}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 20L20 3m0 0v11.25M20 3H8.75"
              />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
};

export default MainPage;
