import React, { Component } from 'react';
import Carrousel from '../../components/Carrousel/Carrousel';
import Dropdown from '../../components/Dropdown/Dropdown';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import './AccommodationSheet.css';

class AccommodationSheet extends Component {
    constructor() {
        super();

        this.state = { accommodations: [] };
    }

    componentDidMount() {
        fetch(
            'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json'
        )
            .then(response => response.json())
            .then(json => this.setState({ accommodations: json })) //console.log(data))
            .catch(error => console.log(error, 'I have an error'));
    }

    render() {
        // const { propertyTitle } = this.state;
        return (
            <>
                <Header />
                <main className="Main-AccommodationSheet">
                    <Carrousel accommodations={this.state.accommodations} />
                    <div className="Accommodation-Content">
                        <h1 className="Accommodation-Title">
                            Magnifique appartement proche Canal Saint Martin
                        </h1>
                        <p className="Accommodation-Location">
                            Paris, Île-de-France
                        </p>
                        <div className="Accommodation-Tags">
                            <span className="Accommodation-Tag">Cosy</span>
                            <span className="Accommodation-Tag">Canal</span>
                            <span className="Accommodation-Tag">Paris 10</span>
                        </div>

                        <div className="Rating-Host">
                            <div className="Accommodation-Rating">
                                <span className="Rating-Star">
                                    ⭐️ ⭐️ ⭐️ ⭐️ ⭐️
                                </span>
                            </div>
                            <div className="Accommodation-Host">
                                <span className="Host-Name">
                                    Alexandre Dumas
                                </span>
                                <img className="Host-Picture" src="" alt="" />
                            </div>
                        </div>

                        <div className="Accommodation-Accordion">
                            <Dropdown
                                titleSection="Description"
                                textContent="Profitez du charme de la vie parisienne dans un magnifique appartement. A 3 minutes à pied du Canl Saint Martin, vous serez proche des transports, mais également de nombreux commerces. L'appartement est tout équipé, et possède également un parking pour ceux qui souhaitent se déplacer en voiture."
                            />
                            <Dropdown
                                titleSection="Équipements"
                                textContent="Climatisation Wi-Fi Cuisine Espace de travail Fer à repasser Sèche-cheveux Cintres"
                            />
                        </div>
                    </div>
                </main>
                <Footer />
            </>
        );
    }
}

export default AccommodationSheet;
