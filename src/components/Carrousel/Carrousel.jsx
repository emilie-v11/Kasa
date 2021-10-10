import React, { Component } from 'react';
import imgTest from './accommodation-1-3.jpg';
import './Carrousel.css';

class Carrousel extends Component {
    render() {
        // const { imgSrc, altText } = this.props;

        return (
            <div className="Carrousel " role="dialog">
                <img
                    className="Carrousel-Image"
                    src={imgTest}
                    alt=""
                    // src={imgSrc}
                    // alt={altText}
                />
                <button className="Btn-Next" aria-label="Next image">
                    {/* <span className="sr-only">Suivant</span> */}
                </button>
                <button className="Btn-Prev " aria-label="Previous image">
                    {/* <span className="sr-only">Précedent</span> */}
                </button>
            </div>
        );
    }
}

export default Carrousel;
