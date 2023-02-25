import React from 'react';
import styles from './money.module.scss';
import money from '../../../resources/money.svg';

export default function Money() {
  return (
    <div className={styles.container}>
      <img src={money}></img>
      <div className={styles.text}>1,000</div>
    </div>
  );
}
