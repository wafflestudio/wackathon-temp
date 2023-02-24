import React from 'react';
import styles from './history.module.scss';
import { HistoryType } from '../../lib/types';
import { getUsernameColor } from '../../lib/api';

type HistoryComponentType = {
  item: HistoryType;
};

export default function History({ item }: HistoryComponentType) {
  const color = getUsernameColor(item.userName);

  return (
    <div className={styles.container}>
      <div className={styles.profile}></div>
      <div className={styles.actionContainer}>
        <div className={styles.action}>{item.action}</div>
        <div className={styles.time}>{item.time}</div>
      </div>
      <div className={styles.userName} style={{ color: color }}>
        {item.userName}
      </div>
    </div>
  );
}
