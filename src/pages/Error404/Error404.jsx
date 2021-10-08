import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import './Error404.css';

class Error404 extends Component {
    render() {
        return (
            <>
                <Header />
                <main className="Main-Error404">
                    <div className="Content-404">
                        <span className="Number-404">404</span>
                        <p className="Text-404">
                            Oups ! La page que vous demandez n'existe pas
                        </p>
                    </div>
                    <Link className="Back-Home" exact to="/">
                        Retourner sur la page d'accueil
                    </Link>
                </main>
                <Footer />
            </>
        );
    }
}

export default Error404;
