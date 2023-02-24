import React from 'react';
import styles from './historyModal.module.scss';
import { HistoryType } from '../../lib/types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faX } from '@fortawesome/free-solid-svg-icons';
import History from './history';

type HistoryModalType = {
  list: HistoryType[];
  closeModal: () => void;
};

export default function HistoryModal({ list, closeModal }: HistoryModalType) {
  return (
    <div className={styles['modal-overlay']} onClick={closeModal}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.close}>
          <FontAwesomeIcon icon={faX} onClick={closeModal} />
        </div>
        <div className={styles.title}>History</div>
        <div className={styles.historyContainer}>
          {list &&
            list.map((item, idx) => {
              return <History key={idx} item={item}></History>;
            })}
        </div>
      </div>
    </div>
  );
}
