import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Home from './pages/Home/Home';
import Error404 from './pages/Error404/Error404';
import About from './pages/About/About';
// import Header from './components/Header/Header';
// import Footer from './components/Footer/Footer';
// import Banner from './components/Banner/Banner';
// import Gallery from './components/Gallery/Gallery';

class App extends Component {
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
        // const dataProperties = this.state.properties;

        return (
            <Router>
                <div className="Wrap-Kasa">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        {/* <main className="Main-Home">
                                <Banner />
                                <Gallery properties={this.state.properties} />
                            </main> */}
                        <Route path="/a-propos" component={About} />
                        <Route path="/property/:id" />
                        <Route component={Error404} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
