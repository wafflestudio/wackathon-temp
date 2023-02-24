import React from 'react';
import Character from '../character/character';
import ActionButtons from '../actionButtons/actionButtons';
import PageTemplate from '../pageTemplate';
import styles from './MainPage.module.scss';
export default function MainPage() {
  return (
    <PageTemplate>
      <div className={styles.blank}></div>
      <Character></Character>
      <ActionButtons></ActionButtons>
    </PageTemplate>
  );
}
