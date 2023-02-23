import React, { useState } from 'react';
import Status from './status';
import { StatusType } from '../../lib/types';

const initialStatus: StatusType[] = [
  {
    name: 'hungry',
    status: 0,
  },
  {
    name: 'thirsty',
    status: 0,
  },
  {
    name: 'clean',
    status: 0,
  },
  {
    name: 'health',
    status: 0,
  },
];

export default function StatusContainer() {
  const [status, setStatus] = useState<StatusType[]>(initialStatus);

  //status.map
  return (
    <div>
      {status.map((item) => {
        return <Status key={item.name} item={item}></Status>;
      })}
    </div>
  );
}
