import Footer from '@/components/Footer/Footer';
import '/styles/globals.scss';
import Nav from '@/components/Nav/Nav';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Fotowoltaika Opole - Speed Light Energy</title>
				<meta
					name='viewport'
					content='width=device-width,height=device-height , initial-scale=1'
				/>

				<meta
					name='description'
					content='Speed Light Energy to ekspert w dziedzinie energii odnawialnej. Oferujemy najwyższej jakości panele fotowoltaiczne oraz innowacyjne pompy ciepła, które umożliwiają oszczędne i ekologiczne ogrzewanie domów i budynków. Zaufaj naszej wiedzy i doświadczeniu, aby pomóc Ci w osiągnięciu niezależności energetycznej i zminimalizowaniu emisji CO2.'
				/>
				<meta
					name='keywords'
					content='Fotowoltaika, Pompy ciepła, Ogrzewanie, Opole, Opolskie, Klimatyzacja '
				/>
				<meta name='author' content='nestcore.pl' />
			</Head>
			<Nav />
			<main>
				<Component {...pageProps} />
			</main>
			<Footer />
		</>
	);
}
