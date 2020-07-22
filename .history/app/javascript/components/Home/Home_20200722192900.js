import React from 'react'
// import '../../../assets/stylesheets'
import './Home.scss'
import { Link } from 'react-router-dom'
import bike from '../../../assets/images/bike.svg'

const Home = () =>{
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
                    <a class="navbar-brand" href="#">Boulder Bike Tour</a>
                    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbar1">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbar1">
                        <ul class="navbar-nav">
                            <li class="nav-item active">
                                <Link to ="/" class="nav-link" >Home</Link>
                            </li>
                            <li class="nav-item">
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
                            <li class="nav-item active">
                                <a class="nav-link" href="#">Location</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            
            <div className="header-hero">
                <div className="heading-text">
                    <div className="card">
                        <p>Connect with the world </p>

                    
                    </div>
                </div>
                <div className="heading-img">
                    lorem
                </div>
            </div>




            


        </div>
    )
}

export default Home