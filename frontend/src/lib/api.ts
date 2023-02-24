import axios from 'axios';
import { useEffect, useRef } from 'react';

export const url = (path: string) => {
  return `https://d3t0fj5iyklnxv.cloudfront.net${path}`;
};

export const apiGetUserInfo = (id: number) => {
  return axios({
    method: 'get',
    url: url(`/users/${id}`),
  });
};

export const apiGetHistory = (id: number) => {
  return axios({
    method: 'get',
    url: url(`/waffles/${id}/histories`),
  });
};

export const apiGetRanking = (id: number) => {
  return axios({
    method: 'get',
    url: url(`/waffles/${id}/ranking`),
  });
};

export const apiAction = (
  actionType: string,
  userId: number,
  waffleId: number
) => {
  return axios({
    method: 'post',
    url: url(`/waffles/act`),
    data: {
      actionType,
      userId,
      waffleId,
    },
  });
};

export const apiPoll = (id: number) => {
  return axios({
    method: 'get',
    url: url(`/waffles/${id}/poll`),
  });
};

export function getUsernameColor(username: string) {
  // Compute a hash code for the username
  let hash = 0;
  for (let i = 0; i < username.length; i++) {
    hash = username.charCodeAt(i) + ((hash << 5) - hash);
  }

  // Generate a color from the hash code
  let r = Math.abs((hash & 0xff0000) >> 16);
  let g = Math.abs((hash & 0x00ff00) >> 8);
  let b = Math.abs(hash & 0x0000ff);

  // Make the color less bright
  r = Math.round((r + 150) / 2);
  g = Math.round((g + 150) / 2);
  b = Math.round((b + 150) / 2);

  return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}

export const useInterval = (callback: () => void, delay: number) => {
  const savedCallback = useRef<() => void>(() => {});

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const executeCallback = () => {
      savedCallback.current();
    };

    const timerId = setInterval(executeCallback, delay);

    return () => clearInterval(timerId);
  }, []);
};
