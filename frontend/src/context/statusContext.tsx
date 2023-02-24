import React, { createContext, useContext, useState } from 'react';
import { InfoType } from '../lib/types';
import { apiAction, apiGetUserInfo, apiPoll, useInterval } from '../lib/api';

type StatusContextType = {
  status: InfoType | undefined;
  getUserInfo: (id: number) => {};
  doAction: (actionType: string, userId: number, waffleId: number) => {};
};

const StatusContext = createContext<StatusContextType>({} as StatusContextType);

export function StatusProvider({ children }: { children: React.ReactNode }) {
  const [status, setStatus] = useState<InfoType | undefined>();

  useInterval(async () => {
    //history 갱신도 여기서 해줘야 하나?
    const res = await apiPoll(1);
    console.log(res);
    setStatus(res.data);
  }, 10000);

  //action
  const doAction = async (
    actionType: string,
    userId: number,
    waffleId: number
  ) => {
    const res = await apiAction(actionType, userId, waffleId);
    console.log(res);
  };

  //getStatus
  const getUserInfo = async (id: number) => {
    const res = await apiGetUserInfo(id);
    console.log(res);
  };

  return (
    <StatusContext.Provider
      value={{
        status,
        getUserInfo,
        doAction,
      }}
    >
      {children}
    </StatusContext.Provider>
  );
}

export const useStatusContext = () => useContext(StatusContext);
