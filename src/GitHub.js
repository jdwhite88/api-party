import React, { Component } from 'react';

import './GitHub.css';

class GitHub extends Component {

    state = {
        username: '',

    }

    handleChange = (ev) => {
        this.setState( {username: ev.target.value} );
    }

    handleSubmit = (ev) => {

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

            </div>
        );
    }
}

export default GitHub;