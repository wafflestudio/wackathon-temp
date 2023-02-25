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
  const { userId } = useParams();
  const location = useLocation();
  const path = location.pathname;
  const buttonUrl = path.split('/')[1];

  const style =
    buttonUrl === name
      ? { backgroundColor: '#9B9B9B' }
      : { backgroundColor: 'white' };

  const navigate = useNavigate();

  const handleNav = () => {
    // e.preventDefault();
    if (name === 'decoration' || name === 'community') {
      toast.warn('국민93770200501153 10,000 송금 요함');
    } else {
      navigate(`/${name}/${userId}`);
    }
  };
  let menu = '';
  let icon = '';
  switch (name) {
    case 'main':
      icon = homeIcon;
      menu = '홈';
      break;
    case 'history':
      icon = historyIcon;
      menu = '기여도';
      break;
    case 'decoration':
      icon = decorationIcon;
      menu = '꾸미기';
      break;
    case 'community':
      icon = communityIcon;
      menu = '커뮤니티';
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
      <div className={styles.text}>{menu}</div>
    </div>
  );
}
