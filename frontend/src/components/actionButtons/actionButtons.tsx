import React from 'react';
import styles from './actionButtons.module.scss';
import ActionButton from './actionButton';

const activeButtons = ['FEED', 'WATER', 'BATHE', 'CURE'];

export default function ActionButtons() {
  return (
    <div className={styles.container}>
      {activeButtons.map((item, idx) => {
        return <ActionButton key={idx} name={item}></ActionButton>;
      })}
    </div>
  );
}
