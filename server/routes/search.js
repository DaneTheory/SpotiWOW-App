import { RouterApi } from '../../configs/constants';
import { SearchMiddleware } from '../middleware/searchMiddleware';

export const SearchRoute = () => {
  RouterApi.route(`/search`)
    .get((req, res) => {
      SearchMiddleware(query)
        .then((data) => {
          res.send(data)
        })
        .catch((err) => {
          res.status(500).send('Something went wrong!', err)
        })
    });
};
