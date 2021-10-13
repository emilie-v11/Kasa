import React, { Component } from 'react';
import Banner from '../../components/Banner/Banner';
import Gallery from '../../components/Gallery/Gallery';
import './Home.css';

class Home extends Component {
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
        return (
            <main className="Main-Home">
                <Banner
                    className="Banner-Home"
                    imgSrc="https://images.unsplash.com/photo-1593201464350-96ec57065aa2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
                    // imgSrc={'./banner-home.jpeg'}
                    altText="Paysage de falaises au bord de l'océan"
                    title="Chez vous, partout et ailleurs"
                />
                <Gallery accommodations={this.state.accommodations} />
            </main>
        );
    }
}

export default Home;

// <main className="Main-Home">
//     <Banner />
//     <Gallery accommodations={this.state.accommodations} />
// </main>;
