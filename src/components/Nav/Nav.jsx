'use client';

import  { useState, useEffect } from 'react';
import classes from './Nav.module.scss';
import Nav_desktop from './Nav_desktop';
import Nav_mobile from './Nav_mobile';

const Nav = () => {
	const [width, setWidth] = useState('');
	useEffect(() => {
		setWidth(window.innerWidth);
		const handleResizeWindow = () => setWidth(window.innerWidth);
		window.addEventListener('resize', handleResizeWindow);
		return () => {
			window.removeEventListener('resize', handleResizeWindow);
		};
	}, []);

	return (
		<header >
			<nav className={classes.nav}>
				{width >= 992 ? <Nav_desktop /> : <Nav_mobile />}
			</nav>
		</header>
	);
};
export default Nav;
