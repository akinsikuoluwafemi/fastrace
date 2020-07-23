import React, { Component } from 'react'
import './HeaderTime.scss'
import moment, { duration } from 'moment'

export default class HeaderTime extends Component {
    
    state = {
        months: 0,
        days: 0,
        hours: 0,
        min: 0,
        sec: 0
    }

    componentDidMount() {
        console.log(duration())
    }
    

    setCountDown() {
        const futureDate = moment(this.props.futureDate)

        const today = moment()

        const clockDuration = duration(futureDate.diff(today))

        const months = Math.floor(clockDuration.asMonths())
        const days = clockDuration.days()
        const hours = clockDuration.ho
    }


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
                    
                    {Object.keys(this.state).map((key, i) => (
                        
                        <div className="timer-box" key={i}>
                            <div className="timer-num">
                                {this.state[key]}
                            </div>
                            <div className="days">{key.toUpperCase()}</div>
                        </div>

                    ))}


                    
                    {/* <div className="timer-box">
                        <div className="timer-num">
                            2
                        </div>
                        <div className="days">Months</div>
                    </div>
                    <div className="timer-box">
                        <div className="timer-num">
                            3
                        </div>
                        <div className="days">Days</div>
                    </div>
                    <div className="timer-box">
                        <div className="timer-num">
                            10
                        </div>
                        <div className="days">Hours</div>
                    </div>
                    <div className="timer-box">
                        <div className="timer-num">
                            4
                        </div>
                        <div className="days">Min</div>
                    </div>
                    <div className="timer-box">
                        <div className="timer-num">
                            10
                        </div>
                        <div className="days">Sec</div>
                    </div> */}




                </div>


            </div>
        )
    }
}
