'use client';
import FadeSection from '@/components/FadeSection/FadeSection';
import classes from './contact.module.scss';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Image from 'next/image';
import phone from '@/assets/images/phone-call-B.svg';
import email from '@/assets/images/mail-B.svg';

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

	// const sendEmail = (e) => {
	// 	e.preventDefault();
    //     setPending(true);
	// 	emailjs
	// 		.sendForm(
	// 			'service_33pbj1t',
	// 			'template_56iabxq',
	// 			form.current,
	// 			'79vkiZsFKHfTppzCh'
	// 		)
	// 		.then(
	// 			(result) => {
	// 				resetForm();
	// 				// openEmailModal();
	// 			},
	// 			(error) => {
	// 				// openEmailModalerror();
	// 			}
	// 		);
	// };

	return (

		<FadeSection className={classes.contact}>
            <Image src={hero} alt='hero grafika' className={classes.contact__hero}></Image>
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
				</div>

				<form className={classes.contact__form} ref={form}
                //  onSubmit={sendEmail}
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
