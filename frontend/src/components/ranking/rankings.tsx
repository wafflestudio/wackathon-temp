import React, { useState } from 'react';
import styles from './rankings.module.scss';
import Ranking from './ranking';
import { RankingType } from '../../lib/types';

const initialOwners: RankingType[] = [
  {
    username: '엄마',
    contribution: 0,
  },
  {
    username: '아빠',
    contribution: 0,
  },
];

type RankingComponentType = {
  ranking: RankingType[] | undefined;
};

export default function Rankings({ ranking }: RankingComponentType) {
  // const [owners, setOwners] = useState<RankingType[]>(initialOwners);

  return (
    <div className={styles.container}>
      <div className={styles.title}>Ranking</div>
      <div className={styles.rankingContainer}>
        {ranking &&
          ranking.map((item, idx) => {
            return (
              <Ranking key={item.username} detail={item} index={idx}></Ranking>
            );
          })}
      </div>
    </div>
  );
}
