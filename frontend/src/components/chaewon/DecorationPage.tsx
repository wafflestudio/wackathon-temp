import React from 'react';
import Decolist from '../../resources/decolist.png';
import DecoratedWaffle from '../../resources/decoratedwaffle.gif';

import PageTemplate from '../pageTemplate';
import styles from './DecorationPage.module.scss';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function DecorationPage() {
  const message = () => {
    toast.warn('데코 기능 사용을 위해선 국민93770200501153');
  };
  return (
    <PageTemplate>
      <div className={styles.wrapper}>
        <div className={styles.imgWrapper}>
          <img src={DecoratedWaffle} alt=''></img>
        </div>
        <div className={styles.listWrapper}>
          <img src={Decolist} alt='' onClick={message}></img>
        </div>
      </div>
      <ToastContainer />
    </PageTemplate>
  );
}
