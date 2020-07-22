import React from 'react'
// import '../../../assets/stylesheets'
import './Home.scss'
import { Link } from 'react-router-dom'

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
                    <a class="navbar-brand" href="#">FastRace</a>
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

            <div className="">
                <div class="picture-container col-12 py-4">
                    <div className="picture-item1">
                        1
                    </div>
                    <div className="picture-item2">
                        2
                    </div>
                    <div className="picture-item3">
                    3
                    </div>
                    <div className="picture-item4">
                    4
                    </div>
                    <div className="picture-item5">
                    5
                    </div>
                    <div className="picture-item6">
                    6
                    </div>
                    <div className="picture-item7">
                    7
                    </div>
                    <div className="picture-item8">
                    8
                    </div>
                    <div className="picture-item9">
                    9
                    </div>
                    <div className="picture-item10">
                    10
                    </div>
                    <div className="picture-item11">
                    11
                    </div>
                    <div className="picture-item12">
                    12
                    </div>
                    <div className="picture-item13">
                    
                    </div>
                    <div className="picture-item14">
                    
                    </div>
                    <div className="picture-item15">
                    
                    </div>
                    <div className="picture-item16">
                    
                    </div>
                    <div className="picture-item17">
                    
                    </div>
                    <div className="picture-item18">
                    
                    </div>
                    <div className="picture-item19">
                    
                    </div>
                    <div className="picture-item20">
                    
                    </div>
                    <div className="picture-item21">
                    
                    </div>
                </div>
            </div>


            


        </div>
    )
}

export default Home