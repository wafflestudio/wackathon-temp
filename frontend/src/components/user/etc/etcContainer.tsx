import React from 'react';
import styles from './etcContainer.module.scss';
import ScreenShot from './screenShot';
import Money from './money';
import Level from './level';
export default function EtcContainer() {
  return (
    <div className={styles.container}>
      <Money></Money>
      <ScreenShot></ScreenShot>
      <Level></Level>
    </div>
  );
}
