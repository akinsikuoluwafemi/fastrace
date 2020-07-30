import React, {useState} from 'react'
import './Form.scss'


export default function Form(){
    
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [slogan, setSlogan] = useState('')


    const handleSubmit = (e) => {
        alert(firstName, lastName, email, slogan)
        e.preventDefault()
    }

    const handle

    const handleChange = (e) => {
        setFirstName(e.target.value)
        setLastName(e.target.value)
        setEmail(e.target.value)
        setSlogan(e.target.value)
    }



    return (
        <form class="wrapper" onSubmit={handleSubmit}>
            <div class="title">
                <h1>Submit your Slogans</h1>
            </div>
            <div class="contact-form">
                <div class="input-fields">
                    <input name="firstname" type="text" class="input" placeholder="First Name" required value={firstName} onChange={handleChange} />
                    <input name="lastname" type="text" class="input" placeholder="Last Name" required value={lastName} onChange={handleChange}/>
                    <input name="email" type="email" class="input" placeholder="Email Address" required value={email} onChange={handleChange} />
                </div>
                <div class="msg">
                    <textarea name="slogan" placeholder="Your Slogan" required value={slogan} onChange={handleChange} />
                    <button style={{width: '100%'}} class="btn">send</button>
                </div>
            </div>
        </form>
    )
}
