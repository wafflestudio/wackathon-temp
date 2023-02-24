import axios from 'axios';

export const apiLogin = (id: string, password: string) => {
  return id;
};

export const apiAction = (action: string) => {
  return action;
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
