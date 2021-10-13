import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Home from './pages/Home/Home';
import Error404 from './pages/Error404/Error404';
import About from './pages/About/About';
import AccommodationSheet from './pages/AccommodationSheet/AccommodationSheet';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
// import Banner from './components/Banner/Banner';
// import Gallery from './components/Gallery/Gallery';

class App extends Component {
    constructor() {
        super();

        this.state = {
            accommodations: [],
        };
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
        const data = [];
        data.push(this.state.accommodations);
        console.log(data);

        return (
            <Router>
                <div className="Wrap-Kasa">
                    <Header />

                    <Switch>
                        <Route exact path="/" component={Home} />
                        {/* <main className="Main-Home">
                                <Banner />
                                <Gallery accommodations={this.state.accommodations} />
                            </main> */}
                        <Route path="/a-propos" component={About} />
                        <Route
                            path="/accommodation/:id"
                            component={AccommodationSheet}
                        />

                        {/* <Route path="/accommodation/:id">
                            <AccommodationSheet
                                accommodations={this.state.accommodations}
                            />
                        </Route> */}
                        {/* <Route
                            path="/accommodation/:id"
                            render={props => <AccommodationSheet {...props} />}
                        /> */}
                        <Route component={Error404} />
                    </Switch>

                    <Footer />
                </div>
            </Router>
        );
    }
}

export default App;
