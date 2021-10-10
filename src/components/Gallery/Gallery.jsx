import React, { Component } from 'react';
import './Gallery.css';
import Thumbnail from '../Thumbnail/Thumbnail';

class Gallery extends Component {
    render() {
        return (
            <section className="Gallery">
                {this.props.accommodations.map(accommodation => (
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
