import React, { Component } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import GitHub from "./GitHub";
import Nasa from "./Nasa";
import Spotify from "./Spotify";

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h3>Ain't no party like an</h3>
          <h1>API Party</h1>
        </div>
        <ul className="navLinks">
          <li>
            <NavLink to="/jdwhite88/github">GitHub API</NavLink>
          </li>
          <li>
            <NavLink to="/jdwhite88/nasa">NASA API</NavLink>
          </li>
          <li>
            <NavLink to="/jdwhite88/spotify">Spotify API</NavLink>
          </li>
        </ul>
        <Switch>
          <Route path="/jdwhite88/github" component={GitHub} />
          <Route path="/jdwhite88/nasa" component={Nasa} />
          <Route path="/jdwhite88/spotify" component={Spotify} />
          <Route render={() => <p>To get started, click one of the links above</p>} />
        </Switch>
      </div>
    );
  }
}

export default App;
