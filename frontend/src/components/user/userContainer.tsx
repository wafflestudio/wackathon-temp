import React from 'react';
import User from './user';
import UserInfo from './userInfo';
import styles from './userContainer.module.scss';

export default function UserContainer() {
  return (
    <div className={styles.container}>
      <UserInfo></UserInfo>
      <User></User>
    </div>
  );
}
