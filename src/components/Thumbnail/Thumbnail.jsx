import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Thumbnail.css';

class Thumbnail extends Component {
    render() {
        const { id, cover, location, title } = this.props;

        return (
            <Link to={`/accommodation/${id}`}>
                <article className="Thumbnail">
                    <img
                        className="Thumbnail-Cover"
                        src={cover}
                        alt={`Une location située en ${location}`}
                    />
                    <div className="Thumbnail-Mask"></div>
                    <h2 className="Thumbnail-Title">{title}</h2>
                </article>
            </Link>
        );
    }
}

Thumbnail.propTypes = {
    id: PropTypes.string.isRequired,
    cover: PropTypes.string,
    location: PropTypes.string,
    title: PropTypes.string.isRequired,
};

export default Thumbnail;
