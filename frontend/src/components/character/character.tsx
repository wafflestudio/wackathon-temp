import React, { useEffect } from 'react';
import styles from './character.module.scss';
import { useStatusContext } from '../../context/statusContext';
import { useParams } from 'react-router-dom';
import waffleBasic from '../../resources/waffle_basic.gif';
import waffleDirty from '../../resources/waffle_dirty.gif';
import waffleDry from '../../resources/waffle_dry.gif';
import waffleFeedB from '../../resources/waffle_feed_b.gif';
import waffleHungry from '../../resources/waffle_hungry.gif';
import waffleSick from '../../resources/waffle_sick.gif';
import waffleBasicB from '../../resources/waffle_basic_back.gif';
import dayjs from 'dayjs';

export default function Character() {
  //여기서 useEffect로 character의 state 갱신해주는게 좋을듯?
  const { user } = useStatusContext();
  const { previousUserRef, status, detailStatus } = useStatusContext();
  const { userId } = useParams();

  const { characterImg, setCharacterImg } = useStatusContext();

  useEffect(() => {
    let date = dayjs(status?.lastUserAction.createdAt);
    let now = dayjs();
    date = date.add(9, 'hour');
    const secondDiff = now.diff(date, 'second');

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
      //가장 최근의 유저 아이디와 현재 접속한 사람이 다를 경우
      if (previousUserRef.current?.lastUserAction.userId !== user) {
        setCharacterImg(waffleFeedB);
        setTimeout(() => {
          setCharacterImg(waffleBasicB);
        }, 5000);
      } else setCharacterImg(waffleBasicB);
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
