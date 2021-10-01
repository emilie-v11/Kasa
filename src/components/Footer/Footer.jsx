import React, { Component } from 'react';
// import Logo from '../Logo/Logo';
import { ReactComponent as Logo } from '../Logo/logo.svg';
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <div className="Footer">
                <Logo className="Logo-Footer" fill="#FFF" />
                <p> © 2020 Kasa. All rights reserved </p>
            </div>
        );
    }
}

export default Footer;
