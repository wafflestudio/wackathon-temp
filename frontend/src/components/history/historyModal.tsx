import React from 'react';
import styles from './historyModal.module.scss';
import { HistoryType } from '../../lib/types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faX } from '@fortawesome/free-solid-svg-icons';

type HistoryModalType = {
  list: HistoryType[];
  closeModal: () => void;
};

export default function HistoryModal({ list, closeModal }: HistoryModalType) {
  return (
    <div className={styles['modal-overlay']}>
      <div className={styles.modal}>
        <FontAwesomeIcon icon={faX} onClick={closeModal} />
        {list &&
          list.map((item) => {
            return <div>{item.userName}</div>;
          })}
      </div>
    </div>
  );
}
