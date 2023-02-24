import React from 'react';
import styles from './character.module.scss';
import { useStatusContext } from '../../context/statusContext';
import { useParams } from 'react-router-dom';
export default function Character() {
  //여기서 useEffect로 character의 state 갱신해주는게 좋을듯?
  const { user } = useStatusContext();
  const { userId } = useParams();

  console.log(user === Number(userId));
  //let icon = ''
  //if userid !== user back으로 설정
  //  if(status == hungry)
  // icon = hungryIcon
  //  if(status == thirsty)

  //else if userid === user
  // if status == hungry
  return (
    <div className={styles.container}>
      <div className={styles.character}>character</div>
    </div>
  );
}
