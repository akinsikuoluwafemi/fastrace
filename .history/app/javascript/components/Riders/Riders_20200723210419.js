import React, { Component } from 'react'
import './Riders.scss'
import HeaderTime from '../HeaderTime/HeaderTime'
import { Link } from 'react-router-dom'

export default class Riders extends Component {
    render() {
        return (
            <div>
                <HeaderTime />

                <nav classNam="navbar navbar-expand-sm sticky-top navbar-light bg-light">
                    <div classNam="container">
                        <a classNam="navbar-brand" href="#">Boulder Bike Tour</a>
                        <button classNam="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbar1">
                            <span classNam="navbar-toggler-icon"></span>
                        </button>
                        <div classNam="collapse navbar-collapse" id="navbar1">
                            <ul classNam="navbar-nav">
                                <li classNam="nav-item active">
                                    <Link to="/" classNam="nav-link" >Home</Link>
                                </li>
                                <li classNam="nav-item">
                                    <Link to="/photos" classNam="nav-link" >Photos</Link>
                                </li>
                                <li classNam="nav-item">
                                    <Link to="/contest" classNam="nav-link" >Contest</Link>
                                </li>
                                <li classNam="nav-item">
                                    <Link to="/riders" classNam="nav-link" >Riders</Link>
                                </li>
                            </ul>
                            <ul classNam="navbar-nav ml-auto">
                                <li classNam="nav-item active">
                                    <Link to="/location" classNam="nav-link" >Location</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
