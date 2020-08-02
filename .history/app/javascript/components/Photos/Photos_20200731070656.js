import React, { Component } from 'react'
import './Photos.scss'
import HeaderTime from '../HeaderTime/HeaderTime'
import {Link} from 'react-router-dom'
import {RiderContext} from '../context'

export default class Photos extends Component {
    
    static contextType = RiderContext
 
    render() {
        const {gerUrl, pictures} = this.context
        console.log(pictu)
        return (
            <div>
                <HeaderTime />

                <nav class="navbar navbar-expand-sm sticky-top navbar-light bg-light">
                    <div class="container">
                        <Link to="/" class="navbar-brand">Boulder Bike Tour</Link>  
                        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbar1">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbar1">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <Link to="/" class="nav-link" >Home</Link>
                                </li>
                                <li class="nav-item active">
                                    <Link to="/photos" class="nav-link" >Photos</Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="/contest" class="nav-link" >Contest</Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="/riders" class="nav-link" >Riders</Link>
                                </li>
                            </ul>
                            <ul class="navbar-nav ml-auto">
                                <li class="nav-item">
                                    <Link to="/location" class="nav-link" href="#">Location</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>


                eee


            </div>
        )
    }
}
