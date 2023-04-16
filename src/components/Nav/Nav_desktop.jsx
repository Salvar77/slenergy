import Link from 'next/link';
import classes from './Nav.module.scss';
import Image from 'next/image';
import logo from '@/assets/images/SpeedLightLogo.svg';

const Nav_desktop = () => {
	return (
		<div className={classes.nav_container}>
			<div className={classes.nav_logo}>
				<Link href='/'>
					<Image src={logo} alt='logo' width={300}  />'
				</Link>
			</div>
			<ul className={classes.nav_links_desktop}>
				<li>
					<Link className={classes.nav_link_desktop} href='/'>
					
						Strona główna
					</Link>
				</li>
				<li className={classes.drop}>
					<span className={classes.nav_link_desktop} href='/Oferta'>
						Oferta
					</span>
					<ul className={classes.hoverMenu}>
						<li>
							<Link href='/fotowoltaika'>Fotowoltaika</Link>
						</li>
						<li>
							<Link href='/pompy_ciepla'>Pompy Ciepła</Link>
						</li>
						<li>
							<Link href='/magazyn_energii'>Magazyny Energii</Link>
						</li>
					</ul>
				</li>
				<li>
					<Link className={classes.nav_link_desktop} href='/galeria'>
						Galeria
					</Link>
				</li>
				<li className={classes.drop}>
					<span className={classes.nav_link_desktop}>Dotacje</span>
					<ul className={classes.hoverMenu}>
						<li>
							<Link href='/moj_prad'> Mój Prąd</Link>
						</li>
						<li>
							<Link href='/moje_cieplo'>Energia Sprawiedliwa</Link>
						</li>
				
					</ul>
				</li>

				<li>
					<Link className={classes.nav_link_desktop} href='/kontakt'>
						Kontakt
					</Link>
				</li>
			</ul>
		</div>
	);
};
export default Nav_desktop;
