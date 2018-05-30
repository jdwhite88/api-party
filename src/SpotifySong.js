import React, { Component } from 'react';

class SpotifySong extends Component {
    constructor(props) {
        super(props);
        this.state = {
            song: {},
        }

        this.fetchSongData(props);
    }
    fetchSongData = (props) => {
        console.log("Fetching...");
        const BASE_URL = 'https://api.spotify.com/v1/search?';
        const ACCESS_TOKEN = 'BQAoH85zxWmUjlpBsvAATIg-qUoyGvj8LdETzIYihOVF1_PCxlO20do8va5I3h7-R8DE4tXUAgNyrW6kcmBkzI4aU2XpP5QvoQrORcngGJZW_a7O8KWxmtd2w9QFj4xZgJfMS3iQ-R7upA';
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
                        uri: songJSON.uri,
                    };
                }
                else {
                    song = {
                        name: song.match.params.rover,
                        artist: "",
                        id: null,
                        uri: null,
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
        const EMBED_URL = `https://open.spotify.com/embed?uri=${song.uri}`;
        const URL = `https://open.spotify.com/track/${song.id}`;
        return(
            <div className="SpotifySong">
                <h3>Song: {song.name}</h3>
                <h3>Artist: {song.artist}</h3>
                <div>
                    <iframe title={song.name} src={EMBED_URL} width="300" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                </div>
                {
                    URL && <a href={URL} target="_blank">Open in Spotify</a>
                }
            </div>
        );
    }
}

export default SpotifySong;