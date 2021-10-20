import React, { Component } from 'react';
import Banner from '../../components/Banner/Banner';
import Gallery from '../../components/Gallery/Gallery';
import Loader from '../../components/Loader/Loader';
// import Error404 from '../Error404/Error404';
import './Home.css';

class Home extends Component {
    render() {
        const { accommodations, isLoaded } = this.props;
        console.log(this.props);
        if (!isLoaded) {
            return <Loader />;
        } else {
            return (
                <main className="Main-Home">
                    <Banner
                        className="Banner-Home"
                        imgSrc="https://images.unsplash.com/photo-1593201464350-96ec57065aa2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
                        altText="Paysage de falaises au bord de l'océan"
                        title="Chez vous, partout et ailleurs"
                    />
                    <Gallery accommodations={accommodations} />
                </main>
            );
        }
    }
}

export default Home;
