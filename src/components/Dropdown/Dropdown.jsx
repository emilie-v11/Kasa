import React, { Component } from 'react';
import { ReactComponent as Chevron } from './chevron-down.svg';
import './Dropdown.css';

class Dropdown extends Component {
    constructor() {
        super();

        this.state = { isOpen: false };
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen,
        });
    };
    // toggle() {
    //     this.setState({
    //         isOpen: !this.state.isOpen,
    //     });
    // }

    render() {
        const { textContent, titleSection } = this.props;

        return (
            <section className="Dropdown">
                <div
                    className="Heading-Wrap"
                    aria-haspopup="true"
                    aria-expanded="false"
                >
                    <h2 className="Dropdown-Heading">{titleSection}</h2>
                    <button
                        className="Dropdown-Btn "
                        onClick={this.toggle}
                        // onClick={this.toggle.bind(this)}
                    >
                        <Chevron
                            className={
                                'Chevron ' + (this.state.isOpen ? 'Up' : 'Down')
                            }
                        />
                    </button>
                </div>

                <div
                    className={
                        'Collapse ' + (this.state.isOpen ? 'isOpen' : 'isClose')
                    }
                >
                    <ul className="Collapse-Content">{textContent}</ul>
                </div>
            </section>
        );
    }
}

export default Dropdown;
