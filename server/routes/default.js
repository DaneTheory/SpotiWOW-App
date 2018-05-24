import { RouterApi } from '../../configs/constants';


export const DefaultRoute = () => {
    RouterApi.route(`/`)
        .get((req, res) => {
            res.json({
                message: `Cheers from the API Server!`
            })
        });
};
