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
                    <div id="Accordion">
                        <Dropdown
                            titleSection="Fiabilité"
                            textContent="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
                        />
                        <Dropdown
                            titleSection="Fiabilité"
                            textContent="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
                        />
                        <Dropdown
                            titleSection="Fiabilité"
                            textContent="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
                        />
                        <Dropdown
                            titleSection="Fiabilité"
                            textContent="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
                        />
                    </div>
                </main>

                <Footer />
            </>
        );
    }
}

export default About;
