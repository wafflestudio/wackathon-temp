import React from 'react';
import styles from './history.module.scss';
import { HistoryType } from '../../lib/types';
import { getUsernameColor } from '../../lib/api';
import dayjs from 'dayjs';
import feedIcon from '../../resources/buttor.svg';
import waterIcon from '../../resources/water-hanbangol.svg';
import bubbleIcon from '../../resources/bubble.svg';
import hospitalIcon from '../../resources/hospital.svg';

type HistoryComponentType = {
  item: HistoryType;
};

export default function History({ item }: HistoryComponentType) {
  const color = getUsernameColor(item.username);

  const date = dayjs(item.createdAt).format('YYYY-MM-DD HH:mm ');

  let newAction = '';
  let icon = '';
  switch (item.action) {
    case 'FEED':
      icon = feedIcon;
      newAction = '밥 주기';
      break;
    case 'WATER':
      icon = waterIcon;
      newAction = '물 주기';
      break;
    case 'BATHE':
      icon = bubbleIcon;
      newAction = '씻기기';
      break;
    case 'CURE':
      icon = hospitalIcon;
      newAction = '약 주기';
      break;
  }

  return (
    <div className={styles.container}>
      <img src={icon} className={styles.img}></img>
      <div className={styles.actionContainer}>
        <div className={styles.action}>{newAction}</div>
        <div className={styles.time}>{date}</div>
      </div>
      <div className={styles.userName} style={{ color: color }}>
        {item.username}
      </div>
    </div>
  );
}
