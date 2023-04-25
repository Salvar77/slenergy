
import FadeSection from '@/components/FadeSection/FadeSection';
import classes from './contact.module.scss';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Image from 'next/image';
import phone from '@/assets/images/phone-call-B.svg';
import email from '@/assets/images/mail-B.svg';
import rafal from './rafal.jpg';
import hero from '@/assets/images/mainpagehero.jpg';

const Contact = () => {
	const [enteredName, setEnteredName] = useState('');
	const [enteredEmail, setEnteredEmail] = useState('');
	const [enteredMessage, setEnteredMessage] = useState('');
    const [pending, setPending] = useState(false);
	const form = useRef();
	const resetForm = () => {
        setPending(false);
		setEnteredName('');
		setEnteredMessage(
			'Dziękujemy za wiadomość, odpowiemy najszybciej jak możemy!'
		);
		setEnteredEmail('');
	};

	const sendEmail = (e) => {
		e.preventDefault();
        setPending(true);
		emailjs
			.sendForm(
				'service_yehx0pp',
				'template_ru2izri',
				form.current,
				'wwdbnPuL4-WZzJIcR'
			)
			.then(
				(result) => {
					resetForm();
					
				},
				(error) => {
					
				}
			);
	};

	return (

		<FadeSection className={classes.contact}>
            <Image src={hero} alt='hero grafika' className={classes.contact__hero}></Image>
			<div className={classes.about}>
				<div className={classes.about__imgBox}>
					<Image src={rafal} alt='rafal' className={classes.about__imgBox__img} />

					</div>
				<div className={classes.about__text}>
					<h2 className={classes.about__text__title}>Rafał Małecki</h2>
					<p className={classes.about__text__paragraph}>
					Jestem doświadczonym specjalistą w dziedzinie instalacji elektrycznych i fotowoltaicznych oraz magazynów energii z 6-letnim doświadczeniem. Pasjonuję się tworzeniem rozwiązań zrównoważonej energii, które przyczyniają się do ochrony środowiska naturalnego. Moja praca w tej branży nadal trwa, a każde zadanie traktuję z pełnym zaangażowaniem i profesjonalizmem.
					</p>
					<p className={classes.about__text__paragraph}>
					Jestem otwarty na ludzi, co pozwala mi tworzyć pozytywne relacje z klientami i współpracownikami. Cenię sobie możliwość współpracy z różnymi ludźmi i pomagania im w realizacji ich potrzeb związanych z instalacjami elektrycznymi, fotowoltaiką i magazynami energii. Jestem uważnym słuchaczem i zawsze staram się zrozumieć potrzeby moich klientów, aby dostarczyć im najlepszych rozwiązań.
					</p>
					<p className={classes.about__text__paragraph}>
					Moja wiedza i doświadczenie w zakresie instalacji elektrycznych, fotowoltaiki i magazynów energii pozwalają mi na profesjonalne podejście do każdego projektu. Nieustannie poszerzam swoje kompetencje, aby być na bieżąco z najnowszymi technologiami i trendami w tej dynamicznie rozwijającej się dziedzinie.

					</p>
					<p className={classes.about__text__paragraph}>
					Poza moją pracą zawodową, cenię sobie czas spędzony z rodziną i przyjaciółmi. Moja miłość do ludzi sprawia, że jestem osobą przyjazną i empatyczną, gotową wspierać innych w osiąganiu ich celów. Wierzę, że uczciwość, zaangażowanie i profesjonalizm są kluczowymi wartościami w mojej pracy i życiu osobistym.

					</p>
					</div>


			</div>
			<div className={classes.container}>
				<div className={classes.contact__info}>
					<span className={classes.contact__person}> Skontaktuj się </span>
			
					
					<span className={classes.contact__item}>
						<Image className={classes.contact__item__img} src={phone} alt='ikonka telefonu' width={30} /> 606 337 100{' '}
					</span>
					<span className={classes.contact__item}>
						<Image className={classes.contact__item__img} src={email} alt='ikonka email' width={30} />{' '}
						kontakt@slenergy.pl{' '}
					</span>
					<span className={classes.contact__item}>
					<b>NIP: </b> 75 43 054 995
					</span>
					<span className={classes.contact__item}>
					<b>REGON: </b>389 501 522
					</span>
				</div>

				<form className={classes.contact__form} ref={form}
                 onSubmit={sendEmail}
                 >
					<label className={classes.contact__form__label} htmlFor='user_name'>
						Imię{' '}
					</label>
					<input
						className={classes.contact__form__input}
						type='text'
						id='user_name'
						name='user_name'
						value={enteredName}
                        onChange={(e) => setEnteredName(e.target.value)}
						required
					/>
					<label className={classes.contact__form__label} htmlFor='user_email'>
						Adres e-mail
					</label>
					<input
						className={classes.contact__form__input}
						type='email'
						id='user_email'
						name='user_email'
                        onChange={(e) => setEnteredEmail(e.target.value)}
						value={enteredEmail}
						required
					/>
					<label className={classes.contact__form__label} htmlFor='message'>
						Wiadomość
					</label>
					<textarea
						className={classes.contact__form__textarea}
						id='message'
						name='message'
						value={enteredMessage}
						onChange={(e) => setEnteredMessage(e.target.value)}
						required
					/>
					<button className={classes.contact__form__button} type='submit' disabled={pending}  >
						{pending ? 'Wysyłanie...' : 'Wyślij'}
					</button>
				</form>
			</div>
		
		</FadeSection>
	);
};



export default Contact;
