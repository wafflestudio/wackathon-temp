import React from 'react';
import PageTemplate from '../pageTemplate';
import Character from '../character/character';
import Rankings from '../ranking/rankings';
import HistoryButton from '../history/historyButton';

export default function HistoryPage() {
  return (
    <PageTemplate>
      <Character></Character>
      <Rankings></Rankings>
      <HistoryButton></HistoryButton>
    </PageTemplate>
  );
}
