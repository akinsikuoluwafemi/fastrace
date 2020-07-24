import React, { Component } from 'react'
import './Location.scss'
import { Link } from 'react-router-dom'
import HeaderTime from '../HeaderTime/HeaderTime'
import axios from 'axios'

export default classN Location extends Component {
    
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

                <nav classN="navbar navbar-expand-sm sticky-top navbar-light bg-light">
                    <div classN="container">
                        <Link to="/" classN="navbar-brand">Boulder Bike Tour</Link>
                        <button classN="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbar1">
                            <span classN="navbar-toggler-icon"></span>
                        </button>
                        <div classN="collapse navbar-collapse" id="navbar1">
                            <ul classN="navbar-nav">
                                <li classN="nav-item ">
                                    <Link to="/" classN="nav-link" >Home</Link>
                                </li>
                                <li classN="nav-item">
                                    <Link to="/photos" classN="nav-link" >Photos</Link>
                                </li>
                                <li classN="nav-item">
                                    <Link to="/contest" classN="nav-link" >Contest</Link>
                                </li>
                                <li classN="nav-item">
                                    <Link to="/riders" classN="nav-link" >Riders</Link>
                                </li>
                            </ul>
                            <ul classN="navbar-nav ml-auto">
                                <li classN="nav-item active">
                                    <Link to="/location" classN="nav-link" >Location</Link>
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
