import { RouterApi } from '../../configs/constants';
import { SearchMiddleware } from '../middleware/searchMiddleware';


export let ArtistSearchResults;

export const SearchItemRoute = () => {
  RouterApi.route(`/search/:query`)
    .get((req, res) => {
      SearchMiddleware(req.params.query)
        .then((data) => {
          let artistDataMap = data.items.map((item) => {
            return item
          })
          .map((artistData)=>{
            return {
              name    :   artistData.name,
              id      :   artistData.id,
              uri     :   artistData.uri,
              href    :   artistData.href,
              urls    :   artistData.external_urls,
              images  :   artistData.images,
            }
          });
          ArtistSearchResults = artistDataMap
          res.send(ArtistSearchResults)
        })
        .catch((err) => {

          res.status(500).send('Something went wrong!', err)
        })
    });
};
