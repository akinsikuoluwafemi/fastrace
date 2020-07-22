import React, { Component } from 'react'
import './Header.scss'

export default class Header extends Component
{
    render()
    {
        return (
            <div>

               
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
                
                



            </div>
        )
    }
}
