import React, { useState } from 'react';
import Status from './status';
import { StatusType } from '../../lib/types';
import styles from './statusContainer.module.scss';

const initialStatus: StatusType[] = [
  {
    name: 'hungry',
    status: 0,
  },
  {
    name: 'thirsty',
    status: 0,
  },
  {
    name: 'clean',
    status: 0,
  },
  {
    name: 'health',
    status: 0,
  },
];

export default function StatusContainer() {
  const [status, setStatus] = useState<StatusType[]>(initialStatus);

  //status.map
  return (
    <div className={styles.container}>
      {status.map((item) => {
        return <Status key={item.name} item={item}></Status>;
      })}
    </div>
  );
}
