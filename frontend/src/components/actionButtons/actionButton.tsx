import React from 'react';
import styles from './actionButton.module.scss';

type ActionButtonType = {
  name: string;
};

export default function ActionButton({ name }: ActionButtonType) {
  return <button className={styles.button}>{name}</button>;
}
