import React, { useState } from 'react';
import { StatusType } from '../../lib/types';
import styles from './status.module.scss';

type ItemType = {
  item: StatusType;
};

export default function Status({ item }: ItemType) {
  const [position, setPosition] = useState<number>(0);

  return (
    <div className={styles.container}>
      {/* <div className={styles.name}>{item.name}</div> */}
      <div className={styles.total}></div>
      <div className={styles.current} style={{ left: `${position}px` }}>
        {item.name}
      </div>
    </div>
  );
}
