import React, { Component } from 'react'
import './Location.scss'
import { Link } from 'react-router-dom'
import HeaderTime from '../HeaderTime/HeaderTime'
import axios from 'axios'
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps'



class Location extends Component {
    
    state = {
        ridersLocation: []
    }

    componentDidMount() {
        axios.get('/api/riders')
        .then(response => {
            this.setState({ ridersLocation: response.data.riders })
        })
    }
    

    render(){
         this.state.ridersLocation
        
        return (
            <div>
                <HeaderTime />

                <nav className="navbar navbar-expand-sm sticky-top navbar-light bg-light">
                    <div className="container">
                        <Link to="/" className="navbar-brand">Boulder Bike Tour</Link>
                        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbar1">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbar1">
                            <ul className="navbar-nav">
                                <li className="nav-item ">
                                    <Link to="/" className="nav-link" >Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/photos" className="nav-link" >Photos</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/contest" className="nav-link" >Contest</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/riders" className="nav-link" >Riders</Link>
                                </li>
                            </ul>
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <Link to="/location" className="nav-link" >Location</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            
            
                
                {/* google map start */}
                
                <div style={{width: '100vw', height: '100vh'}}>


                    <WrappedMap
                        // googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBniFhD5gyPyOrEm212cVIAYVythPk2JcE`}

                        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBniFhD5gyPyOrEm212cVIAYVythPk2JcE`}
                        loadingElement={<div style={{ height: "100%" }} />}
                        containerElement={<div style={{ height: "100%" }} />}
                        mapElement={<div style={{ height: "100%" }} />}
                        
                        />
                    
                </div>

                
                {/* google map end */}
            
            
            </div>
        )
    }
}

export default Location;



function Map () {
    return (
        <GoogleMap defaultZoom={10} defaultCenter={{ lat: 39.550053, lng: -105.782066}}>

            
        </GoogleMap>
    )
}


const WrappedMap = withScriptjs(withGoogleMap(Map))
