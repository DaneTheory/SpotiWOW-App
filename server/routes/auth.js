import { RouterApi } from '../../configs/constants';
import { FetchAuthMiddleware } from '../middleware/fetchAuthMiddleware';


export const AuthRoute = () => {
  RouterApi.route(`/auth`)
    .get((req, res) => {
      FetchAuthMiddleware()
      .then((spotifyAccessToken) => {
        res.json({
          authToken: spotifyAccessToken
        })
      })
      .catch((err) => {
        res.status(500).send('Something went wrong!', err)
      })
    })
};
