import React, { Component } from 'react'
import './Photos.scss'
import HeaderTime from '../HeaderTime/HeaderTime'
import {Link} from 'react-router-dom'

export default class Photos extends Component {
    
    state = {
        pictures: [],
        query: "pussy",
        perPage: 30,
        page: 1,
        totalPages: null
    }


      componentDidMount(){
        this.loadPictures()
    }

   

    loadPictures = () => {
           
        const flickrapikey = '162e01778853d65e29516a0b540192d9'
        const flickrsecret = 'fd337bc310818cbb'
        let { query, perPage, page } = this.state

        fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${flickrapikey}&tags=${query}&per_page=${perPage}&page=${page}&format=json&nojsoncallback=1`)
            .then(response => response.json())
            .then((data) =>{
                let {pages, photo} = data.photos
                let pics = photo.map((pic) => {
                   let srcPath = `https://farm${pic.farm}.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}.jpg`;
                        return (
                            <img alt="" src={srcPath} />

                        )
                })
                this.setState({
                    pictures:pics,
                    totalPages: pages
                })
                console.log(this.state.totalPages);
        
            }).catch(err => alert(err))

    }
    
   


   
 
    render() {

        

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


                    <div className=" container">

                        {this.state.pictures}
                </div>
                
                <button onClick={this.loadPictures}  className="btn btn-info">LoadMore</button>


            </div>
           
            
        
        
        )
    }
}
