import React from 'react';
import styles from './navButton.module.scss';

type navButtonType = {
  name: string;
};

export default function NavButton({ name }: navButtonType) {
  return <button className={styles.button}>{name}</button>;
}
