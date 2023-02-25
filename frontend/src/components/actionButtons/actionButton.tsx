import React, { useEffect } from 'react';
import styles from './actionButton.module.scss';
import { useLocation, useParams } from 'react-router-dom';
import { useStatusContext } from '../../context/statusContext';
import feedIcon from '../../resources/feed.svg';
import milkIcon from '../../resources/milk.svg';
import batheIcon from '../../resources/bathe.svg';
import pillIcon from '../../resources/pill.svg';
import feedActionF from '../../resources/waffle_feed_f.gif';
import waterActionF from '../../resources/waffle_water_f.gif';
import washActionF from '../../resources/waffle_wash_f.gif';
import cureActionF from '../../resources/waffle_cure_f.gif';
import waffleBasic from '../../resources/waffle_basic.gif';

type ActionButtonType = {
  name: string;
};

export default function ActionButton({ name }: ActionButtonType) {
  const { userId } = useParams();
  // const location = useLocation();
  // const currentPath = location.pathname; 일단 안씀
  const { characterImg, setCharacterImg } = useStatusContext();

  const { status } = useStatusContext();

  const { doPoll, doAction } = useStatusContext();

  useEffect(() => {
    (async function () {
      doPoll();
    })();
  }, []);

  let actionIcon = '';
  let newAction = '';
  let newName = '';
  let icon = '';
  switch (name) {
    case 'FEED':
      icon = feedIcon;
      newName = 'hungry';
      newAction = '밥 주기';
      actionIcon = feedActionF;
      break;
    case 'WATER':
      icon = milkIcon;
      newName = 'thirsty';
      newAction = '우유 주기';
      actionIcon = waterActionF;
      break;
    case 'BATHE':
      icon = batheIcon;
      newName = 'cleanliness';
      newAction = '씻기기';
      actionIcon = washActionF;
      break;
    case 'CURE':
      icon = pillIcon;
      newName = 'health';
      newAction = '약 주기';
      actionIcon = cureActionF;
      break;
  }

  const action = () => {
    doAction(name, Number(userId), 1);
    setCharacterImg(actionIcon);
    setTimeout(() => {
      setCharacterImg(waffleBasic);
    }, 5000);
  };

  const statusNumber = status?.waffle.status[newName] ?? 0;
  let color = '';
  switch (true) {
    case statusNumber >= 70:
      color = 'green';
      break;
    case statusNumber >= 30:
      color = 'yellow';
      break;
    case statusNumber >= 0:
      color = 'red';
      break;
  }

  return (
    <div className={styles.container}>
      <img
        className={styles.img}
        src={icon}
        onClick={action}
        style={{
          background: `linear-gradient(to top, ${color} ${
            statusNumber ? statusNumber : 0
          }%, transparent 50%)`,
          objectFit: 'cover',
          overflow: 'hidden',
          borderRadius: '10px',
        }}
      ></img>
      {newAction}
    </div>
  );
}
