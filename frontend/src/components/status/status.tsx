import React, { useState } from 'react';
import { StatusType } from '../../lib/types';
import styles from './status.module.scss';

type ItemType = {
  item: StatusType;
};

export default function Status({ item }: ItemType) {
  return (
    <div className={styles.container}>
      {/* <div className={styles.name}>{item.name}</div> */}
      <div className={styles.total}></div>
      <div className={styles.current}>{item.name}</div>
    </div>
  );
}
