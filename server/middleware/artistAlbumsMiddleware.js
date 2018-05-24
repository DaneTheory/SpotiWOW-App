import {SpotifyAuthObj} from '../../configs/SpotifyWebApi';


export const ArtistAlbumsMiddleware = (id) => {
  return new Promise((resolve,reject) => {
    SpotifyAuthObj.getArtistAlbums(id)
      .then((data) => {
        resolve(data.body)
      })
      .catch((err) => {
        console.log(`Something broke in ArtistAlbumsMiddleware ${err}`);
        reject(err)
      })
  })
};
