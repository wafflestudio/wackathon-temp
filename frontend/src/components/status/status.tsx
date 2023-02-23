import React, { useState } from 'react';
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

export default function Status() {
  const [status, setStatus] = useState<StatusType[]>(initialStatus);

  return <div>status</div>;
}
