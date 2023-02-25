import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { InfoType, StatusType, UserType } from '../lib/types';
import { apiAction, apiGetUserInfo, apiPoll, useInterval } from '../lib/api';
import { useParams } from 'react-router-dom';
import waffleBasic from '../resources/waffle_basic.gif';

type StatusContextType = {
  status: InfoType | undefined;
  getUserInfo: (id: number) => {};
  doPoll: () => {};
  doAction: (actionType: string, userId: number, waffleId: number) => {};
  user: number;
  characterImg: string;
  setCharacterImg: React.Dispatch<React.SetStateAction<string>>;
  detailStatus: StatusType | undefined;
  previousUserRef: React.MutableRefObject<InfoType | undefined>;
  setPollRunning: React.Dispatch<React.SetStateAction<boolean>>;
};

const StatusContext = createContext<StatusContextType>({} as StatusContextType);

export function StatusProvider({ children }: { children: React.ReactNode }) {
  const [status, setStatus] = useState<InfoType | undefined>();
  const [detailStatus, setDetailStatus] = useState<StatusType | undefined>();
  const [user, setUser] = useState(0);
  const [pollRunning, setPollRunning] = useState<boolean>(true);
  const [characterImg, setCharacterImg] = useState(waffleBasic);

  const previousUserRef = useRef<InfoType | undefined>();

  const { userId } = useParams();

  useInterval(async () => {
    //history 갱신도 여기서 해줘야 하나?
    if (pollRunning) {
      await doPoll();
    }
  }, 1000);

  useEffect(() => {
    previousUserRef.current = status;
  });

  const doPoll = async () => {
    const res = await apiPoll(1);
    console.log(res);
    setStatus(res.data);
    setDetailStatus(res.data.waffle.status);
    setUser(res.data.lastUserAction.userId); //가장 최근 행동의 유저아이디
  };

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
        characterImg,
        setCharacterImg,
        status,
        getUserInfo,
        doPoll,
        doAction,
        user,
        detailStatus,
        previousUserRef,
        setPollRunning,
      }}
    >
      {children}
    </StatusContext.Provider>
  );
}

export const useStatusContext = () => useContext(StatusContext);
