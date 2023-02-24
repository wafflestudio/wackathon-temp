import React from 'react';
import Character from '../character/character';
import ActionButtons from '../actionButtons/actionButtons';
import StatusContainer from '../status/statusContainer';
import PageTemplate from '../pageTemplate';
export default function MainPage() {
  return (
    <PageTemplate>
      <StatusContainer></StatusContainer>
      <Character></Character>
      <ActionButtons></ActionButtons>
    </PageTemplate>
  );
}
