import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Home/Home'
import Contest from './Contest/Contest'
import L from './L/L'



export default function Navigation() {
    return (
        <Router>
            <Route path="/" component={Home}/>
        </Router>
    )
}
