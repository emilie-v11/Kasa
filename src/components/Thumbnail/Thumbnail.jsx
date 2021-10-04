import React, { Component } from 'react';
import './Thumbnail.css';

class Thumbnail extends Component {
    render() {
        return (
            <article className="Thumbnail">
                <img
                    className="Thumbnail-Cover"
                    src={this.props.cover}
                    alt={`Une location située en ${this.props.location}`}
                />
                <div className="Thumbnail-Overlay"></div>
                <h2 className="Thumbnail-Title">{this.props.title}</h2>
            </article>
        );
    }
}

export default Thumbnail;
