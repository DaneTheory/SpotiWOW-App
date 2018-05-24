import { combineReducers } from 'redux';
import spotifyDataReducer from './SpotifyDataReducer';

const rootReducer = combineReducers({
  spotifyData: spotifyDataReducer
});

export default rootReducer;
