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

const MainPage = () => {
  return (
    <>
      <HeroImage image={heroimg} alt="Panele fotowoltaiczne Opole">
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
              href="/klimatyzacja"
              className={classes.heroImageBoxx__text}
              aria-label="Przejdź do strony klimatyzacja"
            >
              Klimatyzacja
            </Link>
            <Link
              href="/instalacje_elektryczne"
              className={classes.heroImageBoxx__text}
              aria-label="Przejdź do strony instalacje elektryczne"
            >
              Instalacje elektryczne
            </Link>
          </div>
        </div>
      </HeroImage>
      <section className={classes.headSection}>
        <div className={classes.headSection__textBox}>
          <h1 className={classes.headSection__title}>Fotowoltaika Opole</h1>
          <p className={classes.headSection__text}>
            Firma Speed Light Energy specjalizuje się w kompleksowej instalacji
            systemów fotowoltaicznych, które pozwalają na pozyskiwanie energii
            elektrycznej ze słońca. Oferujemy pełen zakres usług: projekt,
            dostawę materiałów i profesjonalny montaż.
          </p>
          <p className={classes.headSection__text}>
            Montujemy zarówno systemy dla klientów indywidualnych, jak i
            przedsiębiorstw, na terenie województw: opolskiego, śląskiego,
            dolnośląskiego.
          </p>
        </div>
        <div className={classes.headSection__imgBox}>
          <Image
            className={classes.headSection__img}
            src={img2}
            alt="fotowaltaika, panele słoneczne, opole"
            title="fotowaltaika, panele słoneczne, opole"
            width={640}
            height={360}
          />
        </div>
      </section>
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
