import HeroImage from '@/components/HeroImage/HeroImage';
import style from '@/styles/HeroImage.module.scss';
import classes from './Offers.module.scss';
import Image from 'next/image';
import heroimg from '@/assets/images/mainpagehero.jpg';
import React from 'react';

const Magazyn = () => {
	return (
		<>
			<HeroImage image={heroimg} alt='sa'>
				<div className={style.heroImageTextBox}>
					<h1 className={style.heroImageTextBox__title}>Pompy ciepła Opole</h1>
					<p className={style.heroImageTextBox__text}>
						Jesteśmy specjalistami w dziedzinie fotowoltaiki i oferujemy
						kompleksowe usługi, w tym montaż, serwis oraz sprzedaż paneli
						fotowoltaicznych. Nasza firma posiada doświadczenie oraz wiedzę
						niezbędną do zapewnienia Państwu najwyższej jakości usług w zakresie
						fotowoltaiki.
					</p>
					<p className={style.heroImageTextBox__text}>
						Jeśli szukają Państwo rozwiązania, które pozwoli na obniżenie
						kosztów energii elektrycznej oraz zwiększenie niezależności
						energetycznej, to zapraszamy do kontaktu z nami. Z chęcią pomożemy w
						doborze odpowiedniego systemu oraz wykonamy dla Państwa darmową
						wycenę.
					</p>
					<p className={style.heroImageTextBox__text}>
						Nasza oferta jest skierowana zarówno do klientów indywidualnych, jak
						i biznesowych. Gwarantujemy fachowe doradztwo oraz kompleksowe
						wsparcie na każdym etapie współpracy.
					</p>
					<p className={style.heroImageTextBox__text}>
						Nasza oferta jest skierowana zarówno do klientów indywidualnych, jak
						i biznesowych. Gwarantujemy fachowe doradztwo oraz kompleksowe
						wsparcie na każdym etapie współpracy.
					</p>
					<p className={style.heroImageTextBox__text}>
						Zapraszamy do kontaktu z nami i skorzystania z naszych usług.
					</p>
				</div>
			</HeroImage>
			<section className={style.headSection}>
				<div className={style.headSection__textBox}>
					<h1 className={style.headSection__title}>Korzyści z pompy ciepła</h1>
					<p className={style.headSection__text}>
						<b>Oszczędność na kosztach energii: </b> - Magazynowanie energii
						pozwala na wykorzystanie jej wtedy, gdy jest najbardziej potrzebna,
						co zmniejsza koszty energii elektrycznej i umożliwia uniezależnienie
						się od tradycyjnych źródeł energii.
					</p>
					<p className={style.headSection__text}>
						<b>Zwiększenie wykorzystania energii odnawialnej: </b> -
						Magazynowanie energii pochodzącej z odnawialnych źródeł, takich jak
						energia słoneczna czy wiatrowa, pozwala na zwiększenie jej
						wykorzystania, gdy nie ma wystarczającej ilości słońca lub wiatru.
					</p>
					<p className={style.headSection__text}>
						<b>Wsparcie sieci energetycznej </b>Magazyny energii mogą pomóc w
						równoważeniu produkcji i poboru energii w sieci energetycznej, co
						zmniejsza potrzebę budowy nowych elektrowni i infrastruktury
						sieciowej.
					</p>
					<p className={style.headSection__text}>
						<b>Zwiększenie niezawodności systemu energetycznego: </b> Magazyny
						energii pozwalają na przechowywanie energii w przypadku awarii
						systemu, co przyczynia się do zwiększenia niezawodności systemu
						energetycznego.
					</p>
					<p className={style.headSection__text}>
						<b>Zmniejszenie emisji gazów cieplarnianych: </b> Magazynowanie
						energii z odnawialnych źródeł pozwala na zmniejszenie emisji gazów
						cieplarnianych i innych zanieczyszczeń powietrza, co przyczynia się
						do ochrony środowiska i zdrowia publicznego.
					</p>
					<p className={style.headSection__text}>
						<b>Bezpieczeństwo energetyczne: </b> Magazyny energii pozwalają na
						zabezpieczenie dostaw energii w przypadku kryzysów energetycznych
						lub innych sytuacji awaryjnych.
					</p>
					<p className={style.headSection__text}>
						<b>Możliwość wykorzystania w systemie mikrosieci: </b>Magazyny
						energii mogą być wykorzystywane w systemach mikrosieci, gdzie są
						połączone z źródłami odnawialnymi i umożliwiają samowystarczalność
						energetyczną dla lokalnych społeczności.
					</p>
				</div>
				<div className={style.headSection__imgBox}>
					<Image
						className={style.headSection__img}
						src={heroimg}
						alt='hero grafika '
					/>
				</div>
			</section>
		</>
	);
};

export default Magazyn;
