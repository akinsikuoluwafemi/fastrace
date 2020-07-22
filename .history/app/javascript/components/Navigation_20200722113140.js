import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Home/Home'
import Contest from './Contest/Contest'
import Location from './Location/Location'
import Photos from './Photos/Photos'
import Riders from './Riders/Riders'





export default function Navigation() {
    return (
        <Router>
            <Route path="/" component={Home} />
            <Route path="/contest" component={Contest} />
            <Route path="/riders" component={Riders} />
            <Route path="/contest" component={Contest} />
            <Route path="/contest" component={Contest} />


            
        </Router>
    )
}
