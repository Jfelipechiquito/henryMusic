import axios from 'axios';

// VARIABLES

const URL = process.env.NODE_ENV === 'production' ? 'https://henrymusic.tech/api' : 'http://localhost:3001/api';
const initialLimit = 10;

// ------------------------------------------- ACTIONS TYPE NAMES ----------------------------------------------

// TOKEN

export const GET_TOKEN = 'GET_TOKEN';

// USER

export const GET_USER = "GET_USER;"
export const UPDATEMYUSER = 'UPDATEMYUSER';

// TRACKS

export const GET_TRACK = 'GET_TRACK';
export const SEARCH_TRACK = 'SEARCH_TRACK';
export const GET_ALL_TRACKS = 'GET_ALL_TRACKS';

// ALBUMS

export const GET_ALBUM = 'GET_ALBUM';
export const SEARCH_ALBUM = 'SEARCH_ALBUM';
export const GET_ALL_ALBUMS = 'GET_ALL_ALBUMS';

// ARTISTS

export const GET_ARTIST = 'GET_ARTIST';
export const SEARCH_ARTIST = 'SEARCH_ARTIST';
export const GET_ALL_ARTISTS = 'GET_ALL_ARTISTS';

// PLAYLISTS

export const GET_ALL_PLAYLISTS = 'GET_ALL_PLAYLISTS';
export const GET_ALL_PLAYLIST_TRACKS = 'GET_ALL_PLAYLIST_TRACKS';

// NEW SONG

export const GET_NEW_SONG = "GET_NEW_SONG";
export const DELETE_SONG = "DELETE_SONG";

// FILTROS

export const FILTRO_GENERO = 'FILTRO_GENERO';
export const ORDEN_BY_NAME = "ORDEN_BY_NAME;"

// REPRODUCTOR

export const GET_PLAYER = "GET_PLAYER;"
export const IS_PLAYING = 'IS_PLAYING';

// OTROS

export const RESET_DETALLES = "RESET_DETALLES;"


// ------------------------------------------- ACTIONS ----------------------------------------------

// ------------------ TOKEN --------------------------------------

export const getToken = (token) => {
    return {
        type: GET_TOKEN,
        payload: token
    }
}

// ------------------ USER --------------------------------------

export const getUser = () => {
    return async function(dispatch) {
        const info = await axios.get(`${URL}/user`)
        return dispatch({type: GET_USER, payload: info.data})
    }
}


export const updateMyUser = (username, image) => {
    return async function() {
        const info = await axios.post(`${URL}/user/update`, {username, image}, {headers: {"Content-Type": "multipart/form-data"}})
        return info;
    }
}

// ------------------ TRACKS --------------------------------------

export const getTrack = (ID) => {
    return async function (dispatch) {
        const info = await axios.get(`${URL}/track/${ID}`)
        return dispatch({ type: GET_TRACK, payload: info.data })
    };
};

export const searchTrack = (track, limit = initialLimit) => {
    return async function (dispatch) {
        const info = await axios.get(`${URL}/track/search?q=${track}&limit=${limit}`)
        return dispatch({ type: SEARCH_TRACK, payload: info.data })
    };
};

export const getAllTracks = (limit = initialLimit) => {
    return async function (dispatch) {
        const info = await axios.get(`${URL}/track/all?limit=${limit}`)
        return dispatch({ type: GET_ALL_TRACKS, payload: info.data })
    };
};

// ------------------ ALBUMS --------------------------------------

export const getAlbum = (ID) => {
    return async function (dispatch) {
        const info = await axios.get(`${URL}/album/${ID}`)
        return dispatch({ type: GET_ALBUM, payload: info.data })
    };
};

export const searchAlbum = (album, limit = initialLimit) => {
    return async function (dispatch) {
        const info = await axios.get(`${URL}/album/search?q=${album}&limit=${limit}`)
        return dispatch({ type: SEARCH_ALBUM, payload: info.data })
    };
};

export const getAllAlbums = (limit = initialLimit) => {
    return async function (dispatch) {
        const info = await axios.get(`${URL}/album/all?limit=${limit}`)
        return dispatch({ type: GET_ALL_ALBUMS, payload: info.data })
    };
};

// ------------------ ARTISTS --------------------------------------

export const getArtist = (ID) => {
    return async function (dispatch) {
        const info = await axios.get(`${URL}/artist/${ID}`)
        return dispatch({ type: GET_ARTIST, payload: info.data })
    };
};

export const searchArtist = (artist, limit = initialLimit) => {
    return async function (dispatch) {
        const info = await axios.get(`${URL}/artist/search?q=${artist}&limit=${limit}`)
        return dispatch({ type: SEARCH_ARTIST, payload: info.data })
    };
};

export const getAllArtists = (limit = initialLimit) => {
    return async function (dispatch) {
        const info = await axios.get(`${URL}/artist/all?limit=${limit}`)
        return dispatch({ type: GET_ALL_ARTISTS, payload: info.data })

    };

};

// ------------------ PLAYLISTS --------------------------------------

export const getAllPlaylists = (limit = initialLimit) => {
    return async function (dispatch) {
        const info = await axios.get(`${URL}/playlist/all?limit=${limit}`)
        return dispatch({ type: GET_ALL_PLAYLISTS, payload: info.data })
    };
}

export const getPlaylistTracks = (playlist_id) => {
    return async function (dispatch) {
        const info = await axios.get(`${URL}/playlist/track/all/?id=${playlist_id}`)
        return dispatch({ type: GET_ALL_PLAYLIST_TRACKS, payload: info.data })
    };
}

export const playlistAddTrack = (playlist_id, track_id) => {
    return async function () {
        const info = await axios.post(`${URL}/playlist/track/add`, {playlist_id, track_id})
        return info;
    };
}

export const playlistDeleteTrack = (playlist_id, track_id) => {
    return async function () {
        const info = await axios.post(`${URL}/playlist/track/remove`, {playlist_id, track_id})
        return info;
    };
}

// ------------------ NEW SONG --------------------------------------

export const getNewSong = () =>{
    return async function(dispatch){
        const info = await axios.get(`${URL}/song/all`)
        return dispatch({ type: GET_NEW_SONG, payload: info.data })
    }
}

export const postSong = (song) => {
    return async function () {
        let json = await axios.post(`${URL}/song/create`, song, {headers: {'Content-Type': 'multipart/form-data'}})
        return json;
    }
}
export const deleteSong = (ID) => {
    
    return async function () {
        let json = await axios.post(`${URL}/song/delete`, {id:ID})
        return json;
    }
}

// ------------------ FILTROS --------------------------------------

export const filtroGenero = (payload) => {
    return {
        type: FILTRO_GENERO,
        payload
    }
}

export const ordenPorAbc = (payload) => {
    return {
        type: ORDEN_BY_NAME,
        payload
    }
}

// ------------------ REPRODUCTOR --------------------------------------

export const getPlayer = (payload) => {
    return {
        type: GET_PLAYER,
        payload
    }
}

export const isPlaying = () => {
    return {
        type: IS_PLAYING
    }
}

// ------------------ OTROS --------------------------------------

export const Landing = () => {
    return {
        type: "LANDING"
    }
}

export function resetDetalles() {
    return async function (dispatch) {
        dispatch({ type: RESET_DETALLES })
    }
}







