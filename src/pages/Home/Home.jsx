import React, { Component } from 'react';
import Banner from '../../components/Banner/Banner';
import Footer from '../../components/Footer/Footer';
import Gallery from '../../components/Gallery/Gallery';
import Header from '../../components/Header/Header';
import './Home.css';

class Home extends Component {
    constructor() {
        super();

        this.state = { properties: [] };
    }

    componentDidMount() {
        fetch(
            'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json'
        )
            .then(response => response.json())
            .then(json => this.setState({ properties: json })) //console.log(data))
            .catch(error => console.log(error, 'I have an error'));
    }

    render() {
        return (
            <>
                <Header />
                <main className="Main-Home">
                    <Banner />
                    <Gallery properties={this.state.properties} />
                </main>
                <Footer />
            </>
        );
    }
}

export default Home;

// <main className="Main-Home">
//     <Banner />
//     <Gallery properties={this.state.properties} />
// </main>;
