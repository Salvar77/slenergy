import classes from "./Footer.module.scss";
import Image from "next/image";
import logo from "@/assets/images/SpeedLightLogoMobile.svg";
import phone from "@/assets/images/phone-call.svg";
import mail from "@/assets/images/mail.svg";
import GoogleMap from "../Sections/GoogleMap/GoogleMap";
import Opinions from "../Opinions/Opinions";
import Link from "next/link";
import { useState } from "react";

const Footer = () => {
  const [showServices, setShowServices] = useState(false);

  const toggleServices = () => {
    setShowServices((prev) => !prev);
  };

  return (
    <>
      <Opinions />
      <GoogleMap />

      <footer className={classes.footer}>
        <div className={classes.footer__content}>
          <div className={classes.footer__column}>
            <Image
              src={logo}
              alt="Speed Light Energy - fotowoltaika Opole"
              width={250}
            />
            <div className={classes.contactInfo}>
              <div className={classes.contactItem}>
                <Image src={phone} alt="ikona telefonu" width={20} />
                <Link href="tel:+48606337100">+48 606 337 100</Link>
              </div>
              <div className={classes.contactItem}>
                <Image src={mail} alt="ikona koperty" width={20} />
                <Link href="mailto:kontakt@slenergy.pl">
                  kontakt@slenergy.pl
                </Link>
              </div>
              <p>ul. Józefa Walecki 2/12</p>
              <p>45-586 Opole</p>
              <div className={classes.businessInfo}>
                <p>NIP: 75 43 054 995</p>
                <p>REGON: 389 501 522</p>
              </div>
            </div>
          </div>

          <div className={classes.footer__column}>
            <h3 className={classes.columnTitle}>Godziny kontaktu</h3>
            <div className={classes.hours}>
              <div className={classes.hoursItem}>
                <span className={classes.days}>Poniedziałek - Niedziela</span>
                <span className={classes.time}>24 godziny / 7 dni</span>
              </div>
            </div>
            <p className={classes.availability}>
              * Telefon i formularz kontaktowy dostępne całodobowo
            </p>
          </div>

          <div className={classes.footer__column}>
            <h3 className={classes.columnTitle}>Nawigacja</h3>
            <nav className={classes.footerNav}>
              <ul>
                <li>
                  <Link href="/">Strona główna</Link>
                </li>
                <li>
                  <button
                    onClick={toggleServices}
                    className={classes.servicesToggle}
                    aria-expanded={showServices}
                    aria-label="Pokaż usługi"
                  >
                    Oferta ›
                  </button>
                </li>
                <li>
                  <Link href="/galeria">Galeria</Link>
                </li>
                <li>
                  <Link href="/kontakt">Kontakt</Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className={classes.footer__column}>
            <h3 className={classes.columnTitle}>Obsługujemy</h3>
            <div className={classes.serviceArea}>
              <p>Opole</p>
              <p>Wrocław</p>
              <p>Kędzierzyn-Koźle</p>
              <p>Nysa</p>
              <p>Brzeg</p>
              <p className={classes.areaNote}>i całe woj. opolskie</p>
            </div>
          </div>
        </div>

        <div className={classes.footer__bottom}>
          <p>
            &copy; {new Date().getFullYear()} Speed Light Energy. Wszelkie prawa
            zastrzeżone.
          </p>
          <br />
          <div className={classes.legalLinks}>
            <Link href="/polityka-prywatnosci" className={classes.legalLink}>
              Polityka Prywatności
            </Link>
          </div>
        </div>
      </footer>

      {showServices && (
        <div className={classes.servicesModal}>
          <div className={classes.modalOverlay} onClick={toggleServices}></div>
          <div className={classes.modalContent}>
            <button
              className={classes.closeButton}
              onClick={toggleServices}
              aria-label="Zamknij menu usług"
            >
              ×
            </button>
            <h3 className={classes.modalTitle}>Nasze usługi</h3>
            <ul className={classes.servicesList}>
              <li>
                <Link href="/fotowoltaika" onClick={toggleServices}>
                  Fotowoltaika
                </Link>
              </li>
              <li>
                <Link href="/pompy_ciepla" onClick={toggleServices}>
                  Pompy Ciepła
                </Link>
              </li>
              <li>
                <Link href="/magazyn_energii" onClick={toggleServices}>
                  Magazyny Energii
                </Link>
              </li>
              <li>
                <Link href="/klimatyzacja" onClick={toggleServices}>
                  Klimatyzacja
                </Link>
              </li>
              <li>
                <Link href="/instalacje_elektryczne" onClick={toggleServices}>
                  Instalacje Elektryczne
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
