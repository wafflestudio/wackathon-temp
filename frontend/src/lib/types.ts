export type StatusType = {
  name: string;
  status: number;
};

export type RankingType = {
  userName: string;
  contribute: number;
};

export type HistoryType = {
  userName: string;
  action: string;
  time: string;
};

export type WaffleType = {
  id: number;
  level: number;
  name: string;
  cleanliness: number;
  hungry: number;
  sickness: number;
  thirsty: number;
};

export type UserType = {
  id: number;
  last_online: string;
  score: number;
  username: string;
  waffle_id: number;
};
