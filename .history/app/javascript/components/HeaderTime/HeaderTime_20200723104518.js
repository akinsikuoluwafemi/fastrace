import React, { Component } from 'react'
import './HeaderTime.scss'
import CountDown from './CountDown'

export default class HeaderTime extends Component {
    
 

    render() {
        return (
            <div class="header timer-container py-5">
                <p className="starts">Starts In</p>

                {/* <div className="time-small-container">
                    <div className="mobile-countdown"><span>2</span> Months</div>
                    <div className="mobile-countdown"><span>3</span> Days</div>
                    <div className="mobile-countdown"><span>10</span> Hours</div>
                    <div className="mobile-countdown"><span>4</span> Min</div>
                    <div className="mobile-countdown"><span>10</span> Sec</div>
                </div> */}


                <div class="timer-content">
                    
                    <CountDown/>





                </div>


            </div>
        )
    }
}
