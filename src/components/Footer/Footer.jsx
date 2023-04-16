import classes from './Footer.module.scss';
import Image from 'next/image';
import logo from '@/assets/images/SpeedLightLogoMobile.svg';
import phone from '@/assets/images/phone-call.svg';
import mail from '@/assets/images/mail.svg';
const Footer = () => {
	return (
		<div className={classes.footer}>
			<div className={classes.footer__content}>
				<div className={classes.footer__content__left}>
					<Image src={logo} alt='logo' width={300} />
				</div>
				<div className={classes.footer__content__right}>
					<div className={classes.footer__content__pbox}>
						<Image src={phone} alt='ikona telefonu' width={24} />
						<p className={classes.footer__content__right__text}>
							+48 606 337 100
						</p>
					</div>
					<div className={classes.footer__content__pbox}>
						<Image src={mail} alt='ikona koperty' width={24} />
						<p className={classes.footer__content__right__text}>
							kontakt@slenergy.pl
						</p>
					</div>
					<p className={classes.footer__content__right__text}>NIP 1234567890</p>
					<p className={classes.footer__content__right__text}>
						REGON 123456789
					</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;
