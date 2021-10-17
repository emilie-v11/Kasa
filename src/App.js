import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Error404 from './pages/Error404/Error404';
import About from './pages/About/About';
import AccommodationSheet from './pages/AccommodationSheet/AccommodationSheet';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoaded: false,
            accommodations: [],
        };
    }

    componentDidMount() {
        fetch(
            'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json'
        )
            .then(response => response.json())
            .then(data => {
                this.setState({ isLoaded: true, accommodations: data });
                // console.log(this.state);
                // console.log(data);
            })
            .catch(error => console.log(error, 'I have an error'));
    }

    render() {
        const { accommodations } = this.state;
        // console.log(accommodations);

        return (
            <Router>
                <div className="Wrap-Kasa">
                    <Header />
                    <Switch>
                        {/* <Route exact path="/" component={Home} /> */}
                        <Route exact path="/">
                            <Home accommodations={accommodations} />
                        </Route>
                        <Route path="/a-propos" component={About} />
                        <Route
                            path="/accommodation/:id"
                            component={AccommodationSheet}
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
