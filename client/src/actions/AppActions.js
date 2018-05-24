import * as types from '../constants/actionTypes';

export function fetchArtists(artist) {
    return dispatch => {
        const searchAPI = `api/search/${artist}`;

        fetch(searchAPI)
            .then((res) => res.json())
            .then((data) => {
                dispatch({
                    type: types.FETCH_ARTISTS,
                    artistsActive: true
                })
                dispatch({
                    type: types.FETCH_ALBUMS,
                    albumsActive: false
                })
                dispatch({
                    type: types.FETCH_TRACKS,
                    tracksActive: false
                })
                dispatch({
                    type: types.FETCH_SPOTIFY_DATA,
                    spotifyData: data
                })
            })
            .catch((err) => {
                dispatch({
                    type: types.FETCH_ERROR,
                    data: err
                })
            })
    }
}

export function fetchAlbums(artistId) {
    return dispatch => {
        const albumAPI = `api/artist/${artistId}`;

        fetch(albumAPI)
            .then((res) => res.json())
            .then((data) => {
                dispatch({
                    type: types.FETCH_ARTISTS,
                    artistsActive: false
                })
                dispatch({
                    type: types.FETCH_ALBUMS,
                    albumsActive: true
                })
                dispatch({
                    type: types.FETCH_TRACKS,
                    tracksActive: false
                })
                dispatch({
                    type: types.FETCH_SPOTIFY_DATA,
                    spotifyData: data
                })
            })
            .catch((err) => {
                dispatch({
                    type: types.FETCH_ERROR,
                    error: err
                })
            })
    }
}

export function fetchTracks(albumId) {
    return dispatch => {
        const tracksAPI = `api/albums/${albumId}`;

        fetch(tracksAPI)
            .then((res) => res.json())
            .then((data) => {
                dispatch({
                    type: types.FETCH_ARTISTS,
                    artistsActive: false
                })
                dispatch({
                    type: types.FETCH_ALBUMS,
                    albumsActive: false
                })
                dispatch({
                    type: types.FETCH_TRACKS,
                    tracksActive: true
                })
                dispatch({
                    type: types.FETCH_SPOTIFY_DATA,
                    spotifyData: data
                })
            })
            .catch((err) => {
                dispatch({
                    type: types.FETCH_ERROR,
                    error: err
                })
            })
    }
}
