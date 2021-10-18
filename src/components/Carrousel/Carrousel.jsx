import React, { Component } from 'react';
import './Carrousel.css';

class Carrousel extends Component {
    constructor() {
        super();

        this.state = {
            imageDisplay: 0,
        };
    }

    nextImage = () => {
        this.setState(prevState => ({
            imageDisplay:
                prevState.imageDisplay === this.props.images.length - 1
                    ? 0
                    : prevState.imageDisplay + 1,
        }));
    };

    prevImage = () => {
        this.setState(prevState => ({
            imageDisplay:
                prevState.imageDisplay === 0
                    ? this.props.images.length - 1
                    : prevState.imageDisplay - 1,
        }));
    };

    render() {
        const { imageDisplay } = this.state;

        return (
            <div className="Carrousel " role="dialog">
                <img
                    className="Carrousel-Image"
                    src={this.props.images[imageDisplay]}
                    alt=""
                />
                {this.props.images.length > 1 && (
                    <>
                        <button
                            className="Btn-Prev "
                            aria-label="Previous image"
                            onClick={this.prevImage}
                        ></button>
                        <button
                            className="Btn-Next"
                            aria-label="Next image"
                            onClick={this.nextImage}
                        ></button>
                    </>
                )}
                <span className="Carrousel-Counter">
                    {`${imageDisplay + 1} / ${this.props.images.length}`}
                </span>
            </div>
        );
    }
}

export default Carrousel;
