import FadeSection from "@/components/FadeSection/FadeSection";
import classes from "./contact.module.scss";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import phone from "@/assets/images/phone-call-B.svg";
import email from "@/assets/images/mail-B.svg";
import Link from "next/link";
import hero from "@/assets/images/mainpagehero.jpg";

const Contact = () => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredMessage, setEnteredMessage] = useState("");
  const [pending, setPending] = useState(false);
  const form = useRef();
  const resetForm = () => {
    setPending(false);
    setEnteredName("");
    setEnteredMessage(
      "Dziękujemy za wiadomość, odpowiemy najszybciej jak możemy!"
    );
    setEnteredEmail("");
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setPending(true);
    emailjs
      .sendForm(
        "service_yehx0pp",
        "template_ru2izri",
        form.current,
        "wwdbnPuL4-WZzJIcR"
      )
      .then(
        (result) => {
          resetForm();
        },
        (error) => {}
      );
  };

  return (
    <FadeSection className={classes.contact}>
      <Image
        src={hero}
        alt="Profesjonalny montaż fotowoltaiki w Opole - Speed Light Energy"
        className={classes.contact__hero}
        priority
      ></Image>

      <div className={classes.heroSection}>
        <h1 className={classes.heroTitle}>Kontakt - Speed Light Energy</h1>
        <p className={classes.heroSubtitle}>
          Potrzebujesz darmowej wyceny fotowoltaiki, pompy ciepła lub magazynu
          energii? Jesteśmy do Twojej dyspozycji!
        </p>
        <div className={classes.ctaButtons}>
          <Link href="tel:+48606337100" className={classes.ctaPrimary}>
            Zadzwoń: 606 337 100
          </Link>
        </div>
      </div>

      <div className={classes.container}>
        <div className={classes.contact__info}>
          <span className={classes.contact__person}> Skontaktuj się </span>

          <span className={classes.contact__item}>
            <Image
              className={classes.contact__item__img}
              src={phone}
              alt="ikonka telefonu"
              width={30}
            />{" "}
            606 337 100{" "}
          </span>
          <span className={classes.contact__item}>
            <Image
              className={classes.contact__item__img}
              src={email}
              alt="ikonka email"
              width={30}
            />{" "}
            kontakt@slenergy.pl{" "}
          </span>
          <span className={classes.contact__item}>
            <b>NIP: </b> 75 43 054 995
          </span>
          <span className={classes.contact__item}>
            <b>REGON: </b>389 501 522
          </span>
        </div>

        <form className={classes.contact__form} ref={form} onSubmit={sendEmail}>
          <label className={classes.contact__form__label} htmlFor="user_name">
            Imię{" "}
          </label>
          <input
            className={classes.contact__form__input}
            type="text"
            id="user_name"
            name="user_name"
            value={enteredName}
            onChange={(e) => setEnteredName(e.target.value)}
            required
          />
          <label className={classes.contact__form__label} htmlFor="user_email">
            Adres e-mail
          </label>
          <input
            className={classes.contact__form__input}
            type="email"
            id="user_email"
            name="user_email"
            onChange={(e) => setEnteredEmail(e.target.value)}
            value={enteredEmail}
            required
          />
          <label className={classes.contact__form__label} htmlFor="message">
            Wiadomość
          </label>
          <textarea
            className={classes.contact__form__textarea}
            id="message"
            name="message"
            value={enteredMessage}
            onChange={(e) => setEnteredMessage(e.target.value)}
            required
          />
          <button
            className={classes.contact__form__button}
            type="submit"
            disabled={pending}
          >
            {pending ? "Wysyłanie..." : "Wyślij"}
          </button>
        </form>
      </div>
      <div className={classes.personalSection}>
        <h2>Speed Light Energy – Fotowoltaika Opole</h2>
        <p>
          <strong>
            Cześć! Nazywam się Rafał, mam ponad 10 lat doświadczenia w
            fotowoltaice
          </strong>{" "}
          i prowadzę firmę Speed Light Energy w Opolu. Codziennie pomagam
          właścicielom domów obniżać rachunki za prąd – od projektowania
          instalacji, przez montaż paneli, aż po uruchomienie systemu.
        </p>

        <p>
          <strong>
            Masz pytanie o fotowoltaikę, pompę ciepła lub magazyn energii?
          </strong>{" "}
          Zadzwoń lub napisz – odpowiem w ciągu godziny i przedstawię darmową
          wycenę. Kontaktujesz się bezpośrednio ze mną – bez pośredników, bez
          presji, z pełnym zaangażowaniem.
        </p>

        <div className={classes.contactDetails}>
          <h3>Dane kontaktowe:</h3>
          <p>
            📞 <Link href="tel:+48606337100">606 337 100</Link>
          </p>
          <p>
            ✉️{" "}
            <Link href="mailto:kontakt@slenergy.pl">kontakt@slenergy.pl</Link>
          </p>
        </div>

        <div className={classes.hours}>
          <h3>Godziny kontaktu:</h3>
          <p>🕒 Poniedziałek – Niedziela: całodobowo</p>
          <p>📞 Telefon i formularz dostępne 24/7</p>
        </div>

        <p className={classes.note}>
          💬 <strong>Wycena jest bezpłatna i niezobowiązująca</strong> – możesz
          też do mnie napisać poprzez formularz kontaktowy. Twoje dane są
          bezpieczne – szanuję prywatność moich klientów.
        </p>
      </div>
    </FadeSection>
  );
};

export default Contact;
