import React from 'react'
import './Form.scss'


export default function Form(){
    
    const [firstName, setFirstName] = useState()



    return (
        <div class="wrapper">
            <div class="title">
                <h1>Submit your Slogans</h1>
            </div>
            <div class="contact-form">
                <div class="input-fields">
                    <input type="text" class="input" placeholder="First Name" />
                    <input type="text" class="input" placeholder="Last Name" />
                    <input type="text" class="input" placeholder="Email Address" />
                </div>
                <div class="msg">
                    <textarea placeholder="Your Slogan" />
                    <div style={{width: '100%'}} class="btn">send</div>
                </div>
            </div>
        </div>
    )
}
