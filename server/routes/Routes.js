import { DefaultRoute } from './default';
import { AuthRoute } from './auth';
import { SearchRoute } from './search';
import { SearchItemRoute } from './searchItem';
import { ArtistRoute } from './artist';
import { AlbumsRoute } from './albums';
import { TracksRoute } from './tracks';


export const Routes = () => {
    DefaultRoute();
    AuthRoute();
    SearchRoute();
    SearchItemRoute();
    ArtistRoute();
    AlbumsRoute();
    TracksRoute();
};
