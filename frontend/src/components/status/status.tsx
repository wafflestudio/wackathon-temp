import React, { useState } from 'react';
import { StatusType } from '../../lib/types';

type ItemType = {
  item: StatusType;
};

export default function Status({ item }: ItemType) {
  return <div>{item.name}</div>;
}
