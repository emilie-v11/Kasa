import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Error404.css';

class Error404 extends Component {
    render() {
        return (
            <main className="Main-Error404">
                <div className="Content-404">
                    <span className="Number-404">404</span>
                    <p className="Text-404">
                        Oups ! La page que vous demandez n'existe pas
                    </p>
                </div>
                <Link className="Back-Home" to="/">
                    Retourner sur la page d'accueil
                </Link>
            </main>
        );
    }
}

export default Error404;
