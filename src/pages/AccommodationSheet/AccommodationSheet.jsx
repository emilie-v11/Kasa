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
        // this._isMounted = false;

        this.state = {
            isLoaded: false,
            error: false,
            Redirect: false,
            accommodation: [],
        };
    }

    componentDidMount() {
        const idParam = this.props.match.params.id;
        console.log(idParam);
        // if (!this.props.accommodations.some(elt => elt.id === idParam))
        //     return <Redirect to="/404" />;
        const dataById = this.props.accommodations.find(
            el => el.id === idParam
        );
        console.log(dataById);
        if (dataById) {
            this.setState({
                isLoaded: true,
                error: false,
                Redirect: false,
                accommodation: dataById, //{ ...dataById },
            });
        } else {
            this.setState({ ...this.state, error: true, isLoaded: false }); // ...this.state,
            if (!this.props.accommodations.some(elt => elt.id === idParam)) {
                this.setState({
                    isLoaded: false,
                    error: true,
                    Redirect: true,
                });

                // this._isMounted = true;
                // setTimeout(() => {
                //     this.setState({
                //         isLoaded: false,
                //         error: true,
                //         Redirect: true,
                //         accommodation: [],
                //     });
                // }, 2000);
            } else {
                this.setState({
                    isLoaded: false,
                    error: false,
                    Redirect: false,
                });
            }
        }

        console.log(this.state.accommodation);

        // fetch(
        //     'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json'
        // )
        //     .then(response => response.json())
        //     .then(data => {
        //         const idParam = this.props.match.params.id;
        //         const dataById = data.find(el => el.id === idParam);
        //         if (dataById) {
        //             this.setState({
        //                 isLoaded: true,
        //                 accommodation: dataById,
        //                 error: 'tout ok',
        //             });
        //         } else if (!data.some(elt => elt.id === idParam)) {
        //             this.setState({
        //                 error: 'error',
        //             });
        //         }
        //     })
        //     .catch(error => {
        //         this.setState({ error });
        //     });
    }

    // Timer = () =>
    //     setTimeout(() => {
    //         this.isMounted && this.setState({ error: true });
    //     }, 5000);

    // componentWillUnmount() {
    //     this._isMounted = false;
    //     clearTimeout();
    // }

    render() {
        console.log(this.props);
        console.log(this.state);
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

        const { isLoaded, error, Redirect } = this.state;

        // if (error) {
        //     return <Error404 />;
        //     // if (this.state.Redirect === true) {
        //     //     return <Error404 />;
        //     //     // return <Redirect to="/404" />;
        //     // }
        //     // return <Loader />;
        if (!isLoaded) {
            // if (error && Redirect) {
            //     // return <Loader />;
            //     return <Error404 />;
            // }
            return <Loader />;
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
