import React, { Component } from 'react';
import { ReactComponent as StarFill } from './star-fill.svg';
import './Rating.css';

class Rating extends Component {
    render() {
        const { ratingStar } = this.props;

        return (
            <div className="Accommodation-Rating">
                {[1, 2, 3, 4, 5].map((filled, index) => (
                    <StarFill
                        className="Star"
                        fill={filled <= ratingStar ? '#FF6060' : '#E3E3E3'}
                        key={index}
                    />
                ))}
            </div>
        );
    }
}

export default Rating;
