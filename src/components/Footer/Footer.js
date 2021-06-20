import React from 'react';
import PropTypes from 'prop-types';
import styles from './Footer.module.css';

const Footer = ({ casesCount }) => (<footer className={styles.wrap}>
  <div><span className={styles.item_count}>Осталось дел: {casesCount}</span></div>
  <div className={styles.button_group}>    
    <button className={styles.button}>Все</button>
    <button className={styles.button}>Активные</button>
    <button className={styles.button}>Bыполненные</button>
  </div>
  <div>
    <button className={styles.button}>Удалить выполненные</button>
  </div>
</footer>);

Footer.propTypes = {
  casesCount: PropTypes.number.isRequired
};

export default Footer;