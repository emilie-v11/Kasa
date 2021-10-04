import React, { Component } from 'react';
import './Banner.css';

export class Banner extends Component {
    render() {
        return (
            <div className="Banner">
                {/* <div className="Banner-Image"></div> */}
                <img
                    className="Banner-Image"
                    src="https://images.unsplash.com/photo-1593201464350-96ec57065aa2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
                    alt=""
                />
                <div className="Banner-Mask"></div>
                <h1 className="Banner-Text">Chez vous, partout et ailleurs</h1>
            </div>
        );
    }
}

export default Banner;
