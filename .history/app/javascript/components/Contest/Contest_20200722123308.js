import React, { Component } from 'react'
import './Contest.scss'
import Header from '../Header/Header'

export default class Contest extends Component {
    render() {
        return (
            <div>

                
                <div class="header bg-light py-5">
                    <div class="container">
                        <div class="row">
                            <div class="col-6">
                                Header
                    </div>
                            <div class="col-6 text-right">
                                000 000 0000
                    </div>
                        </div>
                    </div>
                </div>
                <nav class="navbar navbar-expand-sm sticky-top navbar-light bg-light">
                    <div class="container">
                        <a class="navbar-brand" href="#">FastRace</a>
                        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbar1">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbar1">
                            <ul class="navbar-nav">
                                <li class="nav-item active">
                                    <a class="nav-link" href="#">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Photos</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Contest</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Riders</a>
                                </li>
                            </ul>
                            <ul class="navbar-nav ml-auto">
                                <li class="nav-item active">
                                    <a class="nav-link" href="#">Location</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <div className="container">
                  






                </div>

                
            </div>
        )
    }
}
