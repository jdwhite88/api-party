import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';

import RoverInfo from './RoverInfo';
import './Nasa.css';

class Nasa extends Component {
    render() {
        return (
            <div className="Nasa">
                <img 
                    src="https://www.nasa.gov/sites/default/files/images/nasaLogo-570x450.png" 
                    alt="NASA"
                    className="logo"
                />
                <h2>Select a Mars rover</h2>
                <ul className="navLinks">
                    <li>
                        <NavLink to="/jdwhite88/nasa/curiosity">Curiosity</NavLink>
                    </li>
                    <li>
                        <NavLink to="/jdwhite88/nasa/opportunity">Opportunity</NavLink>
                    </li>
                    <li>
                        <NavLink to="/jdwhite88/nasa/spirit">Spirit</NavLink>
                    </li>
                </ul>
                <Route path="/jdwhite88/nasa/:rover" component={RoverInfo} />
                <Route exact path="/jdwhite88/nasa" render={() => <h2>No rover selected.</h2>}  />
            </div>
        )
    }
}

export default Nasa;