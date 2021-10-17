import React, { Component } from 'react';
import Banner from '../../components/Banner/Banner';
import Dropdown from '../../components/Dropdown/Dropdown';
import { about } from '../../data/data';
import './About.css';

class About extends Component {
    render() {
        console.log(about);
        return (
            <main className="Main-About">
                <Banner
                    className="Banner-About"
                    imgSrc="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                    altText="Vallée de montagnes enneigées vue depuis une forêt de sapins pendant la journée"
                    title="A propos de Kasa"
                />
                <div className="Accordion">
                    {about.map(accommodation => (
                        <Dropdown
                            key={accommodation.id}
                            title={accommodation.title}
                            content={accommodation.content}
                        />
                    ))}
                </div>
            </main>
        );
    }
}

export default About;
