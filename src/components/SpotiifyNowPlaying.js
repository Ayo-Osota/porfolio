import { useEffect, useState } from "react";
import styled from "styled-components";
// import getNowPlayingItem from "../SpotifyApi";
import SpotifyLogo from "./SpotifyLogo";
// // import SpotifyPlayingAnimation from "./SpotifyPlayingAnimation";
const url = "https://api.spotify.com/v1/me/player/currently-playing";
const userAccessToken = "BQAvq6DX0MWWl_9cKVtb1GASx90DVoKKG-kO9OIfsDhGdUjC83r2qaKBnYkRcor_8__VzO6seYEDggylZsD73-ZE_5755_gRfHhH_I8Q8nlbYzf7VyaZbKTyMhYsHzqcPe1oDiPo41lNFao4TuPkZEWAPFFCM5aQLZdFNctAhS2eC6BCapM1akFDBMRlEwWhRHlmb8APB6Wucw";

export const SpotifyNowPlaying = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [beat, setBeat] = useState({});
    //     useEffect(() => {
    //         Promise.all([
    //             getNowPlayingItem(
    //                 props.client_id,
    //                 props.client_secret,
    //                 props.refresh_token
    //             ),
    //         ]).then((results) => {
    //             setResult(results[0]);
    //             setLoading(false);
    //             console.log(results);
    //         });
    //     });

    // fetch("https://api.spotify.com/v1/me/player/currently-playing", {
    //     method: "GET",
    //     headers: {
    //         Authorization: `Bearer ${userAccessToken}`
    //     }
    // })
    //     .then(response => response.json())
    //     .then(({ beat }) => {
    //         //   beats.forEach((beat, index) => {
    //         //     console.log(`Beat ${index} starts at ${beat.start}`);
    //         //   })
    //         console.log(beat);
    //     })

    const getNowPlayingItem = async () => {
        setIsLoading(true);
        const response = await fetch(url, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${userAccessToken}`
            }
        })
        const beat = await response.json();
        console.log(beat.item.name);
        setIsLoading(false);
        setBeat(beat);
    }

    useEffect(() => {
        getNowPlayingItem()
        console.log(beat);
    }, []);

    return (
        <SpotifyContainer>
            {isLoading ? <p>Loading...</p> :
                beat.is_playing === false ?
                    <div>
                        <SpotifyLogo />
                        <span>Currently offline"</span>
                    </div> :
                    <div className="beat">
                        <div>
                            <SpotifyLogo />
                            <span>Now playing</span>
                        </div>
                        <div>
                            <img src={beat.item.album.images[0].url} alt={`${beat.item.name} album art`} />
                            <article>
                                <div className="beat-title">
                                    <div className="playing-animation">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                    <a href={beat.item.external_urls.spotify} target="_blank">{beat.item.name}</a>
                                </div>
                                <p>{beat.item.artists.map((_artist) => _artist.name).join(", ")}</p>
                            </article>
                        </div>
                    </div>
            }
        </SpotifyContainer>
    )
};

const SpotifyContainer = styled.div`
img {
    width: 3.125rem;
}

.beat {
}

.beat > div:first-child {
    display: flex;
    align-items: center;
    gap: 0.6rem;
}

.beat > div:nth-child(2) {
    padding: 1rem;
    margin-top: 1rem;
    display: flex;
    gap: 1rem;
    align-items: center;
    border: 1px solid var(--clr-bg-dark);
    border-radius: 20px;
}

.beat-title {
    display: flex;
    gap: 0.625rem;
    align-items: center;
}

.beat-title a {
    text-decoration: none;
    font-size: var(--fs-400);
    font-weight: var(--fw-bold);
    color: var(--clr-grey-400);
}

.beat svg {
    width: 2.25rem;
}

.playing-animation {
    position: relative;
    display: flex;
    justify-content: space-between;
    width: 13px;
    height: 13px;
  
    span {
        width: 3px;
        height: 100%;
        background-color: #1ED760;
        border-radius: 3px;
        animation: spotify-playing 2.2s ease infinite alternate;
        content: '';
        transform-origin: bottom;
        &:nth-of-type(2) {
            animation-delay: -2.2s;
        }
    
        &:nth-of-type(3) {
            animation-delay: -3.7s;
        }
        
    }
}
`