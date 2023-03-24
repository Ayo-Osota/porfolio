import querystring from "querystring";
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const client_id = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const client_secret = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.REACT_APP_SPOTIFY_REFRESH_TOKEN;
const userAccessToken = "BQDKvNti82yt20g4qHmXSTimWIgEo34xnqEqVKJtYKjdYlrRHPCchzW3p8Jsw_At9tOQeF0rWx9yZ3bnsp2jVze70K559_ciCC2FKkjXhhl7ufA_OWxEPL1ZF-8Xv2A6nX1nYuimS0rA0PHnA3BNWdGoh63n2upxWo4hl_Z7jCCSiVsXxZmBfrQe68jV7P7SYVImo2M4cX_mPg";

const getAccessToken = async () => {
    const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
    const response = await fetch(TOKEN_ENDPOINT, {
        method: "POST",
        headers: {
            Authorization: `Basic ${basic}`,
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: querystring.stringify({
            grant_type: "refresh_token",
            refresh_token,
        }),
    });
    
    return response.json();
};

export const getNowPlaying = async (client_id, client_secret, refresh_token) => {
    const { access_token } = await getAccessToken(
        client_id,
        client_secret,
        refresh_token
    );
    return fetch(NOW_PLAYING_ENDPOINT, {
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
    });
};

export default async function getNowPlayingItem(
    client_id,
    client_secret,
    refresh_token
) {
    const response = await getNowPlaying(client_id, client_secret, refresh_token);
    if (response.status === 204 || response.status > 400) {
        return false;
    }
    const song = await response.json();
    const albumImageUrl = song.item.album.images[0].url;
    const artist = song.item.artists.map((_artist) => _artist.name).join(", ");
    const isPlaying = song.is_playing;
    const songUrl = song.item.external_urls.spotify;
    const title = song.item.name;
    
    return {
        albumImageUrl,
        artist,
        isPlaying,
        songUrl,
        title,
    };
}

fetch("https://api.spotify.com/v1/me/player/currently-playing", {
  method: "GET",
  headers: {
    Authorization: `Bearer ${userAccessToken}`
  }
})
.then(response => response.json())
.then(({beats}) => {
  beats.forEach((beat, index) => {
    console.log(`Beat ${index} starts at ${beat.start}`);
  })
})