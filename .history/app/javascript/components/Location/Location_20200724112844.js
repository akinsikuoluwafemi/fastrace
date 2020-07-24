import React, { Component, useState } from 'react'
import './Location.scss'
import { Link } from 'react-router-dom'
import HeaderTime from '../HeaderTime/HeaderTime'
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from 'react-google-maps'
import { RiderContext } from '../context'



class Location extends Component {
    
   

    static contextType = RiderContext

    render(){
        
        const {ridersLocation} = this.context
        console.log(ridersLocation)
    

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
                        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBniFhD5gyPyOrEm212cVIAYVythPk2JcE`}

                        // googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
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



class Map extends Component {
    
    state = {
        selectedRider: null
    }

    static contextType = RiderContext


   render(){
       const { ridersLocation } = this.context
       console.log(ridersLocation)
        const {selectedRider} = this.state
       return (
           <GoogleMap defaultZoom={10} defaultCenter={{ lat: 40.014984, lng: -105.270546 }}>

            
               {ridersLocation.map(rider => (
                   <Marker
                       key={rider.id}
                       position={{ lat: rider.lat, lng: rider.lng }}
                        onClick={() => {
                            this.setState({selectedRider:rider})
                        }}
                       icon={{
                           url: '/mapbike.svg'
                       }}
                   />
            ))}

               {selectedRider && (
                   <InfoWindow
                       position={{
                           lat: selectedRider.lat,
                           lng: selectedRider.lng
                       }}     
                    onCloseClick={() => {
                        this.setState({
                            selectedRider: null

                        })
                    }}
                   >
                       
                       <div>
                           <h3>Name: {selectedRider.first_name + ' - ' + selectedRider.last_name}</h3>
                           <h4 style={{color: "#777"}}>City : {selectedRider.city}</h4>
                           <h4 style={{ color: "#777" }}>State : {selectedRider.state}</h4>
                       </div>
                       
                    </InfoWindow>
            )}

           </GoogleMap>
       )
   }
}


const WrappedMap = withScriptjs(withGoogleMap(Map))
