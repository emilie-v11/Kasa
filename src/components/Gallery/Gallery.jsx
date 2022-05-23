import React, { Component } from 'react';
// import { accommodations } from '../../data/data';
import Thumbnail from '../Thumbnail/Thumbnail';
import './Gallery.css';

class Gallery extends Component {
    render() {

        return (
            <section className="Gallery">
                {this.props.accommodations.map(accommodation => (
                // {accommodations.map(accommodation => (
                    <Thumbnail
                        key={accommodation.id}
                        id={accommodation.id}
                        cover={accommodation.cover}
                        title={accommodation.title}
                        location={accommodation.location}
                    />
                ))}
            </section>
        );
    }
}

export default Gallery;
