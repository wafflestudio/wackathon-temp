import React from 'react';
import styles from './actionButtons.module.scss';
import ActionButton from './actionButton';

const activeButtons = ['feed', 'water', 'clean', 'medicine'];

export default function ActionButtons() {
  return (
    <div className={styles.container}>
      {activeButtons.map((item) => {
        return <ActionButton key={item} name={item}></ActionButton>;
      })}
    </div>
  );
}
