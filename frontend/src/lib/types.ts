export type lastUserAction = {
  action: string;
  createdAt: string;
  username: string;
};

export type StatusType = {
  cleanliness: number;
  health: number;
  hungry: number;
  thirsty: number;
};

export type CharacterType = {
  level: number;
  status: StatusType;
};
export type InfoType = {
  lastUserAction: lastUserAction;
  waffle: CharacterType;
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
