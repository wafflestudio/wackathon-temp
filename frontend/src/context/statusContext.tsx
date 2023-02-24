import React, { createContext, useContext, useEffect, useState } from 'react';
import { InfoType, UserType } from '../lib/types';
import { apiAction, apiGetUserInfo, apiPoll, useInterval } from '../lib/api';
import { useParams } from 'react-router-dom';

type StatusContextType = {
  status: InfoType | undefined;
  getUserInfo: (id: number) => {};
  doAction: (actionType: string, userId: number, waffleId: number) => {};
  user: UserType | undefined;
};

const StatusContext = createContext<StatusContextType>({} as StatusContextType);

export function StatusProvider({ children }: { children: React.ReactNode }) {
  const [status, setStatus] = useState<InfoType | undefined>();

  const [user, setUser] = useState<UserType | undefined>();

  const { userId } = useParams();

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
    console.log(res.data);
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
        user,
      }}
    >
      {children}
    </StatusContext.Provider>
  );
}

export const useStatusContext = () => useContext(StatusContext);
