import React from 'react';
import User from './user';
import styles from './userContainer.module.scss';
import EtcContainer from './etc/etcContainer';

export default function UserContainer() {
  return (
    <div className={styles.container}>
      <EtcContainer></EtcContainer>
      <User></User>
    </div>
  );
}
