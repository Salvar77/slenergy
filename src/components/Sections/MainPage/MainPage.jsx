import HeroImage from '@/components/HeroImage/HeroImage';
import Image from 'next/image';
import heroimg from '@/assets/images/mainpagehero.jpg';
import classes from './MainPage.module.scss';
import Calculator from '@/components/Calc/Calc';
import logo from '@/assets/images/SpeedLightLogoHero.svg';
import img2 from '@/assets/images/second_main.jpeg'
import Link from 'next/link';
import heatpump from '@/assets/images/heat-pump.png';
import battery from '@/assets/images/battery.png';
import solar from '@/assets/images/solar-panel.png';


const MainPage = () => {
	return (
		<>
			<HeroImage image={heroimg} alt='ads'>
				<div className={classes.heroImageBoxx}>
					<Image
						src={logo}
						className={classes.heroImageBoxx__logo}
						alt='logo'
					/>
					<div className={classes.heroImageBoxx__textbox}>
						<Link href='/fotowoltaika' className={classes.heroImageBoxx__text}>
							Fotowoltaika
						</Link>
						<Link href='/' className={classes.heroImageBoxx__text}>
							Pompy ciepła
						</Link>
						<Link href='/' className={classes.heroImageBoxx__text}>
							Magazyny energi
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
						elektrycznej ze słońca. Oferujemy pełen zakres usług, począwszy od
						projektu, poprzez dostawę niezbędnych materiałów, aż po sam montaż
						systemu.
					</p>
					<p className={classes.headSection__text}>
						Nasza firma zatrudnia wykwalifikowanych specjalistów, którzy
						posiadają niezbędne kwalifikacje i doświadczenie w dziedzinie
						montażu systemów fotowoltaicznych. Montujemy zarówno systemy dla
						klientów indywidualnych, jak i przedsiębiorstw, na terenie całego
						kraju.
					</p>
				</div>
				<div className={classes.headSection__imgBox}>
					<Image
						className={classes.headSection__img}
						src={img2}
						alt='heroimg'
					/>
				</div>
			</section>
			<section className={classes.calc}>
				<h2 className={classes.calc__title}>
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
			<section className={classes.services}>
				<h2 className={classes.services__title}>Nasze usługi</h2>
				<div className={classes.services__box}>
					<div className={classes.services__item}>
						<Image src={solar} alt='ikona paneli solarnych' className={classes.services__img} />
						<h3 className={classes.services__itemTitle}>Panele fotowoltaiczne</h3>
						<p className={classes.services__itemText}>
						Zainstaluj panele fotowoltaiczne i ciesz się czystą energią słoneczną!
						</p>
						<Link
							href='/fotowoltaika'
							className={classes.services__item_button}
						>
							Więcej informacji
						</Link>
					</div>
					<div className={classes.services__item}>
						<Image src={battery} alt='ikona bateri' className={classes.services__img} />
						<h3 className={classes.services__itemTitle}>Magazyny energii</h3>
						<p className={classes.services__itemText}>
						Magazynuj energię i ciesz się jej niezależnym wykorzystaniem!
						</p>
						<Link
							href='/magazyn_energii'
							className={classes.services__item_button}
						>
							Więcej informacji
						</Link>
					</div>
					<div className={classes.services__item}>
						<Image src={heatpump} alt='ikona pompy ciepła' className={classes.services__img} />
						<h3 className={classes.services__itemTitle}>Pompy ciepła</h3>
						<p className={classes.services__itemText}>
						Wybierz pompę ciepła i ogrzewaj swój dom w sposób ekologiczny i oszczędny!
						</p>
						<Link
							href='/pompy_ciepla'
							className={classes.services__item_button}
						>
							Więcej informacji
						</Link>
					</div>
				</div>
			</section>

			<section className={classes.about}>
				<p>
					Oferujemy Państwu profesjonalny montaż systemów fotowoltaicznych.
					Jeśli już posiadają Państwo system fotowoltaiczny, ale potrzebują
					pomocy w jego montażu, nasi specjaliści chętnie pomogą. Nasze usługi
					obejmują profesjonalny montaż, demontaż, przenoszenie i naprawę
					systemów fotowoltaicznych.
				</p>
			</section>
		</>
	);
};

export default MainPage;
