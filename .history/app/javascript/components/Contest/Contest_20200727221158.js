import React from 'react'
// import '../../../assets/stylesheets'
import './Contest.scss'
import { Link } from 'react-router-dom'
import HeaderTime from '../HeaderTime/HeaderTime'
import Form from './Form/Form'


const Contest = () =>{
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
                            <li class="nav-item active">
                                <Link to="/" class="nav-link" >Home</Link>
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
                                <Link to="/location" class="nav-link">Location</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            

            {/*  */}

            <h2 className="text-x">Come up with a slogan for the boulder bike tour and win a free sponsorship from us.</h2>


            <div className="px-2 py-2 form-center">
                <Form />

            </div>
            {/*  */}



        </div>
    )
}

export default Contest