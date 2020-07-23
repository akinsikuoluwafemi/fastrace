import React, { useState } from 'react'
import './HeaderTime.scss'
import CountDown from './CountDown'



function HeaderTime () {
    
    const [countDown, setCountDown] = useState('')

    return (
        <CountDown futureDate={SET} />
    )
}

export default HeaderTime