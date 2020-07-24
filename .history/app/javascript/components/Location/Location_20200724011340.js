import React, { Component } from 'react'
import './Location.scss'
import { Link } from 'react-router-dom'
import HeaderTime from '../HeaderTime/HeaderTime'
import axios from 'axios'

export default classn Location extends Component {
    
    state = {
        ridersLocation: []
    }

    componentDidMount() {
        axios.get('/api/riders')
        .then(response => {
            this.setState({ ridersLocation:response.data.ridersta })
        })
    }
    

    render(){
        
        return (
            <div>
                <HeaderTime />

                <nav classn="navbar navbar-expand-sm sticky-top navbar-light bg-light">
                    <div classn="container">
                        <Link to="/" classn="navbar-brand">Boulder Bike Tour</Link>
                        <button classn="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbar1">
                            <span classn="navbar-toggler-icon"></span>
                        </button>
                        <div classn="collapse navbar-collapse" id="navbar1">
                            <ul classn="navbar-nav">
                                <li classn="nav-item ">
                                    <Link to="/" classn="nav-link" >Home</Link>
                                </li>
                                <li classn="nav-item">
                                    <Link to="/photos" classn="nav-link" >Photos</Link>
                                </li>
                                <li classn="nav-item">
                                    <Link to="/contest" classn="nav-link" >Contest</Link>
                                </li>
                                <li classn="nav-item">
                                    <Link to="/riders" classn="nav-link" >Riders</Link>
                                </li>
                            </ul>
                            <ul classn="navbar-nav ml-auto">
                                <li classn="nav-item active">
                                    <Link to="/location" classn="nav-link" >Location</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            
            
                <p>Location page</p>
            
            
            </div>
        )
    }
}
