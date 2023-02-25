import React, { useState } from 'react';
import styles from './historyButton.module.scss';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import historyBox from '../../resources/historyBox.svg';

type HistoryButtonComponentType = {
  openModal: () => void;
};

export default function HistoryButton({
  openModal,
}: HistoryButtonComponentType) {
  return (
    <div className={styles.container}>
      <div className={styles.text} onClick={openModal}>
        History
      </div>
      <img src={historyBox} onClick={openModal}></img>
      {/* <button className={styles.button} onClick={openModal}>
        History
      </button> */}
    </div>
  );
}
