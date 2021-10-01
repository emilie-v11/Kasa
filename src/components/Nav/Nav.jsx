import React, { Component } from 'react';
import './Nav.css';

class Nav extends Component {
    render() {
        return (
            <nav className="Nav-Header">
                <span className="Nav-Item">Accueil</span>
                <span className="Nav-Item">A propos</span>
            </nav>
        );
    }
}

export default Nav;
