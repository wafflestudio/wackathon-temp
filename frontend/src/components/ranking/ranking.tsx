import React from 'react';
import { RankingType } from '../../lib/types';
import styles from './ranking.module.scss';

type RankingComponentType = {
  detail: RankingType;
};

export default function Ranking({ detail }: RankingComponentType) {
  return (
    <div className={styles.container}>
      <div className={styles.name}>{detail.userName}</div>
      <div
        className={styles.contribute}
        style={{ width: `${detail.contribute * 2}px` }}
      >
        {detail.contribute}
      </div>
    </div>
  );
}
