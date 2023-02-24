import React from 'react';
import styles from './money.module.scss';
import money from '../../../resources/money.svg';

export default function Money() {
  return (
    <div className={styles.container}>
      <img src={money}></img>
      money
    </div>
  );
}
