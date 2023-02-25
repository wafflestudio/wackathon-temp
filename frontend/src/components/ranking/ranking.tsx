import React from 'react';
import { RankingType } from '../../lib/types';
import styles from './ranking.module.scss';
import profile from '../../resources/profile.svg';

type RankingComponentType = {
  index: number;
  detail: RankingType;
};

export default function Ranking({ detail, index }: RankingComponentType) {
  let color = 'gray';
  if (index === 0) {
    color = '#D46286';
  } else if (index === 1) {
    color = '#6CBE8E';
  }

  return (
    <div className={styles.container}>
      <img src={profile} className={styles.img}></img>
      <div className={styles.name}>{detail.username}</div>
      <div
        className={styles.contribute}
        style={{
          width: `${detail.contribution * 100}%`,
          backgroundColor: `${color}`,
        }}
      ></div>
    </div>
  );
}
