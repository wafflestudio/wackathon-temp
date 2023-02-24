import React, { useState } from 'react';
import styles from './rankings.module.scss';
import Ranking from './ranking';
import { RankingType } from '../../lib/types';

const initialOwners: RankingType[] = [
  {
    userName: '엄마',
    contribute: 80,
  },
  {
    userName: '아빠',
    contribute: 90,
  },
  { userName: 'papa', contribute: 10 },
  { userName: 'akak', contribute: 10 },
];

export default function Rankings() {
  const [owners, setOwners] = useState<RankingType[]>(initialOwners);

  return (
    <div className={styles.container}>
      <div className={styles.title}>Ranking</div>
      <div className={styles.rankingContainer}>
        {owners.map((item) => {
          return <Ranking key={item.userName} detail={item}></Ranking>;
        })}
      </div>
    </div>
  );
}
