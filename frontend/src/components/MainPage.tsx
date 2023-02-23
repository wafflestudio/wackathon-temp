import React from 'react';
import Character from './character/character';
import ActionButtons from './actionButtons/actionButtons';
import Nav from './nav/nav';
import UserContainer from './user/userContainer';
import StatusContainer from './status/statusContainer';
import styles from './MainPage.module.scss';
export default function MainPage() {
  return (
    <div className={styles.main}>
      <UserContainer></UserContainer>
      <StatusContainer></StatusContainer>
      <Character></Character>
      <ActionButtons></ActionButtons>
      <Nav></Nav>
    </div>
  );
}
