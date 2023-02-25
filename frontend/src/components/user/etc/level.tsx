import React from 'react';
import styles from './level.module.scss';
import level1 from '../../../resources/level1.svg';
import level2 from '../../../resources/level2.svg';
import { useSearchParams } from 'react-router-dom';
import { useStatusContext } from '../../../context/statusContext';
import levelBar from '../../../resources/levelbar.svg';

export default function Level() {
  const { status } = useStatusContext();
  let levelImg = '';
  let levelStatus = 0;
  if (status) {
    if (status?.waffle.level >= 2) {
      levelImg = level2;
    } else {
      levelImg = level1;
    }
  }

  if (status) {
    levelStatus = status.waffle.level - Math.floor(status.waffle.level);
  }

  return (
    <>
      <img className={styles.img} src={levelImg}></img>
      <img
        className={styles.levelImg}
        src={levelBar}
        style={{
          background: `linear-gradient(to right, #7CFFA0 ${
            levelStatus ? levelStatus * 100 : 0
          }%, transparent 10%)`,
          objectFit: 'cover',
          overflow: 'hidden',
          borderRadius: '10px',
        }}
      ></img>
    </>
  );
}
