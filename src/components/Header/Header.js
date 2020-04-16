import React from 'react';
import logo from './logo.png';
import styles from './Header.module.scss';

const Header = () => (
  <div className={styles.Header}>
    <img src={logo} className={styles.logo} alt="logo" />
    <h1>Nord Software</h1>
  </div>
);

export default Header;
