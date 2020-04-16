import React from 'react';
import logo from './logo.png';
import styles from './Header.module.scss';

const Header = () => (
  <div className={styles.wrapper}>
    <div className={styles.title}>
      <img src={logo} className={styles.logo} alt="logo" />
      <h1>Nord Software</h1>
    </div>
  </div>
);

export default Header;
