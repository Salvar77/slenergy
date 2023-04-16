import HeroImage from '@/components/HeroImage/HeroImage';
import style from '@/styles/HeroImage.module.scss';
import Image from 'next/image';
import heroimg from '@/assets/images/pompa.jpg';
import React from 'react';

const Pompyciepla = () => {
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
						<b>Oszczędność na kosztach energii: </b> Pompy ciepła wykorzystują
						energię z otoczenia (powietrza, gleby lub wody) do produkcji ciepła,
						co jest znacznie bardziej ekonomiczne niż tradycyjne ogrzewanie
						gazem lub olejem opałowym. Dzięki temu można oszczędzić na kosztach
						energii i zmniejszyć rachunki za ogrzewanie.
					</p>
					<p className={style.headSection__text}>
						<b>Niskie emisje gazów cieplarnianych: </b> - Pompy ciepła nie
						spalają paliwa, a jedynie wykorzystują energię z otoczenia, dlatego
						są bardziej przyjazne dla środowiska i pomagają zmniejszyć emisje
						gazów cieplarnianych.
					</p>
					<p className={style.headSection__text}>
						<b>Wysoka wydajność: </b>Pompy ciepła charakteryzują się wysoką
						wydajnością i efektywnością, ponieważ wykorzystują jedynie niewielką
						ilość energii elektrycznej do przetwarzania energii z otoczenia na
						ciepło.
					</p>
					<p className={style.headSection__text}>
						<b>Komfort użytkowania: </b> Pompy ciepła są bardzo ciche i nie
						emitują żadnych szkodliwych substancji do powietrza, co przyczynia
						się do komfortu użytkowania i korzystnego wpływu na zdrowie
						mieszkańców.
					</p>
					<p className={style.headSection__text}>
						<b>Uniezależnienie od dostawców energii: </b> Dzięki zainstalowaniu
						pompy ciepła, można uniezależnić się od dostawców energii i
						zmniejszyć ryzyko wzrostu cen energii.
					</p>
					<p className={style.headSection__text}>
						<b>Możliwość wykorzystania w systemie chłodzenia: </b> Niektóre
						modele pomp ciepła pozwalają na wykorzystanie w systemie chłodzenia
						w lecie, co dodatkowo zwiększa ich funkcjonalność i ekonomiczność.
					</p>
					<p className={style.headSection__text}>
						<b>Długa żywotność: </b>Pompy ciepła są zazwyczaj trwałymi i
						niezawodnymi urządzeniami, co pozwala na wiele lat bezproblemowego
						użytkowania i minimalizuje koszty związane z ich serwisowaniem i
						naprawami.
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

export default Pompyciepla;
