import React from 'react';
import styles from './nav.module.scss';
import NavButton from './navButton';

const navList = ['main', 'history', 'decoration', 'community'];

export default function Nav() {
  return (
    <div className={styles.container}>
      {navList.map((item) => {
        return <NavButton key={item} name={item}></NavButton>;
      })}
    </div>
  );
}
