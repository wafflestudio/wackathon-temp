import React from 'react';
import styles from './user.module.scss';
import profile from '../../resources/profile.svg';

export default function User() {
  return (
    <div className={styles.user}>
      <img src={profile}></img>
    </div>
  );
}
