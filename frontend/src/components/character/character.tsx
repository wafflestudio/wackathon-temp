import React from 'react';
import styles from './character.module.scss';
import { useStatusContext } from '../../context/statusContext';
import { useParams } from 'react-router-dom';
import waffleBasic from '../../resources/waffle_basic.gif';
import waffleDirty from '../../resources/waffle_dirty.gif';
import waffleDry from '../../resources/waffle_dry.gif';
import waffleFeed from '../../resources/waffle_feed_f.gif';
import waffleHungry from '../../resources/waffle_hungry.gif';
import waffleSick from '../../resources/waffle_sick.gif';

export default function Character() {
  //여기서 useEffect로 character의 state 갱신해주는게 좋을듯?
  const { user } = useStatusContext();
  const { status } = useStatusContext();
  const { userId } = useParams();

  const { characterImg, setCharacterImg } = useStatusContext();
  // let icon = waffleBasic;
  if (user === Number(userId)) {
    if (status?.waffle.status.health && status?.waffle.status.health <= 30) {
      setCharacterImg(waffleSick);
      console.log('sick');
    } else if (
      status?.waffle.status.cleanliness &&
      status?.waffle.status.cleanliness <= 30
    ) {
      console.log('dirty');
      setCharacterImg(waffleDirty);
    } else if (
      status?.waffle.status.hungry &&
      status?.waffle.status.hungry <= 30
    ) {
      console.log('hungry');
      setCharacterImg(waffleHungry);
    } else if (
      status?.waffle.status.thirsty &&
      status?.waffle.status.thirsty <= 30
    ) {
      console.log('thirsty');
      setCharacterImg(waffleDry);
    }
  } else if (user !== Number(userId)) {
    //기본 뒷모습 여기 삽입.
    // setCharacterImg(waffleBasic);
  }
  // icon = waffleHungry;
  return (
    <div className={styles.container}>
      <img src={characterImg}></img>
    </div>
  );
}
