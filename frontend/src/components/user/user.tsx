import React, { useEffect, useState } from 'react';
import styles from './user.module.scss';
import profile from '../../resources/profile.svg';
import person from '../../resources/person.png';
import { useParams } from 'react-router-dom';
import { apiGetUserInfo } from '../../lib/api';

export default function User() {
  const { userId } = useParams();
  const [username, setUsername] = useState('');
  useEffect(() => {
    (async () => {
      const res = await apiGetUserInfo(Number(userId));
      setUsername(res.data.user.username);
    })();
  });

  return (
    <div className={styles.user}>
      <img src={person} alt={person}></img>
      <img src={profile} alt={profile}></img>
      <div className={styles.username}>{username}</div>
    </div>
  );
}
