import React from 'react';
import styles from './actionButton.module.scss';
import { useLocation } from 'react-router-dom';
import { useStatusContext } from '../../context/statusContext';
import feedIcon from '../../resources/feed.svg';
import milkIcon from '../../resources/milk.svg';
import batheIcon from '../../resources/bathe.svg';
import pillIcon from '../../resources/pill.svg';

type ActionButtonType = {
  name: string;
};

export default function ActionButton({ name }: ActionButtonType) {
  const location = useLocation();
  const currentPath = location.pathname;

  const { doAction } = useStatusContext();

  const action = () => {
    doAction(name, 1, 1);
  };
  const color = 'gray';
  const status = `${40}%`;
  let icon = '';
  switch (name) {
    case 'FEED':
      icon = feedIcon;
      break;
    case 'MILK':
      icon = milkIcon;
      break;
    case 'BATHE':
      icon = batheIcon;
      break;
    case 'CURE':
      icon = pillIcon;
      break;
  }

  return (
    <img
      className={styles.img}
      src={icon}
      onClick={action}
      style={{
        background: `linear-gradient(to top, ${color} ${status}, transparent 50%)`,
        objectFit: 'cover',
        overflow: 'hidden',
        borderRadius: '10px',
      }}
    ></img>
  );
}
