import React, { useContext } from 'react'
import './Riders.scss'
import HeaderTime from '../HeaderTime/HeaderTime'
import { Link } from 'react-router-dom'
import { RiderContext } from '../context'


const Riders = () =>{

    const { riders } = useContext(RiderContext)
    console.log(riders)

    const rend

    return (
        <>
            <div>
                <HeaderTime />

                <nav className="navbar navbar-expand-sm sticky-top navbar-light bg-light">
                    <div className="container">
                        <Link to="/" class="navbar-brand">Boulder Bike Tour</Link>

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
                                <li className="nav-item active">
                                    <Link to="/riders" className="nav-link" >Riders</Link>
                                </li>
                            </ul>
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item ">
                                    <Link to="/location" className="nav-link" >Location</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

            </div>

            <div className="container my-5">
                <div className="rider-card-container">
                    
                    <div className="card px-2 py-2 bg-light">
                        <div>
                            <span>First Name: </span>
                            <span className="font-weight-bold">Tunji</span>
                        </div>
                        <div>
                            <span className="">Last Name: </span>
                            <span className="font-weight-bold">Bakare</span>
                        </div>
                        <div>
                            <span className="">City Of Origin: </span>
                            <span className="font-weight-bold">New York City</span>
                        </div>
                    
                    </div>
                    



                </div>
            </div>

        </>
    )

}


export default Riders