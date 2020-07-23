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

    setCountDown() {
        const futureDate = moment(this.props.futureDate)

        const today = moment()

        const clockDuration = duration(futureDate.diff(today))

        const months = Math.floor(clockDuration.asMonths())
        const days = clockDuration.days()
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
         this.setCountDown();
         this.interval = setInterval(()=> {
             this.setCountDown();
         }, 1000)
         console.log(duration())
         
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }


    render(){
        return (
            {
                Object.keys(this.state).map((key, i) => (

                    <div className="timer-box" key={i}>
                        <div className="timer-num">
                            {this.state[key]}
                        </div>
                        <div className="days">{key.toUpperCase()}</div>
                    </div>

                ))
            }
        )
    }
}


export default CountDown

// <HeaderTime futureDate="2020-09-23T09:33:32.212Z">

        // </HeaderTime >

