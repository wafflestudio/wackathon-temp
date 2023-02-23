import React from 'react';
import User from './user';
import styles from './userContainer.module.scss';

export default function UserContainer() {
  return (
    <div className={styles.container}>
      <User></User>
    </div>
  );
}
