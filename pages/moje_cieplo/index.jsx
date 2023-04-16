import classes from '@/styles/Grants.module.scss';
import Link from 'next/link';
const index = () => {
	return (
		<div className={classes.grantBox}>
			<h1 className={classes.grantTitle}>"Moje Ciepło"</h1>
			<p className={classes.grantText}>
				Moje Ciepło to program, który wspiera inwestycje w instalacje cieplne.
				Dzięki niemu możesz otrzymać dofinansowanie do 50% kosztów inwestycji.
				Wartość dofinansowania zależy od wielkości instalacji oraz od tego, czy
				jesteś właścicielem lub najemcą budynku.{' '}
			</p>
			<p className={classes.grantText}>
				W ramach programu "Moje Ciepło" można otrzymać dofinansowanie na wymianę
				lub modernizację źródeł ciepła w budynkach mieszkalnych, takich jak
				kotły, piece czy pompy ciepła, na bardziej efektywne i ekologiczne
				rozwiązania. Można także uzyskać dofinansowanie na prace
				termomodernizacyjne, takie jak izolacja ścian, dachu czy wymiana okien.
			</p>
			<p className={classes.grantText}>
				Program jest skierowany do właścicieli lub współwłaścicieli budynków
				mieszkalnych, zarówno jednorodzinnych, jak i wielorodzinnych.
				Dofinansowanie udzielane jest w formie refundacji poniesionych kosztów
				inwestycji, w wysokości od 30% do 90% wartości kwalifikowanych kosztów,
				w zależności od rodzaju i miejsca inwestycji oraz dochodu gospodarstwa
				domowego.
			</p>

			<p className={classes.grantText}>
				Aby skorzystać z programu "Moje Ciepło", należy złożyć wniosek do
				Narodowego Funduszu Ochrony Środowiska i Gospodarki Wodnej (NFOŚiGW),
				który jest instytucją odpowiedzialną za realizację programu. Wniosek
				powinien zawierać informacje dotyczące budynku, planowanej inwestycji
				oraz wydatków z nią związanych.
			</p>
			<p className={classes.grantText}>
				Program "Moje Ciepło" ma na celu przede wszystkim zmniejszenie emisji
				szkodliwych substancji do atmosfery oraz obniżenie kosztów ogrzewania
				budynków mieszkalnych. Dzięki dofinansowaniu, właściciele budynków mogą
				zainwestować w bardziej ekologiczne i efektywne źródła ciepła oraz
				przeprowadzić prace termomodernizacyjne, co pozwoli na oszczędność
				energii i pieniędzy.
			</p>
			<p className={classes.grantText}>
				Program Moje Ciepło jest realizowany przez Ministerstwo Energii, Prawa i
				Gospodarki.{' '}
			</p>
			<p className={classes.grantText}>
				Zapraszamy do zapoznania się z szczegółami programu na stronie{' '}
				<Link
					className={classes.grantLink}
					href='https://mojecieplo.gov.pl/'
					target='_blank'
					rel='noreferrer'
				>
					Moje Ciepło
				</Link>
			</p>
		</div>
	);
};

export default index;
