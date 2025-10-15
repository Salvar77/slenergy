import FadeSection from "@/components/FadeSection/FadeSection";
import classes from "./contact.module.scss";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import phone from "@/assets/images/phone-call-B.svg";
import email from "@/assets/images/mail-B.svg";
import Link from "next/link";
import hero from "@/assets/images/mainpagehero.jpg";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/utils/motion";

const Contact = ({ isDesktop }) => {
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

  // Motion components conditionally
  const MotionDiv = isDesktop ? motion.div : "div";
  const MotionForm = isDesktop ? motion.form : "form";
  const MotionSpan = isDesktop ? motion.span : "span";
  const MotionButton = isDesktop ? motion.button : "button";
  const MotionP = isDesktop ? motion.p : "p";

  // Motion props conditionally
  const heroImageProps = isDesktop
    ? {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 },
      }
    : {};

  const heroSectionProps = isDesktop
    ? {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6, delay: 0.2 },
      }
    : {};

  const ctaButtonProps = isDesktop
    ? {
        whileHover: { scale: 1.05 },
        whileTap: { scale: 0.95 },
      }
    : {};

  const containerProps = isDesktop
    ? {
        variants: staggerContainer(0.1, 0.2),
        initial: "hidden",
        whileInView: "show",
        viewport: { once: true, amount: 0.3 },
      }
    : {};

  const contactInfoProps = isDesktop
    ? {
        variants: fadeIn("right", "tween", 0.1, 0.8),
      }
    : {};

  const contactItemProps = isDesktop
    ? {
        whileHover: { x: 5 },
        transition: { type: "spring", stiffness: 400 },
      }
    : {};

  const formProps = isDesktop
    ? {
        variants: fadeIn("left", "tween", 0.3, 0.8),
      }
    : {};

  const buttonProps = isDesktop
    ? {
        whileHover: { scale: pending ? 1 : 1.05 },
        whileTap: { scale: 0.95 },
        transition: { type: "spring", stiffness: 400 },
      }
    : {};

  const personalSectionProps = isDesktop
    ? {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.6, delay: 0.1 },
        viewport: { once: true, amount: 0.3 },
      }
    : {};

  const paragraphProps = (delay) =>
    isDesktop
      ? {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.5, delay },
          viewport: { once: true },
        }
      : {};

  const detailsProps = (delay) =>
    isDesktop
      ? {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.5, delay },
          viewport: { once: true },
        }
      : {};

  return (
    <FadeSection className={classes.contact}>
      <MotionDiv {...heroImageProps}>
        <Image
          src={hero}
          alt="Profesjonalny montaż fotowoltaiki w Opole - Speed Light Energy"
          className={classes.contact__hero}
          priority
        />
      </MotionDiv>

      <MotionDiv className={classes.heroSection} {...heroSectionProps}>
        <h1 className={classes.heroTitle}>Kontakt - Speed Light Energy</h1>
        <p className={classes.heroSubtitle}>
          Potrzebujesz darmowej wyceny fotowoltaiki, pompy ciepła lub magazynu
          energii? Jesteśmy do Twojej dyspozycji!
        </p>
        <MotionDiv className={classes.ctaButtons} {...ctaButtonProps}>
          <Link href="tel:+48606337100" className={classes.ctaPrimary}>
            Zadzwoń: 606 337 100
          </Link>
        </MotionDiv>
      </MotionDiv>

      <MotionDiv className={classes.container} {...containerProps}>
        <MotionDiv className={classes.contact__info} {...contactInfoProps}>
          <span className={classes.contact__person}> Skontaktuj się </span>

          <MotionSpan className={classes.contact__item} {...contactItemProps}>
            <Image
              className={classes.contact__item__img}
              src={phone}
              alt="ikonka telefonu"
              width={30}
            />{" "}
            606 337 100{" "}
          </MotionSpan>
          <MotionSpan className={classes.contact__item} {...contactItemProps}>
            <Image
              className={classes.contact__item__img}
              src={email}
              alt="ikonka email"
              width={30}
            />{" "}
            kontakt@slenergy.pl{" "}
          </MotionSpan>
          <span className={classes.contact__item}>
            <b>NIP: </b> 75 43 054 995
          </span>
          <span className={classes.contact__item}>
            <b>REGON: </b>389 501 522
          </span>
        </MotionDiv>

        <MotionForm
          className={classes.contact__form}
          ref={form}
          onSubmit={sendEmail}
          {...formProps}
        >
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
          <MotionButton
            className={classes.contact__form__button}
            type="submit"
            disabled={pending}
            {...buttonProps}
          >
            {pending ? "Wysyłanie..." : "Wyślij"}
          </MotionButton>
        </MotionForm>
      </MotionDiv>

      <MotionDiv className={classes.personalSection} {...personalSectionProps}>
        <h2>Speed Light Energy – Fotowoltaika Opole</h2>
        <MotionP {...paragraphProps(0.2)}>
          <strong>
            Cześć! Nazywam się Rafał, mam ponad 10 lat doświadczenia w
            fotowoltaice
          </strong>{" "}
          i prowadzę firmę Speed Light Energy w Opolu. Codziennie pomagam
          właścicielom domów obniżać rachunki za prąd – od projektowania
          instalacji, przez montaż paneli, aż po uruchomienie systemu.
        </MotionP>

        <MotionP {...paragraphProps(0.3)}>
          <strong>
            Masz pytanie o fotowoltaikę, pompę ciepła lub magazyn energii?
          </strong>{" "}
          Zadzwoń lub napisz – odpowiem w ciągu godziny i przedstawię darmową
          wycenę. Kontaktujesz się bezpośrednio ze mną – bez pośredników, bez
          presji, z pełnym zaangażowaniem.
        </MotionP>

        <MotionDiv className={classes.contactDetails} {...detailsProps(0.4)}>
          <h3>Dane kontaktowe:</h3>
          <p>
            📞 <Link href="tel:+48606337100">606 337 100</Link>
          </p>
          <p>
            ✉️{" "}
            <Link href="mailto:kontakt@slenergy.pl">kontakt@slenergy.pl</Link>
          </p>
        </MotionDiv>

        <MotionDiv className={classes.hours} {...detailsProps(0.5)}>
          <h3>Godziny kontaktu:</h3>
          <p>🕒 Poniedziałek – Niedziela: całodobowo</p>
          <p>📞 Telefon i formularz dostępne 24/7</p>
        </MotionDiv>

        <MotionP className={classes.note} {...detailsProps(0.6)}>
          💬 <strong>Wycena jest bezpłatna i niezobowiązująca</strong> – możesz
          też do mnie napisać poprzez formularz kontaktowy. Twoje dane są
          bezpieczne – szanuję prywatność moich klientów.
        </MotionP>
      </MotionDiv>
    </FadeSection>
  );
};

export default Contact;
