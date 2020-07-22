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
                    <div style={{width: '20rem'}} className="shadow text-white px-3 py-2 ">
                        <h4 className="text-white">Connect with the world best bikers on Boulder Bike Tour</h4>
                        
                        <p className="text-white">You're all invited to a five-day festival of Olympian & Paralympian Online Experiences. Join unique activities on Airbnb hosted by some of the world’s greatest athletes, like Allyson Felix, Lex Gillette, Naomi Osaka and many more. Starts on 24 July</p>

                        <a> <span>Learn More</span>

                            <svg  width="38px" height="38px" viewBox="0 0 38 38" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="Lead" stroke="none" stroke-width="1" fill="#fff" fill-rule="evenodd"><g id="DevCircle-Lead" transform="translate(-104.000000, -446.000000)" stroke="#232323"><g id="Managing-a-circle" transform="translate(0.000000, 136.000000)"><g id="Button/Large" transform="translate(105.000000, 311.000000)"><g id="Icon/Button-arrow"><g id="arrow-group-right-link"><circle id="Oval" opacity="0.5" cx="18" cy="18" r="18"></circle><g id="Group-2" opacity="0.828706287" transform="translate(11.000000, 13.000000)" stroke-width="2"><polyline id="Path-2" stroke-linecap="square" points="8 0 13 5 8 10"></polyline><path d="M0,5 L13,5" id="Path-3"></path></g></g></g></g></g></g></g></svg>

                        </a>
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