import React, { Component } from 'react';
import { ReactComponent as Logo } from '../Logo/logo.svg';
import './Footer.css';
import '../Logo/Logo.css';

class Footer extends Component {
    render() {
        return (
            <footer className="Footer">
                <Logo className="Logo-Footer" fill="#FFF" />
                <p> © 2020 Kasa. All rights reserved </p>
            </footer>
        );
    }
}

export default Footer;
