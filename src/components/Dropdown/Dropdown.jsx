import React, { Component } from 'react';
import './Dropdown.css';
// import './chevron-down.svg';
import { ReactComponent as ChevronDown } from './chevron-down.svg';
// import { ReactComponent as ChevronUp } from './chevron-up.svg';

class Dropdown extends Component {
    constructor() {
        super();

        this.state = { isOpen: false };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        // this.setState({ searchField: e.target.value });
    }

    render() {
        const { textContent, titleSection } = this.props;

        return (
            // <section className="Dropdown">
            //     <div>
            //         <h2 className="Dropdown-Title">Fiabilité</h2>
            //         <button className="Dropdown-Button"> V </button>
            //     </div>
            //     <div>
            //         <p>content</p>
            //     </div>
            // </section>
            <section className="Dropdown">
                <div className="Header-Wrap" id="Heading-One">
                    <h2 className="Dropdown-Header">{titleSection}</h2>
                    <button className="Btn Dropdown-Btn ">
                        <ChevronDown className="Chevron-Down" />
                        {/* <ChevronUp className="Chevron-Up" /> */}
                    </button>
                </div>

                <div
                    id="Collapse-One"
                    className="Collapse Show"
                    aria-labelledby="heading-One"
                    data-parent="#accordion"
                >
                    <div className="card-body">{textContent}</div>
                </div>
            </section>
        );
    }
}

export default Dropdown;
