import React, {Component} from 'react'
import HeaderTime from './HeaderTime'
import './HeaderTime.scss'
import moment, { duration } from 'moment'



class CountDown extends Component {
    
    state = {
        months: 0,
        days: 0,
        hours: 0,
        mins: 0,
        secs: 0
    }

    render(){
        return (
            <div className="timer-box">
                <div className="timer-num">
                    2
                        </div>
                <div className="days">Months</div>
            </div>
        )
    }
}


export default CountDown

// <HeaderTime futureDate="2020-09-23T09:33:32.212Z">

        // </HeaderTime >

