import Link from "next/link";
import classes from "./Nav.module.scss";
import Image from "next/image";
import logo from "@/assets/images/SpeedLightLogo.svg";

const Nav_desktop = () => {
  return (
    <div className={classes.nav_container}>
      <div className={classes.nav_logo}>
        <Link href="/">
          <Image src={logo} alt="Logo Speed Light Energy" width={300} />'
        </Link>
      </div>
      <ul className={classes.nav_links_desktop}>
        <li className={classes.drop}>
          <span className={classes.nav_link_desktop}>Oferta</span>
          <ul className={classes.hoverMenu}>
            <li>
              <Link href="/fotowoltaika">Fotowoltaika</Link>
            </li>
            <li>
              <Link href="/pompy_ciepla">Pompy Ciepła</Link>
            </li>
            <li>
              <Link href="/magazyn_energii">Magazyny Energii</Link>
            </li>
            <li>
              <Link href="/klimatyzacja">Klimatyzacja</Link>
            </li>
            <li>
              <Link href="/instalacje_elektryczne">Instalacje elektryczne</Link>
            </li>
            <li>
              <Link href="/awarie_elektryczne">Awarie elektryczne</Link>
            </li>
            <li>
              <Link href="/naprawa_dachow">Naprawa Dachów</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link className={classes.nav_link_desktop} href="/galeria">
            Galeria
          </Link>
        </li>

        <li>
          <Link className={classes.nav_link_desktop} href="/kontakt">
            Kontakt
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Nav_desktop;
