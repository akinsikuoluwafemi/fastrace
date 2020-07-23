import React from 'react'
import './HeaderTime.scss'
import CountDown from './CountDown'



function HeaderTime () {
    
    const [countDown, setCountDown] = useState()

    return (
        <CountDown futureDate="2020-08-23T09:33:32.212Z" />
    )
}

export default HeaderTime