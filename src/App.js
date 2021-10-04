import React, { Component } from 'react';
import './App.css';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import Gallery from './components/Gallery/Gallery';
import Header from './components/Header/Header';

class App extends Component {
    constructor() {
        super();

        this.state = { properties: [] };
    }

    // async componentDidMount() {
    //     try {
    //         let response = await fetch(
    //             'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json'
    //         );
    //         if (response.ok) {
    //             let data = await response.json();
    //             // console.log(data);
    //             return data;
    //         } else {
    //             console.log("La requête n'a pas abouti : " + response.status);
    //         }
    //     } catch (e) {
    //         console.error(e);
    //     }
    // }

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
            <div className="App">
                <Header />
                {/* <Main /> */}
                <main className="Main-Home">
                    <Banner />
                    <Gallery properties={this.state.properties} />
                </main>
                <Footer />
            </div>
        );
    }
}

export default App;
