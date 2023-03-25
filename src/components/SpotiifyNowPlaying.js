import { useEffect, useState } from "react";
import styled from "styled-components";
// import getNowPlayingItem from "../SpotifyApi";
import SpotifyLogo from "./SpotifyLogo";
// // import SpotifyPlayingAnimation from "./SpotifyPlayingAnimation";
const url = "https://api.spotify.com/v1/me/player/currently-playing";
const userAccessToken = "BQA4_hKAyeQg5SXQEx7BEabSc5MmR59ci8RlgEHMA4v4JMZkYtqFSjJfserlefE4jQZWdj6WCGrryOJMLjv4sSYMecu39YHHtY55RTBJLs_dAXtRTGBYz_0uH4OgLvC-VKIfHcBqkAcj-60F22A-zYovl12ycy1O2_3Mpa0ov77iopmV-405rgtOypCL0jPeOjq1bQipk_qncg";

export const SpotifyNowPlaying = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [beat, setBeat] = useState({});

    const getNowPlayingItem = async () => {
        setIsLoading(true);
        const response = await fetch(url, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${userAccessToken}`
            }
        })
        const beat = await response.json();
        setIsLoading(false);
        setBeat(beat);
    }

    useEffect(() => {
        getNowPlayingItem()
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
                                    <a rel="noreferrer" href={beat.item.external_urls.spotify} target="_blank">{beat.item.name}</a>
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