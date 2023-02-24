import React from 'react';
import styles from './historyModal.module.scss';
import { HistoryType } from '../../lib/types';

type HistoryModalType = {
  list: HistoryType[];
};

export default function HistoryModal({ list }: HistoryModalType) {
  return (
    <div className={styles['modal-overlay']}>
      <div className={styles.modal}>
        {list &&
          list.map((item) => {
            return <div>{item.userName}</div>;
          })}
      </div>
    </div>
  );
}
