import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Home/Home'
import 


export default function Navigation() {
    return (
        <Router>
            <Route path="/" component={Home}/>
        </Router>
    )
}
