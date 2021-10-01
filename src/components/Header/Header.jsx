import React, { Component } from 'react';
import { ReactComponent as Logo } from '../Logo/logo.svg';
import './Header.css';
import Nav from '../Nav/Nav';

class Header extends Component {
    render() {
        return (
            <div className="Header">
                <Logo className="Logo-Header" fill="#FF6060" />
                <Nav />
            </div>
        );
    }
}

export default Header;
