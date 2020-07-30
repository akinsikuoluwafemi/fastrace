import React, {useState} from 'react'
import './Form.scss'


export default function Form(){
    
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [slogan, setSlogan] = useState('')


    const handleSubmit = (e) => {
        setFirstName(e.target.value)
        setLastName(e.target.value)
        setEmail(e.target.value)
        setSlogan(e.target.value)
        alert(firstName, lastName, email, slogan)
    }

    const hand



    return (
        <form class="wrapper" onSubmit={handleSubmit}>
            <div class="title">
                <h1>Submit your Slogans</h1>
            </div>
            <div class="contact-form">
                <div class="input-fields">
                    <input type="text" class="input" placeholder="First Name" required value={firstName} onChange={handleChange} />
                    <input type="text" class="input" placeholder="Last Name" required value={lastName} onChange={handleChange}/>
                    <input type="email" class="input" placeholder="Email Address" required value={email} onChange={handleChange} />
                </div>
                <div class="msg">
                    <textarea placeholder="Your Slogan" required value={slogan} onChange={handleChange} />
                    <button style={{width: '100%'}} class="btn">send</button>
                </div>
            </div>
        </form>
    )
}
