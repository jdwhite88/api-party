import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import SpotifySong from './SpotifySong';
import './Spotify.css';

class Spotify extends Component {

    state = {
        song: '',
    }

    handleChange = (ev) => {
        this.setState({ song: ev.target.value });
    }

    handleSubmit = (ev) => {
        ev.preventDefault();
        this.props.history.push(`/jdwhite88/spotify/${this.state.song}`);
    }

    render() {
        return(
            <div className="Spotify">
                <img 
                    src="spotify.png" 
                    alt="Spotify"
                    className="logo"
                />
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input 
                            type="text"
                            value={this.state.song}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <button type="submit">Look up Spotify song</button>
                    </div>
                </form>
                <Route path="/jdwhite88/spotify/:song" component={SpotifySong} />
                <Route exact path="/jdwhite88/spotify" render={() => <h3>Please enter a song to search on Spotify</h3>} />
            </div>
        );
    }
}

export default Spotify;