export type lastUserAction = {
  action: string;
  createdAt: string;
  username: string;
  userId: number;
};

export type StatusType = {
  cleanliness: number;
  health: number;
  hungry: number;
  thirsty: number;
};

export type CharacterType = {
  level: number;
  status: { [key: string]: number | undefined };
};

export type InfoType = {
  lastUserAction: lastUserAction;
  waffle: CharacterType;
};

export type RankingType = {
  username: string;
  contribution: number;
};

export type HistoryType = {
  username: string;
  action: string;
  createdAt: string;
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
  user: {
    contribution: number;
    username: string;
  };
  waffle: CharacterType;
};
