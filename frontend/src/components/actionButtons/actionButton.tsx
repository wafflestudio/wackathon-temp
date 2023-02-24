import React from 'react';
import styles from './actionButton.module.scss';

type ActionButtonType = {
  name: string;
};

export default function ActionButton({ name }: ActionButtonType) {
  const action = () => {
    console.log(name);
  };

  return (
    <button className={styles.button} onClick={action}>
      {name}
    </button>
  );
}
