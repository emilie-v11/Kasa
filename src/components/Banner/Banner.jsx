import React, { Component } from 'react';
import './Banner.css';

class Banner extends Component {
    render() {
        return (
            <section className="Banner">
                {/* <div className="Banner-Image"></div> */}
                <img
                    className="Banner-Image"
                    src="https://images.unsplash.com/photo-1593201464350-96ec57065aa2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
                    alt="Paysage de falaises au bord de l'océan"
                />
                <div className="Banner-Mask"></div>
                <h1 className="Banner-Text">Chez vous, partout et ailleurs</h1>
            </section>
        );
    }
}

// class Banner extends Component {
//     render() {
//         const { imgSrc, title, altText } = this.props;
//         return (
//             <div className="Banner">
//                 {/* <div className="Banner-Image"></div> */}
//                 <img className="Banner-Image" src={imgSrc} alt={altText} />
//                 <div className="Banner-Mask"></div>
//                 <h1 className="Banner-Text">{title}</h1>
//             </div>

// <div className="Banner">
//     {/* <div className="Banner-Image"></div> */}
//     <img
//         className="Banner-Image"
//         src={this.props.imgSrc}
//         alt={this.props.altText}
//     />
//     <div className="Banner-Mask"></div>
//     <h1 className="Banner-Text">{this.props.title}</h1>
// </div>
//         );
//     }
// }

export default Banner;
