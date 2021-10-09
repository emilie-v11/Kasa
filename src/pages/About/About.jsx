import React, { Component } from 'react';
import Banner from '../../components/Banner/Banner';
import Dropdown from '../../components/Dropdown/Dropdown';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import './About.css';

class About extends Component {
    render() {
        return (
            <>
                <Header />
                <main className="Main-About">
                    <Banner
                        className="Banner-About"
                        imgSrc="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                        altText="Vallée de montagnes enneigées vue depuis une forêt de sapins pendant la journée"
                        title="A propos de Kasa"
                    />
                    <div className="Accordion">
                        <Dropdown
                            titleSection="Fiabilité"
                            textContent="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
                        />
                        <Dropdown
                            titleSection="Respect"
                            textContent="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
                        />
                        <Dropdown
                            titleSection="Service"
                            textContent="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
                        />
                        <Dropdown
                            titleSection="Sécurité"
                            textContent="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
                        />
                    </div>
                </main>

                <Footer />
            </>
        );
    }
}

export default About;
