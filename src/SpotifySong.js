import React, { Component } from 'react';

class SpotifySong extends Component {
    constructor(props) {
        super(props);
        this.state = {
            song: {},
        }

        this.fetchSongData(props);
    }

    // authorize = () => {
    //     const BASE_URL = 'https://accounts.spotify.com/authorize?';
    //     const CLIENT_ID = 'b645edbb22ab4f0e8c8b1c7ede41b55c';
    //     const REDIRECT_URI = 'http://localhost:3000/spotify/callback/';
    //     const FETCH_URL = `${BASE_URL}client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=token`;
    //     fetch(FETCH_URL)
    //         .then(response => response.json())
    //         .then(res => console.log(res));
    // }

    fetchSongData = (props) => {
        console.log("Fetching...");
        // this.authorize();
        const BASE_URL = 'https://api.spotify.com/v1/search?';
        const ACCESS_TOKEN = 'BQCTA1i5toLyLLCQlHXV-hGzyHIuhEFKbnBwGw2gl4s0YP2nAgxfewegow_4CWNI1vyh_rBAkXPuNTnIOWqP-2wS6mtFAjHH_k7D2pwrhkKpf_pJWKfVVit4vTeGT1wGFWGHEDNzIRWMpQ';
        const FETCH_URL = `${BASE_URL}q=track:${props.match.params.song}&type=track&limit=1&access_token=${ACCESS_TOKEN}`;
        fetch(FETCH_URL)
            .then(response => response.json())
            .then(data => {
                let song = {};
                if (data.tracks.items.length > 0) {
                    const songJSON = data.tracks.items[0];
                    song  = {
                        name: songJSON.name,
                        artist: songJSON.artists[0].name,
                        id: songJSON.id,
                    };
                }
                else {
                    song = {
                        name: song.match.params.rover,
                        artist: null,
                        id: null,
                    };
                }
                this.setState( { song });
            });
    }

    componentWillReceiveProps = (newProps) => {
        const locationChanged = newProps.location !== this.props.location;
        if (locationChanged) {
            this.fetchSongData(newProps);
        }
    }
    
    
    render() {
        const { song } = this.state;
        return(
            <div className="SpotifySong">
                <h3>Song: {song.name}</h3>
                <h3>Artist: {song.artist}</h3>
                <h3>Spotify ID: {song.id}</h3>
            </div>
        );
    }
}

export default SpotifySong;