import React, { Component } from 'react';
import './Tags.css';

class Tags extends Component {
    render() {
        const {tags} = this.props;

        return (
            <ul className="Accommodation-Tags">
                {tags.map((tag, index) => (
                    <li className="Accommodation-Tag" key={index}>
                        {tag}
                    </li>
                ))}
            </ul>
        );
    }
}

export default Tags;
