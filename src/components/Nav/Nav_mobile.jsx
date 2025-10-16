import classes from "./Nav.module.scss";
import Link from "next/link";
import Hamburger from "./Hamburger";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import logo from "@/assets/images/SpeedLightLogoMobile.svg";
const Nav_mobile = () => {
  const [isActive, setIsActive] = useState(false);
  const toggleNav = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <div className={classes.nav_container}>
        <div className={classes.nav_logo}>
          <Link href="/">
            <Image src={logo} alt="Logo Speed Light Energy" width={200} />
          </Link>
        </div>
        <Hamburger onClick={toggleNav} isActive={isActive} />
        <AnimatePresence>
          {isActive && (
            <motion.nav
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className={classes.nav_mobile}
            >
              <ul className={classes.nav_mobile__links}>
                <li className={classes.nav_mobile__link}>
                  <Link onClick={toggleNav} href="/">
                    Strona główna
                  </Link>
                </li>
                <li className={classes.nav_mobile__link}>
                  <Link onClick={toggleNav} href="/fotowoltaika">
                    Fotowoltaika
                  </Link>
                </li>
                <li className={classes.nav_mobile__link}>
                  <Link onClick={toggleNav} href="/pompy_ciepla">
                    Pompy Ciepła
                  </Link>
                </li>
                <li className={classes.nav_mobile__link}>
                  <Link onClick={toggleNav} href="/magazyn_energii">
                    Magazyny Energii
                  </Link>
                </li>
                <li className={classes.nav_mobile__link}>
                  <Link onClick={toggleNav} href="/klimatyzacja">
                    Klimatyzacja
                  </Link>
                </li>
                <li className={classes.nav_mobile__link}>
                  <Link onClick={toggleNav} href="/instalacje_elektryczne">
                    Instalacje elektryczne
                  </Link>
                </li>
                <li className={classes.nav_mobile__link}>
                  <Link onClick={toggleNav} href="/awarie_elektryczne">
                    Awarie elektryczne
                  </Link>
                </li>
                <li className={classes.nav_mobile__link}>
                  <Link onClick={toggleNav} href="/naprawa_dachow">
                    Naprawa Dachów
                  </Link>
                </li>
                <li className={classes.nav_mobile__link}>
                  <Link onClick={toggleNav} href="/galeria">
                    Galeria
                  </Link>
                </li>

                <li className={classes.nav_mobile__link}>
                  <Link onClick={toggleNav} href="/kontakt">
                    Kontakt
                  </Link>
                </li>
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};
export default Nav_mobile;
