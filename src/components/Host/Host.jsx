import React, { Component } from 'react';
import './Host.css';

class Host extends Component {
    render() {
        const name = this.props.host.name;
        const hostName = name.split(' ');
        const picture = this.props.host.picture;
        // const { name } = this.props.accommodation.host.name;
        // console.log(this.props);
        // // const { name, picture } = host;
        // const firstName = name.split(' ')[0];
        // const lastName = name.split(' ')[1];

        return (
            <div className="Accommodation-Host">
                <p className="Host-Name">
                    <span>{hostName[0]}</span>
                    <br />
                    <span>{hostName[1]}</span>
                    {/* <span>{firstName}</span>
                    <br />
                    <span>{lastName}</span> */}
                </p>
                <img className="Host-Picture" src={picture} alt="" />
            </div>
        );
    }
}

export default Host;
