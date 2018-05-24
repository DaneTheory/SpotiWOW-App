import {FETCH_ERROR, FETCH_SPOTIFY_DATA, FETCH_ARTISTS, FETCH_ALBUMS, FETCH_TRACKS} from '../constants/actionTypes';
import objectAssign from 'object-assign';
import initialState from './initialState';


export default function spotifyDataReducer(state = initialState, action) {

  switch (action.type) {

    case FETCH_ARTISTS:
      return objectAssign({}, state, {artistsActive: action.artistsActive});

    case FETCH_ALBUMS:
      return objectAssign({}, state, {albumsActive: action.albumsActive});

    case FETCH_TRACKS:
      return objectAssign({}, state, {tracksActive: action.tracksActive});

    case FETCH_SPOTIFY_DATA:
      return objectAssign({}, state, {spotifyData: action.spotifyData});

    case FETCH_ERROR:
      return objectAssign({}, state, {spotifyData: action.error});

    default:
      return state;
  }
}
