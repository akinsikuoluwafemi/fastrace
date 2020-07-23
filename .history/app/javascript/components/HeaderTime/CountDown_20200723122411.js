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

    addZeros(value){
        value = String(value)
        while(value.length < 2){
            value = `0${value}`
        }
        return value
    }


    setCountDown() {
        const futureDate = moment(this.props.futureDate)

        const today = moment()

        const clockDuration = duration(futureDate.diff(today))

        const months = Math.floor(clockDuration.asMonths())
        const days =  clockDuration.days()
        const hours = clockDuration.hours()
        const mins = clockDuration.minutes()
        const secs = clockDuration.seconds()

        this.setState({
            months,
            days,
            hours,
            mins,
            secs
        })
    }



     componentDidMount() {
         this.interval = setInterval(() => {
             this.setCountDown();
             
         }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }




    render(){
        return (
            <div class="header timer-container py-5">
                <p className="starts">Starts In</p>

                {/* <div className="time-small-container">
                    <div className="mobile-countdown"><span>3</span> Days</div>
                    <div className="mobile-countdown"><span>10</span> Hours</div>
                    <div className="mobile-countdown"><span>4</span> Min</div>
                    <div className="mobile-countdown"><span>10</span> Sec</div>
                </div> */}

                <div className="time-small-container">
                    
                    {Object.keys(this.state).map((key, i) => (
                        <div className="mobile-countdown"><span>{addZeros(this.state[key])}</span> {key.toUpperCase()}</div>
                        
                    ))}

                </div>

                


                <div class="timer-content">

                    {Object.keys(this.state).map((key, i) => (
                        <div className="timer-box" key={i} >
                            <div className="timer-num">
                                {this.addZeros(this.state[key])}
                            </div>
                            <div className="days">{key.toUpperCase()}</div>
                        </div>
                   ))

                </div>


            </div>
        )
    }
}


export default CountDown



