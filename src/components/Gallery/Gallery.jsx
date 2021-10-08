import React, { Component } from 'react';
import './Gallery.css';
import Thumbnail from '../Thumbnail/Thumbnail';

class Gallery extends Component {

    render() {
        return (
            <section className="Gallery">
                {this.props.properties.map(property => (
                    <Thumbnail
                        key={property.id}
                        id={property.id}
                        cover={property.cover}
                        title={property.title}
                        location={property.location}
                    />
                ))}
            </section>
        );
    }
}

export default Gallery;
