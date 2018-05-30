import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './GitHub.css';
import GitHubUser from './GitHubUser';

class GitHub extends Component {

    state = {
        username: '',

    }

    handleChange = (ev) => {
        this.setState( {username: ev.target.value} );
    }

    handleSubmit = (ev) => {
        ev.preventDefault();
        this.props.history.push(`/jdwhite88/github/${this.state.username}`);
    }

    render() {
        return( 
            <div className="Github">
                <img
                    src="https://www.aha.io/assets/github.7433692cabbfa132f34adb034e7909fa.png"
                    alt="GitHub"
                    className="logo"
                />
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input
                            type="text"
                            value={this.state.username}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <button type="submit">Look up GitHub user</button>
                    </div>
                </form>
                <Route path="/jdwhite88/github/:username" component={GitHubUser} />
                <Route exact path="/jdwhite88/github" render={() => <h3>Please enter a username to search on GitHub</h3>}  />
            </div>
        );
    }
}

export default GitHub;