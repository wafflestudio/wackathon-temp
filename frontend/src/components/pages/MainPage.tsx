import React from 'react';
import Character from '../character/character';
import ActionButtons from '../actionButtons/actionButtons';
import StatusContainer from '../status/statusContainer';
import PageTemplate from '../pageTemplate';
import styles from './MainPage.module.scss';
export default function MainPage() {
  return (
    <>
      <div className={styles.marginTop}></div>
      <PageTemplate>
        {/* <StatusContainer></StatusContainer> */}
        <Character></Character>
        <ActionButtons></ActionButtons>
      </PageTemplate>
      <div className={styles.marginBottom}></div>
    </>
  );
}
