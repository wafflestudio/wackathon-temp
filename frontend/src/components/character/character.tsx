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

  console.log(status?.waffle.status.hungry + 'hungry');

  let icon = '';
  if (user === Number(userId)) {
    //status에 따라 분기처리
    icon = waffleBasic;
  } else {
    icon = waffleDirty;
  }
  //if userid !== user back으로 설정
  //  if(status == hungry)
  // icon = hungryIcon
  //  if(status == thirsty)

  //else if userid === user
  // if status == hungry
  return (
    <div className={styles.container}>
      <img src={icon}></img>
    </div>
  );
}
