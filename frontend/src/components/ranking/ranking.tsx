import React from 'react';
import { RankingType } from '../../lib/types';
import styles from './ranking.module.scss';
import profile from '../../resources/profile.svg';

type RankingComponentType = {
  index: number;
  detail: RankingType;
};

export default function Ranking({ detail }: RankingComponentType) {
  return (
    <div className={styles.container}>
      <img src={profile} className={styles.img}></img>
      <div className={styles.name}>{detail.username}</div>
      <div
        className={styles.contribute}
        style={{ width: `${detail.contribution * 100}%` }}
      ></div>
    </div>
  );
}
