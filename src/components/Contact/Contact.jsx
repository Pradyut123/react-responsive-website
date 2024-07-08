import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'

const Contact = () => {
  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message <img src={msg_icon} alt="" /></h3>
            <p>Feel free to reach out through contact form of find our contact information below. Your Feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community</p>
            <ul>
                <li><img src={mail_icon} alt="" /> Contact@Test.com</li>
                <li><img src={phone_icon} alt="" /> +91123456789</li>
                <li><img src={location_icon} alt="" /> 77 Massachusetts Ave, Cambridge<br/> MA 02139, United States</li>
            </ul>
        </div>
        <div className="contact-col">
            <form>
                <label>Your Name</label>
                <input type="text" name='name' placeholder='Enter Your name' required />
                <label>Phone Number</label>
                <input type="tel" name='phone' placeholder='Enter your mobile number' required/>
                <label>Write your mesage here</label>
                <textarea name="message" rows="6" placeholder='Enter your Message' required></textarea>
                <button type='submit' className='btn dark-btn'>Submit now</button>
            </form>
            <span></span>
        </div>
    </div>
  )
}

export default Contact