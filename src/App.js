import React, { Component } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

class App extends Component {
    constructor() {
        super();

        this.state = {};
    }

    componentDidMount() {
        fetch('')
            .then(response => response.json())
            .then(thumb => this.setState({}))
            .catch(error => console.log(error, 'I have an error'));
    }

    render() {
        return (
            <div className="App">
                <Header />
                <Footer />
            </div>
        );
    }
}

export default App;
