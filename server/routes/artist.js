import { RouterApi } from '../../configs/constants';
import { ArtistAlbumsMiddleware } from '../middleware/artistAlbumsMiddleware';
import { ArtistSearchResults } from './searchItem';

export let AlbumSearchResults;

export const ArtistRoute = () => {
  RouterApi.route(`/artist/:id`)
    .get((req, res) => {
      ArtistAlbumsMiddleware(req.params.id)
        .then((data) => {
          let artistAlbumMap = data.items.map((item)=>{
            return item
          })
          .map((album)=>{
            return {
              name    :   album.name,
              id      :   album.id,
              uri     :   album.uri,
              href    :   album.href,
              urls    :   album.external_urls,
              images  :   album.images,
            }
          })
          AlbumSearchResults = artistAlbumMap
          res.send(AlbumSearchResults)
        })
        .catch((err) => {
          res.status(500).send('Something went wrong!', err)
        })
    });
};
