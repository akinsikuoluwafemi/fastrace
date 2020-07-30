import React, {useState} from 'react'
import './Form.scss'


export default function Form(){
    
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [slogan, setSlogan] = useState('')


    const handleSubmit = (e) => {
        alert('femi')
    }




    return (
        <form class="wrapper" onSubmit={handleSubmit}>
            <div class="title">
                <h1>Submit your Slogans</h1>
            </div>
            <div class="contact-form">
                <div class="input-fields">
                    <input type="text" class="input" placeholder="First Name" required value={firstName} />
                    <input type="text" class="input" placeholder="Last Name" required value={lastName} />
                    <input type="email" class="input" placeholder="Email Address" required value={emai} />
                </div>
                <div class="msg">
                    <textarea placeholder="Your Slogan" required />
                    <button style={{width: '100%'}} class="btn">send</button>
                </div>
            </div>
        </form>
    )
}
