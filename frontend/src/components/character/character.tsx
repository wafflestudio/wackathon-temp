import React, { useEffect } from 'react';
import styles from './character.module.scss';
import { useStatusContext } from '../../context/statusContext';
import { useParams } from 'react-router-dom';
import waffleBasic from '../../resources/waffle_basic.gif';
import waffleDirty from '../../resources/waffle_dirty.gif';
import waffleDry from '../../resources/waffle_dry.gif';
import waffleFeed from '../../resources/waffle_feed_f.gif';
import waffleHungry from '../../resources/waffle_hungry.gif';
import waffleSick from '../../resources/waffle_sick.gif';
import waffleBasicB from '../../resources/waffle_basic_back.gif';

export default function Character() {
  //여기서 useEffect로 character의 state 갱신해주는게 좋을듯?
  const { user } = useStatusContext();
  const { detailStatus } = useStatusContext();
  const { userId } = useParams();

  const { characterImg, setCharacterImg } = useStatusContext();

  useEffect(() => {
    if (user === Number(userId)) {
      if (detailStatus) {
        if (detailStatus?.health <= 30) {
          setCharacterImg(waffleSick);
          console.log('sick');
        } else if (detailStatus?.cleanliness <= 30) {
          console.log('dirty');
          setCharacterImg(waffleDirty);
        } else if (detailStatus?.hungry <= 30) {
          console.log('hungry');
          setCharacterImg(waffleHungry);
        } else if (detailStatus?.thirsty <= 30) {
          console.log('thirsty');
          setCharacterImg(waffleDry);
        }
      }
    } else if (user !== Number(userId)) {
      setCharacterImg(waffleBasicB);
    }
  }, [
    detailStatus?.cleanliness,
    detailStatus?.health,
    detailStatus?.hungry,
    detailStatus?.thirsty,
    user,
  ]);

  // icon = waffleHungry;
  return (
    <div className={styles.container}>
      <img src={characterImg}></img>
    </div>
  );
}
