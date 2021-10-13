import React, { Component } from 'react';
import Carrousel from '../../components/Carrousel/Carrousel';
import Dropdown from '../../components/Dropdown/Dropdown';
import Host from '../../components/Host/Host';
import Rating from '../../components/Rating/Rating';
import Tags from '../../components/Tags/Tags';
import { data } from '../../data/data';
import Error404 from '../Error404/Error404';
// import { ReactComponent as StarFill } from '../../img/star-fill.svg';
import './AccommodationSheet.css';

class AccommodationSheet extends Component {
    componentDidMount() {
        // fetch(
        //     'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json'
        // )
        //     .then(response => response.json())
        //     // .then(json => this.setState({ accommodations: json }))
        //     .then(data => {
        //         const idParam = this.props.match.params.id;
        //         const thisDataUrl = data.find(el => el.id === idParam);
        //         this.setState({
        //             accommodation: thisDataUrl,
        //         });
        //     })
        //     .catch(error => console.log(error, 'I have an error'));
        console.log();
    }

    render() {
        console.log(this.props);

        const idParam = this.props.match.params.id;
        if (!data.some(elt => elt.id === idParam))
            return <Error404 to="/Error404" />;

        console.log(idParam);

        const dataById = data.find(elt => elt.id === idParam);

        const {
            title,
            location,
            pictures,
            host,
            equipments,
            tags,
            rating,
            description,
        } = dataById;

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
                            titleSection="Description"
                            textContent={description}
                        />
                        <Dropdown
                            titleSection="Équipements"
                            textContent={equipments.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        />
                    </div>
                </div>
            </main>
        );
    }
}

export default AccommodationSheet;
