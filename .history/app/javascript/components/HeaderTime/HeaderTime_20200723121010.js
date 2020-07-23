import React, { useState } from 'react'
import './HeaderTime.scss'
import CountDown from './CountDown'



function HeaderTime () {
    
    const [countDown, setCountDown] = useState('')

    return (
        <CountDown futureDate={setCountDown("2020-08-23T09:33:32.212Z")} />
    )
}

export default HeaderTime