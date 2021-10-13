import React, { Component } from 'react';
import './Host.css';

class Host extends Component {
    render() {
        const { host } = this.props;
        console.log(this.props);
        console.log(host);
        const { name, picture } = host;
        console.log(name);
        console.log(picture);

        const firstName = name.split(' ')[0];
        const lastName = name.split(' ')[1];
        console.log(firstName);
        console.log(lastName);

        return (
            <div className="Accommodation-Host">
                <p className="Host-Name">
                    <span>{firstName}</span>
                    <br />
                    <span>{lastName}</span>
                </p>
                <img className="Host-Picture" src={picture} alt="" />
            </div>
        );
    }
}

export default Host;
