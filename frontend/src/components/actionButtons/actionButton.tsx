import React, { useEffect, useRef } from 'react';
import styles from './actionButton.module.scss';
import { useLocation, useParams } from 'react-router-dom';
import { useStatusContext } from '../../context/statusContext';
import feedIcon from '../../resources/feed.svg';
import milkIcon from '../../resources/milk.svg';
import batheIcon from '../../resources/bathe.svg';
import pillIcon from '../../resources/pill.svg';
import feedActionF from '../../resources/waffle_feed_f.gif';
import waterActionF from '../../resources/waffle_water_f.gif';
import washActionF from '../../resources/wash_cropped.gif';
import cureActionF from '../../resources/cure_5s.gif';
import waffleBasic from '../../resources/waffle_basic.gif';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type ActionButtonType = {
  name: string;
};

export default function ActionButton({ name }: ActionButtonType) {
  const { userId } = useParams();
  // const location = useLocation();
  // const currentPath = location.pathname; 일단 안씀
  const { characterImg, setCharacterImg, setPollRunning } = useStatusContext();

  const { status } = useStatusContext();

  const { doPoll, doAction } = useStatusContext();

  useEffect(() => {
    (async function () {
      doPoll();
    })();
  }, []);

  let actionIcon = '';
  let newAction = '';
  let newName = '';
  let icon = '';
  let message = '';
  switch (name) {
    case 'FEED':
      icon = feedIcon;
      newName = 'hungry';
      newAction = '밥 주기';
      actionIcon = feedActionF;
      message = '배불러!';
      break;
    case 'WATER':
      icon = milkIcon;
      newName = 'thirsty';
      newAction = '우유 주기';
      actionIcon = waterActionF;
      message = '목 안말라!';
      break;
    case 'BATHE':
      icon = batheIcon;
      newName = 'cleanliness';
      newAction = '씻기기';
      actionIcon = washActionF;
      message = '아직 뽀송뽀송해!';
      break;
    case 'CURE':
      icon = pillIcon;
      newName = 'health';
      newAction = '약 주기';
      actionIcon = cureActionF;
      message = '나 건강해!';
      break;
  }

  const previousCharacterImg = useRef(characterImg);

  const statusNumber = status?.waffle.status[newName] ?? 0;
  let color = '';
  switch (true) {
    case statusNumber >= 70:
      color = '#7CFFA0';
      break;
    case statusNumber >= 30:
      color = '#FCFF7C';
      break;
    case statusNumber >= 0:
      color = '#FF7C93';
      break;
  }

  const action = () => {
    if (statusNumber >= 30) {
      toast.warn(message, {
        pauseOnHover: false,
        autoClose: 3000,
      });
      return;
    }
    doAction(name, Number(userId), 1);
    previousCharacterImg.current = characterImg;
    setPollRunning(false);
    setCharacterImg(actionIcon);
    setTimeout(() => {
      setPollRunning(true);
      setCharacterImg(waffleBasic);
    }, 5000);
  };

  return (
    <div className={styles.container}>
      <img
        className={styles.img}
        src={icon}
        onClick={action}
        style={{
          background: `linear-gradient(to top, ${color} ${
            statusNumber ? statusNumber : 0
          }%, transparent 10%)`,
          objectFit: 'cover',
          overflow: 'hidden',
          borderRadius: '10px',
        }}
      ></img>
      <div className={styles.text}>{newAction}</div>
      <ToastContainer></ToastContainer>
    </div>
  );
}
