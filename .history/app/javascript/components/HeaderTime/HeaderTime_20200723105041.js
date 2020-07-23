import React, { Component } from 'react'
import './HeaderTime.scss'
import moment, { duration } from 'moment'
import CountDown from './CountDown'


export default class HeaderTime extends Component {
    
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
         console.log(duration())
         
    }


    render() {
        return (
            <CountDown/>
            
        )
    }
}
