import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import MarkerIcon from './red5.png';

const Marker = () => <img src={MarkerIcon} />;

class MapsPage extends Component {
    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    };
    constructor() {
        super();
        this.state = {
            markers: [],
        }
    }

    componentDidMount() {
        console.log("componentDidMount MapsPage");

        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = "https://SafeHalotest--pauljprogrammer.repl.co/getLocations";

        fetch(proxyurl + url)
            .then(response => response.json())
            .then(response => {
                console.log(response);
                this.setState({
                   markers: response,
                });
            });
    }

    render() {
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key:"AIzaSyDVQADd_f_BqvgSUmDyyjgfl1zb-dSJCJQ"}}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    {this.state.markers.map((marker, i) =>{
                        console.log(marker.lat);
                        console.log(marker.lng);
                        return(
                            <Marker key={i}
                                lat={marker.lat}
                                lng={marker.lng}
                            />
                        )
                    })}
                </GoogleMapReact>
            </div>
        );
    }
}

export default MapsPage;