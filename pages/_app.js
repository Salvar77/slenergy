import Footer from '@/components/Footer/Footer';
import '/styles/globals.scss';
import Nav from '@/components/Nav/Nav';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>SL Energy</title>
				<meta
					name='viewport'
					content='width=device-width,height=device-height , initial-scale=1'
				/>

				<link rel='canonical' href='https://www.nestcore.pl' />
			</Head>
			<Nav />
			<main>
				<Component {...pageProps} />
			</main>
			<Footer />
		</>
	);
}
