import {SpotifyAuthObj} from '../../configs/SpotifyWebApi';


export const AlbumTracksMiddleware = (id) => {
  return new Promise((resolve,reject) => {
    SpotifyAuthObj.getAlbumTracks(id)
      .then((data) => {
        resolve(data.body)
      })
      .catch((err) => {
        console.log(`Something broke in AlbumTracksMiddleware ${err}`);
        reject(err)
      })
  })
};
