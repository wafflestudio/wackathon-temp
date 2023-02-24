import React from 'react';
import styles from './historyButton.module.scss';

export default function HistoryButton() {
  return (
    <div className={styles.container}>
      <button className={styles.button}>History</button>
    </div>
  );
}
