import React, { Component } from 'react';
import Loader from '../../components/Loader/Loader';
import Carrousel from '../../components/Carrousel/Carrousel';
import Host from '../../components/Host/Host';
import Rating from '../../components/Rating/Rating';
import Tags from '../../components/Tags/Tags';
import Dropdown from '../../components/Dropdown/Dropdown';
import './AccommodationSheet.css';
import Error404 from '../Error404/Error404';
import { Redirect } from 'react-router-dom';

class AccommodationSheet extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoaded: false,
            error: false,
            notFound: false,
            accommodation: [],
        };
    }

    componentDidMount() {
        const idParam = this.props.match.params.id;
        console.log(idParam);
        if (!this.props.accommodations.some(elt => elt.id === idParam)) {
            this.setState({
                isLoaded: true,
                error: false,
                notFound: true,
            });
            return <Error404 />;
        }
        const dataById = this.props.accommodations.find(
            el => el.id === idParam
        );
        console.log(dataById);
        if (dataById) {
            this.setState({
                isLoaded: true,
                error: false,
                notFound: false,
                accommodation: dataById,
            });
        } else {
            this.setState({
                isLoaded: false,
                error: true,
                notFound: true,
            });
        }
        console.log(this.state.accommodation);
    }

    render() {
        console.log(this.props);
        console.log(this.state);
        console.log(this.props.accommodations);
        const {
            title,
            location,
            pictures,
            host,
            equipments,
            tags,
            rating,
            description,
        } = this.state.accommodation;
        console.log(this.state.accommodation);

        const { isLoaded, error, notFound } = this.state;

        if (!isLoaded || !this.props.accommodations.length) {
            return <Loader />;
        } else if (notFound) {
            return <Error404 />;
        } else {
            return (
                <main className="Main-AccommodationSheet">
                    <Carrousel images={pictures} />
                    <div className="Accommodation-Content">
                        <h1 className="Accommodation-Title">{title}</h1>
                        <p className="Accommodation-Location">{location}</p>
                        <Tags tags={tags} />
                        <div className="Rating-Host">
                            <Rating ratingStar={rating} />
                            <Host host={host} />
                        </div>
                        <div className="Accommodation-Accordion">
                            <Dropdown
                                title="Description"
                                content={description}
                            />
                            <Dropdown
                                title="Équipements"
                                content={equipments.map((item, index) => (
                                    <li key={index} className="List-Item">
                                        {item}
                                    </li>
                                ))}
                            />
                        </div>
                    </div>
                </main>
            );
        }
    }
}

export default AccommodationSheet;
