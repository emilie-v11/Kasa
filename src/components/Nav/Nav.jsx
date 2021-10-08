import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

class Nav extends Component {
    render() {
        return (
            <nav className="Nav-Header">
                <NavLink
                    className="Nav-Item"
                    activeClassName="selected"
                    exact
                    to="/"
                >
                    Accueil
                </NavLink>
                <NavLink
                    className="Nav-Item"
                    activeClassName="selected"
                    to="/a-propos"
                >
                    A propos
                </NavLink>
            </nav>
        );
    }
}

export default Nav;
