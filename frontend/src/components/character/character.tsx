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
import waffleBack from '../../resources/waffle_basic_turningback.png';
import waffleBackWash from '../../resources/wash_back.gif';
import dayjs from 'dayjs';

export default function Character() {
  //여기서 useEffect로 character의 state 갱신해주는게 좋을듯?
  const { user } = useStatusContext();
  const { previousUserRef, status, detailStatus, setPollRunning } =
    useStatusContext();
  const { userId } = useParams();

  const { characterImg, setCharacterImg } = useStatusContext();

  useEffect(() => {
    if (user) {
      if (user === Number(userId)) {
        if (detailStatus) {
          if (detailStatus?.health < 30) {
            setCharacterImg(waffleSick);
            console.log('sick');
          } else if (detailStatus?.cleanliness < 30) {
            console.log('dirty');
            setCharacterImg(waffleDirty);
          } else if (detailStatus?.hungry < 30) {
            console.log('hungry');
            setCharacterImg(waffleHungry);
          } else if (detailStatus?.thirsty < 30) {
            console.log('thirsty');
            setCharacterImg(waffleDry);
          } else {
            setCharacterImg(waffleBasic);
          }
        }
      } else if (user !== Number(userId)) {
        //가장 최근의 유저 아이디와 현재 접속한 사람이 다를 경우
        console.log(previousUserRef.current);
        if (previousUserRef.current?.lastUserAction.userId !== user) {
          console.log(previousUserRef.current?.lastUserAction);
          if (previousUserRef.current?.lastUserAction.action === 'BATHE') {
            setCharacterImg(waffleBackWash);
            setPollRunning(false);
            setTimeout(() => {
              setCharacterImg(waffleBasicB);
              setPollRunning(true);
            }, 5000);
          } else {
            setCharacterImg(waffleFeedB);
            setPollRunning(false);
            setTimeout(() => {
              setCharacterImg(waffleBasicB);
              setPollRunning(true);
            }, 5000);
          }
        } else setCharacterImg(waffleBasicB);
      }
    }
  }, [
    detailStatus?.cleanliness,
    detailStatus?.health,
    detailStatus?.hungry,
    detailStatus?.thirsty,
    user,
  ]);

  const lookBack = () => {
    if (characterImg === waffleBasicB) {
      setCharacterImg(waffleBack);
      setPollRunning(false);
      setTimeout(() => {
        setPollRunning(true);
        setCharacterImg(waffleBasicB);
      }, 1000);
    }
  };

  // icon = waffleHungry;
  return (
    <div className={styles.container}>
      <img src={characterImg} onClick={lookBack}></img>
    </div>
  );
}
