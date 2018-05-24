import { RouterApi } from '../../configs/constants';
import { AlbumTracksMiddleware } from '../middleware/albumTracksMiddleware';
import { AlbumSearchResults } from './artist';


export let TrackSearchResults;


export const AlbumsRoute = () => {
  RouterApi.route(`/albums/:id`)
    .get((req, res) => {
      AlbumTracksMiddleware(req.params.id)
        .then((data) => {
          let albumTrackMap = data.items.map((item)=>{
            return item
          })
          .map((track)=>{
            return {
              name     :   track.name,
              id       :   track.id,
              trackNum :   track.track_number,
              dur      :   track.duration_ms,
              uri      :   track.uri,
              href     :   track.href,
              urls     :   track.external_urls,
              preview  :   track.preview_url,
              images   :   track.images,
            }
          })
          TrackSearchResults = albumTrackMap

          res.send(TrackSearchResults)
        })
        .catch((err) => {

          res.status(500).send('Something went wrong!', err)
        })
    })
};
