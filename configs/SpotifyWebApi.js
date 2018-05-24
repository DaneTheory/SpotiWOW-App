import SpotifyWebApi from 'spotify-web-api-node';
import { ClientId, ClientSecret } from './authCreds';


export const SpotifyAuthObj = new SpotifyWebApi({
  clientId : ClientId,
  clientSecret : ClientSecret,
});

export let TokenFlag;

export const TokenTimerFlag = (flag) => {
  return flag ? TokenFlag = true : TokenFlag = false
};

export const ValidTokenTimer = (expires_in) => {
  let tokenTime = parseInt(expires_in);
  tokenTime > 0 ? TokenTimerFlag(true) : TokenTimerFlag(false)
};
