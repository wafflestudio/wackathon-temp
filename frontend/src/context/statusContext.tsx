import React, { createContext, useContext, useState } from 'react';
import { StatusType } from '../lib/types';
import { useInterval } from '../lib/api';

type StatusContextType = {
  status: StatusType[] | undefined;
};

const StatusContext = createContext<StatusContextType>({} as StatusContextType);

export function StatusProvider({ children }: { children: React.ReactNode }) {
  const [status, setStatus] = useState<StatusType[] | undefined>();

  useInterval(() => {
    console.log('hi');
  }, 1000);

  return (
    <StatusContext.Provider
      value={{
        status,
      }}
    >
      {children}
    </StatusContext.Provider>
  );
}

export const useStatusContext = () => useContext(StatusContext);
