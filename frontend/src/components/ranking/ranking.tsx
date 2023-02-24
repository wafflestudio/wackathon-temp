import React from 'react';
import { RankingType } from '../../lib/types';
import styles from './ranking.module.scss';

type RankingComponentType = {
  detail: RankingType;
};

export default function Ranking({ detail }: RankingComponentType) {
  console.log(detail);
  return (
    <div className={styles.container}>
      <div className={styles.name}>{detail.username}</div>
      <div
        className={styles.contribute}
        style={{ width: `${detail.contribution * 100}%` }}
      ></div>
    </div>
  );
}
