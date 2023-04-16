import classes from '@/styles/Grants.module.scss';
import Link from 'next/link';

const index = () => {
	return (
		<div className={classes.grantBox}>
			<h1 className={classes.grantTitle}>"Mój Prąd"</h1>
			<p className={classes.grantText}>
				"Mój Prąd" to program rządu polskiego, który ma na celu zachęcenie
				mieszkańców Polski do instalacji paneli fotowoltaicznych w celu
				wytwarzania energii elektrycznej z odnawialnych źródeł energii. Oto
				kilka kluczowych cech programu "Mój Prąd":
			</p>
			<p className={classes.grantText}>
				Dotacje - Program "Mój Prąd" oferuje dotacje na zakup i instalację
				paneli fotowoltaicznych. Wysokość dotacji wynosi 50% kosztów
				kwalifikowanych, ale nie więcej niż 5 tysięcy złotych na jeden kWp
				zainstalowanej mocy. Dotacje są przyznawane na podstawie konkursów, a
				środki na ich sfinansowanie pochodzą z budżetu państwa.
			</p>
			<p className={classes.grantText}>
				Wsparcie dla gospodarstw domowych - Program "Mój Prąd" skierowany jest
				głównie do gospodarstw domowych, które chcą zainwestować w fotowoltaikę.
				Dzięki dotacjom, osoby fizyczne mogą skorzystać z dofinansowania na
				pokrycie kosztów instalacji paneli fotowoltaicznych.
			</p>
			<p className={classes.grantText}>
				Zmniejszenie kosztów energii elektrycznej - Instalacja paneli
				fotowoltaicznych pozwala na wytwarzanie energii elektrycznej z
				odnawialnego źródła i zmniejszenie kosztów związanych z zakupem energii
				elektrycznej od sieci. W ten sposób, osoby korzystające z paneli
				fotowoltaicznych mogą znacznie obniżyć swoje rachunki za prąd.
			</p>
			<p className={classes.grantText}>
				Korzyści dla środowiska - Program "Mój Prąd" ma na celu promowanie
				energetyki odnawialnej i zmniejszenie emisji gazów cieplarnianych.
				Dzięki wykorzystaniu paneli fotowoltaicznych, można wyprodukować energię
				elektryczną z odnawialnego źródła i zredukować emisję CO2.
			</p>
			<p className={classes.grantText}>
				Rozwój rynku fotowoltaicznego - Program "Mój Prąd" przyczynia się
				również do rozwoju rynku fotowoltaicznego w Polsce poprzez zwiększenie
				popytu na instalacje paneli fotowoltaicznych oraz wsparcie dla
				przedsiębiorstw zajmujących się produkcją i instalacją paneli
				fotowoltaicznych.
			</p>

			<p className={classes.grantText}>
				Program Mój Prąd jest realizowany przez Ministerstwo Energii, Prawa i
				Gospodarki.{' '}
			</p>
			<p className={classes.grantText}>
				Zapraszamy do zapoznania się z szczegółami programu na stronie{' '}
				<Link
					className={classes.grantLink}
					href='https://mojprad.gov.pl/'
					target='_blank'
					rel='noreferrer'
				>
					Mój Prąd
				</Link>
			</p>
		</div>
	);
};

export default index;
