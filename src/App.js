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
    render() {
        return (
            <Router>
                <div className="Wrap-Kasa">
                    <Header />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        {/* <Route exact path="/">
                            <Home accommodations={accommodations} />
                        </Route> */}
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
