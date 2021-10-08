import React, { Component } from 'react';
import './Banner.css';

class Banner extends Component {
    render() {
        const { imgSrc, title, altText, className } = this.props;

        return (
            <section id="Banner" className={className}>
                <img className="Banner-Image" src={imgSrc} alt={altText} />
                <div className="Banner-Mask"></div>
                <h1 className="Banner-Text">{title}</h1>
            </section>
        );
    }
}

export default Banner;
