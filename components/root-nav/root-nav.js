import React, { useState } from 'react';
import Link from 'next/link';
import styles from './root-nav.module.scss';

export const Nav = () => {
  const [open, setOpen] = useState(false);
  const handleOnClick = () => {
    setOpen((state) => !state);
  };
  return (
    <nav className={`${styles.nav} ${open ? styles.open : ''}`}>
      <div className={styles.navTab} onClick={handleOnClick}></div>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/">About Us</Link>
        </li>
        <li>
          <Link href="/">Stay</Link>
        </li>
        <li>
          <Link href="/">Grooming</Link>
        </li>
        <li>
          <Link href="/">Party</Link>
        </li>
      </ul>
    </nav>
  );
};
