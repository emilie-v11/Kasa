import React, { Component } from 'react';
import Loader from '../../components/Loader/Loader';
import Error404 from '../Error404/Error404';
import Carrousel from '../../components/Carrousel/Carrousel';
import Host from '../../components/Host/Host';
import Rating from '../../components/Rating/Rating';
import Tags from '../../components/Tags/Tags';
import Dropdown from '../../components/Dropdown/Dropdown';
import './AccommodationSheet.css';

class AccommodationSheet extends Component {
    constructor(props) {
        super(props);

        this.state = {
            error: null,
            isLoaded: false,
            accommodation: {},
        };
    }

    componentDidMount() {
        fetch(
            'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json'
        )
            .then(response => response.json())
            .then(data => {
                const idParam = this.props.match.params.id;
                const dataById = data.find(el => el.id === idParam);
                if (dataById) {
                    this.setState({
                        isLoaded: true,
                        accommodation: dataById,
                        error: 'tout ok',
                    });
                } else if (!data.some(elt => elt.id === idParam)) {
                    this.setState({
                        error: 'error',
                    });
                }
            })
            .catch(error => {
                this.setState({ error });
            });
    }

    render() {
        // console.log(this.state);
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

        const { error, isLoaded } = this.state;

        return (
            <>
                {!isLoaded && !error ? (
                    //{!isLoaded && (error === null || error !== 'error 404') ? (
                    <Loader />
                ) : !isLoaded && error ? (
                    <Error404 />
                ) : (
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
                )}
            </>
        );
    }
}

export default AccommodationSheet;
