import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Home/Home'
import Contest from './Contest/Contest'
import Location from './Location/Location'
import P from './P/P'




export default function Navigation() {
    return (
        <Router>
            <Route path="/" component={Home}/>
        </Router>
    )
}
