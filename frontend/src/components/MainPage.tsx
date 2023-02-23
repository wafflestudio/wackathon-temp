import React from 'react';
import User from './user/user';
import Status from './status/status';
import Character from './character/character';
import ActionButtons from './actionButtons/actionButtons';
import Nav from './nav/nav';

export default function MainPage() {
  return (
    <div>
      <User></User>
      <Status></Status>
      <Character></Character>
      <ActionButtons></ActionButtons>
      <Nav></Nav>
    </div>
  );
}
