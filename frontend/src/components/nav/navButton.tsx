import React from 'react';
import styles from './navButton.module.scss';
import { Link, useNavigate } from 'react-router-dom';

type navButtonType = {
  name: string;
};

export default function NavButton({ name }: navButtonType) {
  const navigate = useNavigate();

  const handleNav = () => {
    navigate(`/${name}`);
  };

  return (
    <button className={styles.button} onClick={handleNav}>
      {name}
    </button>
  );
}
