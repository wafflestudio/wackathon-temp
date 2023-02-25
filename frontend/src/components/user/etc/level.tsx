import React from 'react';
import styles from './level.module.scss';
import level1 from '../../../resources/level1.svg';
import level2 from '../../../resources/level2.svg';
import { useSearchParams } from 'react-router-dom';
import { useStatusContext } from '../../../context/statusContext';

export default function Level() {
  const { status } = useStatusContext();
  console.log(status?.waffle.level);

  return <img className={styles.img} src={level1}></img>;
}
