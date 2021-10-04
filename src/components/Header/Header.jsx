import React, { Component } from 'react';
import { ReactComponent as Logo } from '../Logo/logo.svg';
import './Header.css';
import Nav from '../Nav/Nav';
import '../Logo/Logo.css';

class Header extends Component {
    render() {
        return (
            <header className="Header">
                <Logo className="Logo-Header" fill="#FF6060" />
                <Nav />
            </header>
        );
    }
}

export default Header;
