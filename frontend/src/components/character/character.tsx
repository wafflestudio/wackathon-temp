import React from 'react';
import styles from './character.module.scss';
export default function Character() {
  //여기서 useEffect로 character의 state 갱신해주는게 좋을듯?

  return (
    <div className={styles.container}>
      <div className={styles.character}>character</div>
    </div>
  );
}
