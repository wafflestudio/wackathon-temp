import React from 'react';
import styles from './navButton.module.scss';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type navButtonType = {
  name: string;
};

export default function NavButton({ name }: navButtonType) {
  const { nav } = useParams();

  const navigate = useNavigate();

  const handleNav = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (name === 'decoration' || name === 'community') {
      toast('Under development');
    } else {
      navigate(`/${name}`);
    }
  };

  return (
    <>
      <button className={styles.button} onClick={handleNav}>
        {name}
      </button>
    </>
  );
}
