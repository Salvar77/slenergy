import HeroImage from '@/components/HeroImage/HeroImage';
import style from '@/styles/HeroImage.module.scss';
import classes from './Offers.module.scss';
import Image from 'next/image';
import heroimg from '@/assets/images/magazyn.jpg';
import magazyn2 from '@/assets/images/magazyn2.jpg';
import React from 'react';

const Magazyn = () => {
	return (
		<>
			<HeroImage image={heroimg} alt='sa'>
				<div className={style.heroImageTextBox}>
					<h1 className={style.heroImageTextBox__title}>Magazyny energii Opole</h1>
					<p className={style.heroImageTextBox__text}>
					Magazyny energii to systemy, które pozwalają na gromadzenie i przechowywanie energii w celu wykorzystania jej w przyszłości. Mogą być stosowane w różnych celach, takich jak zwiększenie niezawodności dostaw energii, poprawa jakości energii lub jako źródło awaryjne w przypadku awarii sieci energetycznej.
					</p>
					<p className={style.heroImageTextBox__text}>
					Istnieje wiele rodzajów magazynów energii, takich jak baterie litowo-jonowe, magazyny wodne, magazyny powietrzne czy magazyny ciepła. Magazyny energii mają coraz większe znaczenie wraz z rozwojem odnawialnych źródeł energii, takich jak panele fotowoltaiczne i elektrownie wiatrowe, które generują energię w sposób niestabilny i zmienny w czasie.
					</p>
					<p className={style.heroImageTextBox__text}>
					Dlatego magazyny energii są ważnym elementem przyszłych systemów energetycznych, pozwalając na składowanie energii wtedy, gdy jest jej nadmiar, aby móc ją wykorzystać w chwilach, gdy brakuje.
					</p>
			
				</div>
			</HeroImage>
			<section className={style.headSection}>
				<div className={style.headSection__textBox}>
					<h1 className={style.headSection__title}>Korzyści z magazynu energi</h1>
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
						src={magazyn2}
						alt='hero grafika '
					/>
				</div>
			</section>
		</>
	);
};

export default Magazyn;
