import React from 'react';
import styles from './actionButton.module.scss';

type ActionButtonType = {
  name: string;
};

export default function ActionButton({ name }: ActionButtonType) {
  const action = () => {
    console.log(name);
  };

  const status = `${40}%`;

  return (
    <button
      className={styles.button}
      onClick={action}
      style={{
        background: `linear-gradient(to top, gray ${status}, transparent 50%)`,
      }}
    >
      {name}
    </button>
  );
}
