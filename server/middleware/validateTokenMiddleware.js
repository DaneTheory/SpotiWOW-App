import { RouterApi } from '../../configs/constants';
import {SpotifyAuthObj,TokenFlag,ValidTokenTimer} from '../../configs/SpotifyWebApi';
import { FetchAuthMiddleware } from './fetchAuthMiddleware';


export const ValidateTokenMiddleware = () => {
    RouterApi.use((req, res, next) => {
        let authToken = SpotifyAuthObj._credentials.accessToken
        if (!TokenFlag) {
            console.log(`Fetching New Access Token`);
            FetchAuthMiddleware()
                .then(()=> {
                    next();
                })
        } else {
            next();
        }
    });
};
