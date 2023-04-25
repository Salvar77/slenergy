import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import HeroImage from '@/components/HeroImage/HeroImage';
import style from '@/styles/HeroImage.module.scss';
import Image from 'next/image';
import heroimg from '@/assets/images/woltaika.jpg';
import foto from '@/assets/images/gallery/foto.jpg';
import foto1 from '@/assets/images/gallery/foto-1.jpg';
import foto2 from '@/assets/images/gallery/foto-2.jpg';
import foto4 from '@/assets/images/gallery/foto-4.jpg';
import foto5 from '@/assets/images/gallery/foto-5.jpg';
import foto6 from '@/assets/images/gallery/foto-6.jpg';
import foto8 from '@/assets/images/gallery/foto-8.jpg';
import foto9 from '@/assets/images/gallery/foto-9.jpg';
import foto10 from '@/assets/images/gallery/foto-10.jpg';
import foto11 from '@/assets/images/gallery/foto-11.jpg';
import foto12 from '@/assets/images/gallery/foto-12.jpg';
import foto13 from '@/assets/images/gallery/foto-13.jpg';




const Fotowoltaika = () => {
	const images = [
		{
			src:  foto ,
			alt: 'Przykładowa realizacja montażu paneli fotowoltaicznych',
		},
		{
			src:  foto1 ,
			alt: 'Przykładowa realizacja montażu paneli fotowoltaicznych',
		},
		{
			src:  foto2 ,
			alt: 'Przykładowa realizacja montażu paneli fotowoltaicznych',
		},
		{
			src:  foto4 ,
			alt: 'Przykładowa realizacja montażu paneli fotowoltaicznych',
		},
		{
			src:  foto5 ,
			alt: 'Przykładowa realizacja montażu paneli fotowoltaicznych',
		},
		{
			src:  foto6 ,
			alt: 'Przykładowa realizacja montażu paneli fotowoltaicznych',
		},
		{
			src:  foto8 ,
			alt: 'Przykładowa realizacja montażu paneli fotowoltaicznych',
		},
		{
			src:  foto9 ,
			alt: 'Przykładowa realizacja montażu paneli fotowoltaicznych',
		},
		{
			src:  foto10 ,
			alt: 'Przykładowy montaż falownika ',
		},
		{
			src:  foto11 ,
			alt: 'Przykładowy montaż falownika ',
		},
		{
			src:  foto12 ,
			alt: 'Przykładowy montaż falownika ',
		},
		{
			src:  foto13 ,
			alt: 'Przykładowy montaż pompy ciepłą',
		},
	];
	return (
		<>
			<HeroImage image={heroimg} alt='sa'>
				<div className={style.heroImageTextBox}>
					<h1 className={style.heroImageTextBox__title}>Fotowoltaika Opole</h1>
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
						Zapraszamy do kontaktu z nami i skorzystania z naszych usług.
					</p>
				</div>
			</HeroImage>
			<section className={style.headSection}>
				<div className={style.headSection__textBox}>
					<h1 className={style.headSection__title}>Korzyści z fotowoltaiki</h1>
					<p className={style.headSection__text}>
						<b>Oszczędności na rachunkach za energię elektryczną:</b>{' '}
						Właściciele domów lub firm, którzy zainstalują panele fotowoltaiczne
						na dachu, mogą produkować własną energię elektryczną i zmniejszyć
						swoje rachunki za energię elektryczną.
					</p>
					<p className={style.headSection__text}>
						<b>Ochrona środowiska: </b>
						Wytwarzanie energii ze źródeł odnawialnych, takich jak energia
						słoneczna, pomaga zmniejszyć emisję szkodliwych gazów cieplarnianych
						i innych zanieczyszczeń powietrza, co wpływa pozytywnie na
						środowisko i zdrowie publiczne.
					</p>
					<p className={style.headSection__text}>
						<b>Uniezależnienie od dostawców energii: </b>Dzięki zainstalowaniu
						paneli fotowoltaicznych, domy i firmy mogą produkować swoją własną
						energię elektryczną, co pozwala na uniezależnienie od dostawców
						energii i zmniejszenie ryzyka wzrostu cen energii.
					</p>
					<p className={style.headSection__text}>
						<b>Długoterminowe oszczędności: </b>Inwestycja w panele
						fotowoltaiczne może być początkowo kosztowna, ale w dłuższej
						perspektywie pozwala na znaczne oszczędności na rachunkach za
						energię elektryczną, co przyczynia się do poprawy finansowej
						sytuacji domów i firm.
					</p>
					<p className={style.headSection__text}>
						<b>Wartość dodana dla nieruchomości: </b>Zainstalowanie paneli
						fotowoltaicznych może zwiększyć wartość nieruchomości, co jest
						korzystne dla właścicieli nieruchomości i może ułatwić sprzedaż lub
						wynajem nieruchomości w przyszłości.
					</p>
				</div>
				<div className={style.headSection__imgBox}>
					<Carousel
						autoPlay
						dynamicHeight
						interval={3500}
						emulateTouch
						infiniteLoop
						stopOnHover
						showStatus={false}
						showThumbs={false}
						showIndicators={false}
					
					>
						{images.map((image) => (
							<div key={image.src}>
								<Image src={image.src} alt={image.alt} className={style.image}/>
							</div>
						))}
					</Carousel>
				</div>
			</section>
		</>
	);
};

export default Fotowoltaika;
