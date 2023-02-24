import React from 'react';
import PageTemplate from '../pageTemplate';
import Character from '../character/character';
import Rankings from '../ranking/rankings';

export default function HistoryPage() {
  return (
    <PageTemplate>
      <Character></Character>
      <Rankings></Rankings>
    </PageTemplate>
  );
}
