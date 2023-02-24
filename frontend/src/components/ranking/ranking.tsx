import React from 'react';
import { RankingType } from '../../lib/types';
import styles from './ranking.module.scss';
type RankingComponentType = {
  detail: RankingType;
};

export default function Ranking({ detail }: RankingComponentType) {
  return (
    <div>
      {detail.userName}
      {detail.contribute}
    </div>
  );
}
