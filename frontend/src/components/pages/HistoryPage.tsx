import React, { useEffect, useState } from 'react';
import PageTemplate from '../pageTemplate';
import Character from '../character/character';
import Rankings from '../ranking/rankings';
import HistoryButton from '../history/historyButton';
import HistoryModal from '../history/historyModal';
import { HistoryType, RankingType } from '../../lib/types';
import { apiGetHistory, apiGetRanking } from '../../lib/api';

const initialHistory: HistoryType[] = [
  {
    userName: '채원',
    time: '2022-02-02',
    action: '밥주기',
  },
  {
    userName: '동현',
    time: '2022-02-02',
    action: '씻기기',
  },
  {
    userName: '준형',
    time: '2022-02-02',
    action: '똥치우기',
  },
  {
    userName: '광휘',
    time: '2022-02-02',
    action: '밥주기',
  },
  {
    userName: '광휘',
    time: '2022-02-02',
    action: '밥주기',
  },
  {
    userName: '광휘',
    time: '2022-02-02',
    action: '밥주기',
  },
  {
    userName: '광휘',
    time: '2022-02-02',
    action: '밥주기',
  },
  {
    userName: '광휘',
    time: '2022-02-02',
    action: '밥주기',
  },
  {
    userName: '광휘',
    time: '2022-02-02',
    action: '밥주기',
  },
  {
    userName: '광휘',
    time: '2022-02-02',
    action: '똥주기',
  },
];

export default function HistoryPage() {
  const [history, setHistory] = useState<HistoryType[]>(initialHistory);
  const [modalIsOpen, setIsOpen] = useState(false);

  const [ranking, setRanking] = useState<RankingType[]>();

  useEffect(() => {
    (async () => {
      const rankingRes = await apiGetRanking(1);
      setRanking(rankingRes.data);
      const historyRes = await apiGetHistory(1);
      console.log(rankingRes);
    })();
  }, []);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <PageTemplate>
      <Character></Character>
      <Rankings></Rankings>
      <HistoryButton openModal={openModal}></HistoryButton>
      {modalIsOpen && <HistoryModal list={history} closeModal={closeModal} />}
    </PageTemplate>
  );
}
