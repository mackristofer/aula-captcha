import { getTokenData } from './token';

export const isAuthenticated = (): boolean => {
  let tokenData = getTokenData();
  return tokenData && tokenData.exp * 1000 > Date.now() ? true : false;
};
