import React, { useState } from 'react';
import { StatusType } from '../../lib/types';
import styles from './status.module.scss';

type ItemType = {
  item: StatusType;
};

export default function Status({ item }: ItemType) {
  const dynamicLeft = 80;

  return (
    <div className={styles.container}>
      {/* <div className={styles.name}>{item.name}</div> */}
      <div className={styles.total}></div>
      <div className={styles.current} style={{ left: `${dynamicLeft}px` }}>
        {item.name}
      </div>
    </div>
  );
}
