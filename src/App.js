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
    render() {
        return (
            <Router>
                <div className="Wrap-Kasa">
                    <Header />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/a-propos" component={About} />
                        <Route
                            path="/location/:id"
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
