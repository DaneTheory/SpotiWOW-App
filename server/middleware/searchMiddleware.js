import {SpotifyAuthObj} from '../../configs/SpotifyWebApi';


export const SearchMiddleware = (query) => {
  return new Promise((resolve,reject) => {
    SpotifyAuthObj.searchArtists(query)
      .then((data) => {
        resolve(data.body.artists)
      })
      .catch((err) => {
        console.log(`Something broke in SearchMiddleware ${err}`);
        reject(err)
      })
  })
};
