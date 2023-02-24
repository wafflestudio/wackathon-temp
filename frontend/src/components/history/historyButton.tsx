import React, { useState } from 'react';
import styles from './historyButton.module.scss';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

type HistoryButtonComponentType = {
  openModal: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function HistoryButton({
  openModal,
}: HistoryButtonComponentType) {
  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={openModal}>
        History
      </button>
    </div>
  );
}
