import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import AccommodationSheet from './pages/AccommodationSheet/AccommodationSheet';
import Error404 from './pages/Error404/Error404';
import Footer from './components/Footer/Footer';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            error: false,
            isLoaded: false,
            accommodations: [],
        };
    }

    componentDidMount() {
        fetch(
            // 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json'
            './dataKasa.json'
        )
            .then(response => response.json())
            .then(data => {
                this.setState({
                    isLoaded: true,
                    accommodations: data,
                    error: false,
                });
            })
            .catch(error => {
                this.setState({ ...this.state, error: true, isLoaded: false });
            });
    }

    render() {
        const { accommodations, isLoaded, error } = this.state;

        return (
            <Router>
                <div className="Wrap-Kasa">
                    <Header />
                    <Switch>
                        <Route
                            exact
                            path="/"
                            component={() => (
                                <Home
                                    accommodations={accommodations}
                                    isLoaded={isLoaded}
                                    error={error}
                                />
                            )}
                        />
                        <Route exact path="/a-propos" component={About} />
                        <Route
                            exact
                            path="/location/:id"
                            component={props => (
                                <AccommodationSheet
                                    accommodations={accommodations}
                                    isLoaded={isLoaded}
                                    error={error}
                                    {...props}
                                />
                            )}
                        />
                        <Route component={Error404} />
                    </Switch>
                    <Footer />
                </div>
            </Router>
        );
    }
}

export default App;
