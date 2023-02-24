import React from 'react';
import styles from './navButton.module.scss';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import homeIcon from '../../resources/home.svg';
import historyIcon from '../../resources/history.svg';
import decorationIcon from '../../resources/decoration.svg';
import communityIcon from '../../resources/community.svg';

type navButtonType = {
  name: string;
};

export default function NavButton({ name }: navButtonType) {
  // const { nav } = useParams();
  const location = useLocation();
  const path = location.pathname;
  const buttonUrl = path.substring(path.lastIndexOf('/') + 1);

  const style =
    buttonUrl === name
      ? { backgroundColor: 'gray' }
      : { backgroundColor: 'white' };

  const navigate = useNavigate();

  const handleNav = () => {
    // e.preventDefault();
    if (name === 'decoration' || name === 'community') {
      toast('Under development');
    } else {
      navigate(`/${name}`);
    }
  };

  let icon = '';
  switch (name) {
    case 'main':
      icon = homeIcon;
      break;
    case 'history':
      icon = historyIcon;
      break;
    case 'decoration':
      icon = decorationIcon;
      break;
    case 'community':
      icon = communityIcon;
      break;
  }

  return (
    <div className={styles.container} style={style}>
      {/* <button className={styles.button} onClick={handleNav}>
        {name}
      </button> */}
      <img
        className={styles.img}
        src={icon}
        onClick={handleNav}
        style={style}
      ></img>
    </div>
  );
}
