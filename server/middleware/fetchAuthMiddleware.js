import {SpotifyAuthObj,ValidTokenTimer} from '../../configs/SpotifyWebApi';


export const FetchAuthMiddleware = () => {
  return new Promise((resolve,reject) => {
    SpotifyAuthObj.clientCredentialsGrant()
      .then((data) => {
        SpotifyAuthObj.setAccessToken(data.body['access_token']);
        ValidTokenTimer(data.body['expires_in']);
      })
      .then(() => {
        console.log(`NEW ACCESS TOKEN: ${SpotifyAuthObj._credentials.accessToken}`);
        resolve(SpotifyAuthObj._credentials.accessToken)
      })
      .catch((err) => {
        console.log(`Something broke in FetchAuthMiddleware ${err}`);
        reject(err)
      })
  })
};
