import { RouterApi } from '../../configs/constants';


export const TracksRoute = () => {
  RouterApi.route(`/tracks`)
    .get((req, res) => {
      res.json({
        message: `GET on /tracks route default response message!`
      })
    });
};
